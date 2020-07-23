CardBuyer = class CardBuyer {

  constructor(game, player_cards, card_name) {
    this.game = game
    this.player_cards = player_cards
    if (card_name) {
      // console.log(card_name)
      this.game_card = _.find(this.game.cards, function(card) {
        // console.log(card.name)
        return card.name === card_name
      })
      // console.log(this.game_card)
      this.card = this.game_card.top_card
      this.card_object = ClassCreator.create(this.card.name)
      this.card_gainer = new CardGainer(this.game, this.player_cards, 'discard', card_name, true)
    }
  }

  buy() {
    if (this.can_buy()) {
      this.update_phase()
      this.buy_card()
      GameModel.update(this.game._id, this.game)
      PlayerCardsModel.update(this.game._id, this.player_cards)
    }
  }

  can_buy() {
    // console.log(this.is_debt_free())
    // console.log(this.is_purchasable())
    // console.log(this.is_valid_buy())
    // console.log(!this.is_contraband())
    // console.log(!this.game.turn.mission_turn)
    // console.log(!this.game.turn.deluded)
    // console.log(!_.includes(_.words(this.card.types), 'action'))
    return this.is_debt_free() && this.is_purchasable() && this.is_valid_buy() && !this.is_contraband() && !this.game.turn.mission_turn && (!this.game.turn.deluded || !_.includes(_.words(this.card.types), 'action'))
  }

  update_phase() {
    if (!this.black_market && _.includes(['action', 'treasure'], this.game.turn.phase)) {
      if (this.game.turn.phase === 'action') {
        this.game.turn.phase = 'treasure'
        let start_buy_event_processor = new StartBuyEventProcessor(this.game, this.player_cards)
        start_buy_event_processor.process()
      }
      this.game.turn.phase = 'buy'
    }
  }

  buy_card() {
    this.update_log()
    this.update_turn()
    this.track_bought_card()
    this.buy_events()
    this.gain_card()
  }

  update_turn() {
    if (!this.black_market) {
      this.game.turn.buys -= 1
    }

    let buy_method = 'money'
    if (this.has_enough_money() && this.valid_alternate_buy()) {
      let turn_event_id = TurnEventModel.insert({
        game_id: this.game._id,
        player_id: this.player_cards.player_id,
        username: this.player_cards.username,
        type: 'choose_options',
        instructions: `Choose Payment Method:`,
        minimum: 1,
        maximum: 1,
        options: [
          {text: 'Money', value: 'money'},
          {text: 'Alternate', value: 'alternate'}
        ]
      })
      let turn_event_processor = new TurnEventProcessor(this.game, this.player_cards, turn_event_id)
      buy_method = turn_event_processor.process(CardBuyer.buy_method)
    } else if (this.valid_alternate_buy()) {
      buy_method = 'alternate'
    }

    if (buy_method === 'money') {
      this.game.turn.coins -= CostCalculator.calculate(this.game, this.card, true)
      this.game.turn.potions -= this.card.potion_cost

      if (this.card.debt_cost > 0) {
        let debt_token_gainer = new DebtTokenGainer(this.game, this.player_cards)
        debt_token_gainer.gain(this.card.debt_cost)
      }
    } else if (buy_method === 'alternate') {
      this.card_object.buy(this.game, this.player_cards)
    }
  }

  track_bought_card(card) {
    let bought_card = _.clone(this.card)
    this.game.turn.bought_cards.push(bought_card)
    this.game.turn.bought_things.push(bought_card)
  }

  buy_events() {
    let buy_event_processor = new BuyEventProcessor(this)
    buy_event_processor.process()
  }

  gain_card() {
    let gain_source = this.black_market ? this.game.revealed_black_market : 'supply'
    let gained_card = this.card_gainer.gain(gain_source)
    if (gained_card && gained_card.id !== this.card.id && gained_card.name !== this.card.name) {
      this.game.log.push(`&nbsp;&nbsp;<strong>${this.card_gainer.player_cards.username}</strong> gains ${CardView.render(gained_card)} instead`)
    }
  }

  is_debt_free() {
    return this.player_cards.debt_tokens === 0
  }

  is_purchasable() {
    return (this.black_market || this.game_card.supply) && (this.card.name !== 'Grand Market' || this.allow_grand_market())
  }

  allow_grand_market() {
    let coppers = _.filter(this.player_cards.in_play, function(card) {
      return card.name === 'Copper'
    })
    return _.isEmpty(coppers)
  }

  is_valid_buy() {
    // console.log(this.card)
    // console.log(this.has_remaining_stock())
    // console.log(this.has_enough_buys())
    // console.log(this.has_enough_money())
    // console.log(this.valid_alternate_buy())
    return this.has_remaining_stock() && this.has_enough_buys() && (this.has_enough_money() || this.valid_alternate_buy())
  }

  is_contraband() {
    return _.includes(this.game.turn.contraband, this.card.name)
  }

  has_remaining_stock() {
    return this.black_market || this.game_card.count > 0
  }

  has_enough_buys() {
    return this.black_market || this.game.turn.buys > 0
  }

  has_enough_money() {
    let coin_cost = CostCalculator.calculate(this.game, this.card, true)
    return this.game.turn.coins >= coin_cost && this.game.turn.potions >= this.card.potion_cost
  }

  valid_alternate_buy() {
    // console.log(this.card_object)
    return this.card_object.alternate_buyable(this.game, this.player_cards)
  }

  update_log() {
    let player_username = this.player_cards.username
    if (this.possessed_player_cards) {
      player_username = this.possessed_player_cards.username
    }
    this.game.log.push(`<strong>${player_username}</strong> buys ${CardView.render(this.card)}`)
  }

  static buy_method(game, player_cards, response) {
    return response[0]
  }

}
