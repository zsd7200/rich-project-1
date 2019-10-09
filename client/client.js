// array of all pokemon names
const allPokemon = [
    "Abomasnow", "Abra", "Absol", "Accelgor", "Aegislash", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Alomomola", "Altaria", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Anorith", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Ariados", "Armaldo", "Aromatisse", "Aron", "Articuno", "Audino", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barbaracle", "Barboach", "Basculin", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blaziken", "Blissey", "Blitzle", "Boldore", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole", "Cacnea", "Cacturne", "Camerupt", "Carbink", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Celesteela", "Chandelure", "Chansey", "Charizard", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Cloyster", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Corphish", "Corsola", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cutiefly", "Cyndaquil", "Darkrai", "Darmanitan", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys-Attack", "Deoxys-Defense", "Deoxys-Normal", "Deoxys-Speed", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diggersby", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Doublade", "Dragalge", "Dragonair", "Dragonite", "Drampa", "Drapion", "Dratini", "Drifblim", "Drifloon", "Drilbur", "Drowzee", "Druddigon", "Ducklett", "Dugtrio", "Dunsparce", "Duosion", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble", "Eelektrik", "Eelektross", "Eevee", "Ekans", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Excadrill", "Exeggcute", "Exeggutor", "Exploud", "Farfetch\'d", "Fearow", "Feebas", "Fennekin", "Feraligatr", "Ferroseed", "Ferrothorn", "Finneon", "Flaaffy", "Flabebe", "Flareon", "Fletchinder", "Fletchling", "Floatzel", "Floette", "Florges", "Flygon", "Fomantis", "Foongus", "Forretress", "Fraxure", "Frillish", "Froakie", "Frogadier", "Froslass", "Furfrou", "Furret", "Gabite", "Gallade", "Galvantula", "Garbodor", "Garchomp", "Gardevoir", "Gastly", "Gastrodon", "Genesect", "Gengar", "Geodude", "Gible", "Gigalith", "Girafarig", "Giratina", "Glaceon", "Glalie", "Glameow", "Gligar", "Gliscor", "Gloom", "Gogoat", "Golbat", "Goldeen", "Golduck", "Golem", "Golett", "Golisopod", "Golurk", "Goodra", "Goomy", "Gorebyss", "Gothita", "Gothitelle", "Gothorita", "Gourgeist", "Granbull", "Graveler", "Greninja", "Grimer", "Grotle", "Groudon", "Grovyle", "Growlithe", "Grubbin", "Grumpig", "Gulpin", "Gumshoos", "Gurdurr", "Guzzlord", "Gyarados", "Hakamo-o", "Happiny", "Hariyama", "Haunter", "Hawlucha", "Haxorus", "Heatmor", "Heatran", "Heliolisk", "Helioptile", "Heracross", "Herdier", "Hippopotas", "Hippowdon", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-Oh", "Honchkrow", "Honedge", "Hoopa", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndour", "Huntail", "Hydreigon", "Hypno", "Igglybuff", "Illumise", "Incineroar", "Infernape", "Inkay", "Ivysaur", "Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Karrablast", "Kartana", "Kecleon", "Keldeo", "Kingdra", "Kingler", "Kirlia", "Klang", "Klefki", "Klink", "Klinklang", "Koffing", "Komala", "Kommo-o", "Krabby", "Kricketot", "Kricketune", "Krokorok", "Krookodile", "Kyogre", "Kyurem", "Lairon", "Lampent", "Landorus", "Lanturn", "Lapras", "Larvesta", "Larvitar", "Latias", "Latios", "Leafeon", "Leavanny", "Ledian", "Ledyba", "Lickilicky", "Lickitung", "Liepard", "Lileep", "Lilligant", "Lillipup", "Linoone", "Litleo", "Litten", "Litwick", "Lombre", "Lopunny", "Lotad", "Loudred", "Lucario", "Ludicolo", "Lugia", "Lumineon", "Lunala", "Lunatone", "Lurantis", "Luvdisc", "Luxio", "Luxray", "Lycanroc", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magearna", "Magikarp", "Magmar", "Magmortar", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Malamar", "Mamoswine", "Manaphy", "Mandibuzz", "Manectric", "Mankey", "Mantine", "Mantyke", "Maractus", "Mareanie", "Mareep", "Marill", "Marowak", "Marshadow", "Marshtomp", "Masquerain", "Mawile", "Medicham", "Meditite", "Meganium", "Meloetta-Aria", "Meloetta-Pirouette", "Meowstic", "Meowth", "Mesprit", "Metagross", "Metang", "Metapod", "Mew", "Mewtwo", "Mienfoo", "Mienshao", "Mightyena", "Milotic", "Miltank", "Mime Jr.", "Mimikyu", "Minccino", "Minior", "Minun", "Misdreavus", "Mismagius", "Moltres", "Monferno", "Morelull", "Mothim", "Mr. Mime", "Mudbray", "Mudkip", "Mudsdale", "Muk", "Munchlax", "Munna", "Murkrow", "Musharna", "Naganadel", "Natu", "Necrozma", "Nidoking", "Nidoqueen", "Nidoran-F", "Nidoran-M", "Nidorina", "Nidorino", "Nihilego", "Nincada", "Ninetales", "Ninjask", "Noctowl", "Noibat", "Noivern", "Nosepass", "Numel", "Nuzleaf", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Oranguru", "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu", "Oshawott", "Pachirisu", "Palkia", "Palossand", "Palpitoad", "Pancham", "Pangoro", "Panpour", "Pansage", "Pansear", "Paras", "Parasect", "Passimian", "Patrat", "Pawniard", "Pelipper", "Persian", "Petilil", "Phanpy", "Phantump", "Pheromosa", "Phione", "Pichu", "Pidgeot", "Pidgeotto", "Pidgey", "Pidove", "Pignite", "Pikachu", "Pikipek", "Piloswine", "Pineco", "Pinsir", "Piplup", "Plusle", "Poipole", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Ponyta", "Poochyena", "Popplio", "Porygon2", "Porygon", "Porygon-Z", "Primarina", "Primeape", "Prinplup", "Probopass", "Psyduck", "Pumpkaboo", "Pupitar", "Purrloin", "Purugly", "Pyroar", "Pyukumuku", "Quagsire", "Quilava", "Quilladin", "Qwilfish", "Raichu", "Raikou", "Ralts", "Rampardos", "Rapidash", "Raticate", "Rattata", "Rayquaza", "Regice", "Regigigas", "Regirock", "Registeel", "Relicanth", "Remoraid", "Reshiram", "Reuniclus", "Rhydon", "Rhyhorn", "Rhyperior", "Ribombee", "Riolu", "Rockruff", "Roggenrola", "Roselia", "Roserade", "Rotom", "Rowlet", "Rufflet", "Sableye", "Salamence", "Salandit", "Salazzle", "Samurott", "Sandile", "Sandshrew", "Sandslash", "Sandygast", "Sawk", "Sawsbuck", "Scatterbug", "Sceptile", "Scizor", "Scolipede", "Scrafty", "Scraggy", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Seismitoad", "Sentret", "Serperior", "Servine", "Seviper", "Sewaddle", "Sharpedo", "Shaymin", "Shedinja", "Shelgon", "Shellder", "Shellos", "Shelmet", "Shieldon", "Shiftry", "Shiinotic", "Shinx", "Shroomish", "Shuckle", "Shuppet", "Sigilyph", "Silcoon", "Silvally", "Simipour", "Simisage", "Simisear", "Skarmory", "Skiddo", "Skiploom", "Skitty", "Skorupi", "Skrelp", "Skuntank", "Slaking", "Slakoth", "Sliggoo", "Slowbro", "Slowking", "Slowpoke", "Slugma", "Slurpuff", "Smeargle", "Smoochum", "Sneasel", "Snivy", "Snorlax", "Snorunt", "Snover", "Snubbull", "Solgaleo", "Solosis", "Solrock", "Spearow", "Spewpa", "Spheal", "Spinarak", "Spinda", "Spiritomb", "Spoink", "Spritzee", "Squirtle", "Stakataka", "Stantler", "Staraptor", "Staravia", "Starly", "Starmie", "Staryu", "Steelix", "Steenee", "Stoutland", "Stufful", "Stunfisk", "Stunky", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swadloon", "Swalot", "Swampert", "Swanna", "Swellow", "Swinub", "Swirlix", "Swoobat", "Sylveon", "Taillow", "Talonflame", "Tangela", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Tepig", "Terrakion", "Throh", "Thundurus", "Timburr", "Tirtouga", "Togedemaru", "Togekiss", "Togepi", "Togetic", "Torchic", "Torkoal", "Tornadus", "Torracat", "Torterra", "Totodile", "Toucannon", "Toxapex", "Toxicroak", "Tranquill", "Trapinch", "Treecko", "Trevenant", "Tropius", "Trubbish", "Trumbeak", "Tsareena", "Turtonator", "Turtwig", "Tympole", "Tynamo", "Type: Null", "Typhlosion", "Tyranitar", "Tyrantrum", "Tyrogue", "Tyrunt", "Umbreon", "Unfezant", "Unown", "Ursaring", "Uxie", "Vanillish", "Vanillite", "Vanilluxe", "Vaporeon", "Venipede", "Venomoth", "Venonat", "Venusaur", "Vespiquen", "Vibrava", "Victini", "Victreebel", "Vigoroth", "Vikavolt", "Vileplume", "Virizion", "Vivillon", "Volbeat", "Volcanion", "Volcarona", "Voltorb", "Vullaby", "Vulpix", "Wailmer", "Wailord", "Walrein", "Wartortle", "Watchog", "Weavile", "Weedle", "Weepinbell", "Weezing", "Whimsicott", "Whirlipede", "Whiscash", "Whismur", "Wigglytuff", "Wimpod", "Wingull", "Wishiwashi", "Wobbuffet", "Woobat", "Wooper", "Wormadam", "Wurmple", "Wynaut", "Xatu", "Xerneas", "Xurkitree", "Yamask", "Yanma", "Yanmega", "Yungoos", "Yveltal", "Zangoose", "Zapdos", "Zebstrika", "Zekrom", "Zeraora", "Zigzagoon", "Zoroark", "Zorua", "Zubat", "Zweilous", "Zygarde"
];

