<template>
   <div id="character4" class="character container-fluid">
        
          <div class="characterBox">
               <div class="row">
                            <div class="leftCol col-xs-6">
                                <div class="row">
                                    <div class="col-xs-1">
                                        <h1>   
                                            <img :src="Slashes" alt="Slashes">
                                        </h1>
                                    </div>
                                    <div class="headline col-xs-10 col-xs-offset-1">
                                        <h1>   
                                     Reiner



                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                     the Believer
                                        </h3>
                                    </div>
                                </div>
                                <div class="row paragraphs scroll-pane">
                        
                        <p>Reiner came from a middle-class family and was fascinated by the military ever since he was a child. He led an ordinary life and went to military school, achieving highest grades. That was when he was discovered by Vice Admiral Amana, who was visiting the base where his higher ups showed her his grades and combat ability. She instantly took him under her wing and gave him a rank of a Lieutenant shortly thereafter.
</p>
                        <p>Reiner served under her for seven years, and when she became an Admiral, he was given the rank of a Commander in the Hegemony forces and got his own ship and several other, smaller ones under his command. He remained in good relations with his former leader and cooperated with her on several missions in the years to come. However, nothing in life is easy…
</p>
                           <p>When he was 32, Reiner led an assault on a small moon where a notorious smuggling crew fought back instead of surrendering. He won the battle, but was in turn ambushed by none other than the famed Dark Admiral Kyros, who completely decimated his fleet and escaped before the Hegemony arrived with the reinforcements. Reiner survived, but he was devastated by the loss of many of his men. It took a year for his emotional stability to return to the way it was before, but Reiner did not falter. His resolve for justice was even greater now.</p>
                         <p>Jokingly called the Believer because he is considered naïve in his belief in the goodness of humanity, Reiner has a will of iron. He followed Kyros into a system where an alien race of Gdarri lived and mined the precious crystal of Idara, but to his surprise, the Dark Admiral is not the only one who wrecked havoc there: several organizations were waging actual wars for the crystal. Reiner plans to save as many lives as possible and bring Kyros and other raiders to justice.
</p>
                        
                        </div>
                    </div>
                    <div class="rightCol col-xs-6">
                        <div class="row">
                            <div class="col-xs-3 col-xs-offset-2">
                                <h1>
                                     <img class="characterImg" :src="Character1" alt="Character1">
                                </h1>
                            </div>    
                           
                        </div>
                        
                       
                       
                    </div>
                    </div>
                </div>


            <div class="row">  
                <div class="menu col-xs-6 col-xs-offset-4">
                         <ul class="nav">
                              <router-link to="/character1" exact tag="li" active-class="active" class="nav-item"><a>Leiliana</a></router-link>

                             <router-link to="/character2" exact tag="li" active-class="active" class="nav-item"><a>Kyros</a></router-link>
                             <router-link to="/character3" exact tag="li" active-class="active" class="nav-item"><a>Mourgh</a></router-link>
                             <router-link to="/character4" exact tag="li" active-class="active" class="nav-item"><a>Reiner</a></router-link>
                             <router-link to="/character5" exact tag="li" active-class="active" class="nav-item"><a>Piety</a></router-link>
                             <router-link to="/character6" exact tag="li" active-class="active" class="nav-item"><a>Leon</a></router-link>
                         </ul>
                     </div>
            </div>
    </div>
    
</template>



<script>




export default {
 data () {
    return {
         Slashes:require('./assets/images/Slashes.png'),
         Character1:require('./assets/images/char_04.png')
        
    }
  },
components:{

},
methods:{
        jScrollPaneFn:function(){
         $('.scroll-pane').jScrollPane();

}},
mounted(){

    this.jScrollPaneFn()
}



}
  
</script>
<style scoped>




</style>