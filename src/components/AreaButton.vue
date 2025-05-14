<template>
    <button :style="{ width, height, backgroundColor: bgColor }"><img v-if="image.src" src="" alt="">{{ text }}</button>
</template>
<script setup lang="ts">
const props = defineProps({
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
        default: '#253334'
    },
    width: {
        type: String,
        default: '10%'
    }, height: {
        type: String,
        default: '5%'
    }
})



</script>
<style scoped>
button{
border: 1px solid #678680;
box-shadow: inset 0 0 6px 0 #64d195f0
}


</style>