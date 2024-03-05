<script setup>
  import PlayersArray from './components/PlayersArray.vue';
  import Header from './components/Header/Header.vue';
  import Footer from './components/Footer/Footer.vue';
</script>


<template>
  <div class="header"><Header/></div>
  <div class="main"><PlayersArray/></div>
  <div class="footer"><Footer/></div>
</template>

<script>
  
  export default {
    name : 'App',
    components : {
      
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
