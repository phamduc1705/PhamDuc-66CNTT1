const btnnext= document.querySelector(".next");
const btnprevious=document.querySelector(".btnprevious");
const inputpas=document.querySelector(".inputpassword");
const inputpas1=document.querySelector(".inputpassword2");
const inputemail = document.querySelector(".inputemail");
const inputname = document.querySelector(".inputname");
const dateinput =document.querySelector(".inputdate");
const popupfirst = document.querySelector(".body");
const popup2=document.querySelector(".box2");
const popup3=document.querySelector(".box3");
const textname = document.querySelector(".textname");
const textdate = document.querySelector(".textdate");
const textsex = document.querySelector(".textsex");
const textemail = document.querySelector(".textemail");
const textmk = document.querySelector(".textmk");
const text=document.querySelector(".text");
const color = document.querySelector(".color");
const success = document.querySelector(".success");
function showError(nameclass, text) {

  const input = document.querySelector(`.${nameclass}`);
  const error = document.querySelector(`.${nameclass}-error`);

    if (input) 
        input.style.borderColor = "red";
    if (error){
        error.textContent = text;
        error.style.color="red";
        } 

}
function validateDate(){
    if(dateinput.value==""){
        showError("inputdate","Vui lòng chọn ngày sinh");
        return false;
    }
    return true;
}
function clearError(nameclass) {

  const input = document.querySelector(`.${nameclass}`);
  const error = document.querySelector(`.${nameclass}-error`);

  if (input) input.style.borderColor = "";
  if (error) error.textContent = "";

}

function radio(){
    const radi = document.querySelector("input[name=sex]:checked");
    if(!radi){
        alert("Vui lòng chọn phương thức thanh toán");
        return false;
    }
    return true;
}
function validateName(){
    if(inputname.value.length<10){
        showError("inputname","Tên không được dưới 10 kí tự");
        return false;
    }
    return true;
}


function validateEmail(){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = inputemail.value.trim();
    if(value.length<3){
        showError("inputemail","Email quá ngắn");
        return false;
    }
    if(!regex.test(value)){
        showError("inputemail","Email không hợp lệ");
        return false;
    }
    clearError("inputemail");
    return true;
}
function validatePassword(){
    
    const val = inputpas.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(val === ""){
        showError("inputpassword","Không được để trống");
        return false;
    }

    if(!regex.test(val)){
        showError("inputpassword","Mật khẩu yếu");
        return false;
    }

    clearError("inputpassword");
    return true;
}

function validatePasswordAgain(){
    const mk = inputpas.value;
    const mkagain = inputpas1.value;

    if(mkagain !== mk){
        showError("inputpassword2","Mật khẩu không khớp");
        return false;
    }

    clearError("inputpassword2");
    return true;
}
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("next")){
        let page = e.target.closest("[data-set]").dataset.set;
        const ok=validateName()
                    & radio()
                    & validateDate();
        if(page=="1" &&ok){
            popupfirst.classList.add("hidden");
            popup2.classList.add("active");
            text.textContent="2/3";
            color.style.width="60%";
        }
        const ok2=validateEmail()
                    & validatePassword()
                    & validatePasswordAgain();
        if(page=="2" &&ok2){
            popup2.classList.remove("active");
            popup3.classList.add("active");
            const radi = document.querySelector("input[name=sex]:checked");
            textname.textContent=inputname.value;
            textdate.textContent=dateinput.value;
            textsex.textContent=radi.value;
            textemail.textContent=inputemail.value;
            textmk.textContent=inputpas.value;
            text.textContent="3/3";
            color.style.width="100%";
        }
    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btnprevious")){

        let page = e.target.closest("[data-set]").dataset.set;
        if(page=="2"){
            popup2.classList.remove("active");
            popupfirst.classList.remove("hidden");
            text.textContent="1/3";
            color.style.width="30%";
        }
        if(page=="3"){
            popup3.classList.remove("active")
            popup2.classList.add("active");
            text.textContent="2/3";
            color.style.width="60%";
        }
    }
})

const submit = document.querySelector(".ok");
submit.addEventListener("click",()=>{
    const radi = document.querySelector("input[name=sex]:checked");
    popup3.classList.remove("active");
    popupfirst.classList.remove("hidden");
    inputname.value="";
    dateinput.value="";
    radi.checked=false;
    inputemail.value="";
    textname.textContent="";
    textdate.textContent="";
    textsex.textContent="";
    textemail.textContent="";
    textmk.textContent="";
    text.textContent="1/3";
    color.style.width="30%";
    success.classList.add("active");
    setTimeout(()=>{
        success.classList.remove("active");
    },3000)
})