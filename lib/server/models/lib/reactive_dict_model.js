ReactiveDictModel = class ReactiveDictModel {

  static find() {
    return this.data_source().all()
  }

  static findOne(id) {
    // return this.data_source().get(id)
    return this.data_source().id
  }

  static update(id, record) {
    // console.log(this.data_source())
    // console.log(id)
    // console.log(record)
    return this.data_source()[id] =  record
  }

  static remove(id) {
    if (id) {
      this.data_source().delete(id)
    } else {
      this.data_source().clear()
    }
  }
}
