<template>
    <div id="about" class="about container-fluid">
        <div class="aboutReleaseBox">
            <div class="row">
                <div class="leftCol col-xs-12 col-md-6">
                    <h1><img :src="Slashes" alt="Slashes"> ABOUT</h1>
                    <p>Are you ready to defend the galaxy? Step into this stellar battlefield and justify your rank Paladin in this unique, competitive, 3D, multiplayer shooting game! Fulfill the legacy and prove yourself once again as a true defender of your cosmic tribe!</p>
                </div>
                <div class="rightCol col-xs-12 col-md-6">
                    <h1><img :src="Slashes" alt="Slashes"> RELEASE</h1>
                    <p>Prepare yourself! War between forces of the Dark and forces of the Light is closer than ever. Its coming to you on September 28.</p>
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