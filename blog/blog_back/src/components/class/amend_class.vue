<template>
      <div class="classmain">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <template v-if="state">
                <p>一级分类列表</p>
                <el-form-item label="一级中文类名" prop="cnname">
                  <el-input type="text" v-model="ruleForm.cnname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="一级英文标识" prop="enname">
                  <el-input type="text" v-model="ruleForm.enname" auto-complete="off"></el-input>
                </el-form-item>
            </template>
            <template v-else>
                <p>二级分类列表</p>
                <el-form-item label="二级中文类名" prop="cnname">
                  <el-input type="text" v-model="ruleForm.cnname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="二级英文标识" prop="enname">
                  <el-input type="text" v-model="ruleForm.enname" auto-complete="off"></el-input>
                </el-form-item>
            </template>
          
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
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入英文姓名'));
        } else {
          if (/^[a-zA-Z]{4,12}$/.test(value)) {
            callback();
          }else{
              callback(new Error('请输入正确的英文姓名'));
          }
          
        }
      };
    return {
        ruleForm: {
            
        },
        rules: {
          enname: [
            { validator: validatePass, trigger: 'blur' }
          ],
          
        },
        state:true
    }
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert(22)
            if(this.state){
               this.axios.post("/api/back/class/amendClassOne",this.ruleForm).then((data)=>{
                  if(data.data.code=="2031"){
                      this.$message({
                          showClose: true,
                          message: data.data.msg,
                          type: 'success'
                        });
                  }else{
                      this.$message({
                          showClose: true,
                          message: data.data.msg,
                          type: 'error'
                        });
                  }
                })
            }else{
              this.axios.post("/api/back/class/amendClassTwo",this.ruleForm).then((data)=>{
                  if(data.data.code=="2071"){
                      this.$message({
                          showClose: true,
                          message: data.data.msg,
                          type: 'success'
                        });
                  }else{
                      this.$message({
                          showClose: true,
                          message: data.data.msg,
                          type: 'error'
                        });
                  }
                })
            }
          
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
      let state=this.$route.query.state
      
      if(state=="one"){
         this.state=true
         const data=JSON.parse(sessionStorage.getItem("oneClassData"))
          Object.entries(data).forEach(function(i) {
            this.$set(this.ruleForm,i[0],i[1])
          }, this);
          this.ruleForm.oldenname=data.enname
      }else{
        this.state=false
         const data=JSON.parse(sessionStorage.getItem("twoClassData"))
          Object.entries(data).forEach(function(i) {
            this.$set(this.ruleForm,i[0],i[1])
          }, this);
      }
    }
  
}
</script>

<style scoped>
.classmain{
  padding:30px 20px;
}
p{
  font-size: 20px;
  font-weight: bold;
  padding:10px;
}
</style>
