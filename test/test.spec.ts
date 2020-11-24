import * as path from "path";
import { SqlReader } from "../src";
import { assert } from "chai";

describe('Test', () => {

    it('should read-sql', () => {
        console.log('Hello world')
        let queries = SqlReader.readSqlFile(path.join(__dirname, "../data/users.sql"));
        console.log(queries)
        assert.lengthOf(queries, 3)
    });



})
