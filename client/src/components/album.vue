<template>
<div class="container-images">
     <div class="notification is-danger" v-if="error"><button class="delete"></button> {{ error }}</div>

     <gallery :images="images" :index="index" @close="index = null"/>
     <div
    class="image"
    v-for="image, imageIndex in images"
    @click="index = imageIndex"
    :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '300px' }"
  ></div>
<img  v-bind:src="images.imgurl">
</div>
</template>

<script>
import GetService from '../GetService'
import VueGallery from 'vue-gallery';

export default {
     name: 'album',
    data() {
        return {
            images: [
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601736/tejiri/boat-couple-enjoyment-2369760.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601728/tejiri/beautiful-beauty-close-up-1804452.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601725/tejiri/car-close-up-device-2046807.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601720/tejiri/blur-blurred-background-close-up-1660662.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601715/tejiri/audio-mixer-dj-evening-462503.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601717/tejiri/abstract-blur-blurry-2237190.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601723/tejiri/blur-character-close-up-164854.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601718/tejiri/beautiful-beauty-cheerful-1579005.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601711/tejiri/4k-wallpaper-art-background-1657151.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057099/tejiri/adult-black-and-white-child-736428.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057095/tejiri/adorable-child-cute-1128317.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057094/tejiri/adult-art-body-art-1801263.jpg',
            ],
            index: '',
            imgurl: '',
            error: ''
        }
    },

    components: {
        'gallery': VueGallery
    }
    }
</script>

<style scoped>
.container-images{
  
    width: 90%;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 3%;

}
.image {
    float: right;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 8px;
}
  
</style>
