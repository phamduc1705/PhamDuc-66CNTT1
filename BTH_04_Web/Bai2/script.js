const btnAdd = document.querySelector(".add-button");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const cancelBtns = document.querySelectorAll(".huy, .can-button");
const save = document.querySelector(".save-button");

const inputName = document.querySelector(".name");
const inputMark = document.querySelector(".mark");

const table = document.querySelector(".infotable");
const diem = document.querySelector(".dtb");
const search = document.querySelector(".inputsearch");
const sort = document.querySelector(".sort");
let students = [];
let filterstudents = [];
let currentList = students;
let nextId = 1;
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
    if(mark >= 5) return "Trung Bình";
    return "Yếu";
}

sort.addEventListener("click",()=>{
    if(sort.dataset.value==0){
        currentList.sort((a,b)=>a.mark-b.mark);    
        sort.dataset.value=1;
        sort.textContent="Điểm ▼";
        renderTable(currentList);
    }
    else{
        currentList.sort((a,b)=>b.mark-a.mark);
        sort.dataset.value=0;
        sort.textContent="Điểm ▲";
        renderTable(currentList);
    }
})

function tinhDTB(list){
    let tong = 0;
    
    list.forEach(s => {
        tong += s.mark;
    });
    
    diem.textContent = list.length ? (tong / list.length).toFixed(2) : 0;
}

function renderTable(list){
    
    const avgRow = document.getElementById("avgrow");
    
    table.querySelectorAll("tr:not(#avgrow)").forEach(r => r.remove());
    
    list.forEach((st, index) => {
        
        const tr = document.createElement("tr");
        
        if(st.mark < 5){
            tr.classList.add("colorline");
        }
        
        tr.innerHTML = `
        <td>${index + 1}</td>
            <td>${st.name}</td>
            <td class="mark1">${st.mark}</td>
            <td>${tinhdiem(st.mark)}</td>
            <td>
                <button class="edit-button">Edit</button>
                <button class="del-button" data-id="${st.id}">Delete</button>
            </td>
        `;

        table.insertBefore(tr, avgRow);
    });

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

    students.push({
        id: nextId++,
        name: name,
        mark: mark,
        rank: tinhdiem(mark)
    });

    currentList = students;
    renderTable(students);

    inputName.value = "";
    inputMark.value = "";
    inputName.focus();
});

table.addEventListener("click",(e)=>{

    if(e.target.classList.contains("del-button")){

        const id = Number(e.target.dataset.id);

        const index = students.findIndex(st => st.id === id);

        if(index !== -1){

            students.splice(index,1);
            if(currentList !== students){
                currentList = currentList.filter(st => st.id !== id);
                if(currentList.length === 0){
                    const avgRow = document.getElementById("avgrow");
                    table.querySelectorAll("tr:not(#avgrow)").forEach(r => r.remove());
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <td colspan="5" style="text-align:center;color:red">
                            Không có kết quả
                        </td>
                    `;
                    table.insertBefore(tr, avgRow);
                    diem.textContent = "0";
                } else {
                    renderTable(currentList);
                    tinhDTB(currentList);
                }

            } else {
                renderTable(students);
                tinhDTB(students);
            }
        }
    }

});
search.addEventListener("input",(e)=>{

    const value = e.target.value.toLowerCase();

    if(value === ""){
        currentList = students;
        renderTable(students);
        tinhDTB(students);
    } else {
        filterstudents = students.filter(st =>
            st.name.toLowerCase().includes(value)
        );
        currentList = filterstudents;
        if(filterstudents.length === 0){
            const avgRow = document.getElementById("avgrow");
            table.querySelectorAll("tr:not(#avgrow)").forEach(r => r.remove());
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td colspan="5" style="text-align:center;color:red">
                    Không có kết quả
                </td>
            `;
            table.insertBefore(tr, avgRow);
            diem.textContent = "0";
        } else {
            renderTable(filterstudents);
            tinhDTB(filterstudents);

        }
    }

});
const select = document.querySelector("select");
select.addEventListener("change",(e)=>{
    const rank = e.target.value;
    if(rank === "ALL"){
        currentList = students;
        renderTable(students);
        tinhDTB(students);
    } else {
        filterstudents = students.filter(st => st.rank === rank);
        currentList = filterstudents;
        if(filterstudents.length === 0){
            const avgRow = document.getElementById("avgrow");
            table.querySelectorAll("tr:not(#avgrow)").forEach(r => r.remove());
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td colspan="5" style="text-align:center;color:red">
                    Không có kết quả
                </td>
            `;
            table.insertBefore(tr, avgRow);
            diem.textContent = "0";
        } else {
            renderTable(filterstudents);
            tinhDTB(filterstudents);

        }
    }
})