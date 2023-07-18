<!-- qui abbiamo tutto quello che serve per inizializzare il nostro componente -->
<script>
// dobbiamo prima importarli dal percorso al file preciso
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CharacterCard from './components/CharacterCard.vue';
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
     CharacterCard
  },
  data(){
    // per richiamare un api dentro vue dobbiamo dichiarare un array di oggetti vuota
    return{
        arrayYuGiOh : []
    }
  },
  methods:{

  },
  
  created(){
  //per effettuare una chiamata ajax all'API di Yu Gi Oh dobbiamo inserire questa sintassi
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then(response => {
            this.arrayYuGiOh = response.data.data
        })
    }

}

</script>

<template>

<HeaderComponent />

<MainComponent />

<CharacterCard />

<FooterComponent />


</template>

<style lang="scss">
@use "assets/scss/main" as*;
</style>
