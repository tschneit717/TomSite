import { Server } from 'miragejs'

new Server({
  routes() {
    this.namespace = '/api'

    this.get('/users', () => {
      return {
        users: [
          { 
            name: 'Thorin087', 
            nameIRL: 'Tom A',
            puuid: '0421cYtH1ajhIpNKtOroKmG7U1B9cUW-5hUUeqIQsbSp1soairHMFMcsq2_1kfB7IOWNrGGp4PYyfA',
            summonerLevel: 16,
            accountId: 'HNzm8PM2VT2aQhnvuljvRpi6DgNtDJ2SEkwF19F5lB5BegE',
            id: 'jBvH5D7qRCeUvDUFoShb86K-VHiz-YfLbthI9o8kn7t-6wg',
            revisionDate: 1495788990000
          },
          { 
            name: 'SicSerenity', 
            nameIRL: 'Zach',
            puuid: 'kNivt7D6uIQ-h8GYpCQWnsNO3u9Vajp1KDYMusANvfGdly5oLHaf1vfkRJH-wJ-Bt4IeQpWUN-lWyw',
            summonerLevel: 72,
            accountId: 'ie4FUQzjdg7jNKyq6nL1wMuQ_srSIajMcd-M56drhZnFeAQ',
            id: 'mGTYCDgdYN0xX8faqsfd741CejvifWusjhcZj4Rv8DVHyKg',
            revisionDate: 1580096630000
         },
        ],
      }
    })
    this.get('/lol/match/v4/matchlists/by-account', () => {
      return {
        matches: [
          {
            
          }
        ]
      }
    })
  }
})