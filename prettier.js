module.exports = {
	// This is the line width that Prettier will try to wrap at -- but a line may be shorter or
	// longer, depending on its contents.
	printWidth: 100,

	// Using quoted props only when needed limits a diff to only the affected object properties if
	// a property name is changed in such a way that quotes are needed.
	quoteProps: 'as-needed',

	// Using single quotes makes it easier to write strings that themselves contain double quotes,
	// for example because a phrase is being quoted.
	singleQuote: true,

	// Always including a trailing comma in arrays and objects avoids a diff of 2 lines if only 1
	// item/property is added later.
	trailingComma: 'all',

	// Using tabs instead of spaces allows everyone to set their tab width to whatever they prefer,
	// without causing a code change/
	useTabs: true,

	// Always using parenthesis, instead of only when necessary. This makes it easier to add a second
	// function argument later, type annotations, or a default value.
	arrowParens: 'always',
};
