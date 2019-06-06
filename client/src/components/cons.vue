<template>
<div>
   <div  id="is-center">
      <div class="image" v-for="(image, index) in images" v-bind:item="image" v-bind:index="index" v-bind:key="image._id">
         <img class="image" v-bind:src="image.ImgUrl">
      
      <article class="media">
         <div class="media-content">
            <div class="content">
             <h1 class="title is-1"> Hello! </h1>
               <p class="is-medium">This page is still under construction until <strong> Sat 8th June</strong> for more informtion 
               contact us here <a href="tel:+254729245657" class="link is-primary">Stephanie</a>, <a href="tel:+254" class="link"> Joshua</a> or <a href="tel:+254" class="link">Evans</a> .
               </p>
            </div>
         </div>
      </article>
      </div>
</div>


</div>
</template>

 <script>

/*import GetService from '../GetService';
   export default {
      name: 'cons',
      data(){
         return {
            images: [],
            ImgUrl: ''
         }
      }, 
      async created() {
         try {
            this.images = await GetService.getImages();
         }catch(err) {
            this.error = err.message;
         }
      }
   }*/
</script> 

<style scoped>
   #is-center, .content {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      margin: 30px;
   }
  

   .image {
      margin-top: 40px;
      width: 600px;
      height: auto;
   }

   article {
      position: relative;
      margin-top: 6%;
   }
.link {
   text-decoration: none;
   color: black
}


</style>