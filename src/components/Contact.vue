<template>
   <div id="contact" class="contact container-fluid">
      <div class="contactBox">
         <div class="contact_header">
            <h1><img :src="Slashes" alt="Slashes">CONTACT US</h1>
         </div>
         <div class="row">
            <div class="col-xs-12">
                <form>
                   <div class="row">
                      <div class="col-xs-12 ">
                         <div class="form-group">
                            <label for="email">E-mail</label>
                            <input
                               type="text"
                               id="email"
                               class="form-control"
                               v-model="email">
                         </div>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-xs-12 col-md-6">
                         <div class="form-group">
                            <label for="name">Name</label>
                            <input
                               type="text"
                               id="name"
                               class="form-control"
                               v-model="name">
                         </div>
                      </div>
                      <div class="col-xs-12 col-md-6">
                         <div class="form-group">
                            <label for="subject">Subject</label>
                            <input
                               type="text"
                               id="subject"
                               class="form-control"
                               v-model="subject">
                         </div>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-xs-12  form-group">
                         <label for="message">Message</label><br>
                         <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                         <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message">
                        </textarea>
                      </div>
                   </div>
                   <!--BUTTON THAT SHOWS WHEN IT IS CHECKED IF USER IS A ROBOT -->
                   <div class="btnRobot row">
                        <div v-if="btnRecaptcha">
                              <img :src="Slashes" alt="Slashes">
                              <button
                                 class="btn"
                                 @click.prevent="submitted">SEND
                              </button>
                         </div>
                        <div v-if="!btnRecaptcha" class="col-xs-12">
                           <vue-recaptcha
                                ref="recaptcha"
                                @verify="onVerify"
                                @expired="onExpired"
                                :sitekey="sitekey">
                              </vue-recaptcha>

                              <div class="g-recaptcha" data-sitekey="6LcNqi8UAAAAAHJISuktN_1y71J8eWxlSFFFm7NX"></div>
                        </div>
                   </div>
                </form>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
    import VueRecaptcha from 'vue-recaptcha';
    
   export default {
    data () {
       return {
           Slashes:require('./assets/images/Slashes.png'),
           email:'',
           message:'',
           name:'',
           subject:'',
           isSubmitted:false,

           //PROMENITI KLJUC!!!
           sitekey: '6LcNqi8UAAAAAHJISuktN_1y71J8eWxlSFFFm7NX',
           btnRecaptcha:false
            
       }
     },
        methods:{
            submitted(){
                this.isSubmitted=true;
},
            onSubmit: function () {
                this.$refs.invisibleRecaptcha.execute()
              },
            onVerify: function (response) {
                console.log('Verify: ' + response);
                this.btnRecaptcha=true;
            },
            onExpired: function () {
                console.log('Expired')
            },
            resetRecaptcha () {
                this.$refs.recaptcha.reset() // Direct call reset method
            }
},
        components: { 
            'vue-recaptcha': VueRecaptcha

}

   
   
   }
     
</script>
<style scoped>
</style>