<template>
    
<div class="footer">
  <div class="content">
      <div class="footer-content">
      <div class="links">
      <ul class="list-links">
         <p class="subtitle is-6" style="color: #fff; font-weight:600;">Links </p>
         <router-link to="/about"><li>About Us</li></router-link>
         <router-link to="/contact"><li>Contacts</li></router-link>
         <router-link to="/services"><li>Services</li></router-link>
      </ul>
     </div> 

     <div class="connect-with-us">
        <ul class="list-links">
           <p class="subtitle is-6" style="color: #fff; font-weight:600;">Connect with us</p>
           <li> Facebook</li>
           <li> Twitter</li>
           <li> Instagram</li>
        </ul>
     </div>
    </div>
  
      <div class="seperator"></div>
      <p class="is-small"> &copy Tejiri Production 2019</p>
  </div>
</div>

</template>

<style scoped>

.footer {
position: absolute;
width: 100%;
height: 240px;
background:  #333333;
color: #fff;
padding-top: 1.4rem;
   }

#main {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
}

.connect-with-us , .links{
   margin-right: 50px;
}

.seperator{
   display: flex;
   position: relative;
   max-width: 1980px;
   width: 100vw;
   left: -25px;
   border-bottom: 1px solid rgba(255, 255, 255, 0.371)
}

.footer-content{
   display: flex;
   flex-direction: row;
   height: 170px;
   width: 80%;
}

.list-links {
   list-style: none;
   flex-direction: column;
   justify-content: flex-start;
   font-family: Arial, sans-serif;
   font-size: 17px;
}

.list-links a {
   color: #fff;
}

.list-links a:hover {
   color: #ff3b00;
}

.is-small {
   display: flex;
   font-size: 12px;
   justify-content: flex-end;
   margin: 8px;
}

</style>
