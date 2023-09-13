# StringFormatter

StringFormatter is a utility library that provides a collection of static methods for string manipulation in JavaScript. It includes functions for capitalizing the first letter of a string, converting a string to all caps, capitalizing all words in a string, and much more.

## Installation

npm package: https://www.npmjs.com/package/@gramsay7/string-lib

Use the package manager [npm](https://www.npmjs.com/) to install StringFormatter.

```bash
npm install @gramsay7/string-lib
```

## Usage

```javascript
import StringFormatter from 'string-formatter';

let str = "hello world";

console.log(StringFormatter.capitalizeFirstLetter(str)); // "Hello world"
console.log(StringFormatter.allCaps(str)); // "HELLO WORLD"
console.log(StringFormatter.capitalizeWords(str)); // "Hello World"
```

## API

#### `capitalizeFirstLetter(string: string): string`

Capitalizes the first letter of the string.

#### `allCaps(string: string): string`

Converts the entire string to uppercase.

#### `capitalizeWords(string: string): string`

Capitalizes the first letter of each word in the string.

#### `capitalizedHeadline(string: string): string`

Capitalizes the first letter of each word in the string, except for certain small words such as 'the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'.

#### `removeExtraSpaces(string: string): string`

Removes extra spaces from the string.

#### `kebobCase(string: string, charToReplace = '-'): string`

Converts the string to kebob-case (also known as dash-case or lisp-case).

#### `snakeCase(string: string): string`

Converts the string to snake_case.

#### `camelCase(string: string): string`

Converts the string to camelCase.

### `shift(string: string, number = 1): string`

Shifts the characters in the string to the right by the specified number of positions.

### `makeHashTag(string: string): string[]`

Creates an array of hashtags from the words in the string. The array is sorted by word length, with the longest words first, and includes up to three words.

### `isEmpty(string: string): boolean`

Checks if the string is empty, ignoring whitespace characters.

## License

[MIT](https://choosealicense.com/licenses/mit/)