// type names with bulbapedia image links
const typeImages = {
    "???" : "https://cdn.bulbagarden.net/upload/3/3c/UnknownIC_Big.png",
    "normal" : "https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png",
    "fighting" : "https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png",
    "flying" : "https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png",
    "poison" : "https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png",
    "ground" : "https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png",
    "rock" : "https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png",
    "bug" : "https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png",
    "ghost" : "https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png",
    "steel" : "https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png",
    "fire" : "https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png",
    "water" : "https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png",
    "grass" : "https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png",
    "electric" : "https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png",
    "psychic" : "https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png",
    "ice" : "https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png",
    "dragon" : "https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png",
    "dark" : "https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png",
    "fairy" : "https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png",
};

// helper to return random pokemon
const randomPoke = () => {
    return allPokemon[(Math.floor((Math.random() * allPokemon.length) + 1))];
};

// modified from:
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
const capitalize = (string) => {
    
    let newString = "";
    
    // handle special cases first, then go through the default way of parsing for capitalization
    switch(string) {
        case "jangmo-o":
            newString = "Jangmo-o";
            break;
        case "hakamo-o":
            newString = "Hakamo-o";
            break;
        case "kommo-o":
            newString = "Kommo-o";
            break;
        case "type-null":
            newString = "Type: Null";
            break;
        case "farfetchd":
            newString = "Farfetch'd";
            break;
        case "nidoran-m":
            newString = "Nidoran&#9794;";
            break;
        case "nidoran-f":
            newString = "Nidoran&#9792;";
            break;
        case "porygon-z":
            newString = "Porygon-Z";
            break;
        case "flabebe":
            newString = "Flab&eacute;b&eacute;";
            break;
        default: 
            // create a newString variable with a capital first letter
            newString = string.charAt(0).toUpperCase() + string.slice(1);
        
            // loop through to see if there's a dash
            for(let i = 0; i < newString.length; i++)
                if(newString[i] === "-") {
                    // if a dash is found, make two new strings, then add them together
                    const beforeDash = newString.slice(0, i);
                    const afterDash = newString.charAt(i + 1).toUpperCase() + newString.slice(i + 2);
                    newString = beforeDash + " " + afterDash;
                }
                
            break;
    }
    
    return newString;

    // return string
    return newString;
};

