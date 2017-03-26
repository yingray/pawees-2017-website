/* General Configuration */
var config = {
	host: 'http://localhost'
};

/* APIs Configuration using Ajax */
var apis = {
	Verification: function() {
		$.get(config.host + "/api/verification")
			.done(function(data) {
				if(data) {
					ChangeToLogin(data);
					autofillAllForm(data);
				}
			})
			.fail(function(err) {
				alert(err.responseText);
			});
	},
	Login: function(submitFormObject) {
		$.post(config.host + "/api/login", submitFormObject)
			.done(function(data) {
				apis.Verification()
				// window.location.href = '/';
			})
			.fail(function() {
				alert("Account or password is invalid.");
			});
	},
	Logout: function() {
		$.post(config.host + "/api/logout")
			.done(function(data) {
				window.location.href = '/';
			})
			.fail(function(err) {
				alert(err.responseText);
			});
	},
	SignUp: function(submitFormObject) {
		$.post(config.host + "/api/signup", submitFormObject)
			.done(function(data) {
				// window.location.href = '/';
				alert(data);
				apis.Login(submitFormObject);
			})
			.fail(function(err) {
				alert(err.responseText);
			});
	},
	UpdateProfile: function(submitFormObject) {
		$.post(config.host + "/api/users", submitFormObject)
			.done(function(data) {
				alert("register successfully", () => {
					apis.Logout();
				});
			})
			.fail(function(err) {
				alert(err.responseText);
			});
	}
}