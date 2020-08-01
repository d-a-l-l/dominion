Militias = class Militias extends Agent {
    p(){
      let current_game = this.game
      if (Agent.allowed_to_play(current_game)) {
            // console.log(current_game.turn)
            let current_player_cards = Agent.my_cards(current_game._id, current_game.turn.player._id)
            let card = _.find(current_player_cards.hand, (card) => {
              // return card.id === card_id
              return card.name === 'Militia'
            })
            if (card) {
              // console.log(card)
              let card_player = new CardPlayer(current_game, current_player_cards, card)
              card_player.play()
              if (Agent.turn_over(current_game, current_player_cards)) {
                let turn_ender = new TurnEnder(current_game, current_player_cards)
                turn_ender.end_turn()
              }
              // console.log(current_player_cards)
            }
        
            current_player_cards = Agent.my_cards(current_game._id, current_game.turn.player._id)
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
                card_name = 'Militia'
                let game_card = _.find(current_game.cards, function(card) {
                  // console.log(card.name)
                  return card.name === card_name
                })
                if (game_card) {
                  card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
                }
                let smithies = 0
                let total_cards = 0
                current_game.ordered_player_cards.forEach((player) => {
                  if (player.player_id == current_game.turn.player._id) {
                    player.deck.forEach((card) => {
                      total_cards++
                      if (card.name === 'Smithy') {
                        smithies++
                      }
                    })
                  }
                })
                if (smithies/total_cards < 0.05 && card_buyer.can_buy()) {
                  card_buyer.buy()
                } else {
                  card_name = 'Duchy'
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
                }}
              }  
            }
            if (Agent.turn_over(current_game, current_player_cards)) {
              let turn_ender = new TurnEnder(current_game, current_player_cards)
              turn_ender.end_turn()
            }
          }
              
    }
}