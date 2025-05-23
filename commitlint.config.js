module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
	  'scope-case': [2, 'always', 'lower-case'],
	  'type-enum': [
		2,
		'always',
		[
		  'build',
		  'ci',
		  'chore',
		  'docs',
		  'feat',
		  'fix',
		  'perf',
		  'refactor',
		  'revert',
		  'style',
		  'test',
		],
	  ],
	},
  }
