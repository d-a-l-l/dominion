Chancellor = class Chancellor extends Card {

  types() {
    return ['action']
  }

  coin_cost() {
    return 3
  }

  play(game, player_cards) {
    game.turn.coins += 2
    game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> gets +$2`)

    if (_.size(player_cards.deck) > 0) {
      let turn_event_id = TurnEvents.insert({
        game_id: game._id,
        player_id: player_cards.player_id,
        username: player_cards.username,
        type: 'choose_yes_no',
        instructions: 'Put Deck In Discard?',
        minimum: 1,
        maximum: 1
      })
      let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
      turn_event_processor.process(Chancellor.discard_deck)
    } else {
      game.log.push(`&nbsp;&nbsp;but the deck is empty`)
    }
  }

  static discard_deck(game, player_cards, response) {
    if (response === 'yes') {
      game.log.push(`&nbsp;&nbsp;and discards their deck`)
      let card_discarder = new CardDiscarder(game, player_cards, 'deck')
      card_discarder.discard_all(false)
    }
  }

}