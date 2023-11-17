document.querySelector("form").addEventListener("submit",todoApp);
let taskArr = [];
function todoApp(event) {
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;
    
    let taskObj = {
        task : taskName,
        prior : priority,
    };

       taskArr.push(taskObj);
       displayTable(taskArr)
}

function displayTable(taskArr){
    document.querySelector("tbody").innerHTML="";
    taskArr.forEach(function (element) {
      
     let row = document.createElement("tr");
     let col1 = document.createElement("td");
     col1.innerText=element.task;
     let col2 = document.createElement("td");
     col2.innerText=element.prior;
        if(element.prior == "High"){
            col2.style.backgroundColor="red";
        }
        else{
            col2.style.backgroundColor="green";
        }
     let col3 = document.createElement("td");
     col3.innerText="Delete";
     col3.addEventListener("click",function(event){
        event.target.parentNode.remove()
     });
     col3.style.color="red";
     col3.style.cursor="pointer"
     row.append(col1,col2,col3);
     document.querySelector("tbody").append(row);  
    });
}


