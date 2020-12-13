import * as path from "path";
import { SqlReader } from "../src";
import { TestHelper } from "./utils/test.helper";
import { assert } from "chai";

describe('Test SqlReader', () => {

    let testHelper: TestHelper = new TestHelper();

    it('should read simple semicolon separated queries', () => {
        let queries: string[] = SqlReader.readSqlFile(path.join(__dirname, "data/queries_simple.sql"));
        assert.lengthOf(queries, 3)
    });

    it('should read query with new line', () => {
        let queries: string[] = SqlReader.readSqlFile(path.join(__dirname, "data/queries_with_new_line.sql"));
        testHelper.queriesLengthAndMultipleSpaces(queries);
    });

    it('should read query with comments', () => {
        let queries: string[] = SqlReader.readSqlFile(path.join(__dirname, "data/queries_with_comments.sql"));
        testHelper.queriesLengthAndMultipleSpaces(queries);
        testHelper.commentsNotExists(queries);
    });

    it('should read query with multiple spaces', () => {
        let queries: string[] = SqlReader.readSqlFile(path.join(__dirname, "data/queries_with_multiple_spaces_tabs.sql"));
        testHelper.queriesLengthAndMultipleSpaces(queries);
    });

})
