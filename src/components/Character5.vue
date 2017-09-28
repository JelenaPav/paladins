<template>
   <div id="character5" class="character container-fluid">
        
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
                                    Piety




                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                 
                                        </h3>
                                    </div>
                                </div>
                                <div class="row paragraphs scroll-pane">
                        <p>Piety is an unidentified alien whose past is murky and mysterious. She had spent most of her life as a thief and a thug – sometimes, she even carried out assassinations. Beside her incredible skills with the Lightsword, she is a masterful rogue who counterfeited countless Hegemony credits and ruined many standup businessmen. She is a compulsive gambler though, and she spent an immense amount of credits playing Moker and similar games. Her nickname, Piety, comes from people often joking about it being money. She is a faithful of the gods of Hegemony credits, they say.
</p>
                         <p>It is widely known that her archenemy is Ring finger Leon, a man of her trade, but with much less self-interest. He keeps ruining her business wherever he can – and she does the same. Nobody remembers who started the war between the two smugglers anymore, but their gangs often clash in various underworlds in the cities across the galaxy. While Leon’s troupe tries to avoid civilian casualties, her troops destroy everything in their path. That’s why they are feared and somewhere even despised, but they pulled a win over Leon’s men more then they count their losses.
</p>
                        <p>When Piety got the news of the Idara crystal, she immediately wanted it for herself. However, one of Leon’s spies was infiltrated in her organization, and informed him of the movement of Piety’s troops. Leon instantly followed her to the distant part of the galaxy where the Gdarri live, and she vowed to finally lure and destroy him for good. However, Leon is far from the only threat lurking in that faraway system…
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
         Character1:require('./assets/images/char_05.png')
      
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