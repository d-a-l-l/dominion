BuyOutCards = class BuyOutCards extends Agent {
  p(){
    if (Agent.allowed_to_play(turn)) {
      // console.log(current_game)
      PlayerActionUndoer.track_action(turn, hand)
      let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
      all_coin_player.play()
      let card_name = 'Estate'
      let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
      if (card_buyer.can_buy()) {
        card_buyer.buy()
      } else {
        card_name = 'Copper'
        card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
        if (card_buyer.can_buy()) {
          card_buyer.buy()
        } else {
          card_name = 'Curse'
          card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
          if (card_buyer.can_buy()) {
            card_buyer.buy()
          }
        }  
      }
      if (Agent.turn_over(turn, hand)) {
        let turn_ender = new TurnEnder(turn, hand)
        turn_ender.end_turn()
      }
    }
  }
}