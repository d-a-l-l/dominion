Agent = class Agent {
//   "click #hand .card-image": playCard,
//   "click .card-container .card-image": buyCard,
//   "click .event-container .card-image": buyEvent,
//   "click .project-container .card-image": buyProject,
//   "click #undo-action": undoAction,
//   "click #end-turn": endTurn,
//   "click #play-all-coin": playAllCoin,
//   "click #play-coffer": playCoinToken,
//   "click #play-villager": playVillager,
//   "click #play-debt-token": playDebtToken,
//   "submit #turn-event": turnEvent

    static playCard(card_id, game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let card = _.find(current_player_cards.hand, (card) => {
                return card.id === card_id
            })
            if (card) {
                let card_player = new CardPlayer(current_game, current_player_cards, card)
                card_player.play()
                if (turn_over(current_game, current_player_cards)) {
                    let turn_ender = new TurnEnder(current_game, current_player_cards)
                    turn_ender.end_turn()
                }
            }
        }
    }

    static buyCard(card_name, game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
            card_buyer.buy()
            if (turn_over(current_game, current_player_cards)) {
                let turn_ender = new TurnEnder(current_game, current_player_cards)
                turn_ender.end_turn()
            }
        }
    }

    static buyEvent(card_name, game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let event_buyer = new EventBuyer(current_game, current_player_cards, card_name)
            event_buyer.buy()
            if (turn_over(current_game, current_player_cards)) {
                let turn_ender = new TurnEnder(current_game, current_player_cards)
                turn_ender.end_turn()
            }
        }
    }

    static buyProject(card_name, game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let project_buyer = new ProjectBuyer(current_game, current_player_cards, card_name)
            project_buyer.buy()
            if (turn_over(current_game, current_player_cards)) {
                let turn_ender = new TurnEnder(current_game, current_player_cards)
                turn_ender.end_turn()
            }
        }
    }

    static endTurn(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let turn_ender = new TurnEnder(current_game, player_cards(current_game))
            turn_ender.end_turn()
        }
    }

    static playAllCoin(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
            all_coin_player.play()
        }
    }

    static playCoinToken(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let coffer_player = new CofferPlayer(current_game, current_player_cards)
            coffer_player.play()
        }
    }

    static playVillager(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let villager_player = new VillagerPlayer(current_game, current_player_cards)
            villager_player.play()
        }
    }

    static playDebtToken(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.track_action(current_game, current_player_cards)
            let debt_token_player = new DebtTokenPlayer(current_game, current_player_cards)
            debt_token_player.play()
            if (turn_over(current_game, current_player_cards)) {
                let turn_ender = new TurnEnder(current_game, current_player_cards)
                turn_ender.end_turn()
            }
        }
    }

    static undoAction(game_id) {
        let current_game = game(game_id)
        if (allowed_to_play(current_game)) {
            let current_player_cards = player_cards(current_game)
            PlayerActionUndoer.undo_action(current_game, current_player_cards)
        }
    }

    static turnEvent(selected_cards, turn_event_id) {
        TurnEventFutures[turn_event_id].return(selected_cards)
    }


static turn_over(game, player_cards) {
  if (game.turn.phase === 'buy') {
    return game.turn.buys === 0 && (player_cards.debt_tokens === 0 || game.turn.coins === 0) && !Agent.has_night_cards(player_cards)
  } else if (game.turn.phase === 'night') {
    return !Agent.has_night_cards(player_cards)
  } else {
    return false
  }
}

static has_night_cards(player_cards) {
  return _.some(player_cards.hand, function(card) {
    return _.includes(_.words(card.types), 'night')
  })
}

static player_cards(game) {
  return PlayerCardsModel.findOne(game._id, game.turn.player._id)
}
static my_cards(game_id, player_id) {
    return PlayerCardsModel.findOne(game_id, player_id)
}
static game(game_id) {
  return GameModel.findOne(game_id)
}

static allowed_to_play(game) {
    return true
//   if (game.turn.possessed) {
//     return 1 === game.turn.possessed._id
//   } else {
//     return 1 === game.turn.player._id
//   }
}




}