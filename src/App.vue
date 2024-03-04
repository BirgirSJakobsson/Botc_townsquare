


<template>
  <controls></controls>
  <v-header></v-header>
  <button v-on:click="sendMessage('Hello World')">Send Message</button>
</template>

<script>
  
  import Controls from './components/Controls.vue'
  import Header from './components/Header.vue'
  export default {
    name : 'App',
    components : {
      'controls' : Controls,
      'v-header' : Header,
    },
    data: function(){
      return{
        connection: null
      }
    },
    methods:{
      sendMessage: function(message){
        console.log(this.connection);
        this.connection.send(message);
      }
    },
    created: function(){
      console.log("Starting connection to WSS")
      this.connection = new WebSocket("wss://echo.websocket.org")

      this.connection.onopen = function(event){
        console.log(event)
        console.log("Successfully connected to the echo WSS")
      }

      this.connection.onmessage = function(event){
        console.log(event)
      }
    }
  }
</script>
