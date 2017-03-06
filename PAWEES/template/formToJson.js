$.fn.serializeObject = function()
{
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

// $(function() {
// 	$('form').submit(function() {
// 		$('#result').text(JSON.stringify($('form').serializeObject()));
// 		return false;
// 	});
// });

//set the default value
var txtId = 1;

//add input block in showBlock
$('input[data-type="array"]').click(function(event) {
	const name = event.target.name
	const nameId = name.concat(txtId)
	$(this).parent().append('<li id="' + nameId + '"> <input type="text" name="' + name + '"> <input type="button" value="-" onclick="deltxt(' + nameId + ')"> </li>')
	txtId++;
});
//remove div
function deltxt(nameId) {
	$(nameId).remove();
}