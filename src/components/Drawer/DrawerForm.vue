<template>
    <el-button text @click="dialog = true" style="background-color: rgb(188, 114, 114);"
      >Add Server</el-button
    >
  
    <el-drawer
      ref="drawerRef"
      v-model="dialog"
      title="I have a nested form inside!"
      :before-close="handleClose"
      direction="rtl"
      class="demo-drawer"
    >
      <div class="demo-drawer__content">
        <!-- <el-form :model="form">
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Area" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="Please select activity area"
            >
              <el-option label="Area1" value="shanghai" />
              <el-option label="Area2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form> -->
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
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">Cancel</el-button>
          <el-button type="primary"  @click="onClick">
            Submit</el-button>
        </div>
      </div>
    </el-drawer>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { ElDrawer, ElMessageBox } from 'element-plus'
  
  const formLabelWidth = '80px'
  let timer
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
  

  const dialog = ref(false)
  const loading = ref(false)
  
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  
  const drawerRef = ref<InstanceType<typeof ElDrawer>>()
  const onClick = () => {
    drawerRef.value!.close()
  }
  
  const handleClose = (done) => {
    cancelForm()
 
  }
  
  const cancelForm = () => {
    loading.value = false
    dialog.value = false
    // clearTimeout(timer)
  }
  </script>
  