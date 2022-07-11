import lonelyWord from './word'
import {noSpaceMessage, typeErrorMessage} from './utilsWord'

describe('Happy Path', () => {
    const lifeSweet = "Now my life is sweet like cinnamon"

  test('lonelyWord should be a function', () => {
    expect(lonelyWord).toBeInstanceOf(Function)
  })

  test(`lonelyWord(${lifeSweet}) should return "cinnamon"`, () => {
    const actual = lonelyWord(lifeSweet)
    const expected = 'cinnamon'

    expect(actual).toBe(expected)
  }
)
})

describe('Unhappy Path', () => {

    test('lonelyWord() should thrown an TypeError', () => {
        try {
          lonelyWord()
        } catch (error) {
          expect(error.name).toBe('TypeError')
        }
      })

      test(`lonelyWord(7) should thrown an TypeError with message "${typeErrorMessage}"`, () => {
        try {
          lonelyWord(7)
        } catch (error) {
          expect(error.message).toBe(typeErrorMessage)
        }
      })

      test(`lonelyWord('iAmOnRadio') should return a message "${noSpaceMessage}"`, () => {
        const actual = lonelyWord('iAmOnRadio')
        const expected = noSpaceMessage
    
        expect(actual).toBe(expected)
      })

})
