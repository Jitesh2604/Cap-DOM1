let API_KEY = "";

let container = document.getElementById("container");

let getData = async () => {

    try{
        let res  = await fetch('https://reqres.in/api/users');
        let data = await res.json();
        console.log(data);

        appendUserData(data);
    } catch(err){
        console.log("error")
    }
};

let appendUserData = (data) =>{

}