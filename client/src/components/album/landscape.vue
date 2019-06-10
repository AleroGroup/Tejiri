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
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601709/tejiri/landscape/affair-anniversary-asad-1024968.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601707/tejiri/landscape/cape-town-dawn-grass-1631066.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601694/tejiri/landscape/africa-animal-animals-417142.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601690/tejiri/landscape/background-calm-clouds-747964.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601688/tejiri/landscape/calm-waters-clouds-dawn-1396740.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601688/tejiri/landscape/cape-town-daylight-desert-963713.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601687/tejiri/landscape/animals-drinking-mammal-259547.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601684/tejiri/landscape/clouds-daylight-environment-811164.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601688/tejiri/landscape/cape-town-daylight-desert-963713.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559593137/tejiri/landscape/adventure-calm-clouds-414171.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057108/tejiri/landscape/cold-desktop-backgrounds-free-wallpaper-2324562.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057107/tejiri/landscape/bay-beach-clouds-1146445.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057107/tejiri/landscape/cascade-cold-environment-1687193.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057105/tejiri/landscape/clouds-cloudy-conifers-247478.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057104/tejiri/landscape/bloom-blossom-close-up-773256.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057103/tejiri/landscape/beach-dawn-evening-1144176.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057102/tejiri/landscape/beautiful-environment-green-2275221.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057102/tejiri/landscape/beautiful-daylight-environment-709552.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057102/tejiri/landscape/architecture-bar-buildings-2303337.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057101/tejiri/landscape/beautiful-calm-clouds-206359.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/beach-bench-boardwalk-462024.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057100/tejiri/landscape/astronomy-beautiful-clouds-355465.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057099/tejiri/landscape/africa-animals-elephants-52717.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057097/tejiri/landscape/africa-dawn-electricity-1199682.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057097/tejiri/landscape/animal-photography-daylight-elephant-247431.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057097/tejiri/landscape/animal-carnivore-daylight-667204.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057097/tejiri/landscape/alps-calm-waters-clouds-158385.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057095/tejiri/landscape/africa-animals-conservation-247376.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057095/tejiri/landscape/africa-animals-carnivore-41178.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559057095/tejiri/landscape/aerial-shot-bird-s-eye-view-buildings-2225146.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126873/tejiri/landscape/beach-clouds-daytime-994605.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126872/tejiri/landscape/aquatic-deep-diver-903974.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126869/tejiri/landscape/beach-dawn-iphone-wallpaper-189349.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126858/tejiri/landscape/animals-corals-deep-68767.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126855/tejiri/landscape/animal-aquatic-corals-847393.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601707/tejiri/landscape/cape-town-dawn-grass-1631066.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1559601688/tejiri/landscape/calm-waters-clouds-dawn-1396740.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126923/tejiri/landscape/animal-aquarium-aquatic-1001784.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126899/tejiri/landscape/blue-ocean-h2o-nature-1802268.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126922/tejiri/landscape/beautiful-cliff-clouds-1659438.jpg.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126884/tejiri/landscape/clouds-country-daylight-371633.jpg',
                'https://res.cloudinary.com/drsayrtmp/image/upload/v1560126883/tejiri/landscape/cold-conifer-dawn-917494.jpg',
    
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
