<template>
  <div id="app">
    <h1>Vue.js Socket.io Chat</h1>
    <input v-model="message" @keyup.enter="sendMessage">
    <button @click="sendMessage">Send</button>
    <ul>
      <li v-for="msg in messages" :key="msg">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message: '',
        messages: []
      };
    },
    sockets:{
      connect(){
        console.log('Connected to Server');
      },
      disconnect(){
        console.log('Disconnected from Server');
      },
      'chat message'(msg){
        this.messages.push(msg);
      }
    },
    methods:{
      sendMessage(){
        if(this.message.trim() !== ''){
          this.$socket.emit('chat message', this.message);
          this.message = '';
        }
      }
    }
  };
</script>

<!--<controls></controls>
    <v-header></v-header>
    <v-body></v-body>
    <v-footer></v-footer>-->

    <!--import Controls from './components/Controls.vue'
  import Header from './components/Header.vue'
  export default {
    name : 'App',
    components : {
      'controls' : Controls,
      'v-header' : Header,
    }
  }-->