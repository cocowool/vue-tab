<template>
    <main-layout>
        <div class="jumbotron">
            <p>如果您是北数考勤系统用户，通过本操作指引，将引导您通过三个步骤实现北数考勤系统与智慧园区的关联，完成之后您将能够使用智慧园区APP来进行日常考勤打卡。如果习惯了指纹机，您还可以选择继续通过考勤机进行日常考勤。</p>
            <p><v-link href="/step1" class="btn btn-lg btn-success">马上体验</v-link></p>
        </div>    
    </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'

export default {
    components : {
        MainLayout,
        VLink
    }
}
</script>