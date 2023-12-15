let API_KEY = "6717248f";

//let URL =  "https://www.omdbapi.com/?i=tt1630029&apikey=6717248f";

let container = document.getElementById("display");

let getData = async () => {

    try{
        
        let res = await fetch(`https://www.omdbapi.com/?i=tt1630029&apikey=${API_KEY}`);

        let data = await res.json();
        appendData(data);
        // console.log(data)
    } catch(err){
        console.log(err)
    }
};
// getData()

let appendData = (data) => {
    container.innerHTML = null;

        let imageDiv = document.createElement('div');
        imageDiv.setAttribute("id", "img");

        let img = document.createElement('img');
        img.src = data.Poster;

        imageDiv.append(img);

        let infoDiv = document.createElement('div');
        infoDiv.setAttribute("id", "info");

        let title = document.createElement('p');
        title.innerText = `Tittle: ${data.Title}`;

        let year = document.createElement('p');
        year.innerText = `Year: ${data.Year}`;

        let actor = document.createElement('p');
        actor.innerText = `Actors: ${data.Actors}`;

        let writer = document.createElement('p');
        writer.innerText = `Directors: ${data.Director}`;

        let gener = document.createElement('p');
        gener.innerText  = `Gener: ${data.Genre}`;

        let plot = document.createElement('p');
        plot.innerText = `Plot: ${data.Plot}`;

        let language = document.createElement('p');
        language.innerText = `Language: ${data.Language}`;

        infoDiv.append(title, year, actor, writer, gener, plot, language);

        container.append(imageDiv, infoDiv);
};