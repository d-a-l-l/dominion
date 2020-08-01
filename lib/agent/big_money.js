BigMoney = class BigMoney extends Agent {
    p(){
        let current_game = this.game
        if (Agent.allowed_to_play(current_game)) {
            // console.log(current_game)
        let current_player_cards = Agent.my_cards(current_game._id, current_game.turn.player._id)
        PlayerActionUndoer.track_action(current_game, current_player_cards)
        let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
        all_coin_player.play()
        let card_name = 'Province'
        let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
        if (card_buyer.can_buy()) {
            card_buyer.buy()
        } else {
            card_name = 'Gold'
            card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
            if (card_buyer.can_buy()) {
                card_buyer.buy()
            } else {
                card_name = 'Silver'
                card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
                if (card_buyer.can_buy()) {
                    card_buyer.buy()
                } else {
                    current_game.turn.phase = 'night'
                }
          }
        }
        if (Agent.turn_over(current_game, current_player_cards)) {
            let turn_ender = new TurnEnder(current_game, current_player_cards)
            turn_ender.end_turn()
        }
    }
    }
}