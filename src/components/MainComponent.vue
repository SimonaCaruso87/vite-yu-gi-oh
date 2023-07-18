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
        <!-- per creare un filtro inserire un v-model nella select + inserire @change e dentro evento da intercettare-->
        <select v-model="store.selectType" @change="$emit('selectType')" class="select-card border-1 rounded-1" name="card" id="card">
            <!-- fare un v-bind prima di value affinchè sottometta il form -->
            <option :value="singleType.archetype_name" v-for="(singleType , index) in store.typeArray" :key="index">
                {{singleType.archetype_name}}
            </option>
        </select>
        <section>
        <div class="container-cards">
            <div class="section-top">
              <h6>
                Found 39 Cards
              </h6>
            </div>
            <div class="cards">
                <!-- dentro charactercard ci importiamo i dati dell'array cos' grazie a store -->

                <!-- singleCard inventato tra parentesi con il suo indice -->
                <!-- store.cardsArray vai in store e prendi l'array creata -->
                <!-- key ci aiuta a prendere l'index -->

                <!-- :singleComponet viene dichiarato con un nome a scelta e tramite le props prendiamo un dato da store.js -->
               <CharacterCard 
               v-for="(singleCard, index) in store.cardsArray " 
               :key="index" 
               :singleComponent='singleCard'
               />
            </div>
        </div>
    </section>
    </main>

</template>

<style lang="scss" scoped>

main{
     background-color: #D48F38;
     padding: 40px 80px;
     .select-card{
       border: none;
       width: 100px;
       margin:20px;
     }
}
section{
    background-color: #D48F38;
    .container-cards{
        margin:0 auto;
        background-color: white;
        padding:30px;
        .section-top{
        background-color:#212529;
        height:60px;
        h6{
            color:white;
            padding:20px;
        }
        }
         .cards{
            display: flex;
            flex-wrap: wrap;
        }
    }
}


</style>