<!--
    Template consists of on-click buttons that each run a specific function.
    Those functions are implemented in methods below.
    
-->

<template>
    <h1>Player Array Component</h1>
    <button @click="addPlayerToList(players)">  Add Player  </button>
    <!--<button @click="removePlayerFromArray(players)"> Remove Player</button>-->
    <button @click="printListLength(players)"> Number Of Players </button>
    <button @click="randomizePlayerPosition(players)"> Mix Players </button>
    <ul>
        <li v-for="(player, index) in players">
           {{ player.id }} {{ player.index }}
        </li> 
        <li v-if="players.length===0">No current players</li>
    </ul>
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
                players : []
            }
        },
        methods: {
            /*
            / Takes the array{players}, adds a new instance of player with uninitialized data
            / to the datastructure without changing any information currently in the array.
            */
            addPlayerToList(array){
                array.push({
                    id : array.length+1,
                    name:'',
                    role:'',
                    team:''
                })
                console.log("Array Length is " + array.length);
                console.log("Added id is " + array[array.length-1].id);
            },
             // Removes the highest index player from the array {players}
            /*
                Currently need to figure out how to iterate over an array. 
                I'm struggling to properly delete the highest id value, after 
                the array has been shuffled.

                TODO!!

            */
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
                for(var i = array.length-1; i > 0; i--){
                    var j = Math.floor(Math.random()*(i+1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
</script>

