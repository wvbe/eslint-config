## Installation as a user

Follow these steps if you would like to use the linting and formatting rules in your own JavaScript
project:

**Step 1:** Install this repository as a dev dependency:

```sh
npm install -D \
	eslint \
	wvbe/eslint-config
```

**Step 2:** Create a file called `.prettierrc.js` in the root of your project, and give it the
following contents:

```js
module.exports = require('@wvbe/eslint-config/prettier');
```

**Step 3:** Create a file called `.eslintrc.js` in the root of your project, and give it the
following contents:

```js
module.exports = {
	extends: ['@wvbe/eslint-config/vanilla'],
};
```

**Step 4:** Update `.eslintrc.js` to extend linting rules specific to your project type. Add any
amount of the following strings to the `extends` array:

- `@wvbe/eslint-config/vanilla`, linting rules that apply to _any_ JavaScript project.
- `@wvbe/eslint-config/jest`, for the Jest test framework.
- `@wvbe/eslint-config/node`, for NodeJS.
- `@wvbe/eslint-config/typescript`, for TypeScript. Requires the `typescript` peer dependency.

**Step 5:** Remove any JS formatting-related configuration from `.editorconfig`.

If you haven't already, consider installing the recommended IDE plugins in the next section.

## IDE plugins

Although ESLint can fix a bunch of warnings/errors for you automatically, it pays to have a
dedicated IDE plugin for Prettier. This is usually a lot _faster_ than running code formatting
through ESLint.

In VS Code, the following plugins are recommended;

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

If you must, you can run all linting and formatting rules via command line yourself;

```sh
npx eslint .
npx prettier . --write
```

## Installation as a repository contributor

Follow these steps if you want to contribute to the rules in `@wvbe/eslint-config`:

**Step 1:** Clone this repository and run `npm install && npm link`

**Step 2:** In a test project, follow all of the _Installation as a user_ steps.

**Step 3:** In the same test project, run `npm link @wvbe/eslint-config`.

Your test project now has all (transitive) dependencies installed, and the rulesets that Total
Design controls are symlinked here. Note that you may have to repeat some of these steps if
`@wvbe/eslint-config`'s dependencies change.
