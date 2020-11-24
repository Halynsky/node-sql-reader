# v0.1.0

### New Features

* Sql string parsing  
`SqlReader.parseSqlString(sqlString: string): string[]`
* Sql file parsing  
`SqlReader.readSqlFile(sqlString: string): string[]`
* Sql file runner  
`SqlReader.runSqlFile(filepath: string, runnerFn: (query: string) => void)`
* Sql file runner async  
`runSqlFileAsync(filepath: string, runnerFn: (query: string) => Promise<any>): Promise<any>`

# v0.1.3

### Bug fixes

* Fix multiline query parsing
