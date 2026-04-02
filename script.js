const inputname = document.querySelector(".name");
const inputaddress = document.querySelector(".address");
const inputdate = document.querySelector(".date");
const inputgmail = document.querySelector(".email");
const inputdiengia=document.querySelector(".name1");
const submitBtn = document.querySelector(".success");
const btnadd=document.querySelector(".add");
const popup=document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");
btnadd.addEventListener("click",()=>{
    popup.classList.add("active");
    overlay.classList.add("active");
})
cancel.addEventListener("click",()=>{
    popup.classList.remove("active");
    overlay.classList.remove("active");
})
overlay.addEventListener("click",()=>{
    popup.classList.remove("active");
    overlay.classList.remove("active");
})
function showError(input, message) {
    const error = input.nextElementSibling;
    input.style.border = "2px solid red";

    if (error) {
        error.textContent = message;
        error.style.display = "block";
    }
}

function hideError(input) {
    const error = input.nextElementSibling;
    input.style.border = "2px solid green";

    if (error) {
        error.textContent = "";
        error.style.display = "none";
    }
}
function validateFullName(input) {
    const value = input.value.trim();
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/;

    if (value === "") {
        showError(input, "Không được để trống");
        return false;
    }

    if (!regex.test(value)) {
        showError(input, "Chỉ được chứa chữ và khoảng trắng");
        return false;
    }

    hideError(input);
    return true;
}
function validateBirthDate(input) {
    const value = input.value;

    if (value === "") {
        showError(input, "Không được để trống");
        return false;
    }

    const birthDate = new Date(value);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // nếu chưa tới sinh nhật năm nay thì trừ 1
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        showError(input,"Phải lớn hơn ngày hiện tại")
    }

    hideError(input);
    return true;
}
function validateGmail(input) {
    const value = input.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (value === "") {
        showError(input, "Không được để trống");
        return false;
    }

    if (!regex.test(value)) {
        showError(input, "Email phải dạng @gmail.com");
        return false;
    }

    hideError(input);
    return true;
}
function validatehoithao(input){
    const value=input.value.trim();
    if(value===""){
        showError(input,"Không được bỏ trống");
        return;
    }
    if(value.lenght>=60){
        showError(input,"Không được quá 60 kí tự");
        return
    }
    hideError(input);
    return true;
}

submitBtn.addEventListener("click",()=>{
    const ok = validatehoithao(inputname) && validateBirthDate(inputdate) && validateGmail(inputgmail) && validateFullName(inputdiengia);
    if(ok){
        alert("Đăng ký thành công");
    }
})