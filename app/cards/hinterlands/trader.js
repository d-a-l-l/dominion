Trader = class Trader extends Card {

  types() {
    return ['action', 'reaction']
  }

  coin_cost() {
    return 4
  }

  play(game, player_cards) {
    if (_.size(player_cards.hand) > 0) {
      let turn_event_id = TurnEventModel.insert({
        game_id: game._id,
        player_id: player_cards.player_id,
        username: player_cards.username,
        type: 'choose_cards',
        player_cards: true,
        instructions: 'Choose a card to trash:',
        cards: player_cards.hand,
        minimum: 1,
        maximum: 1
      })
      let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
      turn_event_processor.process(Trader.trash_card)
    } else {
      game.log.push(`&nbsp;&nbsp;but there are no cards in hand`)
    }
  }

  static trash_card(game, player_cards, selected_cards) {
    let coin_cost = CostCalculator.calculate(game, selected_cards[0])

    let card_trasher = new CardTrasher(game, player_cards, 'hand', selected_cards)
    card_trasher.trash()

    _.times(coin_cost, function() {
      let card_gainer = new CardGainer(game, player_cards, 'discard', 'Silver')
      card_gainer.gain()
    })
  }

  would_gain_reaction(game, player_cards, gainer, trader) {
    let card_revealer = new CardRevealer(game, player_cards)
    card_revealer.reveal('hand', trader)

    gainer.card_name = 'Silver'
  }

}
