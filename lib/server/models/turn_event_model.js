TurnEventModel = class TurnEventModel extends ReactiveDictModel {

  static data_source(game_id) {
    return TurnEvents[game_id]
  }

  static find(game_id) {
    return _.mapValues(this.data_source(game_id))
  }

  static findOne(game_id, turn_event_id) {
    // console.log("temfindone")
    // console.log(this.data_source(game_id))
    // console.log(turn_event_id)
    return this.data_source(game_id)[turn_event_id]
  }

  static insert(record) {
    let turn_event_id = Math.floor(Math.random() * 100000) + 1

    if (record.cards) {
      record.cards = _.sortBy(record.cards, function(card) {
        return card.stack_name
      })
    }

    this.data_source(record.game_id)[turn_event_id] = _.merge(record, {_id: turn_event_id})
    return turn_event_id
  }

  static update(game_id, record) {
    return this.data_source(game_id).set(record._id, record)
  }

  static remove(game_id, turn_event_id) {
    if (game_id) {
      if (turn_event_id) {
        // console.log(this.data_source(game_id))
        // console.log(turn_event_id)
        delete this.data_source(game_id).turn_event_id
      } else {
        this.data_source(game_id).clear()
      }
    } else {
      TurnEvents = {}
    }
  }

}
