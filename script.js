let input = document.getElementById("facts");
let button = document.querySelector("#sub");
let div = document.getElementById("res");


button.addEventListener("click", ()=> {
    div.innerHTML="";
    displayCard();
    console.log("sub")
});

const displayCard = async () => {
    let api = await fetch(`https://api.chucknorris.io/jokes/random?category=${input.value.toLowerCase()}`);
    let data = await api.json();
    console.log(data);
    let col = document.createElement('div');
    col.classList.add('col','text-center');
    col.innerHTML = `<div class="card text-white text-center bg-info mt-3">
      <div class="card-header">${(data.categories[0]).toUpperCase()}</div>
      <div class="card-body"><p class="card-text">Joke: <br> ${data?.value}</p><div>
    </div>`;
    div.append(col);
}