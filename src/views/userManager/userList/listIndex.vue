<template>
    <div class="userWrapper">
        <editor ref="editorRef" :currentDateFormat="currentDateFormat"/>
        <searchTool :changeParam="changeParam" :addData="addData"/>
        <searchResult ref="searchRef" :userList="userList" :total="total" :pageSize="Params.size"
            :currentPage="Params.page" :changePage="changePage" :changeSize="changeSize" :editData="editData" :currentDateFormat="currentDateFormat"/>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import searchResult from './components/searchResult.vue'
import searchTool from './components/searchTool.vue'
import editor from './components/editor.vue'
import { getUsers } from '@/api/user'
let searchRef = ref();
let Params = reactive({
    page: 1,
    size: 10,
    name: '',
})
let total = ref(0)
let userList: any = reactive([]);
let editorRef = ref();
onMounted(async() => {
    getUser();
});
const changeParam = (name: any) => {
    Params.name = name;
    getUser();
}
const getUser = async (): Promise<any> => {
    const result = await getUsers(Params);
    console.log(result);
    total.value = result.total;
    userList.splice(0, userList.length);
    userList.push(...result.data);
    console.log(userList)
}
const changePage = (page: any) => {
    Params.page = page;
    getUser();
}
const changeSize = (size: any) => {
    Params.size = size;
    getUser();
}
const deleteUser = (id: any) => {
    console.log(id)
}
const editData = (item: any) => {
    editorRef.value.editor(item);
}
const addData = () => {
    editorRef.value.add();
}
const currentDateFormat = (date: any, format: string = 'yyyy-mm-dd'): any => {
    let dateTime = new Date(date);
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    return format
        .replace('yyyy', pad(dateTime.getFullYear()))
        .replace('mm', pad(dateTime.getMonth() + 1))
        .replace('dd', pad(dateTime.getDate()))
};
</script>

<style scoped>

</style>