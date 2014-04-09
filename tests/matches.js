
define([
    "esquery",
    "jstestr/assert",
    "jstestr/test",
    "./ast/conditional",
    "./ast/forLoop",
    "./ast/simpleFunction",
    "./ast/simpleProgram"
], function (esquery, assert, test, conditional, forLoop, simpleFunction, simpleProgram) {

    test.defineSuite("matches", {

        "conditional": function () {
			assert.isTrue(esquery.matches(conditional, esquery.parse("Program! > IfStatement")));
			assert.isTrue(esquery.matches(conditional, esquery.parse("Program! > IfStatement!")));
			assert.isTrue(esquery.matches(conditional, esquery.parse("Program! > IfStatement! > Literal[value=false]")));
			assert.isTrue(esquery.matches(conditional.body[1], esquery.parse("Program! > IfStatement!"), [conditional.body, conditional]));
			assert.isTrue(esquery.matches(conditional.body[1], esquery.parse("Program! > IfStatement! > Literal[value=false]"), [conditional.body, conditional]));
        }

    });
});
