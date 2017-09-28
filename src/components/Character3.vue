<template>
   <div id="character3" class="character container-fluid">
        
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
                                      Mourgh


                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                     the Tyrant
                                        </h3>
                                    </div>
                                </div>
                                <div class="row paragraphs scroll-pane">
                        
                        <p>Nobody knows where this alien come from, or can say anything about his past in general. His age is also unknown, but he seems old; some believe he is ancient. The age cannot stop the Tyrant, it seems, as he is said to be even more ruthless than he was decades back. 
</p>            
                        <p>Mourgh has led a huge army of space pirates, who are equipped exceptionally well from raiding and killing many Hegemony forces. He has been raiding planets, moons and space stations alike for decades and none was able to bring him to justice. That is why he is called the Tyrant, and his reign seems never-ending. He retreats only when a ship of a star destroyer class appears, but has met even such foes in battle. Wielding a sword that can cut through anything, he is said to have taken down a huge battleship by himself, some say he used some kind of sorcery, others that he is simply that skilled and powerful; but the fact stays – he is still roaming the galaxy and inflicting strife wherever he passes.
</p>
                         <p>After so many years and families he left in tears, Mourgh earned many enemies beside the Hegemony itself. And so, many of these vengeful souls banded together, and decided to bring ruin to their hated enemy. Without saying anything to the Hegemony, they prepared an ambush for the Tyrant, and planned to bring an end to his dark reign. The space battle was fierce, as Mourgh truly did not expect for such a small force to demolish so many of his ships, but in the end he prevailed, again, laughing at the scattered forces of vengeance.
</p>
                         <p>Though victorious, the Tyrant suffered severe losses, and his fleet was quite small after the fight. So, after learning about Idara crystal and its capabilities, he traveled there to harvest it and build his pirate empire anew… but this time he has met his match. Several other powerful organizations and individuals are already fighting for dominion, and he needs to defeat them all if he is to reign as a tyrant again.
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
         Character1:require('./assets/images/char_03.png')
       
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