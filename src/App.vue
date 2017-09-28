<template>
  <div id="app">

    <appHeader></appHeader>

   <!-- <hr>
   -->

    <router-view></router-view>



     <appFooter></appFooter>



  
  </div>
</template>

<script>
    import {bus} from './main';
    import Header from './components/Header.vue';
    import Character1 from './components/Character1.vue';
    import Character2 from './components/Character2.vue';

    import Footer from './components/Footer.vue';
    
    
    

export default {
  name: 'app',
  data () {
    return {

    }
  },
    components: {
            appHeader: Header,
            appCharacter1:Character1,
            appCharacter2:Character2,

  
            appFooter:Footer

            }

 
    





}
</script>





<style lang="scss" scoped>
hr{
//margin-top: 0;
  //  margin-bottom: 0;
  //  border: 0;
   // border-top: 1px solid rgb(50, 61, 63);


  //  border: 0;
 //   width: 100%;
 //   background-color: #1a1b1e;
//margin: 0;
 //   height: 1px;
}
</style>
