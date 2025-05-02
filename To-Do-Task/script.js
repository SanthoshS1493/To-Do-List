let input =document.querySelector("#inputTask")
let btn=document.querySelector("button")


btn.addEventListener("click",(ele)=>{
    ele.preventDefault();
    let text=input.value.trim();
 
    if(text==="") {
        return;
    }
    

    let li=document.createElement("li");
    li.className="list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML=`
    ${text}
    <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalDisplay" onclick="removeTask(this)">Delete</button>`;

    document.getElementById("taskList").appendChild(li);
    input.value=" ";

    


})

function removeTask(button){

    let yes=document.querySelector("#yes");
    let no=document.querySelector("#no");

    yes.addEventListener('click',(ele)=>{
        ele.preventDefault();
        button.parentElement.remove();
    })

    no.addEventListener("click",(ele)=>{
        return;
    })
}

