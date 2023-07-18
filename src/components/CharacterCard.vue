<script>
export default{
    name: "CharacterCard",
    data(){
        return{

        }
    },
    methods:{

    },
    props:{
        // possiamo passare Object String Number Booleano Array
        singleComponent:Object
    }
}
</script>

<template>

        <div class="card">
            <div class="image-wrapper">
                <img :src="singleComponent.card_images[0].image_url" :alt="singleComponent.name">
            </div>
            <div class="info-card">
            <h5>
                {{singleComponent.name}}
            </h5>
            <h6>
                {{singleComponent.archetype}}
            </h6>
            </div>
        </div>

</template>

<style lang="scss" scoped>

            .card{
                width:calc((100% - 50px) / 5);
                margin: 5px;
                .info-card{
                    height: 100px;
                    background-color: #D48F38;
                }

                .image-wrapper{
                        width:100%;

                        img{
                            width: 100%;
                            height:100%;
                            object-fit: cover;
                        }
                    }
             }

</style>