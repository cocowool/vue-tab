<template>
  <main-layout>
    <div class="step-content slide-left container">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-8 text-center">
            <h2>扫描二维码下载安装APP</h2>
            <div class="text-center">
                <p>扫描上图中的二维码，按照页面提示选择合适的版本进行安装。</p>
                <p class="text-danger">注意：微信扫描需要用第三方浏览器打开，点击下载。</p>
                <p>APP安装成功后，使用帐号登陆APP。</p>
                <p>在<b>我的->个人信息</b>中录入上一步查询到的考勤编号，完成后即可进行考勤打卡。</p>
            </div>
        </div>
        <div class="col-sm-2">

        </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main.vue'
export default {
    components : {
        MainLayout
    }
}
</script>