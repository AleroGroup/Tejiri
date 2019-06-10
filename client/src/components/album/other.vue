<template>
<div class="container-images">
     <div class="notification is-danger" v-if="error"><button class="delete"></button> {{ error }}</div>

     <gallery :images="images" :index="index" @close="index = null"/>
     <div
    class="image"
    v-for="image, imageIndex in images"
    @click="index = imageIndex"
    :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '400px' }"></div>

</div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
     name: 'album',
    data() {
        return {
            images: [
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601741/tejiri/balloons-birthday-celebrate-1071882.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601736/tejiri/boat-couple-enjoyment-2369760.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601728/tejiri/beautiful-beauty-close-up-1804452.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601728/tejiri/audience-crowd-holi-2056600.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601725/tejiri/car-close-up-device-2046807.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601724/tejiri/backlit-couple-girl-965386.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601723/tejiri/blur-character-close-up-164854.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601720/tejiri/blur-blurred-background-close-up-1660662.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601720/tejiri/blur-blurred-background-close-up-1660662.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601717/tejiri/abstract-blur-blurry-2237190.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601715/tejiri/audio-mixer-dj-evening-462503.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057105/tejiri/can-carry-children-1125850.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/attachment-baby-boy-1027931.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057093/tejiri/adult-beach-beautiful-936018.jpg',
            ],
            index: '',
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