const handleResponse = (xhr) => {   
    // grab dom elements
    const name = document.querySelector('#pkmnName');
    const img = document.querySelector('#pkmnImg');
    const shinyImg = document.querySelector('#pkmnShiny');
    const type1 = document.querySelector('#pkmnType1');
    const type2 = document.querySelector('#pkmnType2');
    const stats = {
        'hp_bar' : document.querySelector('#hpBar'),
        'hp_num' : document.querySelector('#hpNum'),
        'atk_bar' : document.querySelector('#atkBar'),
        'atk_num' : document.querySelector('#atkNum'),
        'def_bar' : document.querySelector('#defBar'),
        'def_num' : document.querySelector('#defNum'),
        'spatk_bar' : document.querySelector('#spAtkBar'),
        'spatk_num' : document.querySelector('#spAtkNum'),
        'spdef_bar' : document.querySelector('#spDefBar'),
        'spdef_num' : document.querySelector('#spDefNum'),
        'spd_bar' : document.querySelector('#spdBar'),
        'spd_num' : document.querySelector('#spdNum'),
    };

    switch (xhr.status) {
        case 200:
            name.innerHTML = `<b>Success</b>`;
            break;
        case 201:
            name.innerHTML = `<b>Create</b>`;
            break;
        case 204:
            name.innerHTML = `<b>Updated (No Content)</b>`;
            break;
        case 400:
            name.innerHTML = `<b>Bad Request</b>`;
            break;
        case 404:
            name.innerHTML = `<b>Resource Not Found</b>`;
            break;
        default:
            name.innerHTML = `Error code not implemented by client.`;
            break;
    }
    
    const obj = JSON.parse(xhr.response);
    console.log(obj);
    
    // get name with proper formatting
    name.innerHTML = capitalize("" + obj.name);
    
    // get sprites
    img.src = obj.sprites.front_default;
    if(obj.sprites.front_shiny) {
        shinyImg.hidden = false;
        shinyImg.src = obj.sprites.front_shiny;
    } else {
        shinyImg.hidden = true;
    }
    
    // get types
    type1.src = typeImages[obj.types[0].type.name];
    type1.title = "Type 1: " + obj.types[0].type.name;
    if(obj.types.length == 2) {
        type2.hidden = false;
        type2.src = typeImages[obj.types[1].type.name];
        type2.title = "Type 2: " + obj.types[1].type.name;
    } else {
        type2.hidden = true;
    }
    
    // get stats (text)
    stats["spd_num"].innerHTML = obj.stats[0].base_stat;
    stats["spdef_num"].innerHTML = obj.stats[1].base_stat;
    stats["spatk_num"].innerHTML = obj.stats[2].base_stat;
    stats["def_num"].innerHTML = obj.stats[3].base_stat;
    stats["atk_num"].innerHTML = obj.stats[4].base_stat;
    stats["hp_num"].innerHTML = obj.stats[5].base_stat;
    
    // get stats (bars)
    $(stats["spd_bar"]).animate({
        width: '' + obj.stats[0].base_stat + 'px'
    });
    $(stats["spdef_bar"]).animate({
        width: '' + obj.stats[1].base_stat + 'px'
    });
    $(stats["spatk_bar"]).animate({
        width: '' + obj.stats[2].base_stat + 'px'
    });
    $(stats["def_bar"]).animate({
        width: '' + obj.stats[3].base_stat + 'px'
    });
    $(stats["atk_bar"]).animate({
        width: '' + obj.stats[4].base_stat + 'px'
    });
    $(stats["hp_bar"]).animate({
        width: '' + obj.stats[5].base_stat + 'px'
    });
};

