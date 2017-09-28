<template>
    <div id="features" class="features container-fluid">
        <div class="borderDiv borderTop container-fluid"></div>
        <div class="featuresBox">
            <div class="row">
                <div class="col-xs-12 features_header">
                    <h1><img :src="Slashes" alt="Slashes">FEATURES</h1>
                </div>
            </div>
            <div class="row">
                <div class="leftCol col-xs-12 col-md-6">
                    <h2><i class="fa fa-circle-o" aria-hidden="true"></i>MULTIPLAYER ONLINE GAME</h2>
                    <p>Enter this multiplayer stellar battlefield, play with your friends or fight random online opponent and bring them to their knees.</p>
                    <h2><i class="fa fa-circle-o" aria-hidden="true"></i>SPECIAL ABILITIES</h2>
                    <p>If you get yourself in tricky situation, use double-jump ability to get away from that. Activate the force shield and become invisible or use crates and barrels as a shield and throw them on your opponent and do some damage!</p>
                </div>
                <div class="rightCol col-xs-12 col-md-6">
                    <h2><i class="fa fa-circle-o" aria-hidden="true"></i>CHARACTER UNIQUENESS</h2>
                    <p>There is storyline behind every character.  Each of them has it’s own weapon set from variety of galaxy swords, plasma guns and laser pistols.</p>
                    <h2><i class="fa fa-circle-o" aria-hidden="true"></i>AMAZING SURROUNDINGS</h2>
                    <p>Enjoy in beautiful designed 3D stages, worlds and galaxies, amazing graphics, game physics and music sounds. </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Slashes: require('./assets/images/Slashes.png')
            }
        }
    }
</script>
<style scoped>
</style>