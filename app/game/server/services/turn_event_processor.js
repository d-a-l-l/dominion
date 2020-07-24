TurnEventProcessor = class TurnEventProcessor {

  constructor(game, player_cards, turn_event_ids, source) {
    this.game = game
    this.source = source
    this.player_cards = player_cards
    this.turn_event_ids = _.isArray(turn_event_ids) ? turn_event_ids : [turn_event_ids]
  }

  process(event_action) {
    // let turn_events = _.map(this.turn_event_ids, function(turn_event_id) {
    //   TurnEventFutures[turn_event_id] = new Future()
    //   return TurnEventFutures[turn_event_id]
    // })
    // Future.wait(...turn_events)
    let result = []
    _.each(this.turn_event_ids, (turn_event_id) => {
      let response = TurnEventFutures[turn_event_id].get()
      TurnEventModel.remove(this.game._id, turn_event_id)
      delete TurnEventFutures[turn_event_id]
      result.push(event_action(this.game, this.player_cards, response, this.source))
    })
    if (_.size(result) === 1) {
      return result[0]
    } else {
      return result
    }
  }

}
