const fs = require('fs/promises');
const path = require('path');

const config = require('../prettier');

it('Formatting the example file results in the same formatting again', async () => {
	// Prettier is expensive to load, so don't load until this test is actually started
	const prettier = require('prettier');

	const fileContents = await fs.readFile(
		path.join(__dirname, '__scaffolding', 'codeFormattingCases.js'),
		'utf8',
	);
	const formattedFileContents = prettier.format(fileContents, {
		...config,
		filepath: 'test.js',
	});

	expect(fileContents).toStrictEqual(formattedFileContents);
});
