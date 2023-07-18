<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CharacterCard from './components/CharacterCard.vue';
import axios from 'axios' ;

export default{
  name:"App",
  components:{
     HeaderComponent ,
     MainComponent ,
     FooterComponent ,
     CharacterCard
  },
  data(){
    return{
        arrayYuGiOh : []
    }
  },
  methods:{

  },
  
  created(){
  //effettuata una chiamata ajax all'API di Yu Gi Oh
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
