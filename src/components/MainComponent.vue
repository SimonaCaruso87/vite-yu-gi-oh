<script>
// importazione componente charactercard
import CharacterCard from './CharacterCard.vue';
// importiamo lo store per creare ciclo array per riempire le cards
import { store } from '../store.js';


export default{
    name: "MainComponent",
    components :{
      CharacterCard
    },
    data(){
        return{
            // cos' ci ritorna lo store
          store
        }
    },
    methods:{

    }
}
</script>

<template>

    <main>
        
        <select class="select-card border-1 rounded-1" name="card" id="card">
            <option value="card">
                Alien
            </option>
        </select>
         <!-- dentro charactercard ci importiamo i dati dell'array cos' grazie a store -->
         <!-- singleCard inventato tra parentesi con il suo indice -->
         <!-- store.cardsArray vai in store e prendi l'array creata -->
         <!-- key ci aiuta a prendere l'index -->
        <CharacterCard v-for="(singleCard, index) in store.cardsArray" :key="index"/>
        {{ store.cardsArray }};

    </main>

</template>

<style lang="scss" scoped>

main{
     background-color: #D48F38;
     padding: 40px 80px;

     .select-card{
       border: none;
       width: 100px;
     }
}

</style>