/* General Configuration */
var config = {
	host: 'http://localhost'
};

/* APIs Configuration using Ajax */
var apis = {
	Verification: function() {
		LoadingStart();
		$.get(config.host + "/api/verification")
			.done(function(data) {
				LoadingEnd();
				if(data) {
					ChangeToLogin(data);
					autofillAllForm(data);
				}
			})
			.fail(function(err) {
				LoadingEnd();
				alert(err.responseText);
			});
	},
	Login: function(submitFormObject) {
		LoadingStart();
		$.post(config.host + "/api/login", submitFormObject)
			.done(function(data) {
				LoadingEnd();
				apis.Verification()
				// window.location.href = '/';
			})
			.fail(function() {
				LoadingEnd();
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
		LoadingStart();
		$.post(config.host + "/api/users", submitFormObject)
			.done(function(data) {
				LoadingEnd();
				alert("Update the profile successfully!", () => {
					apis.Logout();
				});
			})
			.fail(function(err) {
				LoadingEnd();
				if (err.status === 401) {
					alert(err.responseJSON, () => {
						apis.Logout();
					});
				} else {
					alert('Error!')
				}
			});
	}
}