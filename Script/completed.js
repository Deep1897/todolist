var todocomp=JSON.parse(localStorage.getItem("comp")) ;

todocomp.map(function(ele){

    console.log(ele);
    var tr=document.createElement("tr");


    var td1=document.createElement("td");
    td1.innerText=ele.name;
    var td2=document.createElement("td");
    td2.innerText=ele.qty;
    var td3=document.createElement("td");
    td3.innerText=ele.priority;

    tr.append(td1,td2,td3);

    document.querySelector("#body").append(tr);

})