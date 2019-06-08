<template>
  <div class="about">
      <div class="imageContainer" >
        <img src="https://res.cloudinary.com/drsayrtmp/image/upload/c_crop,h_3796/v1559948929/tejiri/backlit-dark-evening-1136575.jpg" alt="">   
      </div>

  <article class="media column is-centered is-three-quarters-mobile is-two-thirds-tablet is-8-desktop is-8-widescreen is-8-fullhd">
      <div class="about-us">
           <h1 class="title is-2 is-primary" >About Us</h1>
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Fusce pellentesque lorem ac nibh blandit, non volutpat urna interdum.
                Sed et congue magna, lobortis dapibus erat. Proin sed ex quis metus gravida volutpat. 
                Nam blandit turpis varius, suscipit mauris quis, gravida nibh. 
                In hac habitasse platea dictumst. Etiam sed egestas urna. Curabitur lacus nulla, 
                laoreet id iaculis vel, porttitor et justo. Proin volutpat vulputate est tincidunt maximus. 
                Cras id consectetur dolor, non volutpat purus. In mollis lorem neque, at dapibus mi fermentum in.
                 Aenean mi mauris, efficitur vel odio sit amet, aliquet maximus velit. Ut accumsan quam et augue convallis vehicula.
          </p>
    </div>
<div class="team">
<h1 class="title is-2 is-primary">Team</h1>     
<!-- First profile -->
<article class="media left-align-media">
   <div class="media-left img">
      <img class="profile-image" src="https://raw.githubusercontent.com/alerlo/Tejiri/master/src/img/AfricanFamily.jpg"/>
   </div>
  <div class="media-content">
    <div class="content">
                <h3 style="subtitle">Sammy Watima</h3>
                  <div class="detail">
                     <p>Date Of Birth : 22 August 1990 </p>
                  
                  
                     <p>Address : Nairobi,Kenya</p>
                  </div>
         
    
           <p style="margin: 1%">
                Our passion and dedication for excellence ensures that you receive the highest level of service before and after a contracted event. We are known for keeping time and always finding pleasure in going the extra mile to surpass our clients expectations. 

                We find joy in participating in your event and helping you document captivating moments that you will look back in future and appreciate your journey. Our work has allowed us to work with event planners, PR and marketing professionals, Associations, government entities, companies and organizations
                
                We are looking forward to serving you and connecting your mission with the rest of the world through pictures.
           </p>
    </div>
  </div>
</article>

</div>

         <div class="photos">
           <h1 class="title is-2 is-primary">Photos</h1>
           <P>WHAT I MOST LIKE ABOUT PHOTOGRAPHY IS THE MOMENT THAT YOU CANT ANTICIPATE YOU HAVE TO BE CONSTANTLY WATCHING FOR IT,READY TO WELCOME THE UNEXPECTED</P>
           <P>Sammy Wachira</P>
         </div>

  
         <div class="videos">
           <h1 class="title is-2 is-primary">Videos</h1>
           <P>Nobody will notice that film-making is not about the tiny details but rather the big picture</P>
         </div>
  
  </article>
  </div>
</template>

  
<script>
  export default {
    name: "about",
    components: {
  
    }
  }
</script>


<style scoped>
@import "../assets/scss/bulma.scss";

.abous, .photos, .team, .videos {
  margin-top: 3.4rem;
}

p{
   color: #333333;
}

.imageContainer {    
    width: 100vw;
    margin-bottom: 4%;
    left: 0;
    right: 0;

  }

.media{
  position: relative;
  left: 15%;
  border: none;
}
.left-align-media{
  left: 0;
}

.profile-image {
  width: 500px;
  height: auto;
  margin-right: 40px;
  border-radius: 15px;
}

 /* ----------- Resposive ----------- */
  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    .imageContainer {    
    margin-bottom: 9%;
 }
  }

 

/* Portrait and Landscape */
@media screen 
  and (min-device-width: 601px) 
  and (max-device-width: 1000px) {

  .imageContainer {
    margin-bottom: 0;
 }

}

</style>
