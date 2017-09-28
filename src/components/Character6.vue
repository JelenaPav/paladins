<template>
   <div id="character6" class="character container-fluid">
        
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
                                  Leon

                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                  Ring finger 
                                        </h3>
                                    </div>
                                </div> 
                                <div class="row paragraphs scroll-pane">
                        <p>The infamous smuggler Leon is known across the galaxy better as the Ring finger, as he is missing both his left and right ring fingers and has mechanical ones. People often say that he is a space Robin Hood, as most of his raids are directed towards rich, corrupted businessmen and Hegemony goods. As such, he is on the opposite side of the law and is hunted constantly – which he doesn’t seem to mind very much. Friends describe him as jolly, enemies as a clown, but no matter what everyone thinks, one thing is sure: Leon isn’t bent on being rich, but instead uses his funds to make the poor a little bit less poor. He especially likes to share the credits and the stolen goods with parentless children.
</p>
                         <p>Leon’s archenemy is Piety – a smuggler who destroys his business with every chance she gets and is trying to overtake his routes and bases. She is fierce and merciless, and the nature of their conflict reaches not only business and interests, but morals as well. She hates Leon with passion, calling him soft and weak, but he often gets an upper hand on her which makes her even more keen on trying to kill him. She sent assassins after him many a time, and he laughed at her failures, asking every time how many credits did she give to the late assassins.</p>
                        <p>Both of them got the news of the existence of Idara in a remote system of the galaxy, and they raced to reach there. Leon with a goal to take the crystal for the less fortunate and his organization, and to try to save what was left of the Gdarri, an alien race that is being eradicated for their possession of the fabled crystal. Piety, for her greed and want for power. However, Leon soon discovered that Piety is not the only enemy in the system: many other powerful organizations are fighting for the crystal, and he will have to prove to them that he is more capable then them all – and that is a difficult task indeed.
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
         Character1:require('./assets/images/char_02.png')
        
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