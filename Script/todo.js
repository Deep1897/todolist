
var listOfTodo=JSON.parse(localStorage.getItem("todolist")) ;
var complete=JSON.parse(localStorage.getItem("complete"))||[];
console.log(complete);
listOfTodo.map(function(ele) {


    var tr=document.createElement("tr");
var td1=document.createElement("td");
td1.innerText=ele.name;
var td2=document.createElement("td");
td2.innerText=ele.qty;
var td3=document.createElement("td");
td3.innerText=ele.priority;
var td4=document.createElement("td");
td4.innerText="mark complete"
td4.style.color="red";
td4.style.cursor="pointer";
td4.addEventListener("click",function(){
    markfun(ele);
});
tr.append(td1,td2,td3,td4);
document.querySelector("#body").append(tr);
    

});

function markfun(ele)
{
  complete.push(ele);
  localStorage.setItem("comp",JSON.stringify(complete));
}