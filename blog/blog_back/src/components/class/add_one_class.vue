<template>
      <div class="classmain">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <h3>一级类名：</h3>
              <el-form-item label="一级中文类名" prop="cnname_one" :rules="[{ required: true, message: '不能为空'}]">
                <el-input type="text" v-model="ruleForm.cnname_one" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="一级英文类名" prop="enname_one" >
                <el-input type="text" v-model="ruleForm.enname_one" auto-complete="off"></el-input>
              </el-form-item>
              <h3>二级类名：</h3>
              <el-form-item label="二级中文类名" prop="cnname_two" :rules="[{ required: true, message: '不能为空'}]">
                <el-input type="text" v-model="ruleForm.cnname_two"  auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="二级英文类名" prop="enname_two">
                <el-input type="text" v-model="ruleForm.enname_two" auto-complete="off"></el-input>
              </el-form-item>
             
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
      </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    
      var validateEnname_one = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('不能为空'));
        }else if(!/^[a-zA-Z]{4,10}$/.test(value)){
        
            // this.$refs.ruleForm2.validateField('checkPass');
            callback(new Error('您输入的格式不对'));
          
        }else{
          callback()
        }
      };
      
    return {
      ruleForm: {
          cnname_one: '',
          enname_one: '',
          cnname_two: '',
          enname_two: ''
        },
        rules: {
          cnname_one:[{trigger:"blur"}],
          enname_one: [
            { validator: validateEnname_one, trigger: 'blur' }
          ],
          cnname_two: [{trigger:"blur"}],
          enname_two:[
            { validator: validateEnname_one, trigger: 'blur' }
          ]
        }
    }
  },
   methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post("/api/back/class/insertOneClass",this.ruleForm).then((data)=>{
              console.log(data)
              if(data.data.code=="2001"){
                this.$message({
                  showClose: true,
                  type:"success",
                  message:data.data.msg
                })
              }else{
                this.$message({
                  showClose: true,
                  type:"error",
                  message:data.data.msg
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
  
}
</script>

<style scoped>
.classmain{
  padding:30px 20px;
}
h3{
  margin:20px 0px;
}
p{
  font-size: 20px;
  font-weight: bold;
  padding:10px;
}
</style>
