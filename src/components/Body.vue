<template>
  <div >
   
   <appHome></appHome>
    <appAbout></appAbout>
    <appFeatures></appFeatures>
    <appMedia></appMedia>
    <appDownload></appDownload>
    <appContact></appContact>
    

   
  </div>
</template>

<script>
 

    import Home from './Home.vue';
    import About from './About.vue';
    import Features from './Features.vue';
    import Media from './Media.vue';
    import Download from './Download.vue';
    import Contact from './Contact.vue';
    
    
    
    

export default {

  data () {
    return {

    }
  },
    components: {
          

            appHome: Home,
            appAbout: About,
            appFeatures:Features,
            appMedia:Media,
            appDownload:Download,
            appContact:Contact


            }
}
</script>

<style  scoped>

</style>
