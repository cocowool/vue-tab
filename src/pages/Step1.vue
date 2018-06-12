<template>
  <main-layout>
    <div class="step-content slide-left">
        <div class="form-group">
            <label for="searchItem" class="col-sm-2 control-label text-right" style="padding-top:8px;">用户名:</label>
            <div class="col-sm-8">
                <input type="text" id="searchVal" v-model="searchVal" @input="inputChanged" name="searchVal" placeholder="请输入北数考勤系统登录用户名、中文姓名或身份证号进行查询" class="form-control">
            </div>
            <div class="col-sm-2">&nbsp;</div>
        </div>
        <div class="form-group" style="margin-top:30px; clear:both; padding-top:30px;">
            <div class="col-sm-2">&nbsp;</div>
            <div class="col-sm-8">
                <table class="table table-striped" v-if="userList.length > 0">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>登陆用户</th>
                            <th>考勤编号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(item, key) in userList'>
                            <td>{{item.CNNAME}}</td>
                            <td>{{item.BSUSER}}</td>
                            <td>{{item.WHID}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
            </div>
        </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/Main.vue'
export default {
    components : {
        MainLayout
    },
    data() {
        return {
            searchVal : '',
            userList : []
        }
    },
    props: {
        value : {
            type: String,
            default:''
        }
    },
    computed:{

    },
    methods:{
        inputChanged(event){
            this.userList = []
            var len = this.searchVal.length

            if( len > 0){
                for (var i = 0 ; i < bsuser.length ; i++){
                    if(bsuser[i].ID.substring(0,len) == this.searchVal || bsuser[i].CNNAME.substring(0,len) == this.searchVal || bsuser[i].BSUSER.substring(0,len) == this.searchVal ){
                        this.userList.push(bsuser[i])
                    }
                }
            }

        }
    }
}
</script>