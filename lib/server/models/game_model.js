GameModel = class GameModel extends ReactiveDictModel {
  static data_source() {
    return Games
  }

  static insert(record) {
    let game_id = Math.floor(Math.random() * 100000) + 1
    TurnEvents[game_id] = {};//new ReactiveDict()
    record._id = game_id
    record.trade_route_tokens = 0
    record.log = []
    record.turn_number = 1
    record.extra_turns = []

    this.data_source()[game_id] = record
    return record
  }
}
