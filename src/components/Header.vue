<template>
    <div class="header container-fluid">
    <nav class="navbar navbar-default">
  <div class="container-fluid">
<div class="row">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header col-xs-12 col-sm-2 col-md-3 col-lg-2 text-center">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div class="logo logo-img">
       <router-link to="/" exact ><a><img class="img-responsive" :src="logoImage" alt="Paladins of the galaxy"></a></router-link>
       </div>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<div class="menu col-xs-12 col-sm-9 col-md-8 col-lg-8">
      <ul class="nav navbar-nav main_header_menu">
        <router-link :to="{ path: '/'}" exact tag="li" active-class="active" class="nav-item" ><a class="navigation-menu">Home</a></router-link>
        <router-link :to="{ name:'body'}" @click.native="about" exact tag="li" active-class="active" class="nav-item"><a class="navigation-menu">About</a></router-link>
                            <router-link  :to="{ name:'body'}"  @click.native="features"  exact tag="li" active-class="active" class="nav-item"><a class="navigation-menu">Features</a></router-link>

                            <router-link  :to="{ name:'body'}" @click.native="media" exact tag="li" active-class="active" class="nav-item"><a class="navigation-menu">Media</a></router-link>
                            <router-link  :to="{ name:'body'}"  @click.native="download" exact tag="li" active-class="active" class="nav-item"><a class="navigation-menu">Download</a></router-link>
                            <router-link  :to="{ name:'body'}" @click.native="contact" exact tag="li" active-class="active" class="nav-item"><a class="navigation-menu">Contact</a></router-link>
      </ul>
 </div> 
<div class="socials col-xs-12 col-sm-1 col-md-1 col-lg-2" >
                <a target="_blank" style="display:none"><img :src="twitter" alt="twitter"></a>
                <!-- <a target="_blank" href="https://www.facebook.com/NS-Web-Development-635959649762529/?fref=ts"><img :src="facebook" alt="facebook"></a> -->
                <a class="socials-you" target="_blank"  href="https://www.youtube.com/channel/UCIdOs7nEtpaK7sXNniqOTAw" ><img :src="youtube" alt="youtube"></a>
            </div>    
      
    </div><!-- /.navbar-collapse -->
</div>
  </div><!-- /.container-fluid -->
</nav>
        <!--<div class="row">
            <div class="logo  col-xs-4 text-center" >
    
                <router-link to="/" exact ><a><img :src="logoImage" alt="Paladins of the galaxy"></a></router-link>
            </div>

        
            <div class="menu col-xs-8 col-sm-8 col-md-7 col-lg-5   col-xs-offset-2 col-lg-offset-2" >
                


<nav class="navbar navbar-toggleable-md ">
                    <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                       
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav ">

                            <router-link :to="{ path: '/'}" exact tag="li" active-class="active" class="nav-item" ><a>Home</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="about" exact tag="li" active-class="active" class="nav-item"><a>About</a></router-link>
                            <router-link  :to="{ name:'body'}"  @click.native="features"  exact tag="li" active-class="active" class="nav-item"><a>Features</a></router-link>

                            <router-link  :to="{ name:'body'}" @click.native="media" exact tag="li" active-class="active" class="nav-item"><a>Media</a></router-link>
                            <router-link  :to="{ name:'body'}"  @click.native="download" exact tag="li" active-class="active" class="nav-item"><a>Download</a></router-link>
                            <router-link  :to="{ name:'body'}" @click.native="contact" exact tag="li" active-class="active" class="nav-item"><a>Contact</a></router-link>




                        </ul>
                    </div>
                </nav>
            </div>-->

           
           <!-- <div class="socials col-xs-2" >
                <a target="_blank" style="display:none"><img :src="twitter" alt="twitter"></a>
                <!-- <a target="_blank" href="https://www.facebook.com/NS-Web-Development-635959649762529/?fref=ts"><img :src="facebook" alt="facebook"></a> -->
               <!-- <a target="_blank"  href="https://www.youtube.com/channel/UCIdOs7nEtpaK7sXNniqOTAw" ><img :src="youtube" alt="youtube"></a>
            </div>-->
            
       </div>
        
    <!--</div>-->
    
</template>



<script>
import {bus} from '../main';



export default {
 data () {
    return {
    logoImage:require('./assets/images/PaladinsOfTheGalaxy.png'),
    twitter:require('./assets/images/twitter.png'),
    facebook:require('./assets/images/facebook.png'),
    youtube:require('./assets/images/youtube.png')
 
    }
  },
            


methods:{
media:function(){
 window.location.href ="#media";

},
about:function(){
 window.location.href ="#about";

},
features:function(){
 window.location.href ="#features";

},
download:function(){
 window.location.href ="#download";

},
contact:function(){
 window.location.href ="#contact";

}




}


      


  


}
  
</script>
<style scoped>




</style>
