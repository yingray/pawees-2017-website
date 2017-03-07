/* General Configuration */
var config = {
	host: 'http://localhost'
};

/* APIs Configuration using Ajax */
var apis = {
	Verification: function() {
		$.get(config.host + "/api/verification")
			.done(function(data) {
				ChangeToLogin(data);
				autofillAllForm(data);
			})
			.fail(function() {
				// console.log("verification fail");
			});
	},
	Login: function(submitFormObject) {
		$.post(config.host + "/api/login", submitFormObject)
			.done(function(data) {
				apis.Verification()
				// window.location.href = '/';
			})
			.fail(function() {
				alert("error");
			});
	},
	Logout: function() {
		$.post(config.host + "/api/logout")
			.done(function(data) {
				window.location.href = '/';
			})
			.fail(function() {
				alert("error");
			});
	},
	UpdateProfile: function(submitFormObject) {
		$.post("http://localhost/api/users", submitFormObject)
			.done(function(data) {
				alert("register successfully");
			})
			.fail(function() {
				alert("error");
			});
	}

}