#!/usr/bin/env node

var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './app/cards/lib/*.js' ).forEach( function( file ) {
require( path.resolve( file ) );
});
require("./app/cards/adventures/traveller/traveller.js")
require("./app/cards/dark_ages/mixed_stack/ruins.js")
require("./app/cards/dark_ages/mixed_stack/knights.js")
require("./app/cards/empires/mixed_stack/castles.js")
require("./app/game/server/services/lib/card_buyer.js")
require("./lib/server/models/lib/reactive_dict_model.js")

glob.sync( './app/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) );
});

glob.sync( './lib/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) );
});
  
global._ = require("lodash")
_.titleize = function(text) {
    return _.startCase(text).replace(/ /g,'')
  }
  
// require("./lodash.js");
// let player_ids = $('.lobby-player:checked').map(function() {
//     return $(this).val()
//   }).get()

//   let exclusions = $('.card-set:checked').map(function() {
//     return $(this).val()
//   }).get()

//   let kingdom_id = _.trim($('.kingdom-id').val())

//   let edition = $('.edition:checked').val()

// let card_list = new CardList(this.exclusions, this.edition)
// if (this.kingdom_id === '') {
//   this.cards = card_list.pull_set()
// } else {
//   this.cards = card_list.pull_from_history(this.kingdom_id)
// }
// this.cards = _.sortBy(this.cards, function(card) {
//   return card.stack_name

let players = [
  {
      "_id": "Q7Kk2DstfMMGadcFj",
      "createdAt": Date("2020-07-21T15:11:09.091Z"),
      "services": {
          "password": {
              "bcrypt": "$2b$10$/bzUzKZ4wXzUcGZXaHZkV.OyAiDlsY6WIlTJMAZE26MGwg57EXQ/e"
          },
          "resume": {
              "loginTokens": [
                  {
                      "when": Date("2020-07-21T16:04:07.129Z"),
                      "hashedToken": "Zk833XmmpXpTKLp7Lar5GpUjOH44h1HGlMb4JfngqwM="
                  }
              ]
          }
      },
      "username": "a",
      "emails": [
          {
              "address": "dalewis@tikva.com",
              "verified": true,
              "approved": true
          }
      ],
      "status": {
          "online": true,
          "lastLogin": {
              "date": Date("2020-07-21T16:14:51.760Z"),
              "ipAddr": "172.17.0.1",
              "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4207.0 Safari/537.36"
          },
          "idle": false
      },
      "verified": true,
      "admin": true,
      "approved": true,
      "current_game": "e6jna3LWcFghMMf7a"
  },
{
      "_id": "jaqygwRov2xRhs4Gx",
      "createdAt": Date("2020-07-21T16:07:19.707Z"),
      "services": {
          "password": {
              "bcrypt": "$2b$10$MxeMzvI87ZXBLV2eL6Y26OP36KZCrqdEiBOMc1ItJSZrGKlVReEq6"
          },
          "resume": {
              "loginTokens": [
                  {
                      "when": Date("2020-07-21T16:07:19.724Z"),
                      "hashedToken": "Aog0Yvshdbt4RbPNPkanSsXBUWkkQTH8YkU0/TCH7kM="
                  }
              ]
          }
      },
      "username": "b",
      "emails": [
          {
              "address": "dave@tikva.com",
              "verified": false
          }
      ],
      "status": {
          "online": true,
          "lastLogin": {
              "date": Date("2020-07-21T16:14:49.816Z"),
              "ipAddr": "172.17.0.1",
              "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4207.0 Safari/537.36"
          },
          "idle": false
      },
      "approved": true,
      "current_game": "e6jna3LWcFghMMf7a"
  },
  {
    "_id": "caqygwRov2xRhs4Gx",
    "createdAt": Date("2020-07-21T16:07:19.707Z"),
    "services": {
        "password": {
            "bcrypt": "$2b$10$MxeMzvI87ZXBLV2eL6Y26OP36KZCrqdEiBOMc1ItJSZrGKlVReEq6"
        },
        "resume": {
            "loginTokens": [
                {
                    "when": Date("2020-07-21T16:07:19.724Z"),
                    "hashedToken": "Aog0Yvshdbt4RbPNPkanSsXBUWkkQTH8YkU0/TCH7kM="
                }
            ]
        }
    },
    "username": "c",
    "emails": [
        {
            "address": "dave@tikva.com",
            "verified": false
        }
    ],
    "status": {
        "online": true,
        "lastLogin": {
            "date": Date("2020-07-21T16:14:49.816Z"),
            "ipAddr": "172.17.0.1",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4207.0 Safari/537.36"
        },
        "idle": false
    },
    "approved": true,
    "current_game": "e6jna3LWcFghMMf7a"
}
]
let cards = [
      {
        name: 'Ambassador',
        image: 'ambassador',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Ambassador',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Baron',
        image: 'baron',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Baron',
        capitalism: true,
        alternate_buy: false
      },
      {
        name: 'Magpie',
        image: 'magpie',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Magpie',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Mint',
        image: 'mint',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Mint',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Pearl Diver',
        image: 'pearl_diver',
        types: 'action',
        pile_types: 'action',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Pearl Diver',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Scavenger',
        image: 'scavenger',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Scavenger',
        capitalism: true,
        alternate_buy: false
      },
      {
        name: 'Torturer',
        image: 'torturer',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Torturer',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Tragic Hero',
        image: 'tragic_hero',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Tragic Hero',
        capitalism: false,
        alternate_buy: false
      },
      {
        name: 'Vault',
        image: 'vault',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vault',
        capitalism: true,
        alternate_buy: false
      },
      {
        name: 'Villa',
        image: 'villa',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Villa',
        capitalism: true,
        alternate_buy: false
      },
      {
        name: 'Triumphal Arch',
        image: 'triumphal_arch',
        wide: true,
        types: 'landmark',
        victory_tokens: 0,
        id: '1',
        belongs_to: []
      },
      {
        name: 'Tower',
        image: 'tower',
        wide: true,
        types: 'landmark',
        victory_tokens: 0,
        id: '2',
        belongs_to: []
      }
    ]

