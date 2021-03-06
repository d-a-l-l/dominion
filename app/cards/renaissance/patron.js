Patron = class Patron extends Card {

  types() {
    return this.capitalism_types(['action', 'reaction'])
  }

  capitalism() {
    return true
  }

  coin_cost() {
    return 4
  }

  play(game, player_cards, card_player) {
    let villager_gainer = new VillagerGainer(game, player_cards)
    villager_gainer.gain(1)

    let coin_gainer = new CoinGainer(game, player_cards, card_player)
    coin_gainer.gain(2)
  }

  reveal_event(revealer, patron) {
    let coffer_gainer = new CofferGainer(revealer.game, revealer.player_cards, patron)
    coffer_gainer.gain(1)
  }

}
