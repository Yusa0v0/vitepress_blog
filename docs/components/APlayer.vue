<template>
    <!-- <div id="aplayer" data-id="3778678" data-server="netease" data-type="playlist" data-fixed="true"
        data-listFolded="true" data-autoplay="true" data-loop="all" data-order="list"></div> -->
    <div>
        <meting-js id="3778678" server="netease" type="playlist" fixed="true" autoplay="true" loop="true" list-folded="ture"
            list-max-height="500px" lrc-type="0">
        </meting-js>
    </div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css';
// import 'aplayer/dist/APlayer.min.js';
import 'meting/dist/Meting.min.js';
import APlayer from 'APlayer';

export default {
    name: 'APlayer',
    components: {
    },
    mounted() {
        // this.addMyAudio();
    },
    data() {
        return {

        }
    },
    methods: {
        addMyAudio() {
            console.log("begin:");
            const ap = new APlayer({
                container: document.getElementById("3778678"),
            });
            console.log(document.getElementById("3778678"));
            console.log("end.");
        }
    }
}
</script>

