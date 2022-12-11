<template>
    <div class="search">
        <el-input v-model="name" placeholder="请输入用户名" :prefix-icon="Search" @change="changeParam(name)"
            @input="changeParam(name)" @clear="clear" clearable />
        <div class="button">
            <el-button type="primary" size="small" @click.stop="addData">新增用户</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'


interface Props {
    changeParam: Function,
    addData: Function
}
defineProps<Props>()
let name = ref("")
const clear = () => {
    name.value = "";
}
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    width: 600px;
    margin-left: 5px;
    margin-bottom: 20px;
}

.button{
    margin-left: 200px;
}
</style>
