<template>
  <div class="admin_login">
    <h2>Sign in</h2>
    <div class="container" style="width:500px">
      <div class="row align-items-center">
        <div class="col-md-4">管理者ID</div>
        <div class="col-md-3">
          <input type="text" v-model="admin_id">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4">アカウント名</div>
        <div class="col-md-3">
          <input type="text" v-model="name">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4">パスワード</div>
        <div class="col-md-3">
          <input type="password" v-model="password">
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12">
          <button class="btn btn-info btn-block login" @click="login">ログイン</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin_login {
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
import { admin } from '../../services/service';

export default {
  name: 'admin_login',
  data () {
    return {
			admin_id: '',
      name: '',
      password: '',
    }
  },
  methods: {
    async login() {
			// session機能
      const data = {id: this.admin_id, name: this.name, password: this.password};
			await admin.select(data)
				.then((response) => {
					console.log(response);
					// service経由との違い 確かめる
					// this.$router.push('/admin_login', data);
				})
				.catch((error) => {
					console.log(error);
				});
    }
  }
};
</script>