export default class StringFormatter {
  static capitalizeFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static allCaps(string: string) {
    return string.toUpperCase();
  }

  static capitalizeWords(string: string) {
    return string
      .split(' ')
      .map((word) => this.capitalizeFirstLetter(word))
      .join(' ');
  }

  static capitalizedHeadline(string: string) {
    const excludedWords = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
    return string
      .split(' ')
      .map((word) => {
        if (excludedWords.includes(word)) {
          return word;
        } else {
          return this.capitalizeFirstLetter(word);
        }
      })
      .join(' ');
  }

  static removeExtraSpaces(string: string) {
    return string.trim().replace(/\s+/g, ' ');
  }

  static kebobCase(string: string, charToReplace = '-') {
    string = string.replace(/[^a-zA-Z0-9 ]/g, '');
    return this.removeExtraSpaces(string).toLowerCase().replace(/ /g, charToReplace);
  }

  static snakeCase(string: string) {
    return this.kebobCase(string, '_');
  }

  static camelCase(string: string) {
    let words = string.split(' ');
    return (
      words[0].toLowerCase() +
      words
        .slice(1)
        .map((word) => this.capitalizeFirstLetter(word))
        .join('')
    );
  }

  static shift(string: string, number = 1) {
    let firstPart = string.slice(0, number);
    return [string.slice(number), firstPart].join('');
  }

  static makeHashTag(string: string) {
    let words = string.split(' ');
    let sortedLongest = words.sort((a, b) => b.length - a.length);
    let topThree = sortedLongest.slice(0, 3);
    return topThree.map((word) => `#${word.toLowerCase()}`);
  }

  static isEmpty(string: string) {
    // You can use string.trim() to remove spaces at the beginning and end of the string. What's left is either empty characters like returns, enter or tab, or other characters. Loop over the remaining characters, if you find a character that is not \n, \r, or \t return false. If you got to the end of the loop return true.
    let trimmedString = string.trim();
    for (let i = 0; i < trimmedString.length; i++) {
      if (trimmedString[i] !== '\n' && trimmedString[i] !== '\r' && trimmedString[i] !== '\t') {
        return false;
      }
    }
    return true;
  }
}
