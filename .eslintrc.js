module.exports = module.exports = {
	"ecmaVersion": 6,
	"env": {
		"node": true,
		"es6": true,
		"mocha": true
	},
  	"rules": {
		"comma-dangle": [1,"never"],
    	"no-console": 1,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty-character-class": 2,
		"no-empty": 2,
		"no-extra-parens": [1,"all"],
		"no-extra-semi": 2,
		"no-irregular-whitespace": 2,
		"valid-jsdoc": 2,
		"block-scoped-var": 2,
		"curly": [1,"multi-line"],
		"no-undef": 2,
		"no-unused-vars": 2,
		"handle-callback-err": 2,
		"brace-style": [2,"stroustrup",{"allowSingleLine":false}],
		"camelcase": [1,{"properties":"always"}],
		"comma-spacing": [2,{"after":true}],
		"indent": [2,"tab"],
		"new-parens": 2,
		"newline-after-var": [2,"always"],
		"no-mixed-spaces-and-tabs": [2,"smart-tabs"],
		"no-multiple-empty-lines": [1,{"max":2}],
		"object-curly-spacing": [1,"never",{"arraysInObjects":true,"objectsInObjects":true}],
		"semi": [2,"always"],
		"arrow-parens": [1,"always"],
		"arrow-spacing": [1,{"before":true,"after":true}],
		"no-var": 1,
		"object-shorthand": [1,"never"],
		"prefer-const": 1,
		"prefer-spread": 1,
		"key-spacing": [1,{"afterColon":true}],
		"operator-linebreak": 1,
		"vars-on-top": 1
  	}
};