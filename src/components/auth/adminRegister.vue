<template>
  <div class="admin_register">
    <h2>Sign in</h2>
    <div class="container" style="width:500px">
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
          <button class="btn btn-info btn-block" @click="register">登録</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin_register {
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
  name: 'admin_register',
  data () {
    return {
      name: '',
      password: '',
    }
  },
  methods: {
    async register() {
      const data = {name: this.name, password: this.password};
			console.log(data);
			await admin.create(data)
				.then((response) => {
					// redirect
					// this.$router.push('/admin_register', data);
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
    }
  }
};
</script>