const btnAdd = document.querySelector(".add-button");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const cancelBtns = document.querySelectorAll(".huy, .can-button");
const save = document.querySelector(".save-button");

const inputName = document.querySelector(".name");
const inputMark = document.querySelector(".mark");

const table = document.querySelector(".infotable");
const diem = document.querySelector(".dtb");


btnAdd.addEventListener("click", () => {
    form.classList.add("ghost");
    overlay.classList.add("active");
});

function closeForm(){
    form.classList.remove("ghost");
    overlay.classList.remove("active");
}

overlay.addEventListener("click", closeForm);
cancelBtns.forEach(btn => btn.addEventListener("click", closeForm));

function tinhdiem(mark){
    if(mark >= 8.5) return "Giỏi";
    if(mark >= 7) return "Khá";
    if(mark >= 5) return "Trung bình";
    return "Yếu";
}

function tinhDTB(){
    const marks = document.querySelectorAll(".mark1");
    let tong = 0;

    marks.forEach(m => {
        tong += parseFloat(m.textContent);
    });

    diem.textContent = (tong / marks.length).toFixed(2);
}

save.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = inputName.value.trim();
    const mark = parseFloat(inputMark.value);
    if(!name || isNaN(mark)){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    if(mark < 0 || mark > 10){
        alert("Điểm phải từ 0 - 10");
        return;
    }
    const marks = document.querySelectorAll(".mark1");
    const index = marks.length;
    const tr = document.createElement("tr");
    if(mark < 5){
        tr.classList.add("colorline");
    }
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${name}</td>
        <td class="mark1">${mark}</td>
        <td>${tinhdiem(mark)}</td>
        <td>
            <button class="edit-button">Edit</button>
            <button class="del-button" data-index="${index}">Delete</button>
        </td>
    `;
    const avgRow = document.getElementById("avgrow");
    table.insertBefore(tr, avgRow);
    tinhDTB();
    inputName.value = "";
    inputMark.value = "";
    inputName.focus();
});

table.addEventListener("click",(e)=>{
    if(e.target.classList.contains("del-button")){
        const row = e.target.closest("tr");
        row.remove();
        tinhDTB();
    }
});