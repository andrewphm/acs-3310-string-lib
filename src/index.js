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
}

const capitalized = StringFormatter.capitalizeFirstLetter('dorothy');

console.log(capitalized); // Dorothy
