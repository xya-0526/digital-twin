<template>
    <button :style="{
         width,
         height, 
         background: bgColor, 
         borderRadius: border_radius, 
         border: Border,
         boxShadow,
         color
         }">
         <img v-if="image.src" src="" alt="">
        {{ text }}
    </button>
</template>
<script setup lang="ts">
defineProps({
    image: {
        type: Object,
        default: {
            src: null,
            alt: '',
            width: '5%',
            height: '5%'
        }
    },
    text: {
        type: String,
        default: '示范区'
    },
    bgColor: {
        type: String,
        default: `#253334`
    },
    width: {
        type: String,
        default: '10%'
    }, height: {
        type: String,
        default: '5%'
    },

    border_radius: {
        type: String,
        default: '10px'
    },
    Border: {
        type: String,
        default: '0.5px solid #678680'
    },
    boxShadow: {
        type: String,
        default: 'inset 0 0 4px 0px #64d195f0'
    },
    color: {
        type: String,
        default: '#a5a4a4'
    }
})



</script>
<style scoped>
button {
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
}
</style>