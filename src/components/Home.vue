<template>
   <div id="flexContainer"> 
      <div id="linksContainer">
         <ul>
            <li>
               <router-link to="/isref">Is Row Echelon</router-link> 
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
  name: 'Home',
}


</script>

<style scoped>
#flexContainer {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   background-color: #fff;
}

#linksContainer {
   display: flex;
   justify-content: center;
   align-items: flex-start;

   width: 25%;
   max-width: 50%;
   height: 70vh;
   padding: 20px;

   background-color: #ebebef;
}
</style>

