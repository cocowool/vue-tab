<template>
    <div class="step-container">
        <div class="rs-step-container rs-arrow">
            <v-tab href="/home">说明</v-tab>
            <v-tab href="/step1">第一步:查询考勤ID</v-tab>
            <v-tab href="/step2">第二步:下载APP & 绑定考勤ID</v-tab>
            <v-tab href="/step3">第三步:考勤并查看结果</v-tab>
        </div>
        <!-- <div>
            <input type="text" v-model="question" name="question">
        </div> -->
        <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
            <slot></slot>
        </transition>
    </div>
</template>
<script>
import VLink from '../components/VLink.vue'
import VTab from '../components/VTab.vue'

export default {
    methods : {
        inputChanged(){
            console.log("Input CHanged")
        }
    },
    watch : {
    },
    components: {
        VLink,
        VTab
    }
}
</script>