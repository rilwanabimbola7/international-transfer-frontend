function validate(val) {
    v1 = document.getElementById("senderfname");
    v2 = document.getElementById("senderlname");
    v3 = document.getElementById("senderemail");
    v4 = document.getElementById("senderphone");
    v5 = document.getElementById("nairaamount");
    v6 = document.getElementById("dollaramount");
    v7 = document.getElementById("receiverfirstname");
    v8 = document.getElementById("receiverlastname");
    v9 = document.getElementById("receiveremail");
    v10 = document.getElementById("receiverphonenumber");
    v11 = document.getElementById("receiverbankname");
    v12 = document.getElementById("receiveraccountnumber");

    
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;
    flag6 = true;
    flag7 = true;
    flag8 = true;
    flag9 = true;
    flag10 = true;
    flag11 = true;
    flag12 = true;

    
    if(val==1 ) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            flag1 = true;
        }
    }
    if(val==2) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            flag2 = true;
        }
    }    
    if(val==3) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            flag3 = true;
        }
    }
    if(val==4) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            flag4 = true;
        }
    }
    if(val==5) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "green";
            flag5 = true;
        }
    }
    if(val==6) {
        if(v6.value == "") {
            v6.style.borderColor = "red";
            flag6 = false;
        }
        else {
            v6.style.borderColor = "green";
            flag6 = true;
        }
    }
    if(val==7) {
        if(v7.value == "") {
            v7.style.borderColor = "red";
            flag7 = false;
        }
        else {
            v7.style.borderColor = "green";
            flag7 = true;
        }
    }
    if(val==8) {
        if(v8.value == "") {
            v8.style.borderColor = "red";
            flag8 = false;
        }
        else {
            v8.style.borderColor = "green";
            flag8 = true;
        }
    }
    if(val==9) {
        if(v9.value == "") {
            v9.style.borderColor = "red";
            flag9 = false;
        }
        else {
            v9.style.borderColor = "green";
            flag9 = true;
        }
    }
    if(val==10) {
        if(v10.value == "") {
            v10.style.borderColor = "red";
            flag10 = false;
        }
        else {
            v10.style.borderColor = "green";
            flag10 = true;
        }
    }
    if(val=11) {
        if(v11.value == "") {
            v11.style.borderColor = "red";
            flag11 = false;
        }
        else {
            v11.style.borderColor = "green";
            flag11 = true;
        }
    }
    if(val==12) {
        if(v12.value == "") {
            v12.style.borderColor = "red";
            flag12 = false;
        }
        else {
            v12.style.borderColor = "green";
            flag11 = true;
        }
    }

    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8 && flag9 && flag10 && flag11 && flag12 ;
    
    return flag;
    }











// (function () {
//     'use strict'
//     const forms = document.querySelectorAll('.requires-validation')
//     Array.from(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
    
//           form.classList.add('was-validated')
//         }, false)
//       })
//     })()
    