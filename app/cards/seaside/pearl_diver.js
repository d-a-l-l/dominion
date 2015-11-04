PearlDiver = class PearlDiver extends Card {

  types() {
    return ['action']
  }

  coin_cost() {
    return 2
  }

  play(game, player_cards) {
    let card_drawer = new CardDrawer(game, player_cards)
    card_drawer.draw(1)

    game.turn.actions += 1
    game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> gets +1 actions`)

    PlayerCards.update(player_cards._id, player_cards)

    if (_.size(player_cards.deck) === 0 && _.size(player_cards.discard) === 0) {
      game.log.push(`&nbsp;&nbsp;but has no cards in deck`)
    } else {
      if (_.size(player_cards.deck) === 0) {
        let deck_shuffler = new DeckShuffler(player_cards)
        deck_shuffler.shuffle()
      }

      player_cards.look = player_cards.deck.pop()
      game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> looks at the bottom card of their deck`)

      let turn_event_id = TurnEvents.insert({
        game_id: game._id,
        player_id: game.turn.player._id,
        username: game.turn.player.username,
        type: 'choose_yes_no',
        instructions: `Put <span class="${player_cards.look.types}">${player_cards.look.name}</span> on top of deck?`,
        minimum: 1,
        maximum: 1
      })
      let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
      turn_event_processor.process(PearlDiver.put_on_top)
    }
  }

  static put_on_top(game, player_cards, response) {
    if (response === 'yes') {
      player_cards.deck.unshift(player_cards.look)
      game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> puts the card on top of their deck`)
    } else {
      player_cards.deck.push(player_cards.look)
      game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> keeps the card on bottom of their deck`)
    }
    delete player_cards.look
  }

}