const requestUpdate = (e, input) => {
    const url = "/pokemon?=" + input.value;
    console.log(url);

    // create new Ajax request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'application/json');

    // if get request or head request
    xhr.onload = () => handleResponse(xhr);

    xhr.send();
    e.preventDefault();
    return false;
};

//function to send our post request
const sendPost = (e, nameForm) => {
    const nameAction = nameForm.getAttribute('action');
    const nameMethod = nameForm.getAttribute('method');

    const nameField = nameForm.querySelector('#nameField');
    const ageField = nameForm.querySelector('#ageField');

    // create new Ajax request
    const xhr = new XMLHttpRequest();
    xhr.open(nameMethod, nameAction);

    // set headers and set onload to handle response
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = () => handleResponse(xhr, true);

    // build x-www-form-urlencoded formatted name/age
    const formData = `name=${nameField.value}&age=${ageField.value}`;

    xhr.send(formData);
    e.preventDefault();
    return false;
};

const init = () => {
    const content = document.querySelector("#content");
    const input = document.querySelector("#input");
    input.placeholder = randomPoke();
    
    const getData = (e) => requestUpdate(e, input);

    $(input).autocomplete({
        source: function(request, response) {
            // https://api.jqueryui.com/autocomplete/#entry-examples
            let matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");

            const results = matcher.test($.ui.autocomplete.filter(allPokemon, request.term))
            response($.grep(allPokemon, function(item) {
                return matcher.test(item);
            }).slice(0, 10));
        }
    });
    
    const getButton = document.querySelector("#getButton");
    getButton.addEventListener('click', () => {
        if(input.value === "") {
            input.value = input.placeholder;
        }
        
        input.value = input.value.replace("'", "").replace(" ", "-").replace(":-", "-").toLowerCase();
    
        if (content.hidden === true) {
            content.hidden = false;
            $(content).animate({
                opacity: 1.0
            }, 500);
        }
    });
    
    getButton.addEventListener('click', getData);
    
    const ballButton = document.querySelector("#ballButton");
    ballButton.addEventListener('click', () => {
        input.value = randomPoke();
        getButton.click();
    });
    
    const closeButton = document.querySelector("#close");
    closeButton.addEventListener('click', () => {
        $(content).animate({
            opacity: 0.0
        }, 500, () => {
            content.hidden = true;
        });
    });
};

window.onload = init;