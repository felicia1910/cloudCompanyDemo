# iPos 專案
* 支援裝置尺吋寬度 1920 ~ 1600 px ，高度 1080 ~ 900 px
* 需安裝 Nodejs 8.12.0 以上版本
* 使用 Vue Cli 3 建立專案  
***
## 開發工具 ##
Visual Studio Code
***
## 開發工具(Visual Studio Code)安裝擴充功能  ##
### ESLint ###
+ 統一程式碼樣式，節省Code Review時間。
+ 可透過設定讓檔案儲存時自動修正語法。
+ 簽入程式一律不可以有不符合要求的語法。
+ 目前設定之可用global物件為：moment, $, jQuery

### Vetur ###
+ 提供 Vue 語法 Syntax-highlighting 功能。
+ 提供 Vue 開發環境的 Snippet, Formatting, Linting / Error Checking, Auto Completion 功能。

### Path Autocomplete ###
+ 提供路徑選擇的 intellisense 功能。
***  
## Visual Studio Code workspace settings  ##
``` json
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
  ],
  "editor.tabSize": 2,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.format.insertSpaceAfterConstructor": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html"
  },
  "path-autocomplete.pathMappings": {
    "@/": "${workspace}/src",
    "@/assets": "${workspace}/src/assets",
    "@/components": "${workspace}/src/components",
    "@/constant": "${workspace}/src/constant",
    "@/services": "${workspace}/src/services",
    "@/utils": "${workspace}/src/utils",
    "@/views": "${workspace}/src/views"
  }
}
```
***
### Project setup
```
npm install
```
***
### Compiles and hot-reloads for development
```
npm run dev
```
***
### Compiles and minifies for production
```
npm run build
```
***
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
***
## 共用函式註解方式(建立 JavaScript IntelliSense 的 JSDoc 註解) ##
### https://docs.microsoft.com/zh-tw/visualstudio/ide/create-jsdoc-comments-for-javascript-intellisense ###
| JSDoc 標記 | 語法 | 備註 |
| - | - | - |
| `@deprecated` | `@deprecated` 描述 | 指定取代函式或方法。 |
| `@description` | `@description` 描述 | 指定函式或方法的描述。 |
| `@export` | `@export` moduleName | 指定函式或方法的輸出模組名稱。 |
| `@param` | `@param` {類型} 參數名稱描述 | 指定函式或方法中之參數的資訊。 TypeScript 也支援 `@paramTag`。 |
| `@property` | `@property` {類型} 屬性名稱 | 指定欄位或物件上所定義成員的資訊，包括描述。 |
| `@returns` | `@returns` {類型} | 指定傳回值。 |
| `@summary` | `@summary` 描述 | 指定函式或方法的描述 (與 `@description` 相同)。 |
| `@type` | `@type` {類型} | 指定常數或變數的類型。 |
| `@typedef` | `@typedef` {類型} 自訂類型名稱 | 指定自訂類型。 |

``` javascript
    /** @description Determines the area of a circle that has the specified radius parameter.
    * @param {number} radius The radius of the circle
    * @return {number}
    */
    function getArea(radius) {
        var areaVal;
        areaVal = Math.PI * radius * radius;
        return areaVal;
    }
```#   c l o u d C o m p a n y D e m o  
 