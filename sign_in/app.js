const buttonSub=document.getElementById('submitBtn');
let nameError=document.getElementById('nameerror');
let emailError=document.getElementById('emailerror');
let passError=document.getElementById('passerror');

let n1=document.getElementById("name");
let e1=document.getElementById("email");
let p1=document.getElementById("password");

buttonSub.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validateName() && validateemail() && validatePass()){
        alert("form submited");
        defaultset();
    }
});

function validateName(){
    let name1=document.getElementById('name').value;

    if(name1.length==0){
        nameError.innerHTML="Name is reqired";
        return false;
    }
    if(! name1.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Enter full name";
        return false;
    }
    nameError.innerHTML="";
    return true;
}

function validateemail(){
    let email=document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML="Email is reqired";
        return false;
    }
    if(! email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Enter valid email";
        return false;
    }
    emailError.innerHTML="";
    return true;
}

function validatePass(){
    let password1=document.getElementById('password').value;

    if(password1.length==0){
        passError.innerHTML="Password is reqired";
        return false;
    }
    if(! password1.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML="Enter valid password";
        return false;
    }
    passError.innerHTML="";
    return true;
}

function defaultset(){
    e1.innerText="";
    n1.innerText="";
    p1.innerText="";
}