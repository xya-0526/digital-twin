<template>
  <button
    :style="{
      justifyContent: justifyContent,
      fontSize: Font_size,
      width,
      height,
      borderRadius: border_radius,
      boxShadow,
      color,
      margin,
      backgroundImage: `url(${bgimage})`
    }"
  >
    <span
      v-if="image.src"
      :style="{
        width: image.width,
        height: image.height
      }"
    >
      <img v-if="image.src" :src="image.src" alt="" />
    </span>
    <span :style="{ margin }">
      {{ text }}
    </span>
  </button>
</template>

<script setup lang="ts">
let x = defineProps({
  image: {
    type: Object,
    default: {
      src: null,
      alt: '',
      width: '1rem',
      height: '1rem'
    }
  },
  text: {
    type: String,
    default: '示范区'
  },
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },

  border_radius: {
    type: String,
    default: '1rem'
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
  },
  Font_size: {
    type: String,
    default: ''
  },
  justifyContent: {
    type: String,
    default: 'center'
  },
  margin: {
    type: String,
    default: '0 0 0 0'
  },
  bgimage: {
    type: String,
    default: ''
  }
})

</script>
<style scoped>
button {
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  text-align: center;

  span {
    display: block;
  }

  span:first-child {
    display: flex;
    margin-right: 0.3rem;
    align-items: end;
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
