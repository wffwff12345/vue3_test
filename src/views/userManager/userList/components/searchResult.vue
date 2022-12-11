<template>
    <el-table :data="userList" style="width: 100%" @row-click="click">
        <el-table-column label="用户ID" width="150">
            <template #default="scope">
                <span>{{ scope.row.id }}</span>
            </template>
        </el-table-column>
        <el-table-column label="用户名" width="150">
            <template #default="scope">
                <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="年龄" width="150">
            <template #default="scope">
                <span>{{ scope.row.age }}</span>
            </template>
        </el-table-column>
        <el-table-column label="注册时间" width="150">
            <template #default="scope">
                <span>{{ currentDateFormat(scope.row.date) }}</span>
                <!-- <span>{{typeof(scope.row.date)}}</span> -->
            </template>
        </el-table-column>
        <el-table-column label="邮箱" width="150">
            <template #default="scope">
                <span>{{ scope.row.email }}</span>
            </template>
        </el-table-column>
        <el-table-column label="用户电话" width="150">
            <template #default="scope">
                <span>{{ scope.row.phone }}</span>
            </template>
        </el-table-column>
        <el-table-column label="用户授权状态" width="150">
            <template #default="scope">
                <span>{{ scope.row.status == 0 ? "未授权" : "已授权" }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
            <template #default="scope">
                <el-button type="primary" size="small" @click.stop="deleteItem(scope.row.id)">删除</el-button>
                <el-button type="primary" size="small" @click.stop="editData(scope.row.id)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    
    <div class="pagination">
        <el-pagination :current-page="currentPage" :page-size="pageSize" :page-sizes="[5, 10, 50, 100]" :small="small"
            :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="changeSize" @current-change="changePage" />
    </div>
    <el-dialog v-model="dialogTableVisible" title="用户详情" style="width:500px">
        <el-form :model="form">
            <el-form-item label="用户ID" :label-width="formLabelWidth">
                <el-input v-model="form.data.id" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.data.name" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="form.data.age" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="注册时间" :label-width="formLabelWidth">
                <el-input v-model="form.data.date" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.data.email" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="用户电话" :label-width="formLabelWidth">
                <el-input v-model="form.data.phone" autocomplete="off" readonly />
            </el-form-item>
            <el-form-item label="用户授权状态" :label-width="formLabelWidth">
                <el-input v-model="form.data.status" autocomplete="off" readonly />
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { reactive } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus';
interface Props {
    userList: any,
    total: any,
    pageSize: any,
    currentPage: any,
    changePage: Function,
    changeSize: Function,
    editData: Function,
    currentDateFormat: Function
};
defineProps<Props>();
let dialogTableVisible = ref(false);
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
let small = ref(false);
let disabled = ref(false);
let background = ref(false);
const formLabelWidth = '140px'
const click = (row: any) => {
    form.data = row;
    form.data.date = currentDateFormat(form.data.date);
    dialogTableVisible.value = true;
};
const currentDateFormat = (date: any, format: string = 'yyyy-mm-dd'): any => {
    let dateTime = new Date(date);
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
        .replace('yyyy', pad(dateTime.getFullYear()))
        .replace('mm', pad(dateTime.getMonth() + 1))
        .replace('dd', pad(dateTime.getDate()))
};
const deleteItem = (id: any) => {
    ElMessageBox.confirm(
        '你确定删除该用户?',
        '警告',
        {
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            type: 'warning',
        }
        )
        .then(() => {
            console.log("delete"+id)
            ElMessage({
                type: 'success',
                message: '已成功删除',
                duration: 1000
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
                duration: 1000
            })
        })
}
const editorItem = (id: any) => {
    
}
</script>

<style scoped>

</style>







