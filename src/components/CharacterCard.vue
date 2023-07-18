<script>
export default{
    name: "CharacterCard",
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<template>

    <section>
        <div class="container-cards">

            <div class="cards">
                <div class="card">

                </div>
            </div> 
        </div>   
    </section>

</template>

<style lang="scss" scoped>

section{
    background-color: #D48F38;

    .container-cards{
        width:500px;
        height: 100vh;
        display: flex;

        border:1px solid green;

         .cards{
             width: 1500px;
             height: max-content;
             border:10px solid white;
            }
    
    }
}

</style>