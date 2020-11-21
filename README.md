# node-sql-reader
This library can parse pure sql file or sql string in to queries array.  
The main use case that made me to create this library was inability of TypeOrm to run sql file.
I needed to run sql file with test data each time when I restart a server to get same starting test data.  
I think that it could be used in some other workflows too.

## Install
```
npm install node-sql-reader
```

## Usage
```ts
import { SqlReader } from 'node-sql-reader/dist'
import * as path from 'path';

// can be any other function
export class TestDataInitializer {
    initTestData() {
        let queries = SqlReader.readSqlFile(path.join(__dirname, "../database/test_data.sql"))
        for (let query of queries) {
            // replace it with your query runner
            SomeQuerryRunner.runQuerry(query)
        }
    }
}

```
## API
* `parseSqlString(sqlString: string): string[]`  
Parse all queries from sql string. Returns array of queries.
* `readSqlFile(filePath: string): string[]`  
Reads all queries from file. Returns array of queries.
* `runSqlFile(filepath: string, runnerFn: (query: string) => void)`  
Parse all queries from sql string. Has an async version.

## Features requests / bugs
If you'd like the parser to do something that it doesn't do or want to report
a bug please use the github issue tracker on [github](https://github.com/Halynsky/node-sql-reader)


