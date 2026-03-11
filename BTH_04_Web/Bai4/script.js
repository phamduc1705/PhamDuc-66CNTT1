let list = [];
const container = document.querySelector(".product");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {

    list = data.products;

    list.forEach((ele) => {

      let box = document.createElement("div");
      box.classList.add("box");

      box.innerHTML = `
        <div class="img">
            <img src="${ele.thumbnail}" alt="${ele.title}">
        </div>
        <div class="title">
            <h3>${ele.title}</h3>
        </div>
        <div class="description">
            <p>${ele.description}</p>
        </div>
        <button class="buy">Mua</button>
      `;
      container.appendChild(box);
    });
  });


function showError(nameclass, text) {

  const input = document.querySelector(`.${nameclass}`);
  const error = document.querySelector(`.${nameclass}-error`);
  if (input) input.style.borderColor = "red";
  if (error) error.textContent = text;

}

function clearError(nameclass) {

  const input = document.querySelector(`.${nameclass}`);
  const error = document.querySelector(`.${nameclass}-error`);
  if (input) input.style.borderColor = "";
  if (error) error.textContent = "";

}

function validateQuantity() {
  const quantity = document.querySelector(".quantity");
  const value = Number(quantity.value);
  if (value < 1 || value > 99) {
    showError("quantity", "Số lượng cho phép từ 1 đến 99");
    return false;
  }
  clearError("quantity");
  return true;
}


function validateDate() {
  const dateInput = document.querySelector(".day");
  const inputDate = new Date(dateInput.value);
  const now = new Date();
  now.setDate(now.getDate()-1);
  const future = new Date();
  future.setDate(now.getDate() + 30);
    if(inputDate == "Invalid Date"){
        showError("day","Vui lòng chọn ngày");
        return false;
    }
  if (inputDate < now) {
    showError("day", "Không được đặt ngày trong quá khứ");
    return false;
  }
  if (inputDate > future) {
    showError("day", "Không được quá 30 ngày");
    return false;
  }
  clearError("day");
  return true;
}

function radio(){
    const radi = document.querySelector("input[name=tt]:checked");
    if(!radi){
        alert("Vui lòng chọn phương thức thanh toán");
        return false;
    }
    return true;
}
function validateAddress() {

  const inputAddress = document.querySelector(".address");
  const address = inputAddress.value.trim();
  if (address === "") {
    showError("address", "Không được bỏ trống");
    return false;
  }
  if (address.length < 10) {
    showError("address", "Không bé hơn 10 kí tự");
    return false;
  }
  clearError("address");
  return true;
}
function validateTextarea(){
    const text = document.querySelector(".note1");
    const textarea= text.value;
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy")) {

    popup.classList.add("active");
    overlay.classList.add("active");

    const box = e.target.closest(".box");

    const title = box.querySelector(".title h3");
    const address = document.querySelector(".address");
    const inputTask = document.querySelector(".product1");
    const quantity = document.querySelector(".quantity");
    const area = document.querySelector(".note1");
    const day= document.querySelector(".day");
    address.value="";
    inputTask.value = title.textContent.trim();
    quantity.value = 1;
    area.value="";
    day.value="";
  }

});

popup.addEventListener("click", (e) => {

  if (e.target.classList.contains("cancel")) {
    popup.classList.remove("active");
    overlay.classList.remove("active");

  }

});


overlay.addEventListener("click", (e) => {
  popup.classList.remove("active");
  overlay.classList.remove("active");

});

document.querySelector(".quantity").addEventListener("blur", validateQuantity);
document.querySelector(".day").addEventListener("blur", validateDate);
document.querySelector(".address").addEventListener("blur", validateAddress);
const text = document.querySelector(".note1");
text.addEventListener("input",(e)=>{
    let count = document.querySelector(".count");
    if((e.target.value).length<=200){
        count.textContent = `${(e.target.value).length} /200`;

    }
    else{
        count.style.color="red";
        count.textContent="Không thể nhập thêm"
        count.disabled = true;
    }
})
const success = document.querySelector(".success");
const buynow=document.querySelector(".buynow");
buynow.addEventListener("click",(e)=>{
    e.preventDefault();
    const exactly= validateAddress()&
                    validateDate()&
                    validateQuantity()&
                    radio();
    if(exactly){
        popup.classList.remove("active");
        overlay.classList.remove("active");
        success.classList.add("active");
        setTimeout(()=>{
            success.classList.remove("active")
        },3000);
    }
    
})