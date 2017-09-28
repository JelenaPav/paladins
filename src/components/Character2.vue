 <template>
   <div id="character2" class="character container-fluid">
        
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
                                       Kyros

                                        </h1>
                                    </div>
                             
                                </div>
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-2">
                                        <h3>   
                                      the Dark Sword
                                        </h3>
                                    </div>
                                </div>
                                <div class="row paragraphs scroll-pane">
                        
                        <p>Born on a small colony on a moon of a large planet all covered in water, Kyros was a difficult, but gifted child. The colony on the said moon was mostly comprised of families which worked for a large intergalactic company. They traveled down to planet Seeris from their moon base to dredge important oil sources for the company. While growing up, Kyros has seen a lot of fighting – different space pirates tried to intercept the shipment from their colony to the company, and even tried several times to take over their base. Luckily for him, the technology that the families living on the moon of Seeris used was far more advanced than that which space pirates had. And so, their every attack was repelled. Kyros was captivated by fighting from those encounters, much more than the dredging oil. And so, he often bothered his parents to ask the company that he enlists in an army. Many arguments were had between him and his father, who disapproved the military approach.
</p>
                         <p> And so, one day when the company’s ship came to pick up the latest shipment, Kyros secretly boarded their ship. Nobody saw him for years, and his parents fell into despair, not knowing that their son is alive. During those years, Kyros enlisted into the army and quickly rose through the ranks of the company. Their rigorous training has made him even darker, and the moments in which he missed his parents and wanted to hear from them were less frequent over time. Everybody in the company’s force acknowledged him and his immense skill with Lightsword. He preferred it over any rifle and has shown why the weapon is feared across the galaxy.
</p>
                         <p>In the famous battle in the Oleg system, where the company Kyros worked for worked as aggressors, he led a special unit in a small battleship, but achieved far greater results then even their star destroyed – the company’s prized weapon said to be the main source of their firepower. He was promoted to an Admiral after the battle and, as the company became much richer by plundering Oleg and its riches, came to lead a massive army in the star destroyer. He became feared across the galaxy, and his Lightsword skills reached the ears of certain Lightsword masters. Several of them fell to his dark blade. As the years passed, Kyros became darker than ever before. He came to be known as the Dark Admiral, as he overtook the whole company.
</p>
                         <p>After learning of the Idara crystals, Kyros moved some of his forces to the system of the native Gdarii and ordered the destruction of the inhabitants and mining of the crystal. However, other organizations were there to contest his forces. Not wanting to back down from the fight, Kyros deployed all of his forces and fought the battle for Idara for years now.
</p>
                       
                    </div>

                    </div>
                    <div class="rightCol col-xs-6">
                        <div class="row">
                            <div class="col-xs-3 col-xs-offset-2">
                                <h1>
                                     <img class="characterImg" :src="Character2" alt="Character2">
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
         Character2:require('./assets/images/char_01.png')
         
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