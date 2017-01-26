# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# install Cordova platforms (ie, android, ios..etc)
cordova add platform <platform-name> --save

# install Cordova plugins
cordova add plugin <plugin-name> --save

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
{{#unit}}

# run on cordova system (ie, android, ios..etc)
cordova run <system-name>

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
