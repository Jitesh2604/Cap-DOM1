document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container");

    async function getData() {
        try {
            const res = await fetch('https://reqres.in/api/users');
            const { data } = await res.json();

            appendUserData(data);
        } catch (err) {
            console.log("error", err);
        }
    }

    function appendUserData(data) {
        container.innerHTML = "";
        data.forEach(ele => {
            let userDiv = document.createElement("div");
            userDiv.className = 'userData';

            let image = document.createElement('img');
            image.src = ele.avatar;

            let name = document.createElement('p');
            name.innerText = `Name: ${ele.first_name} ${ele.last_name}`;

            let mail = document.createElement('p');
            mail.innerText = `Email Id: ${ele.email}`;

            userDiv.append(image, name, mail);
            container.append(userDiv);
        });
    }

    getData();
});