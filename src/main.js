import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from '../routes';
import Carousel3d from 'vue-carousel-3d';
var SocialSharing = require('vue-social-sharing');
import VModal from 'vue-js-modal';
import LinkPopover from 'vue-link-popover';
import vueScrollBehavior from 'vue-scroll-behavior';



Vue.component('link-popover', LinkPopover);
Vue.use(LinkPopover, { theme: 'theme-popover' });
 
Vue.use(VModal);

Vue.use(SocialSharing);

Vue.use(VueRouter);
Vue.use(Carousel3d);

import ShareModal from './components/ShareModal.vue';
Vue.component('share-modal', ShareModal);

export const bus=new Vue();

//Vue.filter('snippet',function(value){
//    return value.slice(0,1000) + '...';
//});


const router = new VueRouter({
  // routes:Routes,
   routes,
  mode:'history'
// scrollBehavior(to, from, savedPosition) {
//    
//       
////        if(savedPosition){
////             console.log(savedPosition);
////           //return savedPosition;
////            return {x:savedPosition.x, y:savedPosition.y - 1};
////        }
//     if (to.path === from.path) {
//       
//            if (to.hash){
//               
//              console.log(to.hash);
//             console.log(to);
//         return{
////             selector: to.hash
//       
//         };   
//          
//        }else{
//     
//        return{x:0,y:0};
//    }
//             
//        }
//    
//},

});

Vue.use(vueScrollBehavior, { router: router });





new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
