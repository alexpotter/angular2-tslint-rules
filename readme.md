## Angular tslint rules

### Installation

```bash
npm install -S eslint codelyzer angualar-tslint-rules
```
 ### Usage
 
 ```json
{
  "rulesDirectory": [
    "node_modules/codelyzer"
  ],
  "extends": [
    "angular2-tslint-rules",
    "tslint:latest"
  ],
  "rules": {
    // override tslint rules here
  }
}
```
