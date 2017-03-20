/* 1. Login Form Handle */
$('.login_title').click(function() {
	if($(this).html() === 'LOG IN') {
		const submitFormObject = {
			"email": $('.login > input[name="email"]').val(),
			"password": md5($('.login > input[name="password"]').val())
		}
		apis.Login(submitFormObject);
	} else {
		apis.Logout()
	}
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
			o[this.name].push(this.value.trim() || '');
		} else {
			o[this.name] = this.value.trim() || '';
		}
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
	var buttonMinor = '<input type="button" value="-" onclick="deltxt(' + nameId + ')">'
	$(element).parent().prepend('<li id="' + nameId + '">' + inputField + buttonMinor + '</li>')
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
			if (i === 0) $(b).val(obj[0].delegate[b.name])
			if (i === 1) {
				if (b.name === 'checkIn' || b.name === 'checkOut') {
					$(b).val(obj[0].accom[b.name].slice(0, 10))
				} else {
					$(b).val(obj[0].accom[b.name])
				}

			}
			if (i === 2) $(b).val(obj[0].flight[$(b).attr('flight')][b.name])
			if (i === 3) {
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
			case 0:
				submitFormObject.delegate = $(this).serializeObject()
				break
			case 1:
				submitFormObject.accom = $(this).serializeObject()
				break
			case 2:
				submitFormObject.flight = $(this).serializeObject()
				break
			case 3:
				submitFormObject.paper = $(this).serializeObject()
				break
			default:
				break
		}
	});

	apis.UpdateProfile(submitFormObject)

});

/* 6. Login Status */
function ChangeToLogin(data) {
	// $('.login').empty();
	// $('.login').append('<div> Welcome, ' + data[0].delegate.firstName + '</div>')
	// $('.login').append('<a onclick="apis.Logout()" style="cursor: pointer;"> logout </a>')
	$('.login_title').html('LOG OUT')
	$('.login').find('input').prop("disabled", true)
}