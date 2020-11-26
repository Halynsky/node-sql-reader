import * as path from "path";
import { SqlReader } from "../src";
import { assert } from "chai";

describe('Test SqlReader', () => {

    it('should read simple semicolon separated queries', () => {
        let queries = SqlReader.readSqlFile(path.join(__dirname, "data/queries_simple.sql"));
        assert.lengthOf(queries, 3)
    });

    it('should read simple semicolon separated queries 2', () => {
        let queries = SqlReader.readSqlFile(path.join(__dirname, "data/queries_with_new_line.sql"));
        console.log(queries)
        assert.lengthOf(queries, 3)
    });

})
