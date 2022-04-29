/* eslint-disable no-unused-vars */

// This file exists to assert that the Prettier configuration does not accidentially change the
// formatted output.
//
// To test this, this file should be completely formatting-complient. A Jest test will assert that
// running Prettier on the file _again_ yields exactly the same outcome. See also:
//   /test/prettier.test.js
//
// The code in this file is designed to hit all the available options. See also:
//   https://prettier.io/docs/en/options.html

const lineWidthTest = Array.from(new Array(10))
	.map((_, veryLongNameForSomethingAsSimpleAsAnIndex) => veryLongNameForSomethingAsSimpleAsAnIndex)
	.reduce((total, number) => total + number);

const otherOptionTests = {
	'single-quotes': true,
	propQuotes: 'as-needed',
	brackedSpacing: { enabled: true },
	arrowFunctionParens: (_x) => 'always',
};

const bracketSpacing = { enabled: true };
