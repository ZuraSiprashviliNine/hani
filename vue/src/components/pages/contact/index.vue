<template>
    <div id="contact" class="page contact">
        <div class="container">
            <div class="row">
                <div class="col-12 p-0">
                    <div 
                        :class="{moved: moved}"
                        class="frames">
                        <first-frame />
                        <second-frame />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firstFrame from './first-frame';
import secondFrame from './second-frame';

export default {
    components: {
        firstFrame,
        secondFrame
    },
    data(){
        return {
            moved: false
        }
    },
    methods: {
    }
}
</script>
