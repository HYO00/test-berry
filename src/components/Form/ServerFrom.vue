<template>
  <div class="formBox">
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
  <h3>서버 등록</h3>
    <el-form-item label="Name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="HOST" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="IP/PORT" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Version" prop="count">
      <el-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="OS" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ON/OFF" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>   
  </div>
 
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

// const rules = reactive<FormRules<RuleForm>>({
//   name: [
//     { required: true, message: 'Please input Activity name', trigger: 'blur' },
//     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
//   ],
//   region: [
//     {
//       required: true,
//       message: 'Please select Activity zone',
//       trigger: 'change',
//     },
//   ],
//   count: [
//     {
//       required: true,
//       message: 'Please select Activity count',
//       trigger: 'change',
//     },
//   ],
//   date1: [
//     {
//       type: 'date',
//       required: true,
//       message: 'Please pick a date',
//       trigger: 'change',
//     },
//   ],
//   date2: [
//     {
//       type: 'date',
//       required: true,
//       message: 'Please pick a time',
//       trigger: 'change',
//     },
//   ],
//   type: [
//     {
//       type: 'array',
//       required: true,
//       message: 'Please select at least one activity type',
//       trigger: 'change',
//     },
//   ],
//   resource: [
//     {
//       required: true,
//       message: 'Please select activity resource',
//       trigger: 'change',
//     },
//   ],
//   desc: [
//     { required: true, message: 'Please input activity form', trigger: 'blur' },
//   ],
// })

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>

<style>
  .formBox {
    width: 688px;
    margin: 60px 0 0 120px;
    border: 4px solid #132931;
    padding: 20px;
  }
</style>