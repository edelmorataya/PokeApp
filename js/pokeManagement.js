function getPokemon(){
  let query = Math.floor(Math.random() * 1000) + 1;
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/"+query+"/",
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
  toast('success', 'bottom-end');
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
