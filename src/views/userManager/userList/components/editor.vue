<template>
    <div>
        <el-dialog  :title="title" style="width:500px" v-model="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户ID" :label-width="formLabelWidth">
                    <el-input v-model="form.data.id" autocomplete="off" :readonly="editModule" />
                </el-form-item>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.data.name" autocomplete="off" :readonly="editModule" />
                </el-form-item>
                <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.data.age" autocomplete="off" :readonly="editModule" />
                </el-form-item>
                <el-form-item label="注册时间" :label-width="formLabelWidth">
                    <el-input v-model="form.data.date" autocomplete="off" :readonly="editModule" />
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.data.email" autocomplete="off" :readonly="editModule" />
                </el-form-item>
                <el-form-item label="用户电话" :label-width="formLabelWidth">
                    <el-input v-model="form.data.phone" autocomplete="off" :readonly="editModule"/>
                </el-form-item>
                <el-form-item label="用户授权状态" :label-width="formLabelWidth">
                    <el-input v-model="form.data.status" autocomplete="off" :readonly="editModule" />
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
const formLabelWidth = '140px'
let editModule = ref(false);
let dialogFormVisible = ref(false);
let form = reactive({
    data: {
        id: null,
        name: null,
        age: null,
        date: null,
        email: null,
        phone: null,
        status: 0,
    }
});
onMounted(() => {
     
})
let title = ref("");
const add = () => {
    dialogFormVisible.value=true;
    title.value="新增用户"
}
const editor = (item: any) => {
    dialogFormVisible.value=true;
    editModule.value=true;
    title.value="编辑用户";
    
}
defineExpose({add, editor});

</script>

<style scoped>

</style>