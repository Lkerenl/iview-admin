<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="identity">
    <select v-model="form.identity">
      <option v-for="option in da.options" v-bind:key="option.text" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    },
    identityRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '身份不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      da: {
        selected: '学生',
        options: [
          { text: '学生', value: 'student' },
          { text: '教师', value: 'teacher' },
          { text: '教务', value: 'management' }
        ]
      },
      form: {
        identity: 'student'
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules,
        identity: this.identityRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password,
            identity: this.form.identity
          })
        }
      })
    }
  }
}
</script>
