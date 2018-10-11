<template>
    <div 
        @focus="Drop"
        @blur="Drop"
        :class="[itemClassName, {active: active}, {dropped: activeItem}]">
        <button
            @blur="Drop"
            @click="handleClick"
            :class="linkClassName">
            {{title | lang}}
        </button>
        <slot name="sub-menu"></slot>
        <button
            v-if="hasSub" 
            @click="Drop"
            class="hani-header-menu-item-dropper">
            <span class="fa fa-angle-down"></span>
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeItem: false
        }
    },
    methods: {
        Drop(){
            this.activeItem = !this.activeItem;
        },
        handleClick(){
            this.$emit('routeChange');
            this.$router.push(this.link);
            if(this.hasSub){
                this.Drop();
            }
        }
    },
    props: [
        'title',
        'link',
        'itemClassName',
        'linkClassName',
        'active',
        'hasSub'
    ]
}
</script>