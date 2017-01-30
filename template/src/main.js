{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App },
  {{/if_eq}}
  methods: {
    ...mapActions([
      'install',
      'activate'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    this.install(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.activate(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
