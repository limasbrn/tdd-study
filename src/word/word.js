const lonelyWord = (aString) => {
    if (typeof aString !== 'string') {
      throw new TypeError('lonelyWord should receive a string as argument')
    }
  
    return !/\s/g.test(aString)
      ? 'The passed string should have two or more words'
      : aString
          .split(/[\s,:;.?!()"']/gm)
          .reduce((acc, curr) => acc.length >= curr.length ? acc : curr, '')
  }
  
  export default lonelyWord