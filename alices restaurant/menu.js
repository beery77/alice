// menu
menu = `{
    "menu": [
        {
        "id": 1,
        "titel": "Oksemørbrad",
        "beskrivelse": "Oksekød med pommes frites",
        "pris": "219.-",
        "ret": "hovedret",
        "foto": "okse.jpg"
        },
        {
        "id": 2,
        "titel": "Svinekæber",
        "beskrivelse": "Svinekæber med kartoffelmos",
        "pris": "239.-",
        "ret": "hovedret",
        "foto": "svin.jpg"
        },
        {
        "id": 3,
        "titel": "Hummerbisque",
        "beskrivelse": "Hummerbisque med vadehavsrejer",
        "pris": "79.-",
        "ret": "forret",
        "foto": "hummer.jpg"
        },
        {
        "id": 4,
        "titel": "Carpaccio",
        "beskrivelse": "Carpaccio med salat",
        "pris": "69.-",
        "ret": "forret",
        "foto": "carpaccio.jpg"
        },
        {
        "id": 5,
        "titel": "Is med chokoladefudge",
        "beskrivelse": "Vaniljeis med hjemmelavet chokoladefudge",
        "pris": "59.-",
        "ret": "dessert",
        "foto": "is.jpg"
        },
        {
        "id": 6,
        "titel": "Baked Alaska",
        "beskrivelse": "Vaniljeis med marengs og bund af brownie",
        "pris": "69.-",
        "ret": "dessert",
        "foto": "alaska.jpg"
        },
        {
        "id": 7,
        "titel": "Hvidløgsbrød",
        "beskrivelse": "Hjemmebagt brød med hvidløgssmør",
        "pris": "39.-",
        "ret": "tilbehør",
        "foto": "brød.jpg"
        }
    ]
  }`
  
  const xxx = JSON.parse(menu);
  console.log(xxx.menu[1].titel)
  
  for (let i=0; i<xxx.menu.length; i++) {
    console.log(xxx.menu[i].titel)
    menuliste.innerHTML += `
        <div class="menuTing">
            <h2>${xxx.menu[i].titel}</h2>
            <p>${xxx.menu[i].beskrivelse}</p>
            <h3>${xxx.menu[i].pris}</h3>
            <img src="images/${xxx.menu[i].foto}" alt="${xxx.menu[i].titel}">
        </div>
    `
    
  }