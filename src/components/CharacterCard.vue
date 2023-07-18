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
            <div class="section-top">
              <h6>
                Found 39 Cards
              </h6>
            </div>

            <div class="cards">
                <div class="card">
                    <div class="image-wrapper">
                        <img src="" alt="">
                    </div>
                    <div class="info-card">
                       <h5>
                         NOME ALIENO
                       </h5>
                       <h6>
                        GENERE
                       </h6>
                    </div>
                </div>   
            </div> 
        </div>   
    </section>

</template>

<style lang="scss" scoped>

section{
    background-color: #D48F38;

    .container-cards{
        height: 100vh;
        width:1000px;
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

             .card{
                width:calc((100% - 50px) / 5);
                margin: 5px;

                .info-card{
                    height: 100px;
                    background-color: #D48F38;

                    .image-wrapper{
                        width:100%;
                    }
                }

             }
            }
    
    }
}

</style>