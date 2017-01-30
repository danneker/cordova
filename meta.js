module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "id": {
      "type": "string",
      "required": true,
      "message": "ID",
      "default": "com.example.cordovavue"
    },
    "version": {
      "type": "string",
      "required": true,
      "message": "Version",
      "default": "1.0.0"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Cordova application that uses Vue.js"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "author_name": {
      "type": "string",
      "message": "Author Name"
    },
    "author_email": {
      "type": "string",
      "message": "Author Email"
    },
    "author_website": {
      "type": "string",
      "message": "Author Website"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "AirBNB (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "AirBNB"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run build\n === For Android ===\n  cordova platform add android --save\n  cordova run android"
};
