Mine = class Mine extends Card {

  types() {
    return ['action']
  }

  coin_cost() {
    return 5
  }

  play(game, player_cards) {
    let eligible_cards = _.filter(player_cards.hand, (card) => {
      return _.includes(_.words(card.types), 'treasure')
    })

    if (_.size(eligible_cards) > 0) {
      let turn_event_id = TurnEventModel.insert({
        game_id: game._id,
        player_id: player_cards.player_id,
        username: player_cards.username,
        type: 'choose_cards',
        player_cards: true,
        instructions: 'Choose a treasure to trash (or none to skip):',
        cards: eligible_cards,
        minimum: 0,
        maximum: 1
      })
      let turn_event_processor = new TurnEventProcessor(game, player_cards, turn_event_id)
      turn_event_processor.process(Mine.trash_card)
    } else {
      game.log.push(`&nbsp;&nbsp;but does not trash a treasure`)
    }
  }

  static trash_card(game, player_cards, selected_cards) {
    if (!_.isEmpty(selected_cards)) {
      let card_trasher = new CardTrasher(game, player_cards, 'hand', selected_cards[0])
      card_trasher.trash()

      let eligible_cards = _.filter(game.cards, (card) => {
        return card.count > 0 && card.supply && _.includes(_.words(card.top_card.types), 'treasure') && CardCostComparer.card_less_than(game, selected_cards[0], card.top_card, 4)
      })

      if (_.size(eligible_cards) > 0) {
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
        turn_event_processor.process(Mine.gain_card)
      } else {
        game.log.push(`&nbsp;&nbsp;but there are no available treasures to gain`)
      }
    } else {
      game.log.push(`&nbsp;&nbsp;but does not trash a treasure`)
    }
  }

  static gain_card(game, player_cards, selected_cards) {
    let card_gainer = new CardGainer(game, player_cards, 'hand', selected_cards[0].name)
    card_gainer.gain()
  }

}
