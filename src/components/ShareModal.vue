<template>
    <modal class="shareModal" name="ShareModal"  :pivotX="0.54" :pivotY="0.2">
        <div class="modal-content registration_modal container">
            <button type="button" class="close" @click="$modal.hide('ShareModal')">
                <span>×</span>
            </button>
            <p class="title">CHOOSE ONE OF THE MANY WAYS TO SHARE:</p>
            <div class="row">

                <social-sharing url="https://vuejs.org/" inline-template>
                    <div>
                   <ul class="nav nav-stacked">
                      <li class="nav-item"><network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Facebook
                      </network></li>
                     <li class="nav-item"> <network network="googleplus">
                        <i class="fa fa-fw fa-google-plus"></i> Google +
                      </network></li>
                   <li class="nav-item">   <network network="linkedin">
                        <i class="fa fa-fw fa-linkedin"></i> LinkedIn
                      </network></li>
                    <li class="nav-item">  <network network="pinterest">
                        <i class="fa fa-fw fa-pinterest"></i> Pinterest
                      </network></li>
                   <li class="nav-item">   <network network="reddit">
                        <i class="fa fa-fw fa-reddit"></i> Reddit
                      </network></li>
                     <li class="nav-item"> <network network="twitter">
                        <i class="fa fa-fw fa-twitter"></i> Twitter
                      </network></li>
                    <li class="nav-item">  <network network="vk">
                        <i class="fa fa-vk"></i> VKontakte
                      </network></li>
                   <!-- <li class="nav-item">  <network network="weibo">
                        <i class="fa fa-weibo"></i> Weibo
                      </network></li>-->
                   <li class="nav-item">   <network network="whatsapp">
                        <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
                      </network></li>
                  </ul>
                    </div>
</social-sharing>

                

                

              

              

               

            </div>
        </div>
    </modal>
</template>

<script>

export default {

name: 'share-modal',

 data () {
    return {
        
    }
  },

methods: {
  
}



}
  
</script>
<style scoped>




</style>