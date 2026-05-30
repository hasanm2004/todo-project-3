let btn =
document.getElementById(
"addBtn"
);

btn.onclick=function(){

let input=
document.getElementById(
"taskInput"
);

let li=
document.createElement(
"li"
);

li.innerText=input.value;


let del=
document.createElement(
"button"
);

del.innerText=
"Delete";

del.onclick=function(){

li.remove();

}

li.appendChild(del);

document
.getElementById(
"taskList"
)

.appendChild(li);

input.value="";

}