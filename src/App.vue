<!-- qui abbiamo tutto quello che serve per inizializzare il nostro componente -->
<script>
// dobbiamo prima importarli dal percorso al file preciso
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// inserirlo tra graffe per distrutturare l'oggetto
import { store } from './store.js';
import axios from 'axios' ;
// poi possiamo inizializzare il nostro componente
export default{
    //l'aggiunta del name è opzionale
  name:"App",
  //qui registriamo i componenti come chiave valore di export default
  components:{
     HeaderComponent ,
     MainComponent ,
     FooterComponent ,
  },
  data(){
    // per richiamare un api dentro vue dobbiamo dichiarare un array di oggetti vuota
    return{
        // inseriamo tutto lo store che abbiamo creato in store
        store
    }
  },
  methods:{

  },
  
  created(){
  //per effettuare una chiamata ajax all'API di Yu Gi Oh dobbiamo inserire questa sintassi
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then(response => {
            // dopo il this ci richiamo lo store con la chiave creata in store.js
            this.store.cardsArray = response.data.data
            console.log(this.store.cardsArray);
        })
    }

}

</script>

<template>

<HeaderComponent />

<MainComponent />

<FooterComponent />


</template>

<style lang="scss">
@use "assets/scss/main" as*;
</style>
