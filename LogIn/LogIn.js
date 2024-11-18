let mymodel = document.getElementById('mymodel');
let editpage = document.getElementById('editpage');
let CloseEditPage = document.getElementById('close-editpage');


let SignInLogpage = document.getElementById('sign-link').addEventListener('click', function () {
    let nameLog = document.getElementById('name-log').value;
    let emailLog = document.getElementById('email-log').value;
    let phnumberLog = document.getElementById('phnumber-log').value;
    let pass1Log = document.getElementById('pass1-log').value;
    let pass2Log = document.getElementById('pass2-log').value;

    let ErrnameLog = document.getElementById('errortext-name');
    let ErremailLog = document.getElementById('errortext-email');
    let ErrphnumberLog = document.getElementById('errortext-phnumber');
    let Errpass1Log = document.getElementById('errortext-password');
    let check = 0;
    if (nameLog.length < 3) {
        ErrnameLog.style.display = "block";
    }
    else {
        ErrnameLog.style.display = "none";
        check++;
    }
    let EmailerrLog = emailLog.indexOf("@gmail.com");
    if (EmailerrLog < 0) {
        ErremailLog.style.display = "block";
    }
    else {
        ErremailLog.style.display = "none";
        check++;

    }
    if (phnumberLog.length != 11 || phnumberLog.charAt(0) != '0') {
        ErrphnumberLog.style.display = "block";
    }
    else {
        ErrphnumberLog.style.display = "none";
        check++;

    }
    if (pass1Log.length < 8 || pass1Log != pass2Log) {
        Errpass1Log.style.display = "block";
    }
    else {
        Errpass1Log.style.display = "none";
        check++;

    }
    if (check == 4) {

        let Login = document.getElementById('login-div');
        let information = document.getElementById('information-div');
        information.style.display = "block";
        information.style.zIndex = "2";
        let UserName = document.getElementById('username').innerHTML = nameLog;
        let UserEmail = document.getElementById('user-email').innerHTML = emailLog;
        let UserPhNumber = document.getElementById('user-phnumber').innerHTML = phnumberLog;
        Login.style.left = "50%";
        Login.style.backgroundColor = "rgb(179, 255, 179)";
    }

});



let EditPageButton = document.getElementById('editpage-button');
EditPageButton.addEventListener('click', function () {
    editpage.style.top = "15em";
    editpage.style.display = "block";
    editpage.style.boxShadow = "0 0 100px rgba(0, 0, 0 , 1)";
    editpage.style.zIndex = "4";
    let UserName = document.getElementById('username').innerHTML
    let UserPhNumber = document.getElementById('user-phnumber').innerHTML
    let UserEmail = document.getElementById('user-email').innerHTML


    let nameeditINP = document.getElementById('username-edit').value = UserName;
    let phnumbereditINP = document.getElementById('phone-number-edit').value = UserPhNumber;
    let emaileditINP = document.getElementById('email-edit').value = UserEmail;


});
CloseEditPage.addEventListener('click', function () {
    editpage.style.top = "100em";
    editpage.style.zIndex = "1em";


});





let SaveButton = document.getElementById('savebutton').addEventListener('click', function () {
    let nameeditINP = document.getElementById('username-edit').value;
    let phnumbereditINP = document.getElementById('phone-number-edit').value;
    let emaileditINP = document.getElementById('email-edit').value;
    let checkedit = 0;
    if (nameeditINP.length > 2) {
        checkedit++;
    }
    else {
        alert('Your name is not acceptable !');

    }
    if (phnumbereditINP.length == 11 && phnumbereditINP.charAt(0) == '0') {
        checkedit++;

    }
    else {
        alert('Phone Number is not true !');

    }
    let Emailerr = emaileditINP.indexOf("@gmail.com");
    if (Emailerr >= 0) {
        checkedit++;

    }
    else {
        alert('Email address is not true !')

    }
    if (checkedit == 3) {
        let UserName = document.getElementById('username').innerHTML = nameeditINP;
        let UserPhNumber = document.getElementById('user-phnumber').innerHTML = phnumbereditINP;
        let UserEmail = document.getElementById('user-email').innerHTML = emaileditINP;
        editpage.style.top = "100em";


    }

});
