import { assert } from "chai";

export class TestHelper {

    constructor() {
    }

    public queriesLengthAndMultipleSpaces(queries: string[]) {
        console.log(queries)
        assert.lengthOf(queries, 3)
        queries.forEach(query => {
            // no empty queries
            assert.isNotEmpty(query);
            // no spaces at the beginning and end
            assert.isNotTrue(query.startsWith(" ") && query.endsWith(" "));
            // no more than 1 space in a row
            assert.isNotTrue(/\s\s+/g.test(query));
        })
    }

    commentsNotExists(queries: string[]) {
        queries.forEach( query => {
            // no comments like ("--comments")
            assert.isNotTrue(/(--)(.*)/g.test(query));
            // n comments like ("/* comments */")
            assert.isNotTrue(/\/\*.*\*\//g.test(query))
        })
    }
}
