<template>
    <div class="footer container-fluid">
        <div class="downloadBox">
            <!--<div class="row">
               <div class="leftCol col-xs-6">
                  <div class="row">
                     <div class="col-xs-3 col-xs-offset-1">
                        <h1>
                           NAVIGATION
                        </h1>
                     </div>
                     <div class=" col-xs-7 col-xs-offset-1">
                        <h1>
                           CONTACT INFO
                        </h1>
                     </div>
                  </div>
                  <div class="row">
                      &lt;!&ndash; <div class="col-xs-1">
                       </div>&ndash;&gt;

                     <div class="col-xs-3">
                        <div class="menu">
                           <ul class="nav nav-stacked">

                       <router-link :to="{ path: '/'}" @click.native="home" exact tag="li" active-class="active" class="nav-item" ><a>Home</a></router-link>
                       <router-link :to="{ name:'body'}" @click.native="about" exact tag="li" active-class="active" class="nav-item"><a>About</a></router-link>
                       <router-link  :to="{ name:'body'}"  @click.native="features"  exact tag="li" active-class="active" class="nav-item"><a>Features</a></router-link>

                       <router-link  :to="{ name:'body'}" @click.native="media" exact tag="li" active-class="active" class="nav-item"><a>Media</a></router-link>
                       <router-link  :to="{ name:'body'}"  @click.native="download" exact tag="li" active-class="active" class="nav-item"><a>Download</a></router-link>
                       <router-link  :to="{ name:'body'}" @click.native="contact" exact tag="li" active-class="active" class="nav-item"><a>Contact</a></router-link>

                           </ul>
                        </div>
                     </div>
                     <div class="col-xs-7 col-xs-offset-2">
                        <p>NS Web Development LLC.</p>
                        <br>
                        <p>Dr. Ribara 15</p>
                        <br>
                        <p>Novi Sad</p>
                        <br>
                        <p>21000</p>
                        <br>
                        <p>Serbia</p>
                        <div class="logo">
                             <img :src="NSWD" alt="NSWD">
                       </div>
                     </div>
                  </div>
                  <div class="lastRow leftRow row">
                     <div class="col-xs-4 col-xs-offset-1">
                        <a href="#">Privacy Policy</a>
                     </div>
                     <div class=" col-xs-6 ">
                        <a href="#">Terms of Use</a>
                     </div>
                  </div>
               </div>
               <div class="rightCol col-xs-6">
                  <div class="row">
                     <div class="col-xs-7">
                        <h1>
                           FEATURE PROJECTS
                        </h1>
                     </div>
                     <div class="col-xs-3 col-xs-offset-2">
                        <div class="socials">
                           <a target="_blank" style="display:none"><img :src="twitter" alt="twitter"></a>
                           &lt;!&ndash; <a target="_blank" href="https://www.facebook.com/NS-Web-Development-635959649762529/?fref=ts"><img :src="facebook" alt="facebook"></a> &ndash;&gt;
                           <a target="_blank"  href="https://www.youtube.com/channel/UCIdOs7nEtpaK7sXNniqOTAw" ><img :src="youtube" alt="youtube"></a>
                        </div>
                     </div>
                  </div>

                   <div class="footerCarousel row">
                   <carousel-3d :display="5"  :perspective="0" :space="100" :width="200" :height="200" :autoplay="true" :autoplay-timeout="3000">
                       <slide :index="0">
                            <figure>
                               <img :src="ic_mafia" alt="Game Farm">
                                   <figcaption>
                                               Mafia Dogs
                                  </figcaption>
                           </figure>

                       </slide>
                       <slide :index="1">
                          <figure>
                               <img :src="ic_wizard" alt="Game Farm">
                                   <figcaption>
                                              Wizard Arena

                                   </figcaption>
                           </figure>
                       </slide>
                       <slide :index="2">
                          <figure>
                               <img :src="ic_battle" alt="Game Farm">
                                   <figcaption>
                                              Batllemist

                                   </figcaption>
                           </figure>
                       </slide>
                        <slide :index="3">

                           <figure>
                               <img :src="ic_farm" alt="gameFemale">
                                   <figcaption>
                                               Farming Evolution

                                   </figcaption>
                           </figure>
                       </slide>
                        &lt;!&ndash; <slide :index="4">
                           <figure>
                               <img :src="gameFemale" alt="gameFemale">
                                   <figcaption>
                                               Game Title

                                   </figcaption>
                           </figure>
                       </slide> &ndash;&gt;
                   </carousel-3d>


                     </div>

                  <div class="lastRow rightRow row">

                     <div class="col-xs-10 col-xs-offset-4">
                        <p>All rights reserved &copy; 2017 NSWD</p>
                     </div>
                  </div>
               </div>
            </div>-->
            <div class="row">
                <div class="col-xs-12 col-md-3 text-center">
                    <h1>NAVIGATION</h1>
                    <div class="menu">
                        <ul class="nav nav-stacked text-center">
                            <router-link :to="{ path: '/'}" @click.native="home" exact tag="li" active-class="active"
                                         class="nav-item"><a>Home</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="about" exact tag="li" active-class="active"
                                         class="nav-item"><a>About</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="features" exact tag="li"
                                         active-class="active" class="nav-item"><a>Features</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="media" exact tag="li" active-class="active"
                                         class="nav-item"><a>Media</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="download" exact tag="li"
                                         active-class="active" class="nav-item"><a>Download</a></router-link>
                            <router-link :to="{ name:'body'}" @click.native="contact" exact tag="li"
                                         active-class="active" class="nav-item"><a>Contact</a></router-link>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4 text-center">
                    <h1>CONTACT INFO</h1>
                    <p>NS Web Development LLC.</p>
                    <br>
                    <p>Dr. Ribara 15</p>
                    <br>
                    <p>Novi Sad</p>
                    <br>
                    <p>21000</p>
                    <br>
                    <p>Serbia</p>
                    <div class="logo">
                        <img :src="NSWD" alt="NSWD">
                    </div>
                </div>
                <div class="col-xs-12 col-md-5 text-center">
                    <div class="row">
                        <div class="col-xs-8">
                            <h1>FEATURE PROJECTS</h1>
                        </div>
                        <div class="col-xs-4">
                            <div class="socials">
                                <!--<a target="_blank" style="display:none"><img :src="twitter" alt="twitter"></a>
                                <a target="_blank" href="https://www.facebook.com/NS-Web-Development-635959649762529/?fref=ts"><img :src="facebook" alt="facebook"></a>-->
                                <a target="_blank"  href="https://www.youtube.com/channel/UCIdOs7nEtpaK7sXNniqOTAw" ><img :src="youtube" alt="youtube"></a>
                            </div>
                        </div>
                    </div>
                    <div class="footerCarousel row">
                        <carousel-3d :display="5" :perspective="0" :space="100" :width="200" :height="200" :autoplay="true" :autoplay-timeout="3000">
                            <slide :index="0">
                                <figure>
                                    <img :src="ic_mafia" alt="Game Farm">
                                    <figcaption>Mafia Dogs</figcaption>
                                </figure>
                            </slide>
                            <slide :index="1">
                                <figure>
                                    <img :src="ic_wizard" alt="Game Farm">
                                    <figcaption>Wizard Arena</figcaption>
                                </figure>
                            </slide>
                            <slide :index="2">
                                <figure>
                                    <img :src="ic_battle" alt="Game Farm">
                                    <figcaption>Batllemist</figcaption>
                                </figure>
                            </slide>
                            <slide :index="3">
                                <figure>
                                    <img :src="ic_farm" alt="gameFemale">
                                    <figcaption>Farming Evolution</figcaption>
                                </figure>
                            </slide>
                            <slide :index="4">
                                <figure>
                                    <img :src="gameFemale" alt="gameFemale">
                                    <figcaption>Game Title</figcaption>
                                </figure>
                            </slide>
                        </carousel-3d>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>


