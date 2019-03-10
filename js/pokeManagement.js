function getPokemon(){
  let request = new XMLHttpRequest();
  let query = Math.floor(Math.random() * 1000) + 1;
  request.open('GET', "http://pokeapi.co/api/v2/pokemon/"+query+"/",true);
  crossOrigin: null;
  request.onreadystatechange = function (aEvt){
      if (request.readyState == 4) {
          if (request.status == 200) {
              let pokemon = new Array(JSON.parse(request.response));
              showResults(pokemon);
          }
          else {
              alert("Not found Pokemon, try again...")
          }
      }
  };
  request.send(null);
}

function getSpecificPokemon(){
  let searchedPokemon = $('#nameIdPokemon').val();
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/"+searchedPokemon+"/",
    success: (result, status, xhr) =>
            {
                let pokemon = result;
                showresult(pokemon);
            },
    error: (xhr, status, error) =>
            {
                alert("Not found Pokemon, try again...");
            }
});
}

function showResults(pokeres) {
    console.log(pokeres);

    pokeres.forEach((poke) => {


        document.getElementById("pokename").innerHTML = poke.name;
        document.getElementById("pokeid").innerHTML = poke.id;
        document.getElementById("pokeweight").innerHTML = poke.weight;
        document.getElementById("pokeheight").innerHTML = poke.height;
        let img = document.createElement("img");

        img.src = poke.sprites.front_default;


        let pokeimg = document.getElementById("pokeimg");
        pokeimg.appendChild(img);

    });
}

function showresult(pokeresults){
  $('#pokename').html(pokeresults.name);
  $('#pokeid').html(pokeresults.id);
  $('#pokeweight').html(pokeresults.weight);
  $('#pokeheight').html(pokeresults.height);
  $('.pokepic img:first').remove();
  let img = $("<img></img>");
  img.attr('src',pokeresults.sprites.front_default);
  let pokeimg = $('#pokeimg');
  pokeimg.append(img);

}

let mypokes = []

function getE(id){
  return document.getElementById(id).innerHTML;
}

function clearCard(){
  $('#pokename').html("");
  $('#pokeid').html("");
  $('#pokeweight').html("");
  $('#pokeheight').html("");
  $('#pokeimg').html("");

}

function capturePokemon() {
  let newPoke = new Poke(getE("pokename"), getE("pokeid"), getE("pokeweight"), getE("pokeheight"), getE("pokeimg"));
  mypokes.push(newPoke);
  updateTable();
  clearCard();
}

function Poke(a, b, c, d, e) {
  let myPoke = {};
  myPoke.name = a;
  myPoke.id = b;
  myPoke.weight = c;
  myPoke.height = d;
  myPoke.img = e;
  return myPoke;
}


function obtainpokes(){
  let convJson = localStorage.getItem("mypokes");
  mypokes = JSON.parse(convJson);
}

function updateTable(){
  let table = document.getElementById("table"),
      tbody = document.getElementById("tbody");
      if (tbody)
          table.removeChild(tbody);
      tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tbody.setAttribute("id", "tbody");


  mypokes.forEach((mypoke) =>{
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let th = document.createElement("th");


    for (k in mypoke){
      td = document.createElement("td");
      td.innerHTML = mypoke[k];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);

  }

  );




}

updateTable()
