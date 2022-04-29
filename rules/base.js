// Rules regarding eslint.
// See: https://eslint.org/docs/rules/
//
// @NOTE: Rules turned off by eslint-config-prettier are omitted here.
// See: https://www.npmjs.com/package/eslint-config-prettier
module.exports = {
	extends: [
		// Configure rules recommended by eslint.
		'eslint:recommended',
	],
	plugins: ['simple-import-sort'],
	rules: {
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
	},
};
