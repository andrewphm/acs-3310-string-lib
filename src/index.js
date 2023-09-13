class StringFormatter {
  static capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static allCaps(string) {
    return string.toUpperCase();
  }

  static capitalizeWords(string) {
    return string
      .split(' ')
      .map((word) => this.capitalizeFirstLetter(word))
      .join(' ');
  }

  static capitalizedHeadline(string) {
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

  static removeExtraSpaces(string) {
    return string.trim().replace(/\s+/g, ' ');
  }

  static kebobCase(string, charToReplace = '-') {
    string = string.replace(/[^a-zA-Z0-9 ]/g, '');
    return this.removeExtraSpaces(string).toLowerCase().replace(/ /g, charToReplace);
  }

  static snakeCase(string) {
    return this.kebobCase(string, '_');
  }

  static camelCase(string) {
    let words = string.split(' ');
    return (
      words[0].toLowerCase() +
      words
        .slice(1)
        .map((word) => this.capitalizeFirstLetter(word))
        .join('')
    );
  }
}



