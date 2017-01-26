// CordovaVue plugin

// Creates global Vue.Cordova object, adds cordova.js file
// the page and sets Vue.Cordova.ready to true on deviceready.

exports.install = (Vue, options) => {
  // declare global Vue.cordova variable
  Vue.Cordova = Vue.Cordova || {
    version: null,
    platformVersion: null,
    platformId: null,
    installed: false,
    ready: false,
    plugins: []
  }

  // add cordova.js only if serving the app through file://
  // this assumes that the file has been added by Cordova
  if (window.location.protocol === 'file:') {
    var cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
    Vue.Cordova.installed = true
    console.log('[CordovaVue] - Cordova JS added to page')
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    // look to see if cordova has been correctly loaded
    if (typeof cordova === 'object') {
      console.log('[CordovaVue] - Cordova loaded Successfully')
      /* eslint-disable no-undef */
      Vue.Cordova.version = cordova.version
      Vue.Cordova.platformVersion = cordova.platformVersion
      Vue.Cordova.platformId = cordova.platformId
      /* eslint-enable no-undef */
      Vue.Cordova.ready = true
    } else {
      console.log('[CordovaVue] - Cordova integration failed!')
    }
  }, false)
}
