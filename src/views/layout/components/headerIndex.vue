<template>
    <div class="logout">
        <span class="user-name">欢迎用户:{{ userName }}</span>
        <span class="split-line">| |</span>
        <span class="icon svg-icon" @click="logout">退出
        </span>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getUser, clearUser } from '@/utils/store'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router';
export default {
    name: "headerComponent",
    setup() {
        const router = useRouter();
        let userName=ref("");
        userName.value=getUser().name;
        const logout = () => {
            ElMessageBox.confirm(
                '你确定退出?',
                '退出登录',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                clearUser();
                router.replace({ path: '/login' })
                ElMessage({
                    type: 'success',
                    message: '已退出',
                    duration:1000
                })
            }).catch(() => {
                ElMessage({
                    type: 'info',
                    message: '取消退出',
                    duration:1000
                })
            })
        };
        return {
            userName,
            logout
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/element-variables.scss';



</style>