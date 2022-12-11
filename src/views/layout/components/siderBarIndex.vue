<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="defaultRoute" router >
            <siderBarItem v-for="route in items" :item="route" :key="route.path" />
        </el-menu>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import siderBarItem from './siderBarItem.vue'
import { MenuData } from '@/constants/menus'
import { useRoute } from 'vue-router'
export default defineComponent({
    components: {
        siderBarItem
    },
    setup() {
        const route= useRoute();
        let items =MenuData;
        let defaultRoute= computed(()=>{
            return route.path
        })
        return {
            items,
            defaultRoute
        }
    }
})
</script>

<style lang="scss" scoped>
.sidebar{
  background-color: #2ab47d;
}
</style>