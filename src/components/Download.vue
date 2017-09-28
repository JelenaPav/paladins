<template>
    <div id="download" class="download container-fluid">
        <div class="borderDiv borderTop container-fluid"></div>
        <div class="downloadBox">
            <div class="row">
                <div class="leftCol col-xs-12 col-md-6">
                    <h1><img :src="Slashes" alt="Slashes">DOWNLOAD</h1>
                    <p>Once again, galaxy needs you! Join this epic sci-fi war between forces of the Dark and forces of the Light! Paladins are the high-ranked warriors that each galaxy has. Not anyone can became one, just the chosen ones! Enter this multiplayer stellar battlefield and answer the call Paladin!</p>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <a href="#"><img class="store" :src="Googleplay" alt="Google play"></a>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <a href="#"><img class="store" :src="Appstore" alt="App store"></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <a href="#"><img class="store" :src="Amazon" alt="Amazon"></a>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <a href="#"><img class="store" :src="Aptoide" alt="Aptoide"></a>
                        </div>
                    </div>
                </div>
                <div class="rightCol col-xs-12 col-md-6">
                    <img class="iconNSWD img-responsive" :src="iconNSWD" alt="icon Paladins of the galaxy NSWD">
                </div>
            </div>
        </div>
        <div class="borderDiv borderBottom container-fluid"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                Slashes: require('./assets/images/Slashes.png'),
                Googleplay: require('./assets/images/Googleplay.png'),
                Appstore: require('./assets/images/Appstore.png'),
                Amazon: require('./assets/images/Amazon.png'),
                Aptoide: require('./assets/images/Aptoide.png'),
                iconNSWD: require('./assets/images/iconNSWD.png')
            }
        }
    }
</script>
<style scoped>


</style>