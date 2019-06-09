<template>
 <div class="work">

<div class="menu">
    <div class="menu-item item-1 active">
        <h2 class="subtitles">landscape</h2>
    </div>

     <div class="menu-item item-2">
        <h2 class="subtitles">Weddings</h2>
    </div>

     <div class="menu-item item-3">
        <h2 class="subtitles">Functions</h2>
    </div>

     <div class="menu-item item-4">
        <h2 class="subtitles">Other</h2>
    </div>
</div>

 </div>
</template>

<style scoped>
.menu{
    display:flex;
    flex-direction: row;
    position: relative;
    top:80px;
    right: 0;
    left: 16%;
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
    opacity: 0.4;
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

h2 {
    
    font-size: 20px;
    font-weight: 700; 
}
</style>
