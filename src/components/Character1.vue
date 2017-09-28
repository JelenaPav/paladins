  <template>
   <div id="character1" class="character container-fluid">
        
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
                                        Leiliana
                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                       the Advent of Light
                                        </h3>
                                    </div>
                                </div>
                                <!--ss-container-->
                                <div class="row paragraphs scroll-pane" >

                              



                                <p>Raised in a rich alien family in the Hegemony, Leilina was neglected as a child. As such, she often searched for a way to have as much fun as possible. She pulled pranks on her human babysitter often, helped by her robot friend, Yimi. Yimi was programmed have a childlike personality as her father wanted Leiliana to feel like she had a friend, but he would hardly bring her to play with other children, as he had felt that she only had to interact with other nobility of the Hegemony. Her mother was sympathetic of her needs, but simply did not have enough time for her daughter as she had an important government job.
  </p>
                             
                              <p>And so, as she grew up, Leiliana was a rebelous child and that only continued as years went by. She was very different to her parents and wanted freedom and adventure. In her teens, she often had arguments with her parents, if she even managed to see them during the day. She would leave in the evening when they usually come home. Time was also a strange thing for her – she moved with her parents from ship to ship often, and while luxury was abound, she could never get used to not having a normal day and night cycle. She liked sunlight very much; something quite rare when you spend most of your life in space.
        </p>
                                 <p>One day, she simply left. She took Yimi and left a note to her parents, saying that she never felt like they were there, and that she is going to find the thing that drives her in the vast space. “There must be such a thing, right?” was her last sentence. Years passed, and Leiliana, while hiding from the agents that her parents sent after her, got mixed up with various groups and organizations. She had a certain gift that she would befriend anyone easily. She was a favorite among common folk on many planets and spaceships.
        </p>
                                 <p>Finally, she joined the group called Children of the Light, who helped oppressed civilizations in the galaxy wherever they could. She became a fighter of an immense skill, and she spearheaded many rebellions against the corrupt governments, exposing their illegal trades and inhuman deeds. After hearing of the race called Gdarii and their misfortune of being almost exterminated by different organization fighting for their crystals, the Idara, she led a spaceship to their aid.
        </p>
                                <p>However, the groups she confronted there were far more dangerous than what she ever encountered before, and has fought for years now… Luckily, thanks to her, the other aliens weren’t completely eradicated, and she is a close friend with one of the last remaining Gdarii.
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
            <div class="menu col-xs-6 col-xs-offset-4 ">
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
         Character1:require('./assets/images/char_06.png')
      
        
         }
  },
methods:{
        jScrollPaneFn:function(){
         $('.scroll-pane').jScrollPane();

}},
components:{
 
},
mounted(){

    this.jScrollPaneFn()
}


}
  
</script>
<style scoped>




</style>