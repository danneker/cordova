<template>
  <div class="cordova">
    <div v-if="Cordova.installed && Cordova.ready" class="status active">Cordova Status: Active</div>
    <div v-if="Cordova.installed && !Cordova.ready" class="status installed">Cordova Status: Installed</div>
    <div v-if="!Cordova.installed && !Cordova.ready" class="status notinstalled">Cordova Status: Not Installed</div>
  </div>
</template>

<script>
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'cordova-status',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      Cordova: Vue.Cordova{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped>
.cordova {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid black;
}
.status {
  font-size: 20px;
  padding: 5px;
}
.active {
  background-color: #CDDC39;
}
.installed {
  background-color: #FFC107;
}
.notinstalled {
  background-color: #FF5722;
}
</style>
