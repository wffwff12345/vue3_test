<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="账户名" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { FormInstance, ElMessage} from 'element-plus'
import { login } from '@/api/login'
import { useRouter } from 'vue-router'

const ruleFormRef = ref<FormInstance>()
const router = useRouter();
const validateName = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入账户名！'))
  } else {
    callback()
  }
  /*  setTimeout(() => {
     if (!Number.isInteger(value)) {
       callback(new Error('Please input digits'))
     } else {
       if (value < 18) {
         callback(new Error('Age must be greater than 18'))
       } else {
         callback()
       }
     }
   }, 1000) */
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入密码！'));
  } else {
    callback();
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码！'))
  } else if (value !== ruleForm.password) {
    callback(new Error("两次输入的密码不匹配！"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  name: 'jack',
  password: '123',
  checkPass: '123',
})

const rules = reactive({
  name: [{ validator: validateName, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const name = ruleForm.name;
      const password = ruleForm.password;
      console.log(name + password);
      const result =await login({ name, password });
      console.log(result)
      if (result.code == 1006) {
        router.push({
          path: "/layout/user/list"
        });
        ElMessage({
          message: "登录成功！",
          type: 'success'
        })
      } else {
        ElMessage({
            message: result.message,
            type: 'error'
          })
      }
      console.log('登录!');
    } else {
      console.log('登录失败!');
      return false;
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
  