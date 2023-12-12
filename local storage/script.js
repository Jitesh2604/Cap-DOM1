
document.addEventListener("displayData", function(){
    displayData();
});

function storeData(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    localStorage.setItem("user_Name", name);
    localStorage.setItem("user_age", age);

    // displayData();
};

function displayData(){
    let storedName = localStorage.getItem('user_Name');
    let storedAge = localStorage.getItem('user_age');

    if(storedName && storedAge){
        document.getElementById("display").innerHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>${storedName}</td>
                    <td>${storedAge}</td>
                </tr>
            </table>
        `;
    };
};
