PlayerCardsModel = class PlayerCardsModel extends ReactiveDictModel {
  static data_source(game_id) {
    // console.log(game_id)
    // console.log(PlayerCards)
    return PlayerCards[game_id]
  }

  static find(game_id) {
    return _.mapValues(this.data_source(game_id))
  }

  static findOne(game_id, player_id) {
    // console.log("--PCM1--")
    // console.log(game_id)
    // console.log(player_id)
    // console.log("--PCM2--")
    // console.log(this.data_source(game_id))
    return this.data_source(game_id)[player_id]
  }

  static insert(record) {
    record._id = Math.floor(Math.random() * 100000) + 1
    // console.log("--record--")
    // console.log(record)
    // console.log("--ds1--")
    // console.log(this.data_source(record.game_id))
    this.data_source(record.game_id)[record.player_id] = record
    // console.log("--ds2--")
    // console.log(this.data_source(record.game_id))
    return record.player_id
  }

  static update(game_id, record) {
    return this.data_source(game_id)[record.player_id] = record
  }

  static remove(game_id, player_id) {
    if (game_id) {
      if (player_id) {
        this.data_source(game_id).delete(player_id)
      } else {
        this.data_source(game_id).clear()
      }
    } else {
      PlayerCards = {}
    }
  }
}
