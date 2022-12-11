<template>
    <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px" style="display:block">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu :default-active="defaultRoute" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose" router>
            <el-sub-menu index="/layout/user">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/layout/user/list">用户列表</el-menu-item>
                    <el-menu-item index="/layout/user/permission">用户权限</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <!--  <el-menu-item index="/layout/user/list">
                <el-icon><icon-menu /></el-icon>
                <template #title>用户管理</template>
            </el-menu-item> -->
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <headerComponent />
                </div>
            </el-header>

            <el-main>
                <el-scrollbar>
                    <router-view />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import headerComponent from './components/headerIndex.vue'
import siderBar from './components/siderBarIndex.vue'
import { Menu as IconMenu, Message, Setting, Document, Location, } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    components: {
        headerComponent,
        siderBar,
        Message, 
        Setting, 
        Document, 
        Location,
    },
    setup() {
        let isCollapse = ref(false);
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        }
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath)
        }
        const route = useRoute();
        let defaultRoute = computed(() => {
            return route.path
        })
        return {
            
            isCollapse,
            handleOpen,
            handleClose,
            defaultRoute
        }
    }
})
</script>

<style lang="scss" scoped>
.hidden-container {
    margin-left: 50px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.hidden-slidecontainer {
    width: 50px !important;

    .logo img {
        display: none;
    }
}
</style>