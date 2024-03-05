<!--
    Template consists of on-click buttons that each run a specific function.
    Those functions are implemented in methods below.
    
-->



<template>
    <div class="container">
        <div class="child">
            <img src="https://cdn.pixabay.com/photo/2017/03/05/21/43/mountains-2120004_1280.jpg"> 
            <div ></div>
        </div>
        <div class="child">
            <img src="https://cdn.pixabay.com/photo/2017/03/05/21/43/mountains-2120004_1280.jpg">
            <div></div>
        </div>
        <div class="child">
            <img src="https://cdn.pixabay.com/photo/2017/03/05/21/43/mountains-2120004_1280.jpg">
            <div>
                
            </div>     
        </div>
        
        <div class="child">
            <div>
                <div class="heading"><p>List controls</p></div>
                <div class="buttons">
                    <button @click="addPlayerToList(players)">  Add Player  </button>
                    <button @click="removePlayer()"> Remove Player</button>
                    <button @click="printListLength(players)"> Number Of Players </button>
                    <button @click="randomizePlayerPosition(players)"> Mix Players </button>
                </div>
            </div>
            
                <div class="list">
            <ul>
            <li v-for="player in players" :key="player.id">
                {{ player }}
            </li> 
            <li v-if="players.length===0">No current players</li>
        </ul>
        </div>
        </div>
        
    </div> 
    </template>


<script>
   // Localized datastructures.
    export default{
        data(){
            return { 
                /*
                / Array : players
                / properties : TODO!
                / Access via this.players within the scope of this component.
                */
                players : [],
                uniqueKey : 1
            }
        },
        
            
        
        methods: {
            /*
            / Takes the array{players}, adds a new instance of player with uninitialized data
            / to the datastructure without changing any information currently in the array.
            */
            addPlayerToList(array){
                array.push({
                    id : this.uniqueKey,
                    name:'',
                    role:'',
                    team:''
                })
                this.uniqueKey++;
            },
            /*
            /   Removes the highest indexed player. Basically just pop.
            */
           removePlayer(){
            this.players.splice(this.players.length-1, 1);
           },


            // Prints the current length of the array {players} to console.log
            printListLength(array){
                console.log(array.length)
            },
            /*  Randomizes the order which the objects of the array { players } are placed 
            /   within the array {players}.
            /   BEFORE  : [{1,Bob}, {2, Smith}, {3, John}]
            /   AFTER   : Position of elements has been mixed up arbitrarily.
            /   NOTE :  Here's a JavaScript implementation of the Durstenfeld shuffle,
            /   an optimized version of Fisher-Yates:
            */

            randomizePlayerPosition(array){
                temp = this.players;
                for(var i = array.length-1; i > 0; i--){
                    var j = Math.floor(Math.random()*(i+1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return temp;
            }
        }
    }
</script>

<style scoped>
* {
    box-sizing: border-box;
}
html, body, div, img {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
body {
    line-height: 1;
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

img{
    padding: 5px;
    width: 100%;
}

div {
    border: 5px solid black;
    flex: 1;
    padding: 5px;
    margin: 5px;
}

.heading{
    display: flex;
    justify-content: center;
    border: 0px;
}
.buttons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 0px;
}

.child{
    display: flex;
    flex-direction: column;
}

</style>
