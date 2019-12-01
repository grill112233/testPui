function validateForm() {
  var x = document.forms["myForm"]["username"].value;
  var y = document.forms["myForm"]["password"].value;
  
  if (x == "" || y == "") {
	document.getElementById("alert").innerHTML = "* กรุณากรอก username หรือ password";
	document.getElementById("alert").style.display = "block";
    return false;
  }else if (x.length > 30 || y.length > 30) {
	document.getElementById("alert").innerHTML = "* ตัวอักษรเกิน 30 ตัว";
	document.getElementById("alert").style.display = "block";
    return false;
  }else if (x.length < 5) {
	document.getElementById("alert").innerHTML = "* ความยาวของ username ต้องมากกว่าหรือเท่ากับ 5";
	document.getElementById("alert").style.display = "block";
    return false;
  }else if (y.length < 8) {
	document.getElementById("alert").innerHTML = "* ความยาวของ password ต้องมากกว่าหรือเท่ากับ 8";
	document.getElementById("alert").style.display = "block";
    return false;
  }else if(x != data[0].user){
	document.getElementById("alert").innerHTML = "* username ไม่ถูกต้อง";
	document.getElementById("alert").style.display = "block";
    return false;
  }else if(y != data[0].pass){
	document.getElementById("alert").innerHTML = "* password ไม่ถูกต้อง";
	document.getElementById("alert").style.display = "block";
    return false;
  }
}
function openCity(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  colortab = document.getElementsByClassName("tabFontWhite")
  for (i = 0; i < colortab.length; i++) {
    colortab[i].style.color = "white";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "rgba(220, 220, 220)";
  elmnt.style.color = "#696969";
}




