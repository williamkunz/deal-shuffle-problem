#!/usr/bin/env node
const dealerCLI = require('commander')
const chalk = require('chalk')

const { CardModel } = require('./cli/CardModel')

let dealerModel = new CardModel()

const logCardsAndPositions = () => {
  const cardsInDeck = dealerModel.__cardsInDeck
  const playersCards = dealerModel.__playersCards

  console.log('-------------')
  console.log(`Dealer's deck (in order):`)
  console.log(`${ cardsInDeck.map(card => chalk.hex(card.color)(`${ card.displayName }${ card.icon }`)).join(', ') }`)
  console.log(`Number of cards: ${ chalk.green(cardsInDeck.length) }`)
  console.log('-------------')
  console.log('')
  console.log('Player\'s Hand (in order):')
  console.log(`${ playersCards.map(card => chalk.hex(card.color)(`${ card.displayName }${ card.icon }`)).join(', ') }`)
  console.log(`Number of cards: ${ chalk.green(playersCards.length) }`)
  console.log('-------------')
  console.log('')
  console.log('')
}

dealerCLI.version('0.0.1').description('Deals cards and shuffles')

dealerCLI.command('shuffle')
  .description('Shuffle all 52 cards')
  .action(() => {
    dealerModel.shuffle()

    logCardsAndPositions()
  })

dealerCLI.command('deal_card')
  .alias('deal')
  .description('Deals the user a card from the top of the deck')
  .option('-c, --cards <numberOfCardsToDeal>', 'Number of cards dealt')
  .action(args => {
    // without state management, need to pre-shuffle
    dealerModel.shuffle()

    const numberOfCardsToDeal = parseInt(args.cards, 10) || 1

    dealerModel.deal_card(
      numberOfCardsToDeal > 52
        ? 52
        : numberOfCardsToDeal
    )

    logCardsAndPositions()
  })



dealerCLI.parse(process.argv)
