const inputname1=document.querySelector(".inputname");
const inputemail1=document.querySelector(".inputemail");
const inputsdt1=document.querySelector(".inputsdt");
const inputmk1=document.querySelector(".inputmk");
const inputmkagain1=document.querySelector(".inputmkagain");

const btnsubmit = document.querySelector(".btn");

function showError(nameclass , message){
    const input = document.querySelector("."+ nameclass);
    const error = document.querySelector("." + nameclass +"-error");
    
    input.style.borderColor="red";
    error.textContent=message;
    
}
function clearError(nameclass){
    const input = document.querySelector("."+ nameclass);
    const error = document.querySelector("." + nameclass +"-error");

    input.style.borderColor="black";
    error.textContent="";
}


function validateName(){
    const val = inputname1.value.trim();
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/;

    if(val === ""){
        showError("inputname","Không được để trống");
        return false;
    }
    if(val.length < 3){
        showError("inputname","Ít nhất 3 ký tự");
        return false;
    }
    if(!regex.test(val)){
        showError("inputname","Chỉ chứa chữ cái");
        return false;
    }
    clearError("inputname");
    return true;
}
function validateEmail(){
    const val = inputemail1.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(val === ""){
        showError("inputemail","Không được để trống");
        return false;
    }
    if(!regex.test(val)){
        showError("inputemail","Email không hợp lệ");
        return false;
    }
    clearError("inputemail");
    return true;
}
function validatePhone(){
    const val = inputsdt1.value.trim();
    const regex = /^0[0-9]{9}$/;
    if(val === ""){
        showError("inputsdt","Không được để trống");
        return false;
    }
    if(!regex.test(val)){
        showError("inputsdt","SĐT không hợp lệ");
        return false;
    }
    clearError("inputsdt");
    return true;
}
function validatePassword(){

    const val = inputmk1.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(val === ""){
        showError("inputmk","Không được để trống");
        return false;
    }
    if(!regex.test(val)){
        showError("inputmk","Mật khẩu yếu");
        return false;
    }
    clearError("inputmk");
    return true;
}

function validatePasswordAgain(){

    const mk = inputmk1.value;
    const mkagain = inputmkagain1.value;
    if(mkagain !== mk){
        showError("inputmkagain","Mật khẩu không khớp");
        return false;
    }
    clearError("inputmkagain");
    return true;
}
function checkbox(){
    const checkbox = document.querySelector("#tick");
    if(!checkbox.checked){
        alert("Hãy đồng ý với điều khoản");
        return false;
    }
    return true;
}

function radio(){
    const radio = document.querySelector("input[name=sex]:checked")
    if(!radio){
        alert("Vui lòng chọn giới tính");
        return false;
    }
    return true;
}



inputname1.addEventListener("blur",validateName);
inputemail1.addEventListener("blur",validateEmail);
inputsdt1.addEventListener("blur",validatePhone);
inputmk1.addEventListener("blur",validatePassword);
inputmkagain1.addEventListener("blur",validatePasswordAgain);

inputname1.addEventListener("input",()=>clearError("inputname"));
inputemail1.addEventListener("input",()=>clearError("inputemail"));
inputsdt1.addEventListener("input",()=>clearError("inputsdt"));
inputmk1.addEventListener("input",()=>clearError("inputmk"));
inputmkagain1.addEventListener("input",()=>clearError("inputmkagain"));


btnsubmit.addEventListener("click",(e)=>{

    e.preventDefault();

    const valid =
        validateName() &
        validateEmail() &
        validatePhone() &
        validatePassword() &
        validatePasswordAgain()&
        checkbox()&
        radio();

    if(valid){
        alert("Đăng ký thành công 🎉");
    }

});