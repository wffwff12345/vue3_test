<template>
    <div class="menu-wrapper">
        <el-menu-item :index="item.path" :key="item.path" :disabled="item.disabled">
            <svg class="icon svg-icon" aria-hidden="true">
                <use :xlink:href="'#' + item.icon" />
            </svg>
            <slot name="title">{{ item.title }}</slot>
        </el-menu-item>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    setup() {
        return {}
    }
})
</script>

<style scoped>

</style>