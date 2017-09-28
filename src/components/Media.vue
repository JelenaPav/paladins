<template>
    <div id="media" class="paladin_media container-fluid">
        <div class="mediaBox">
            <h1><img :src="Slashes" alt="Slashes">MEDIA</h1>
            <div class="mediaCarousel row">
                <div class="slider-for">
                    <!--POPOVER-->
                    <div class="slide"><img class="img-responsive" :src="Carousel0" alt="Carousel0">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Splash<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                    <div class="slide"><img class="img-responsive" :src="Carousel1" alt="Carousel1">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Weapon customization<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                    <div class="slide"><img class="img-responsive" :src="Carousel2" alt="Carousel2">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Character selection<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                    <div class="slide"><img class="img-responsive" :src="Carousel3" alt="Carousel3">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Terraform Station<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                    <div class="slide"><img class="img-responsive" :src="Carousel4" alt="Carousel4">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Rebuild Station<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                    <div class="slide"><img class="img-responsive" :src="Carousel5" alt="Carousel5">
                        <appPopover v-if="popover"></appPopover>
                        <div class="slide__caption">Spaceship<i class="fa fa-share-alt" aria-hidden="true" @click="popover=!popover"></i></div>
                    </div>
                </div>
                <!--MODAL
                    <share-modal></share-modal>-->
                <div class="slider-nav">
                    <div><img :src="Carousel0" alt="Carousel0"></div>
                    <div><img :src="Carousel1" alt="Carousel1"></div>
                    <div><img :src="Carousel2" alt="Carousel2"></div>
                    <div><img :src="Carousel3" alt="Carousel3"></div>
                    <div><img :src="Carousel4" alt="Carousel4"></div>
                    <div><img :src="Carousel5" alt="Carousel5"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Popover from './Popover.vue';

    export default {
        data() {
            return {
                Slashes: require('./assets/images/Slashes.png'),
                Carousel0: require('./assets/images/splash_Rogue_wars.png'),
                Carousel1: require('./assets/images/1.jpg'),
                Carousel2: require('./assets/images/2.jpg'),
                Carousel3: require('./assets/images/3.jpg'),
                Carousel4: require('./assets/images/4.jpg'),
                Carousel5: require('./assets/images/5.jpg'),

                popover: false
            }
        },
        components: {
            appPopover: Popover

        },
        methods: {
            slickFn: function () {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: true,
                    asNavFor: '.slider-nav'
                });

                $('.slider-nav').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    centerMode: true,
                    arrows: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true
                            
                          }
                        },
                        {
                          breakpoint: 800,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                          }
                        },
                        {
                          breakpoint: 450,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                      ]
                });

            }

        },
        mounted() {

            this.slickFn()
        }

    }

</script>
<style scoped>

</style>