Forager = class Forager extends Card {

  types() {
    return ['action']
  }

  coin_cost() {
    return 3
  }

  play(game, player_cards) {
    game.turn.actions += 1
    game.turn.buys += 1
    game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> gets +1 action and +1 buy`)

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
      turn_event_processor.process(Forager.trash_card)
    } else {
      game.log.push(`&nbsp;&nbsp;but there are no cards in hand`)
    }

    let trashed_treasures = _.filter(game.trash, function(card) {
      return _.includes(_.words(card.types), 'treasure')
    })
    let unique_treasure_count = _.size(_.uniqBy(trashed_treasures, 'name'))

    let gained_coins = CoinGainer.gain(game, player_cards, unique_treasure_count)
    game.log.push(`&nbsp;&nbsp;<strong>${player_cards.username}</strong> gets +$${gained_coins}`)
  }

  static trash_card(game, player_cards, selected_cards) {
    let card_trasher = new CardTrasher(game, player_cards, 'hand', selected_cards)
    card_trasher.trash()
  }

}
