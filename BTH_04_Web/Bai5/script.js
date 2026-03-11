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



inputname1.addEventListener("input",(e)=>{
    clearError("inputname");
    console.log(e.target.value);
    let lenghtname = document.querySelector(".lenghtname");
    lenghtname.textContent= `${e.target.value.length}/50`;
    if(e.target.value.length>50){
        lenghtname.disable=true;
        lenghtname.textContent="Không thể nhập thêm";
        lenghtname.style.color="red";
    }
    else{
        lenghtname.style.color="black";
        lenghtname.disable=false;
    }
});
inputemail1.addEventListener("input",()=>clearError("inputemail"));
inputsdt1.addEventListener("input",()=>clearError("inputsdt"));
inputmk1.addEventListener("input",()=>{
    clearError("inputmk");
    console.log(inputmk1.value);
    let val = inputmk1.value.length;
    let value = inputmk1.value;

    const text = document.querySelector(".test");
    const color = document.querySelector(".color");
    const layer = document.querySelector(".level");
    console.log(color);
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const number = /[0-9]/.test(value);
    if(!value){
        text.textContent="";
        color.style.backgroundColor="";
        color.style.width="";
        color.style.height="";
        layer.style.display="none";

    }
    else if(val < 10){
        text.textContent="Yếu";
        color.style.backgroundColor="red";
        color.style.width="23%";
        color.style.height="10px";
        layer.style.display="block";
    }
    else if(hasLower && hasUpper && number){
        text.textContent="Mạnh";
        color.style.backgroundColor="green";
        color.style.width="60%";
        color.style.height="10px";
        layer.style.display="block";
    }
    else{
        text.textContent="Trung bình";
        color.style.backgroundColor="yellow";
        color.style.width="44%";
        color.style.height="10px";
        layer.style.display="block";
    }
    
    
});
function showPass(icon){
    let input = icon.parentElement.previousElementSibling;

    if(input.type === "password"){
        input.type = "text";
    }else{
        input.type = "password";
    }
}
inputmkagain1.addEventListener("input",()=>clearError("inputmkagain"));


function handleclick(a){
    if(a==1)
        return true
    else
        false;
}
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