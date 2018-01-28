var _vue;

$(document).ready(function() {

	_vue = new Vue({
		el: "#app",
		data: {
			form: {
				action: "/login",
				method: "post",
				title: "Login",
				isLogin: true
			}
		},
		methods: {
			setRegisterForm: function() {
				_vue.form.action = "/register";
				_vue.form.title = "Register";
				_vue.form.isLogin = false;
			},

			setLoginForm: function() {
				_vue.form.action = "/login";
				_vue.form.title = "Login";
				_vue.form.isLogin = true;
			}
		}
	})
})