<template>
  <div class="login">
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-6 text-black">

					<div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
						<form style="width: 23rem;">
							<h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">メンバー登録</h3>

							<div class="form-outline mb-4">
								<input type="email" id="form2Example18" class="form-control form-control-lg" v-model="email" />
								<label class="form-label" for="form2Example18">Email address</label>
							</div>

							<div class="form-outline mb-4">
								<input type="password" id="form2Example28" class="form-control form-control-lg" v-model="password" />
								<label class="form-label" for="form2Example28">Password</label>
							</div>

							<div class="pt-1 mb-4">
								<button type="button" class="btn btn-info btn-lg btn-block" @click="register">Register</button>
							</div>

							<p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
							<router-link to="/login" class="link-info">ログイン</router-link>
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
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      const data = {email: this.email, password: this.password};
			await user.create(data)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
  }
};
</script>