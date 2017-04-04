/* 1. Login Form Handle */
$('.login[data-log="login"] .button').click(function() {
	const submitFormObject = {
		"email": $('.login[data-log="login"] input[name="email"]').val(),
		"password": md5($('.login[data-log="login"] input[name="password"]').val())
	}
	apis.Login(submitFormObject);
})

$('.login[data-log="signup"] .button').click(function() {
	const submitFormObject = {
		"email": $('.login[data-log="signup"] input[name="email"]').val(),
		"password": md5($('.login[data-log="signup"] input[name="password"]').val())
	}
	const validEmail = submitFormObject.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
	const validPassword = $('.login[data-log="signup"] input[name="password"]').val().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

	if(validEmail && validPassword) {
		apis.SignUp(submitFormObject);
	} else if (!validEmail) {
		alert('Not a valid email address. Please try again.');
	} else if(!validPassword) {
		alert('Password need to be at least 8 characters and include 1 letter and 1 number.');
	} else {
		alert('error');
	}
})

$('.login[data-log="logout"] .button').click(function() {
	apis.Logout();
})


/* 2. Serialize Object for Form to Json */
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			if(this.value.trim())
				o[this.name].push(this.value.trim() || '');
		} else {
			o[this.name] = this.value.trim() || '';
		}
		console.log(o)
	});
	return o;
};

/* 3. Multi-input Component */
var txtId = 1;

function appendInputField(element, value) {
	var value = value ? value : '';
	var name = $(element).attr('name');
	var nameId = name.concat(txtId);
	var inputField = '<input type="text" name="' + name + '"value="' + value + '">';
	if(name === 'affiliations') {
		inputField = 	'<input type="text" name="' + name + '"value="' + value + '" style="width: 400px;">';
	}
	var buttonMinor = '<input type="button" value="-" onclick="deltxt(' + nameId + ')">'
	$(element).before('<li id="' + nameId + '">' + inputField + buttonMinor + '</li>')
	txtId++;
}

$('input[data-type="array"]').click(function() {
	appendInputField(this);
});

function deltxt(nameId) {
	$(nameId).remove();
}

/* 4. Auto-fill out data in Forms */
function autofillAllForm(obj) {
	$('form').map((i, f) =>
		$(f).find('input, select, textarea').map((a, b) => {
			if (i === 2) $(b).val(obj[0].delegate[b.name])
			if (i === 3) {
				if (b.name === 'checkIn' || b.name === 'checkOut') {
					$(b).val(obj[0].accom[b.name].slice(0, 10))
				} else {
					$(b).val(obj[0].accom[b.name])
				}

			}
			if (i === 4) $(b).val(obj[0].flight[$(b).attr('flight')][b.name])
			if (i === 5) {
				if ($(b).attr('data-type')) {
					obj[0].paper[b.name].map(string => {
						appendInputField(b, string);
					})
				} else {
					$(b).val(obj[0].paper[b.name])
				}
			}
		}))
}

/* 5. Registration Submitting */
$('.submit_info').click(function() {

	var form = $("form");
	var submitFormObject = {}

	form.each(function(index) {
		switch (index) {
			case 2:
				submitFormObject.delegate = $(this).serializeObject()
				break
			case 3:
				submitFormObject.accom = $(this).serializeObject()
				break
			case 4:
				submitFormObject.flight = $(this).serializeObject()
				break
			case 5:
				submitFormObject.paper = $(this).serializeObject()
				break
			default:
				break
		}
	});

	confirm("Are you sure you want to submit this form?", function(result) {
		if(result) {
			apis.UpdateProfile(submitFormObject);
		}
	});


});

/* 6. Login Status */
function ChangeToLogin(data) {
	$('.Registration_Page').find('form:nth-child(1)').addClass('write_done');
	$('.Registration_Page').find('form:nth-child(1)').removeClass('write_form');
	$('.Registration_Page').find('form:nth-child(2)').addClass('write_form');
	$('.Registration_Page').find('form:nth-child(2) input[name="email"]').val(data[0].delegate.email);
}

/* 7. Loading Start */
var loadingStatus = 0;

if(loadingStatus <= 0) {
	LoadingEnd()
} else {
	LoadingStart()
}

function LoadingStart() {
	$('.fixed_shadow[data-loading="pawees"]').addClass('fixed_shadow2');
}

function LoadingEnd() {
	$('.fixed_shadow[data-loading="pawees"]').removeClass('fixed_shadow2');
}