<script>
    import {Carousel3d, Slide} from 'vue-carousel-3d';


    export default {

        data() {
            return {
                logoImage: require('./assets/images/PaladinsOfTheGalaxy.png'),
                twitter: require('./assets/images/twitter.png'),
                facebook: require('./assets/images/facebook.png'),
                youtube: require('./assets/images/youtube.png'),
                Slashes: require('./assets/images/Slashes.png'),
                // gameFarm:require('./assets/images/gameFarm.png'),
                gameFemale:require('./assets/images/gameFemale.png'),
                ic_mafia: require('./assets/images/ic_mafia.png'),
                ic_battle: require('./assets/images/ic_battlemist.png'),
                ic_farm: require('./assets/images/ic_farm.png'),
                ic_wizard: require('./assets/images/ic_wizard.png'),

                NSWD: require('./assets/images/NSWD.png'),

                slides: 4

            }
        },

        components: {
            'carousel-3d': Carousel3d,
            'slide': Slide
        },
        methods: {
            home: function () {
                window.location.href = "#home";

            },
            media: function () {
                window.location.href = "#media";

            },
            about: function () {
                window.location.href = "#about";

            },
            features: function () {
                window.location.href = "#features";

            },
            download: function () {
                window.location.href = "#download";

            },
            contact: function () {
                window.location.href = "#contact";

            }


        }


    }

</script>
<style scoped>


</style>
