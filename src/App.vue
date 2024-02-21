<template>
  <div class="Main">
    <controls></controls>
    <v-header></v-header>
    <v-body></v-body>
    <v-footer></v-footer>
  </div>
</template>

<script>
  
  import Controls from './components/Controls.vue'
  import Header from './components/Header.vue'
  export default {
    name : 'App',
    components : {
      'controls' : Controls,
      'v-header' : Header,
    }
  }
</script>
