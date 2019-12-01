function profile() {
	var element = document.getElementById("showpro");
	if(element.style.display === "block")
		element.style.display = "none";
	else
		element.style.display = "block";
}
function validateRegis() {
  var x = document.forms["myRegis"]["message"].value;
  var y = document.forms["myRegis"]["phone1"].value;
  var z = document.forms["myRegis"]["phone2"].value;
  if (x == "" || y == "" || z == "") {
	document.getElementById("alert").innerHTML = "* กรุณากรอกข้อมูลให้ครบทุกช่อง";
	document.getElementById("alert").style.display = "block";
    return false;
	}else if(!z.match(/^\d+/) || !y.match(/^\d+/)){
	document.getElementById("alert").innerHTML = "* กรุณากรอกช่องเบอร์โทรศัพท์เป็น 0-9 เท่านั้น";
	document.getElementById("alert").style.display = "block";
    return false;
	}
}


