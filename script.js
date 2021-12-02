var letters = /^[A-Za-zА-Яа-я -]+$/;

function formValidation() { 
    var uname = document.getElementById("name")
    var usecname = document.getElementById("secname")
    var uemail = document.getElementById("email")
    var uphnumber = document.getElementById("phnumber")
    var upassword = document.getElementById("password")

    if(uname_validation(uname)) {
        if(usecname_validation(usecname)) {
            if(uemail_validation(uemail)) {
                if(uphnumber_validation(uphnumber)) {
                    if(upassword_validation(upassword)) {

                    }
                }
            }
        }
    }
    return false
}

function uname_validation(uname) { // проверка на валидность имени пользователя

var uname_len = uname.value.length;



if (uname_len == 0 || !(uname.value.match(letters)) || uname_len > 100) {
    alert("Введите корректное имя.")
    return false
}
else {
    return true
}
}

function usecname_validation(usecname) { // проверка на валидность имени пользователя

var usecname_len = usecname.value.length;


if (usecname_len == 0 || usecname_len > 100 || !(usecname.value.match(letters))) {
    alert("Введите корректную фамилию.")
    return false
}
else {
    return true
}

}


function uemail_validation(uemail) {
var mailformat = /[-.\w]+@([\w-]+)+\.[\w-]{2,3}/
var uemail_len = uemail.value.length;

if (uemail_len < 2 || !(uemail.value.match(mailformat))) {
    alert("Введите корректный email")
    return false
}
else {
    return true
}
}
