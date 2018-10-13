<template>
    <div 
        class="navigation-item"
        :class="[{'animated flipInY': active}, {active: active}]">
        <button
            @click="handleClick"
            class="navigation-item-link">
            <slot name="title" />
        </button>
        <slot name="sub"></slot>
        <button
            v-if="hasSub"
            @blur="drop(null)"
            @click="drop(link)"
            class="navigation-item-drop"
            :class="{dropped: dropped}">
            <span class="fa fa-angle-down"></span>
        </button>
    </div>
</template>

<script>
export default {
    props: [
        'link',
        'active',
        'hasSub',
        'drop',
        'dropped'
    ],
    methods: {
        handleClick(){
            this.drop(null);
            this.$router.push(this.link);
        }
    }
}
</script>

