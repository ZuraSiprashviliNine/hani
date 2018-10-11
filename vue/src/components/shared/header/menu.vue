<template>
    <div 
        :class="menuClassName">
        <slot name="menu-item"></slot>
    </div>
</template>

<script>
export default {
    props: [
        'menuClassName'
    ]
}
</script>
