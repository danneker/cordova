<template>
  <div id="app">
    <cordova></cordova>
    <div class="logos">
      <div class="logo">
        <img src="./assets/vue.png">
      </div>
      <div class="logo">
        <img src="./assets/cordova.png">
      </div>
    </div>
    <hello></hello>
  </div>
</template>

<script>
import Cordova from './components/Cordova'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  components: {
    Cordova,
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logos {
  display: flex;
  justify-content: center;
}
.logos img {
  flex: 1;
  max-width:100%;
}
</style>
