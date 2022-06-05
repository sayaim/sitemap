<template>
  <div class="login">
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-6 text-black">

					<div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
						<form style="width: 23rem;">
							<h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

							<div class="form-outline mb-4">
								<input type="email" id="form2Example18" class="form-control form-control-lg" v-model="email">
								<label class="form-label" for="form2Example18">Email address</label>
							</div>

							<div class="form-outline mb-4">
								<input type="password" id="form2Example28" class="form-control form-control-lg" v-model="password">
								<label class="form-label" for="form2Example28">Password</label>
							</div>

							<div class="pt-1 mb-4">
								<button type="button" class="btn btn-info btn-lg btn-block" @click="login">login</button>
							</div>

							<p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
							<router-link to="/register" class="link-info">新規登録</router-link>
						</form>
					</div>

				</div>
			</div>
		</div>
  </div>
</template>

<style>

input {
  margin: 10px 0;
  padding: 10px;
}

</style>

<script>
import { user } from '../../services/service';

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const data = {email: this.email, password: this.password};
			await user.login(data)
				.then((response) => {
					if (response.data.length == 1) {
						location.href = '/home';
						// session, cookie
					} else {
						console.log("未登録");
					}
					console.log(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
  }
};
</script>
