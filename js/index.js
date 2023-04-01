async function getData() {
    let responce = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=fefbcf366edd8e6c84a7623315fb1805")
    let json = await responce.json();
    json.results.forEach(element => {
        let div_tag = document.createElement('div');
        div_tag.setAttribute("class", "card")
        div_tag.setAttribute("style", "width: 18rem;")

        let img_tag = document.createElement('img');
        let image_path = "https://image.tmdb.org/t/p/w500_and_h282_face" + element["poster_path"]
        img_tag.setAttribute("src", image_path);
        img_tag.setAttribute("class", "card-img-top")
        img_tag.setAttribute("alt", "Card image cap")
        div_tag.appendChild(img_tag);

        let div_tag2 = document.createElement("div");
        div_tag2.setAttribute("class", "card-body");

        let h5_tag = document.createElement("h5");
        h5_tag.setAttribute("class", "card-title");
        h5_tag.innerHTML = element["original_title"];
        div_tag2.appendChild(h5_tag);

        let p_tag = document.createElement("p");
        p_tag.setAttribute("class", "card-text");
        p_tag.innerHTML = element["overview"];
        div_tag.appendChild(p_tag);

        let a_tag = document.createElement("a");
        a_tag.setAttribute("class", "btn btn-primary");
        a_tag.innerHTML = "Watch Now";
        div_tag2.appendChild(a_tag);

        div_tag.appendChild(div_tag2);
        document.body.appendChild(div_tag);
    });
}

function getItem(data) {
    var item = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="image_path" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${element["original_title"]}</h5>
        <p class="card-text">${element["overview"]}</p>
        <a href="#" class="btn btn-primary">Watch Now</a>
        </div>
    </div>
    `;
}

getData();





{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
