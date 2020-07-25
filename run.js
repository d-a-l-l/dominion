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

let zcards = [
  {
    name: 'Artisan',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Artisan',
      image: 'artisan',
      types: 'action',
      pile_types: 'action',
      coin_cost: 6,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Artisan',
      capitalism: false,
      alternate_buy: false,
      id: '1',
      belongs_to: []
    },
    stack: [
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '1',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '2',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '3',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '4',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '5',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '6',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '7',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '8',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '9',
        belongs_to: []
      },
      {
        name: 'Artisan',
        image: 'artisan',
        types: 'action',
        pile_types: 'action',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Artisan',
        capitalism: false,
        alternate_buy: false,
        id: '10',
        belongs_to: []
      }
    ],
    stack_name: 'Artisan',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Market',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Market',
      image: 'market',
      types: 'action',
      pile_types: 'action',
      coin_cost: 5,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Market',
      capitalism: true,
      alternate_buy: false,
      id: '21',
      belongs_to: []
    },
    stack: [
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '21',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '22',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '23',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '24',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '25',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '26',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '27',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '28',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '29',
        belongs_to: []
      },
      {
        name: 'Market',
        image: 'market',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Market',
        capitalism: true,
        alternate_buy: false,
        id: '30',
        belongs_to: []
      }
    ],
    stack_name: 'Market',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Sentry',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Sentry',
      image: 'sentry',
      types: 'action',
      pile_types: 'action',
      coin_cost: 5,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Sentry',
      capitalism: false,
      alternate_buy: false,
      id: '51',
      belongs_to: []
    },
    stack: [
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '51',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '52',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '53',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '54',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '55',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '56',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '57',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '58',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '59',
        belongs_to: []
      },
      {
        name: 'Sentry',
        image: 'sentry',
        types: 'action',
        pile_types: 'action',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Sentry',
        capitalism: false,
        alternate_buy: false,
        id: '60',
        belongs_to: []
      }
    ],
    stack_name: 'Sentry',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Witch',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Witch',
      image: 'witch',
      types: 'action attack',
      pile_types: 'action attack',
      coin_cost: 5,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Witch',
      capitalism: false,
      alternate_buy: false,
      id: '81',
      belongs_to: []
    },
    stack: [
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '81',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '82',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '83',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '84',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '85',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '86',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '87',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '88',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '89',
        belongs_to: []
      },
      {
        name: 'Witch',
        image: 'witch',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Witch',
        capitalism: false,
        alternate_buy: false,
        id: '90',
        belongs_to: []
      }
    ],
    stack_name: 'Witch',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Bureaucrat',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Bureaucrat',
      image: 'bureaucrat',
      types: 'action attack',
      pile_types: 'action attack',
      coin_cost: 4,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Bureaucrat',
      capitalism: false,
      alternate_buy: false,
      id: '11',
      belongs_to: []
    },
    stack: [
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '11',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '12',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '13',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '14',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '15',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '16',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '17',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '18',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '19',
        belongs_to: []
      },
      {
        name: 'Bureaucrat',
        image: 'bureaucrat',
        types: 'action attack',
        pile_types: 'action attack',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Bureaucrat',
        capitalism: false,
        alternate_buy: false,
        id: '20',
        belongs_to: []
      }
    ],
    stack_name: 'Bureaucrat',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Smithy',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Smithy',
      image: 'smithy',
      types: 'action',
      pile_types: 'action',
      coin_cost: 4,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Smithy',
      capitalism: false,
      alternate_buy: false,
      id: '61',
      belongs_to: []
    },
    stack: [
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '61',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '62',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '63',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '64',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '65',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '66',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '67',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '68',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '69',
        belongs_to: []
      },
      {
        name: 'Smithy',
        image: 'smithy',
        types: 'action',
        pile_types: 'action',
        coin_cost: 4,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Smithy',
        capitalism: false,
        alternate_buy: false,
        id: '70',
        belongs_to: []
      }
    ],
    stack_name: 'Smithy',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Merchant',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Merchant',
      image: 'merchant',
      types: 'action',
      pile_types: 'action',
      coin_cost: 3,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Merchant',
      capitalism: true,
      alternate_buy: false,
      id: '31',
      belongs_to: []
    },
    stack: [
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '31',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '32',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '33',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '34',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '35',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '36',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '37',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '38',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '39',
        belongs_to: []
      },
      {
        name: 'Merchant',
        image: 'merchant',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Merchant',
        capitalism: true,
        alternate_buy: false,
        id: '40',
        belongs_to: []
      }
    ],
    stack_name: 'Merchant',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Vassal',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Vassal',
      image: 'vassal',
      types: 'action',
      pile_types: 'action',
      coin_cost: 3,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Vassal',
      capitalism: true,
      alternate_buy: false,
      id: '71',
      belongs_to: []
    },
    stack: [
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '71',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '72',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '73',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '74',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '75',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '76',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '77',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '78',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '79',
        belongs_to: []
      },
      {
        name: 'Vassal',
        image: 'vassal',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Vassal',
        capitalism: true,
        alternate_buy: false,
        id: '80',
        belongs_to: []
      }
    ],
    stack_name: 'Vassal',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Workshop',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Workshop',
      image: 'workshop',
      types: 'action',
      pile_types: 'action',
      coin_cost: 3,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Workshop',
      capitalism: false,
      alternate_buy: false,
      id: '91',
      belongs_to: []
    },
    stack: [
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '91',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '92',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '93',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '94',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '95',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '96',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '97',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '98',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '99',
        belongs_to: []
      },
      {
        name: 'Workshop',
        image: 'workshop',
        types: 'action',
        pile_types: 'action',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Workshop',
        capitalism: false,
        alternate_buy: false,
        id: '100',
        belongs_to: []
      }
    ],
    stack_name: 'Workshop',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Moat',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Moat',
      image: 'moat',
      types: 'action reaction',
      pile_types: 'action reaction',
      coin_cost: 2,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Moat',
      capitalism: false,
      alternate_buy: false,
      id: '41',
      belongs_to: []
    },
    stack: [
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '41',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '42',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '43',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '44',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '45',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '46',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '47',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '48',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '49',
        belongs_to: []
      },
      {
        name: 'Moat',
        image: 'moat',
        types: 'action reaction',
        pile_types: 'action reaction',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Moat',
        capitalism: false,
        alternate_buy: false,
        id: '50',
        belongs_to: []
      }
    ],
    stack_name: 'Moat',
    source: 'kingdom',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Province',
    count: 8,
    embargos: 0,
    top_card: {
      name: 'Province',
      image: 'province',
      types: 'victory',
      pile_types: 'victory',
      coin_cost: 8,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Province',
      capitalism: false,
      alternate_buy: false,
      id: '101',
      belongs_to: []
    },
    stack: [
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '101',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '102',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '103',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '104',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '105',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '106',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '107',
        belongs_to: []
      },
      {
        name: 'Province',
        image: 'province',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 8,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Province',
        capitalism: false,
        alternate_buy: false,
        id: '108',
        belongs_to: []
      }
    ],
    stack_name: 'Province',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Duchy',
    count: 8,
    embargos: 0,
    top_card: {
      name: 'Duchy',
      image: 'duchy',
      types: 'victory',
      pile_types: 'victory',
      coin_cost: 5,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Duchy',
      capitalism: false,
      alternate_buy: false,
      id: '109',
      belongs_to: []
    },
    stack: [
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '109',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '110',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '111',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '112',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '113',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '114',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '115',
        belongs_to: []
      },
      {
        name: 'Duchy',
        image: 'duchy',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 5,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Duchy',
        capitalism: false,
        alternate_buy: false,
        id: '116',
        belongs_to: []
      }
    ],
    stack_name: 'Duchy',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Estate',
    count: 8,
    embargos: 0,
    top_card: {
      name: 'Estate',
      image: 'estate',
      types: 'victory',
      pile_types: 'victory',
      coin_cost: 2,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Estate',
      capitalism: false,
      alternate_buy: false,
      id: '117',
      belongs_to: []
    },
    stack: [
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '117',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '118',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '119',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '120',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '121',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '122',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '123',
        belongs_to: []
      },
      {
        name: 'Estate',
        image: 'estate',
        types: 'victory',
        pile_types: 'victory',
        coin_cost: 2,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Estate',
        capitalism: false,
        alternate_buy: false,
        id: '124',
        belongs_to: []
      }
    ],
    stack_name: 'Estate',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Gold',
    count: 30,
    embargos: 0,
    top_card: {
      name: 'Gold',
      image: 'gold',
      types: 'treasure',
      pile_types: 'treasure',
      coin_cost: 6,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Gold',
      capitalism: false,
      alternate_buy: false,
      id: '125',
      belongs_to: []
    },
    stack: [
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '125',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '126',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '127',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '128',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '129',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '130',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '131',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '132',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '133',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '134',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '135',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '136',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '137',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '138',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '139',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '140',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '141',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '142',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '143',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '144',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '145',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '146',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '147',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '148',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '149',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '150',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '151',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '152',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '153',
        belongs_to: []
      },
      {
        name: 'Gold',
        image: 'gold',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 6,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Gold',
        capitalism: false,
        alternate_buy: false,
        id: '154',
        belongs_to: []
      }
    ],
    stack_name: 'Gold',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Silver',
    count: 40,
    embargos: 0,
    top_card: {
      name: 'Silver',
      image: 'silver',
      types: 'treasure',
      pile_types: 'treasure',
      coin_cost: 3,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Silver',
      capitalism: false,
      alternate_buy: false,
      id: '155',
      belongs_to: []
    },
    stack: [
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '155',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '156',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '157',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '158',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '159',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '160',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '161',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '162',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '163',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '164',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '165',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '166',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '167',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '168',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '169',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '170',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '171',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '172',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '173',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '174',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '175',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '176',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '177',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '178',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '179',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '180',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '181',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '182',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '183',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '184',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '185',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '186',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '187',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '188',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '189',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '190',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '191',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '192',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '193',
        belongs_to: []
      },
      {
        name: 'Silver',
        image: 'silver',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 3,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Silver',
        capitalism: false,
        alternate_buy: false,
        id: '194',
        belongs_to: []
      }
    ],
    stack_name: 'Silver',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Copper',
    count: 60,
    embargos: 0,
    top_card: {
      name: 'Copper',
      image: 'copper',
      types: 'treasure',
      pile_types: 'treasure',
      coin_cost: 0,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Copper',
      capitalism: false,
      alternate_buy: false,
      id: '195',
      belongs_to: []
    },
    stack: [
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '195',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '196',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '197',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '198',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '199',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '200',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '201',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '202',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '203',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '204',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '205',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '206',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '207',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '208',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '209',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '210',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '211',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '212',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '213',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '214',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '215',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '216',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '217',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '218',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '219',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '220',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '221',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '222',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '223',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '224',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '225',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '226',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '227',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '228',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '229',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '230',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '231',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '232',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '233',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '234',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '235',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '236',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '237',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '238',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '239',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '240',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '241',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '242',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '243',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '244',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '245',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '246',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '247',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '248',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '249',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '250',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '251',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '252',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '253',
        belongs_to: []
      },
      {
        name: 'Copper',
        image: 'copper',
        types: 'treasure',
        pile_types: 'treasure',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Copper',
        capitalism: false,
        alternate_buy: false,
        id: '254',
        belongs_to: []
      }
    ],
    stack_name: 'Copper',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  },
  {
    name: 'Curse',
    count: 10,
    embargos: 0,
    top_card: {
      name: 'Curse',
      image: 'curse',
      types: 'curse',
      pile_types: 'curse',
      coin_cost: 0,
      potion_cost: 0,
      debt_cost: 0,
      stack_name: 'Curse',
      capitalism: false,
      alternate_buy: false,
      id: '255',
      belongs_to: []
    },
    stack: [
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '255',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '256',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '257',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '258',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '259',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '260',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '261',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '262',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '263',
        belongs_to: []
      },
      {
        name: 'Curse',
        image: 'curse',
        types: 'curse',
        pile_types: 'curse',
        coin_cost: 0,
        potion_cost: 0,
        debt_cost: 0,
        stack_name: 'Curse',
        capitalism: false,
        alternate_buy: false,
        id: '264',
        belongs_to: []
      }
    ],
    stack_name: 'Curse',
    source: 'common',
    supply: true,
    bane: undefined,
    victory_tokens: 0,
    debt_tokens: 0,
    tokens: []
  }
]

