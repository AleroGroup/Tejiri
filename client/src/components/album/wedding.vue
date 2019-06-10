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
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601327/tejiri/wedding/accessories-africa-bracelets-1667850.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601323/tejiri/wedding/beautiful-bouquet-bridal-313707.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601320/tejiri/wedding/attractive-bangladesh-beautiful-2106463.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601316/tejiri/wedding/art-blurred-background-bracelets-1444442.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601315/tejiri/wedding/bride-ceremony-chairs-794254.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601314/tejiri/wedding/close-up-formal-groom-1566421.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601313/tejiri/wedding/cake-celebration-delicious-1727415.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601297/tejiri/wedding/bridal-bride-celebration-1244700.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601265/tejiri/wedding/aisle-beach-celebration-169198.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601286/tejiri/wedding/bride-bride-and-groom-couple-1532657.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601260/tejiri/wedding/ceremonial-chairs-curtain-1804684.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601266/tejiri/wedding/bow-celebration-ceremony-1484220.jpg'
    
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
