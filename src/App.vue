


<template>
  <PlayersArray></PlayersArray>
</template>

<script>
  import PlayersArray from './components/PlayersArray.vue';
  export default {
    name : 'App',
    components : {
      PlayersArray
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
