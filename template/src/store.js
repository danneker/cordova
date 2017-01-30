import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  cordova: {
    version: null,
    platformVersion: null,
    platformId: null,
    installed: false,
    ready: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// mutation types
const types = {
  INSTALL: 'INSTALL',
  ACTIVATE: 'ACTIVATE'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  [types.INSTALL] (state) {
    state.cordova.installed = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  [types.ACTIVATE] (state, cordova) {
    state.cordova.version = cordova.version{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    state.cordova.platformVersion = cordova.platformVersion{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    state.cordova.platformId = cordova.platformId{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    state.cordova.ready = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  install: ({ commit }) => {
    if (window.location.protocol === 'file:') {
      var cordovaScript = document.createElement('script'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      cordovaScript.setAttribute('type', 'text/javascript'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      cordovaScript.setAttribute('src', 'cordova.js'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      document.body.appendChild(cordovaScript){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      commit(types.INSTALL){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      console.log('[CordovaVue] - Cordova JS added to page'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  },
  activate: ({ commit }) => {
    // let Vue know that deviceready has been triggered
    document.addEventListener('deviceready', () => {
      // look to see if cordova has been correctly loaded
      if (typeof cordova === 'object') {
        console.log('[CordovaVue] - Cordova loaded Successfully'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        /* eslint-disable no-undef */
        commit(types.ACTIVATE, cordova){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else {
        console.log('[CordovaVue] - Cordova integration failed!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    }, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// getters are functions
const getters = {
  cordova: state => state.cordova{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
