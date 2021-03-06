Graverobber = class Graverobber extends Card {

  types() {
    return ['action']
  }

  coin_cost() {
    return 5
  }

  play(game, player_cards) {
    let turn_event_id = TurnEventModel.insert({
      game_id: game._id,
      player_id: player_cards.player_id,
      username: player_cards.username,
      type: 'choose_options',
      instructions: `Choose One:`,
      minimum: 1,
      maximum: 1,
      options: [
        {text: 'Gain a card from the trash', value: 'gain'},
        {text: 'Trash an action from your hand', value: 'trash'}
      ]
    })
    let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
    turn_event_processor.process(Graverobber.process_response)
  }

  static process_response(game, player_cards, response) {
    if (response[0] === 'gain') {
      let eligible_cards = _.filter(game.trash, (card) => {
        return CardCostComparer.coin_between(game, card, 3, 6)
      })

      if (_.size(eligible_cards) > 1) {
        let turn_event_id = TurnEventModel.insert({
          game_id: game._id,
          player_id: player_cards.player_id,
          username: player_cards.username,
          type: 'choose_cards',
          game_cards: false,
          instructions: 'Choose a card to gain:',
          cards: eligible_cards,
          minimum: 1,
          maximum: 1
        })
        let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
        turn_event_processor.process(Graverobber.gain_from_trash)
      } else if (_.size(eligible_cards) === 1) {
        Graverobber.gain_from_trash(game, player_cards, eligible_cards)
      } else {
        game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> chooses to gain from the trash, but there are no eligible cards to gain`)
      }
    } else if (response[0] === 'trash') {
      let eligible_cards = _.filter(player_cards.hand, (card) => {
        return _.includes(_.words(card.types), 'action')
      })
      if (_.size(eligible_cards) > 1) {
        let turn_event_id = TurnEventModel.insert({
          game_id: game._id,
          player_id: player_cards.player_id,
          username: player_cards.username,
          type: 'choose_cards',
          player_cards: true,
          instructions: 'Choose an action to trash:',
          cards: eligible_cards,
          minimum: 1,
          maximum: 1
        })
        let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
        turn_event_processor.process(Graverobber.trash_card)
      } else if (_.size(eligible_cards) === 1) {
        Graverobber.trash_card(game, player_cards, eligible_cards)
      } else {
        game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> chooses to trash an action, but has none in their hand`)
      }
    }
  }

  static trash_card(game, player_cards, selected_cards) {
    let eligible_cards = _.filter(game.cards, (card) => {
      return card.count > 0 && card.supply && CardCostComparer.card_less_than(game, selected_cards[0], card.top_card, 4)
    })

    let card_trasher = new CardTrasher(game, player_cards, 'hand', selected_cards)
    card_trasher.trash()

    if (_.size(eligible_cards) > 1) {
      GameModel.update(game._id, game)
      PlayerCardsModel.update(game._id, player_cards)
      let turn_event_id = TurnEventModel.insert({
        game_id: game._id,
        player_id: player_cards.player_id,
        username: player_cards.username,
        type: 'choose_cards',
        game_cards: true,
        instructions: 'Choose a card to gain:',
        cards: eligible_cards,
        minimum: 1,
        maximum: 1
      })
      let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
      turn_event_processor.process(Graverobber.gain_from_supply)
    } else if (_.size(eligible_cards) === 1) {
      Graverobber.gain_from_supply(game, player_cards, eligible_cards)
    } else {
      game.log.push(`&nbsp;&nbsp;but there are no available cards to gain`)
    }
  }

  static gain_from_supply(game, player_cards, selected_cards) {
    let card_gainer = new CardGainer(game, player_cards, 'discard', selected_cards[0].name)
    card_gainer.gain()
  }

  static gain_from_trash(game, player_cards, selected_cards) {
    let card_gainer = new CardGainer(game, player_cards, 'deck', selected_cards[0].name)
    card_gainer.gain(game.trash)
  }

}
