<script>
export default{
    name: "HeaderComponent",
    data(){
        return{

        }
    },
    methods:{


    }
}
</script>

<template>

    <header>
            <div class="header-top border-3 rounded-3 d-flex">

                <div class="logo">
                    <img src="../assets/img/yugioh.png" alt="Logo Yu-Gi-Oh">
                </div>

                <h3>
                    Yu-GI-Oh Api
                </h3>

            </div>
    </header>

</template>

<style lang="scss" scoped>

header{

    .header-top{
        background-color: white;
        border:1px solid grey;
        height:50px;


        .logo{
            padding:3px 20px;
    
        }


        img{
            width:100%;
            height: 100%;
            object-fit: cover;
        }

    }

    
}

</style>