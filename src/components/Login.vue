<template>
  <div class="login">
    <h2>Sign in</h2>
    <div class="container" style="width:500px">
      <div class="row align-items-center">
        <div class="col-md-4">アカウント名</div>
        <div class="col-md-3">
          <input v-model="authName" type="text" placeholder="Username">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4">パスワード</div>
        <div class="col-md-3">
          <input v-model="authPass" type="password" placeholder="Password">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          {{ msg }}
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <button class="btn btn-info btn-block login" v-on:click="post">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>

<script>
import { member } from '../services/service';

export default {
  name: 'Login',
  data () {
    return {
      showPassword : false,
      msg : 'userNameとpasswordを入力して下さい',
      authName : '',
      authPass : ''
    }
  },
  methods: {
    async login() {
      const data = { name : this.authName, password : this.authPass };
			await member.edit(data)
				.then((response) => {
					console.log(response);
					this.$store.dispatch("fetch", this.authName);
					this.$router.push('/login');
					return response.data.message;
				})
				.catch((error) => {
					console.log(error);
					return error.message;
				});
    }
  }
};
</script>