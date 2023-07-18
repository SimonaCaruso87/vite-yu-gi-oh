<script>
// importazione componente charactercard
import CharacterCard from './CharacterCard.vue';


export default{
    name: "MainComponent",
    components :{
      CharacterCard
    },
    data(){
        return{

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

        <CharacterCard />

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