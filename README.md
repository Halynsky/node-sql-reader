# node-sql-reader
This library can parse pure sql file or sql string in to queries array.  
The main use case that made me to create this library was inability of [TypeOrm](https://typeorm.io) to run sql file.
I needed to run sql file with test data each time when I restart a server to get same starting test data.  

## Install
```
npm install node-sql-reader
```

## Usage

### test_data.sql
```sql
INSERT INTO users (email, password, name) VALUES ('dummy1@somemail.com', 'hashed_password1', 'dummy1');
INSERT INTO users (email, password, name) VALUES ('dummy2@somemail.com', 'hashed_password2', 'dummy2');
INSERT INTO users (email, password, name) VALUES ('dummy3@somemail.com', 'hashed_password3', 'dummy3');
```

```ts
import { SqlReader } from 'node-sql-reader'
import * as path from 'path';

export class TestDataInitializer {
    initTestData() {
        let queries = SqlReader.readSqlFile(path.join(__dirname, "../database/test_data.sql"))
        for (let query of queries) {
            // replace it with your query runner
            SomeQuerryRunner.runQuerry(query)
        }
    }
}

/*
queries array:
[
   "INSERT INTO users (email, password, name) VALUES ('dummy1@somemail.com', 'hashed_password1', 'dummy1')",
   "INSERT INTO users (email, password, name) VALUES ('dummy2@somemail.com', 'hashed_password2', 'dummy2')",
   "INSERT INTO users (email, password, name) VALUES ('dummy3@somemail.com', 'hashed_password3', 'dummy3')",
]
*/
```

## API
* `parseSqlString(sqlString: string): string[]`  
Parse all queries from sql string. Returns array of queries.
* `readSqlFile(filePath: string): string[]`  
Reads all queries from file. Returns array of queries.
* `runSqlFile(filepath: string, runnerFn: (query: string) => void)`  
Parse all queries from sql file and runs runnerFn for each of them.
* `runSqlFileAsync(filepath: string, runnerFn: (query: string) => Promise<any>): Promise<any>`  
Parse all queries from sql file and runs runnerFn for each of them. Has an async version.

## Features requests / bugs
Feature requests and bugs on [github](https://github.com/Halynsky/node-sql-reader)