let exclusions = []
let edition = []
while (true) {

let game_creator = new GameCreator(players, cards, exclusions, edition)
let g = game_creator.create()
let game_id = g._id
let ActionLock = {}
while (!g.finished) {
    if (!ActionLock[game_id]) {
        ActionLock[game_id] = true
        let current_game = g
        if (allowed_to_play(current_game)) {
          let current_player_cards = player_cards(current_game)
          PlayerActionUndoer.track_action(current_game, current_player_cards)
          // console.log("--current_game--")
          // console.log(current_game)
          // console.log("--current_player_cards--")
          // console.log(current_player_cards)
          let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
          all_coin_player.play()
        }
        ActionLock[game_id] = false
      }

      if (!ActionLock[game_id]) {
        ActionLock[game_id] = true
        let current_game = g
        if (allowed_to_play(current_game)) {
          let current_player_cards = player_cards(current_game)
          // console.log("--current_game--")
          // console.log(current_game)
          // console.log("--current_player_cards--")
          // console.log(current_player_cards)
          PlayerActionUndoer.track_action(current_game, current_player_cards)
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
          if (turn_over(current_game, current_player_cards)) {
            let turn_ender = new TurnEnder(current_game, current_player_cards)
            turn_ender.end_turn()
          }
        }
        ActionLock[game_id] = false
      }
    }

// if (!ActionLock[game_id]) {
//   ActionLock[game_id] = true
//   let current_game = g
//   if (allowed_to_play(current_game)) {
//     let current_player_cards = player_cards(current_game)
//     PlayerActionUndoer.track_action(current_game, current_player_cards)
//     let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
//     all_coin_player.play()
//   }
//   ActionLock[game_id] = false
// }

// if (!ActionLock[game_id]) {
//   ActionLock[game_id] = true
//   let current_game = g
//   if (allowed_to_play(current_game)) {
//     let current_player_cards = player_cards(current_game)
//     PlayerActionUndoer.track_action(current_game, current_player_cards)
//     let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
//     card_buyer.buy()
//     if (turn_over(current_game, current_player_cards)) {
//       let turn_ender = new TurnEnder(current_game, current_player_cards)
//       turn_ender.end_turn()
//     }
//   }
//   ActionLock[game_id] = false
// }

console.log(g.log.slice(Math.max(g.log.length - 5, 0)))

// console.dir(g.scores, { depth: null })
console.log(g.winners)
  }

function allowed_to_play(game) {
  return true
  // if (game.turn.possessed) {
  //   return Meteor.userId() === game.turn.possessed._id
  // } else {
  //   return Meteor.userId() === game.turn.player._id
  // }
}
function player_cards(game) {
  return PlayerCardsModel.findOne(game._id, game.turn.player._id)
}
function turn_over(game, player_cards) {
  if (game.turn.phase === 'buy') {
    return game.turn.buys === 0 && (player_cards.debt_tokens === 0 || game.turn.coins === 0) && !has_night_cards(player_cards)
  } else if (game.turn.phase === 'night') {
    return !has_night_cards(player_cards)
  } else {
    return false
  }
}
function has_night_cards(player_cards) {
  return _.some(player_cards.hand, function(card) {
    return _.includes(_.words(card.types), 'night')
  })
}
