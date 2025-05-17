<template>
    <div class="box">
        <div class="img">
            <div>
                <img :src="image.src" alt="">
            </div>
            <div>
                <img src="../assets/images/Slice 6.png" alt="">
            </div>
        </div>
        <div class="text">
            <p>{{ text }}</p>
            <div id="count">
                <span>{{ count / 10 }}</span>
                <span>{{ count % 10 }}</span>
                <div>个</div>
            </div>
        </div>

    </div>


</template>


<script setup lang="ts">
defineProps({
    text: {
        type: String,
        default: '默认文本'
    },
    image: {
        type: Object,
        default: () => ({
            src: '',
            alt: ''
        })
    },
    count: {
        type: Number,
        default: 0
    },
})








</script>
<style scoped>
.box {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 7.5vw;
    height: 10vh;
}

.img {
    transform: translateX();
    margin-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.5%;
    height: 60%;

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
        }
    }

    div:nth-child(1) {
        transform: translateY(120%);
        width: 40%;
        height: 50%;
    }

}

.text {
    width: 32.5%;
    transform: translateX(-20%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    p {
        width: 100%;
        font-size: 1.3rem;
        color: #ffffff;
        margin-bottom: 10%;
    }

    #count {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        span {
        background-image: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border: 2px solid transparent;
        border-image: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%) 1;
        width: 32.5%;
        height: 100%;
        font-size: 2rem;
        text-align: center;
        display: block;
    }  
    div{
        align-self:flex-end;
        color: #FFFFFF;
        }
    }
}
 
</style>