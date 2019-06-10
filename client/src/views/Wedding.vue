<template>
 <div class="work">

<div class="menu">
    <div class="menu-item  item-1" >
        <router-link to="/work"><button class="subtitles">landscape</button></router-link> 
    </div>

     <div class="menu-item active item-2" >
        <router-link to="/work/wedding"><button class="subtitles" >Weddings</button></router-link> 
    </div>

     <div class="menu-item item-4">
       <router-link to="/work/other"><button class="subtitles">Other</button></router-link> 
    </div>
</div>


    <div class="album">
      <Wedding />
    </div>

    <div class="_footer"> 
        <Footer />
    </div>  

 </div>
</template>

<script>
import Wedding from '../components/album/wedding';
import Footer from '../components/footer';

export default {
    name: 'wedding',
    components:{
        Wedding,
        Footer
    }
}
</script>


<style scoped>

.menu{
    display:flex;
    flex-direction: row;
    position: relative;
    top:80px;
    right: 0;
    left: 13%;
    max-width: 1080px;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.menu-item {
    display: flex;
    height: 130px;
    width: 130px;
    margin: 15px;
    position: relative;
    border-radius: 140px;
    justify-content: center;
    align-content: center;
    align-items: center;
    opacity: 0.5;
    color: rgb(0, 0, 0)
}

.active{
    opacity: 0.9;  
    color: white;
}

.item-1 {
        background-image: url('https://res.cloudinary.com/drsayrtmp/image/upload/c_fill,h_171/v1559057106/tejiri/landscape/calm-dawn-landscape-1105389.jpg');
      
    }
.item-2 {
        background-image: url('https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_204/v1559601284/tejiri/wedding/bouquet-bridal-bridal-bouquet-1730877.jpg'); 
    }
.item-3 {
        background-image: url('https://res.cloudinary.com/drsayrtmp/image/upload/c_scale,h_198/v1559601715/tejiri/audio-mixer-dj-evening-462503.jpg');
    }
.item-4 {
        background-image: url('https://res.cloudinary.com/drsayrtmp/image/upload/c_fill,h_171/v1559057106/tejiri/landscape/calm-dawn-landscape-1105389.jpg');
    }


button {
    background: none;
    height: 90px;
    width: 90px;
    border-radius: 80px;
    border: none;
    font-size: 16px;
    font-weight: 700; 

}
._footer{
  margin-top: 230px;  
}

.album {
  display: flex;
  position: relative;
  top: 180px;
  
}

</style>
