<script>
export default{
    name: "MainComponent",
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

        <div class="container-card">
            <div class="row">
                <div class="col">


                </div>
            </div>
        </div>
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