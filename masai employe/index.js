document.querySelector("form").addEventListener("submit",record);
let recordArr=[];
function record(event){
    event.preventDefault();
    let doctorName=document.querySelector("#name").value;
    let doctorId=document.querySelector("#id").value;
    let doctorSpec=document.querySelector("#specialization").value;
    let doctorExperiance=Number(document.querySelector("#exp").value);
    let doctorEmail=document.querySelector("#email").value;
    let doctorMbl=document.querySelector("#mbl").value;

    let doctorObj={
        name : doctorName,
        id : doctorId,
        spec : doctorSpec,
        experiance : doctorExperiance,
        email : doctorEmail,
        mobile : doctorMbl
    };

       recordArr.push(doctorObj);
       displayTable(recordArr);
}

function displayTable(recordArr){
    document.querySelector("tbody").innerHTML="";
    recordArr.forEach(function (element) {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText=element.name;
        let col2 = document.createElement("td");
        col2.innerText=element.id;
        let col3 = document.createElement("td");
        col3.innerText=element.spec;
        let col4 = document.createElement("td");
        col4.innerText=element.experiance;
        let col5 = document.createElement("td");
        col5.innerText=element.email;
        let col6 = document.createElement("td");
        col6.innerText=element.mobile;
        let col7 = document.createElement("td");
            if(expValue>5){
                col7.innerText="Senior";  
            }
            if(col4.innerText>=2 && col4.innerText<=5){
                col7.innerText="Junior";
            }
            if(col4.innerText<2){
                col7.innerText="Fresher";
            }
        let col8 = document.createElement("td");
        col8.innerText="Delete";
        col8.addEventListener("click",function(event){
             event.target.parentNode.remove()
        });
        col8.style.color="red";
        col8.style.cursor="pointer"
        row.append(col1,col2,col3,col4,col5,col6,col7,col8);
        document.querySelector("tbody").append(row);
    });
}