let acards = [
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

let bcards = [
  {
    name: 'Bureaucrat',
    image: 'bureaucrat',
    types: 'action attack',
    pile_types: 'action attack',
    coin_cost: 4,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Bureaucrat',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Chapel',
    image: 'chapel',
    types: 'action',
    pile_types: 'action',
    coin_cost: 2,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Chapel',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Harbinger',
    image: 'harbinger',
    types: 'action',
    pile_types: 'action',
    coin_cost: 3,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Harbinger',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Market',
    image: 'market',
    types: 'action',
    pile_types: 'action',
    coin_cost: 5,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Market',
    capitalism: true,
    alternate_buy: false
  },
  {
    name: 'Militia',
    image: 'militia',
    types: 'action attack',
    pile_types: 'action attack',
    coin_cost: 4,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Militia',
    capitalism: true,
    alternate_buy: false
  },
  {
    name: 'Mine',
    image: 'mine',
    types: 'action',
    pile_types: 'action',
    coin_cost: 5,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Mine',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Smithy',
    image: 'smithy',
    types: 'action',
    pile_types: 'action',
    coin_cost: 4,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Smithy',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Village',
    image: 'village',
    types: 'action',
    pile_types: 'action',
    coin_cost: 3,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Village',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Witch',
    image: 'witch',
    types: 'action attack',
    pile_types: 'action attack',
    coin_cost: 5,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Witch',
    capitalism: false,
    alternate_buy: false
  },
  {
    name: 'Workshop',
    image: 'workshop',
    types: 'action',
    pile_types: 'action',
    coin_cost: 3,
    potion_cost: 0,
    debt_cost: 0,
    stack_name: 'Workshop',
    capitalism: false,
    alternate_buy: false
  }
]

let exclusions = []
let edition = []
let cards = bcards

let buy_out_cards = function(current_game) {
  if (allowed_to_play(current_game)) {
    let current_player_cards = my_cards(current_game._id, current_game.turn.player._id)
    PlayerActionUndoer.track_action(current_game, current_player_cards)
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
    if (turn_over(current_game, current_player_cards)) {
      let turn_ender = new TurnEnder(current_game, current_player_cards)
      turn_ender.end_turn()
    }
  }
}

let dumb_player = function(current_game) {
  if (allowed_to_play(current_game)) {
    let current_player_cards = my_cards(current_game._id, current_game.turn.player._id)
    PlayerActionUndoer.track_action(current_game, current_player_cards)
    let all_coin_player = new AllCoinPlayer(current_game, current_player_cards)
    all_coin_player.play()
    let card_name = 'Curse'
    let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
    if (card_buyer.can_buy()) {
      card_buyer.buy()
    } else {
      card_name = 'Copper'
      card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
      if (card_buyer.can_buy()) {
        card_buyer.buy()
      } else {
        card_name = 'Estate'
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
}

// while (true) {

let game_creator = new GameCreator(players, cards, exclusions, edition)
let g = game_creator.create()
let game_id = g._id
let ActionLock = {}
let p = {
 'a': buy_out_cards,
 'b': dumb_player,
 'c': buy_out_cards
}


// console.log(g)
let turn_order =  _.map(g.players, (player, index) => {
  return player.username
})
console.log(`Turn Order is: ${turn_order.join(', ')}`,)
while (!g.finished) {
  p[g.turn.player.unstyled_username](g)
  // player_a(g)
  // player_b(g)
  // player_c(g)
    // if (!ActionLock[game_id]) {
    //   ActionLock[game_id] = true
    //   let current_game = g
    //   if (allowed_to_play(current_game)) {
    //     let current_player_cards = player_cards(current_game)
    //     PlayerActionUndoer.track_action(current_game, current_player_cards)
    //     // console.log("--current_game--")
    //     // console.log(current_game)
    //     // console.log("--current_player_cards--")
    //     // console.log(current_player_cards)
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
    //     // console.log("--current_game--")
    //     // console.log(current_game)
    //     // console.log("--current_player_cards--")
    //     // console.log(current_player_cards)
    //     PlayerActionUndoer.track_action(current_game, current_player_cards)
    //     let card_name = 'Estate'
    //     let card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
    //     if (card_buyer.can_buy()) {
    //       card_buyer.buy()
    //     } else {
    //       card_name = 'Copper'
    //       card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
    //       if (card_buyer.can_buy()) {
    //         card_buyer.buy()
    //       } else {
    //         card_name = 'Curse'
    //         card_buyer = new CardBuyer(current_game, current_player_cards, card_name)
    //         if (card_buyer.can_buy()) {
    //           card_buyer.buy()
    //         }
    //       }  
    //     }
    //     if (turn_over(current_game, current_player_cards)) {
    //       let turn_ender = new TurnEnder(current_game, current_player_cards)
    //       turn_ender.end_turn()
    //     }
    //   }
    //   ActionLock[game_id] = false
    // }
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

console.dir(g.scores, { depth: null })
console.log(g.winners)
  // }

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
function my_cards(game_id, player_id) {
  return PlayerCardsModel.findOne(game_id, player_id)
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
