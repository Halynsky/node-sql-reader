import * as fs from 'fs';

export class SqlReader {

    constructor() {
    }

    static parseSqlString(sqlString: string): string[] {
        return sqlString
            .replace(/(--)(.*)/g, '')
            .replace(/\r?\n|\r/g, '')
            .split(';')
            .filter((query) => query?.length);
    }

    static readSqlFile(filepath: string): string[] {
        let sqlString = fs
            .readFileSync(filepath)
            .toString()
        return SqlReader.parseSqlString(sqlString)
    };

    static runSqlFile(filepath: string, runnerFn: (query: string) => void) {
        let queries = SqlReader.readSqlFile(filepath);

        for (let query of queries) {
            runnerFn(query)
        }
    }

    static async runSqlFileAsync(filepath: string, runnerFn: (query: string) => Promise<any>): Promise<any> {
        let queries = SqlReader.readSqlFile(filepath);

        for (let query of queries) {
            await runnerFn(query)
        }
    }

}
