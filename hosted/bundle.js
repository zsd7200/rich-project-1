"use strict";

// array of all pokemon names
var allPokemon = ["Abomasnow", "Abomasnow Mega", "Abra", "Absol", "Absol Mega", "Accelgor", "Aegislash", "Aegislash Blade", "Aerodactyl", "Aerodactyl Mega", "Aggron", "Aggron Mega", "Aipom", "Alakazam", "Alakazam Mega", "Alomomola", "Altaria", "Altaria Mega", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Ampharos Mega", "Anorith", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Ariados", "Armaldo", "Aromatisse", "Aron", "Articuno", "Audino", "Audino Mega", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Banette Mega", "Barbaracle", "Barboach", "Basculin Blue-Striped", "Basculin Red-Striped", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beedrill Mega", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blastoise Mega", "Blaziken", "Blaziken Mega", "Blissey", "Blitzle", "Boldore", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole", "Cacnea", "Cacturne", "Camerupt", "Camerupt Mega", "Carbink", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Castform Rainy", "Castform Snowy", "Castform Sunny", "Caterpie", "Celebi", "Celesteela", "Chandelure", "Chansey", "Charizard", "Charizard Mega-X", "Charizard Mega-Y", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Cloyster", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Corphish", "Corsola", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cutiefly", "Cyndaquil", "Darkrai", "Darmanitan Standard", "Darmanitan Zen", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys", "Deoxys Attack", "Deoxys Defense", "Deoxys Speed", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diancie Mega", "Diggersby", "Diglett", "Diglett Alola", "Ditto", "Dodrio", "Doduo", "Donphan", "Doublade", "Dragalge", "Dragonair", "Dragonite", "Drampa", "Drapion", "Dratini", "Drifblim", "Drifloon", "Drilbur", "Drowzee", "Druddigon", "Ducklett", "Dugtrio", "Dugtrio Alola", "Dunsparce", "Duosion", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble", "Eelektrik", "Eelektross", "Eevee", "Ekans", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Excadrill", "Exeggcute", "Exeggutor", "Exeggutor Alola", "Exploud", "Farfetch\'d", "Fearow", "Feebas", "Fennekin", "Feraligatr", "Ferroseed", "Ferrothorn", "Finneon", "Flaaffy", "Flabebe", "Flareon", "Fletchinder", "Fletchling", "Floatzel", "Floette", "Florges", "Flygon", "Fomantis", "Foongus", "Forretress", "Fraxure", "Frillish", "Froakie", "Frogadier", "Froslass", "Furfrou", "Furret", "Gabite", "Gallade", "Gallade Mega", "Galvantula", "Garbodor", "Garchomp", "Garchomp Mega", "Gardevoir", "Gardevoir Mega", "Gastly", "Gastrodon", "Genesect", "Gengar", "Gengar Mega", "Geodude", "Geodude Alola", "Gible", "Gigalith", "Girafarig", "Giratina", "Giratina Origin", "Glaceon", "Glalie", "Glalie Mega", "Glameow", "Gligar", "Gliscor", "Gloom", "Gogoat", "Golbat", "Goldeen", "Golduck", "Golem", "Golem Alola", "Golett", "Golisopod", "Golurk", "Goodra", "Goomy", "Gorebyss", "Gothita", "Gothitelle", "Gothorita", "Gourgeist", "Gourgeist Small", "Gourgeist Large", "Gourgeist Super", "Granbull", "Graveler", "Graveler Alola", "Greninja", "Greninja Ash", "Grimer", "Grimer Alola", "Grotle", "Groudon", "Groudon Primal", "Grovyle", "Growlithe", "Grubbin", "Grumpig", "Gulpin", "Gumshoos", "Gurdurr", "Guzzlord", "Gyarados", "Gyarados Mega", "Hakamo-o", "Happiny", "Hariyama", "Haunter", "Hawlucha", "Haxorus", "Heatmor", "Heatran", "Heliolisk", "Helioptile", "Heracross", "Heracross Mega", "Herdier", "Hippopotas", "Hippowdon", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-Oh", "Honchkrow", "Honedge", "Hoopa", "Hoopa Unbound", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndoom Mega", "Houndour", "Huntail", "Hydreigon", "Hypno", "Igglybuff", "Illumise", "Incineroar", "Infernape", "Inkay", "Ivysaur", "Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Kangaskhan Mega", "Karrablast", "Kartana", "Kecleon", "Keldeo Ordinary", "Keldeo Resolute", "Kingdra", "Kingler", "Kirlia", "Klang", "Klefki", "Klink", "Klinklang", "Koffing", "Komala", "Kommo-o", "Krabby", "Kricketot", "Kricketune", "Krokorok", "Krookodile", "Kyogre", "Kyogre Primal", "Kyurem", "Kyurem Black", "Kyurem White", "Lairon", "Lampent", "Landorus Incarnate", "Landorus Therian", "Lanturn", "Lapras", "Larvesta", "Larvitar", "Latias", "Latias Mega", "Latios", "Latios Mega", "Leafeon", "Leavanny", "Ledian", "Ledyba", "Lickilicky", "Lickitung", "Liepard", "Lileep", "Lilligant", "Lillipup", "Linoone", "Litleo", "Litten", "Litwick", "Lombre", "Lopunny", "Lopunny Mega", "Lotad", "Loudred", "Lucario", "Lucario Mega", "Ludicolo", "Lugia", "Lumineon", "Lunala", "Lunatone", "Lurantis", "Luvdisc", "Luxio", "Luxray", "Lycanroc", "Lycanroc Dusk", "Lycanroc Midnight", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magearna", "Magikarp", "Magmar", "Magmortar", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Malamar", "Mamoswine", "Manaphy", "Mandibuzz", "Manectric", "Manectric Mega", "Mankey", "Mantine", "Mantyke", "Maractus", "Mareanie", "Mareep", "Marill", "Marowak", "Marowak Alola", "Marshadow", "Marshtomp", "Masquerain", "Mawile", "Mawile Mega", "Medicham", "Medicham Mega", "Meditite", "Meganium", "Meloetta", "Meloetta Pirouette", "Meowstic Male", "Meowstic Female", "Meowth", "Meowth Alola", "Mesprit", "Metagross", "Metagross Mega", "Metang", "Metapod", "Mew", "Mewtwo", "Mewtwo Mega-X", "Mewtwo Mega-Y", "Mienfoo", "Mienshao", "Mightyena", "Milotic", "Miltank", "Mime Jr.", "Mimikyu", "Minccino", "Minior Meteor", "Minior Core", "Minun", "Misdreavus", "Mismagius", "Moltres", "Monferno", "Morelull", "Mothim", "Mr. Mime", "Mudbray", "Mudkip", "Mudsdale", "Muk", "Muk Alola", "Munchlax", "Munna", "Murkrow", "Musharna", "Naganadel", "Natu", "Necrozma", "Necrozma Dusk Mane", "Necrozma Dawn Wings", "Necrozma Ultra", "Nidoking", "Nidoqueen", "Nidoran F", "Nidoran M", "Nidorina", "Nidorino", "Nihilego", "Nincada", "Ninetales", "Ninetails Alola", "Ninjask", "Noctowl", "Noibat", "Noivern", "Nosepass", "Numel", "Nuzleaf", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Oranguru", "Oricorio Baile", "Oricorio Pa'u", "Oricorio Pom-Pom", "Oricorio Sensu", "Oshawott", "Pachirisu", "Palkia", "Palossand", "Palpitoad", "Pancham", "Pangoro", "Panpour", "Pansage", "Pansear", "Paras", "Parasect", "Passimian", "Patrat", "Pawniard", "Pelipper", "Persian", "Persian Alola", "Petilil", "Phanpy", "Phantump", "Pheromosa", "Phione", "Pichu", "Pidgeot", "Pidgeot Mega", "Pidgeotto", "Pidgey", "Pidove", "Pignite", "Pikachu", "Pikipek", "Piloswine", "Pineco", "Pinsir", "Pinsir Mega", "Piplup", "Plusle", "Poipole", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Ponyta", "Poochyena", "Popplio", "Porygon2", "Porygon", "Porygon-Z", "Primarina", "Primeape", "Prinplup", "Probopass", "Psyduck", "Pumpkaboo", "Pumpkaboo Small", "Pumpkaboo Large", "Pumpkaboo Super", "Pupitar", "Purrloin", "Purugly", "Pyroar", "Pyukumuku", "Quagsire", "Quilava", "Quilladin", "Qwilfish", "Raichu", "Raichu Alola", "Raikou", "Ralts", "Rampardos", "Rapidash", "Raticate", "Raticate Alola", "Rattata", "Ratatta Alola", "Rayquaza", "Rayquaza Mega", "Regice", "Regigigas", "Regirock", "Registeel", "Relicanth", "Remoraid", "Reshiram", "Reuniclus", "Rhydon", "Rhyhorn", "Rhyperior", "Ribombee", "Riolu", "Rockruff", "Roggenrola", "Roselia", "Roserade", "Rotom", "Rotom Fan", "Rotom Frost", "Rotom Heat", "Rotom Mow", "Rotom Wash", "Rowlet", "Rufflet", "Sableye", "Sableye Mega", "Salamence", "Salamence Mega", "Salandit", "Salazzle", "Samurott", "Sandile", "Sandshrew", "Sandshrew Alola", "Sandslash", "Sandslash Alola", "Sandygast", "Sawk", "Sawsbuck", "Scatterbug", "Sceptile", "Sceptile Mega", "Scizor", "Scizor Mega", "Scolipede", "Scrafty", "Scraggy", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Seismitoad", "Sentret", "Serperior", "Servine", "Seviper", "Sewaddle", "Sharpedo", "Sharpedo Mega", "Shaymin", "Shaymin Sky", "Shedinja", "Shelgon", "Shellder", "Shellos", "Shelmet", "Shieldon", "Shiftry", "Shiinotic", "Shinx", "Shroomish", "Shuckle", "Shuppet", "Sigilyph", "Silcoon", "Silvally", "Simipour", "Simisage", "Simisear", "Skarmory", "Skiddo", "Skiploom", "Skitty", "Skorupi", "Skrelp", "Skuntank", "Slaking", "Slakoth", "Sliggoo", "Slowbro", "Slowbro Mega", "Slowking", "Slowpoke", "Slugma", "Slurpuff", "Smeargle", "Smoochum", "Sneasel", "Snivy", "Snorlax", "Snorunt", "Snover", "Snubbull", "Solgaleo", "Solosis", "Solrock", "Spearow", "Spewpa", "Spheal", "Spinarak", "Spinda", "Spiritomb", "Spoink", "Spritzee", "Squirtle", "Stakataka", "Stantler", "Staraptor", "Staravia", "Starly", "Starmie", "Staryu", "Steelix", "Steelix Mega", "Steenee", "Stoutland", "Stufful", "Stunfisk", "Stunky", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swadloon", "Swalot", "Swampert", "Swampert Mega", "Swanna", "Swellow", "Swinub", "Swirlix", "Swoobat", "Sylveon", "Taillow", "Talonflame", "Tangela", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Tepig", "Terrakion", "Throh", "Thundurus Incarnate", "Thundurus Therian", "Timburr", "Tirtouga", "Togedemaru", "Togekiss", "Togepi", "Togetic", "Torchic", "Torkoal", "Tornadus Incarnate", "Tornadus Therian", "Torracat", "Torterra", "Totodile", "Toucannon", "Toxapex", "Toxicroak", "Tranquill", "Trapinch", "Treecko", "Trevenant", "Tropius", "Trubbish", "Trumbeak", "Tsareena", "Turtonator", "Turtwig", "Tympole", "Tynamo", "Type: Null", "Typhlosion", "Tyranitar", "Tyranitar Mega", "Tyrantrum", "Tyrogue", "Tyrunt", "Umbreon", "Unfezant", "Unown", "Ursaring", "Uxie", "Vanillish", "Vanillite", "Vanilluxe", "Vaporeon", "Venipede", "Venomoth", "Venonat", "Venusaur", "Venusaur Mega", "Vespiquen", "Vibrava", "Victini", "Victreebel", "Vigoroth", "Vikavolt", "Vileplume", "Virizion", "Vivillon", "Volbeat", "Volcanion", "Volcarona", "Voltorb", "Vullaby", "Vulpix", "Vulpix Alola", "Wailmer", "Wailord", "Walrein", "Wartortle", "Watchog", "Weavile", "Weedle", "Weepinbell", "Weezing", "Whimsicott", "Whirlipede", "Whiscash", "Whismur", "Wigglytuff", "Wimpod", "Wingull", "Wishiwashi Solo", "Wishiwashi School", "Wobbuffet", "Woobat", "Wooper", "Wormadam Plant", "Wormadam Sandy", "Wormadam Trash", "Wurmple", "Wynaut", "Xatu", "Xerneas", "Xurkitree", "Yamask", "Yanma", "Yanmega", "Yungoos", "Yveltal", "Zangoose", "Zapdos", "Zebstrika", "Zekrom", "Zeraora", "Zigzagoon", "Zoroark", "Zorua", "Zubat", "Zweilous", "Zygarde", "Zygarde 10%", "Zygarde Complete"];

// type names with bulbapedia image links
var typeImages = {
    "???": "https://cdn.bulbagarden.net/upload/3/3c/UnknownIC_Big.png",
    "normal": "https://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png",
    "fighting": "https://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png",
    "flying": "https://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png",
    "poison": "https://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png",
    "ground": "https://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png",
    "rock": "https://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png",
    "bug": "https://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png",
    "ghost": "https://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png",
    "steel": "https://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png",
    "fire": "https://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png",
    "water": "https://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png",
    "grass": "https://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png",
    "electric": "https://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png",
    "psychic": "https://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png",
    "ice": "https://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png",
    "dragon": "https://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png",
    "dark": "https://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png",
    "fairy": "https://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png"
};

// helper to return random pokemon
var randomPoke = function randomPoke() {
    return allPokemon[Math.floor(Math.random() * allPokemon.length + 1)];
};

// modified from:
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
var handleName = function handleName(string) {

    var newString = "";

    // handle special cases first, otherwise do default way of parsing for capitalization
    switch (string) {
        case "aegislash-blade":
            newString = "Aegislash - Blade Forme";
            break;
        case "aegislash-shield":
            newString = "Aegislash - Shield Forme";
            break;
        case "basculin-blue-striped":
            newString = "Basculin Blue-Striped";
            break;
        case "basculin-red-striped":
            newString = "Basculin Red-Striped";
            break;
        case "charizard-mega-x":
            newString = "Mega Charizard X";
            break;
        case "charizard-mega-y":
            newString = "Mega Charizard Y";
            break;
        case "darmanitan-standard":
            newString = "Darmanitan";
            break;
        case "darmanitan-zen":
            newString = "Darmanitan - Zen Mode";
            break;
        case "deoxys-normal":
            newString = "Deoxys";
            break;
        case "farfetchd":
            newString = "Farfetch'd";
            break;
        case "flabebe":
            newString = "Flab&eacute;b&eacute;";
            break;
        case "giratina-altered":
            newString = "Giratina - Altered Forme";
            break;
        case "giratina-origin":
            newString = "Giratina - Origin Forme";
            break;
        case "gourgeist-average":
            newString = "Gourgeist - Average Size";
            break;
        case "gourgeist-large":
            newString = "Gourgeist - Large Size";
            break;
        case "gourgeist-small":
            newString = "Gourgeist - Small Size";
            break;
        case "gourgeist-super":
            newString = "Gourgeist - Super Size";
            break;
        case "greninja-ash":
            newString = "Ash-Greninja";
            break;
        case "hakamo-o":
            newString = "Hakamo-o";
            break;
        case "ho-oh":
            newString = "Ho-Oh";
            break;
        case "jangmo-o":
            newString = "Jangmo-o";
            break;
        case "keldeo-ordinary":
            newString = "Keldeo";
            break;
        case "keldeo-resolute":
            newString = "Keldeo - Resolute Form";
            break;
        case "kommo-o":
            newString = "Kommo-o";
            break;
        case "landorus-incarnate":
            newString = "Landorus - Incarnate Forme";
            break;
        case "landorus-therian":
            newString = "Landorus - Therian Forme";
            break;
        case "lycanroc-dusk":
            newString = "Lycanroc - Dusk Form";
            break;
        case "lycanroc-midday":
            newString = "Lycanroc - Midday Form";
            break;
        case "lycanroc-midnight":
            newString = "Lycanroc - Midnight Form";
            break;
        case "meloetta-aria":
            newString = "Meloetta - Aria Forme";
            break;
        case "meloetta-pirouette":
            newString = "Meloetta - Pirouette Forme";
            break;
        case "meowstic-female":
            newString = "Meowstic &#9792;";
            break;
        case "meowstic-male":
            newString = "Meowstic &#9794;";
            break;
        case "mewtwo-mega-x":
            newString = "Mega Mewtwo X";
            break;
        case "mewtwo-mega-y":
            newString = "Mega Mewtwo Y";
            break;
        case "mime-jr":
            newString = "Mime Jr.";
            break;
        case "mimikyu-disguised":
            newString = "Mimikyu";
            break;
        case "minior-red":
            newString = "Minior - Core Form";
            break;
        case "minior-red-meteor":
            newString = "Minior - Meteor Form";
            break;
        case "mr-mime":
            newString = "Mr. Mime";
            break;
        case "necrozma-dawn":
            newString = "Dawn Wings Necrozma";
            break;
        case "necrozma-dusk":
            newString = "Dusk Mane Necrozma";
            break;
        case "nidoran-f":
            newString = "Nidoran &#9792;";
            break;
        case "nidoran-m":
            newString = "Nidoran &#9794;";
            break;
        case "oricorio-baile":
            newString = "Oricorio - Baile Style";
            break;
        case "oricorio-pau":
            newString = "Oricorio - Pa'u Style";
            break;
        case "oricorio-pom-pom":
            newString = "Oricorio - Pom-Pom Style";
            break;
        case "oricorio-sensu":
            newString = "Oricorio - Sensu Style";
            break;
        case "porygon-z":
            newString = "Porygon-Z";
            break;
        case "pumpkaboo-average":
            newString = "Pumpkaboo - Average Size";
            break;
        case "pumpkaboo-large":
            newString = "Pumpkaboo - Large Size";
            break;
        case "pumpkaboo-small":
            newString = "Pumpkaboo - Small Size";
            break;
        case "pumpkaboo-super":
            newString = "Pumpkaboo - Super Size";
            break;
        case "shaymin-land":
            newString = "Shaymin - Land Forme";
            break;
        case "shaymin-sky":
            newString = "Shaymin - Sky Forme";
            break;
        case "thundurus-incarnate":
            newString = "Thundurus - Incarnate Forme";
            break;
        case "thundurus-therian":
            newString = "Thundurus - Therian Forme";
            break;
        case "tornadus-incarnate":
            newString = "Tornadus - Incarnate Forme";
            break;
        case "tornadus-therian":
            newString = "Tornadus - Therian Forme";
            break;
        case "type-null":
            newString = "Type: Null";
            break;
        case "wishiwashi-school":
            newString = "Wishiwashi - School Form";
            break;
        case "wishiwashi-solo":
            newString = "Wishiwashi - Solo Form";
            break;
        case "zygarde":
            newString = "Zygarde - 50% Forme";
            break;
        case "zygarde-10":
            newString = "Zygarde - 10% Forme";
            break;
        case "zygarde-complete":
            newString = "Zygarde - Complete Forme";
            break;

        default:
            // create a newString variable with a capital first letter
            newString = string.charAt(0).toUpperCase() + string.slice(1);

            // check if mega, alola, or primal
            if (newString.includes("mega") || newString.includes("primal") || newString.includes("alola") || newString.includes("ultra")) {
                for (var i = 0; i < newString.length; i++) {
                    if (newString[i] === "-") {
                        var beforeDash = newString.slice(0, i);
                        var afterDash = newString.charAt(i + 1).toUpperCase() + newString.slice(i + 2);
                        if (newString.includes("alola")) newString = afterDash + "n " + beforeDash;else newString = afterDash + " " + beforeDash;
                    }
                }
            }

            // capitalizeString just removes dashes and capitalizes if there's more than one word
            // this is helpful for the tapus
            newString = capitalizeString(newString);

            break;
    }

    // return string
    return newString;
};

var capitalizeString = function capitalizeString(string) {
    var newString = string.charAt(0).toUpperCase() + string.slice(1);

    // loop through to see if there's a dash in the name
    // primarily handles tapus, abilities, and moves
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] === "-") {
            // if a dash is found, make two new strings, then add them together
            var beforeDash = newString.slice(0, i);
            var afterDash = newString.charAt(i + 1).toUpperCase() + newString.slice(i + 2);
            newString = beforeDash + " " + afterDash;
        }
    }return newString;
};

// get images from xyani folder from showdown
var handleImgs = function handleImgs(img, shinyImg, name) {

    // handle special cases, otherwise do default
    switch (name) {
        case "aegislash-shield":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/aegislash.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/aegislash.gif";
            break;
        case "basculin-blue-striped":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/basculin-bluestriped.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/basculin-bluestriped.gif";
            break;
        case "basculin-red-striped":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/basculin.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/basculin.gif";
            break;
        case "charizard-mega-x":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/charizard-megax.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/charizard-megax.gif";
            break;
        case "charizard-mega-y":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/charizard-megay.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/charizard-megay.gif";
            break;
        case "darmanitan-standard":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/darmanitan.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/darmanitan.gif";
            break;
        case "deoxys-normal":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/deoxys.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/deoxys.gif";
            break;
        case "giratina-altered":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/giratina.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/giratina.gif";
            break;
        case "gourgeist-average":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/gourgeist.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/gourgeist.gif";
            break;
        case "hakamo-o":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/hakamoo.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/hakamoo.gif";
            break;
        case "ho-oh":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/hooh.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/hooh.gif";
            break;
        case "jangmo-o":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/jangmoo.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/jangmoo.gif";
            break;
        case "keldeo-ordinary":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/keldeo.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/keldeo.gif";
            break;
        case "kommo-o":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/kommoo.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/kommoo.gif";
            break;
        case "landorus-incarnate":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/landorus.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/landorus.gif";
            break;
        case "lycanroc-midday":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/lycanroc.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/lycanroc.gif";
            break;
        case "meloetta-aria":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/meloetta.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/meloetta.gif";
            break;
        case "meowstic-male":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/meowstic.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/meowstic.gif";
            break;
        case "meowstic-female":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/meowstic-f.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/meowstic-f.gif";
            break;
        case "mime-jr":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/mimejr.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/mimejr.gif";
            break;
        case "mimikyu-disguised":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/mimikyu.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/mimikyu.gif";
            break;
        case "mewtwo-mega-x":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/mewtwo-megax.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/mewtwo-megax.gif";
            break;
        case "mewtwo-mega-y":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/mewtwo-megay.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/mewtwo-megay.gif";
            break;
        case "minior-red":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/minior.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/minior.gif";
            break;
        case "minior-red-meteor":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/minior-meteor.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/minior-meteor.gif";
            break;
        case "mr-mime":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/mrmime.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/mrmime.gif";
            break;
        case "necrozma-dawn":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/necrozma-dawnwings.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/necrozma-dawnwings.gif";
            break;
        case "necrozma-dusk":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/necrozma-duskmane.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/necrozma-duskmane.gif";
            break;
        case "nidoran-f":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/nidoranf.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/nidoranf.gif";
            break;
        case "nidoran-m":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/nidoranm.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/nidoranm.gif";
            break;
        case "oricorio-baile":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/oricorio.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/oricorio.gif";
            break;
        case "oricorio-pom-pom":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/oricorio-pompom.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/oricorio-pompom.gif";
            break;
        case "pumpkaboo-average":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/pumpkaboo.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/pumpkaboo.gif";
            break;
        case "shaymin-land":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/shaymin.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/shaymin.gif";
            break;
        case "tapu-bulu":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/tapubulu.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/tapubulu.gif";
            break;
        case "tapu-fini":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/tapufini.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/tapufini.gif";
            break;
        case "tapu-koko":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/tapukoko.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/tapukoko.gif";
            break;
        case "tapu-lele":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/tapulele.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/tapulele.gif";
            break;
        case "thundurus-incarnate":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/thundurus.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/thundurus.gif";
            break;
        case "tornadus-incarnate":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/tornadus.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/tornadus.gif";
            break;
        case "type-null":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/typenull.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/typenull.gif";
            break;
        case "wishiwashi-solo":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/wishiwashi.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/wishiwashi.gif";
            break;
        case "wormadam-plant":
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/wormadam.gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/wormadam.gif";
            break;

        default:
            img.src = "https://play.pokemonshowdown.com/sprites/xyani/" + name + ".gif";
            shinyImg.src = "https://play.pokemonshowdown.com/sprites/xyani-shiny/" + name + ".gif";
            break;
    }
};

// modified from: 
// https://www.w3schools.com/css/css3_2dtransforms.asp
var rotateDiv = function rotateDiv(loading) {
    var degrees = 0;
    var rotationInterval = void 0;

    clearInterval(rotationInterval);
    rotationInterval = setInterval(function () {
        degrees += 1;
        loading.style.transform = "rotate(" + degrees + "deg)";
        loading.style.webkitTransform = "rotate(" + degrees + "deg)";
        loading.style.OTransform = "rotate(" + degrees + "deg)";
        loading.style.MozTransform = "rotate(" + degrees + "deg)";
        if (degrees === 180 || degrees === 360) clearInterval(rotationInterval);
        if (degrees === 360) degrees = 0;
    }, 10);
};

// modified from:
// https://www.w3schools.com/howto/howto_js_sort_table.asp
var sortTable = function sortTable(column, table) {
    // create needed variables
    var rows = table.rows;
    var direction = "ascending";
    var shouldSwitch = false; // starts as false, then changes to true if a condition is met and swaps elements accordingly
    var switching = true;
    var switchcount = 0;
    var i = 0; // declared outside of for loop to be used outside the for loop

    // create some variables to show ascending/descending sort
    // grab spans from DOM
    var arrows = [document.querySelector("#moveArrow"), document.querySelector("#learnedArrow"), document.querySelector("#methodArrow")];

    // html codes for arrows
    var dArrow = "&#8595;";
    var uArrow = "&#8593;";
    var rArrow = "&#8594;";

    // continue loop while switching is true
    while (switching) {
        switching = false;

        // loop through table rows (except for first, since that's the headers)
        for (i = 1; i < rows.length - 1; i++) {
            // shouldSwitch turns true when a condition below is true
            shouldSwitch = false;

            // get the current and next elements to compare
            var currElement = rows[i].getElementsByTagName("TD")[column];
            var nextElement = rows[i + 1].getElementsByTagName("TD")[column];

            // check to make sure if the column checking is the level column
            // this is needed to compare numbers instead of strings
            if (column === 1) {
                if (direction == "ascending") {
                    if (parseInt(currElement.innerHTML) > parseInt(nextElement.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (direction == "descending") {
                    if (parseInt(currElement.innerHTML) < parseInt(nextElement.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else {
                // otherwise compare strings, which checks the first letter and checks which one is first in the alphabet
                if (direction == "ascending") {
                    if (currElement.innerHTML.toLowerCase() > nextElement.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (direction == "descending") {
                    if (currElement.innerHTML.toLowerCase() < nextElement.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            // perform the switch and run the loop again
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // increase every time a switch is done
            switchcount++;
        } else {
            // if there is no switching, change direction and run the loop again
            if (switchcount == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }

    // change arrows based on sort
    for (i = 0; i < arrows.length; i++) {
        if (i != column) {
            arrows[i].innerHTML = rArrow;
        } else if (i === column) {
            if (direction === "ascending") {
                arrows[column].innerHTML = dArrow;
            } else if (direction === "descending") {
                arrows[column].innerHTML = uArrow;
            }
        }
    }
};

var handleResponse = function handleResponse(xhr) {
    // grab dom elements
    var name = document.querySelector('#pkmnName');
    var img = document.querySelector('#pkmnImg');
    var shinyImg = document.querySelector('#pkmnShiny');
    var type1 = document.querySelector('#pkmnType1');
    var type2 = document.querySelector('#pkmnType2');
    var stats = {
        'hp_bar': document.querySelector('#hpBar'),
        'hp_num': document.querySelector('#hpNum'),
        'atk_bar': document.querySelector('#atkBar'),
        'atk_num': document.querySelector('#atkNum'),
        'def_bar': document.querySelector('#defBar'),
        'def_num': document.querySelector('#defNum'),
        'spatk_bar': document.querySelector('#spAtkBar'),
        'spatk_num': document.querySelector('#spAtkNum'),
        'spdef_bar': document.querySelector('#spDefBar'),
        'spdef_num': document.querySelector('#spDefNum'),
        'spd_bar': document.querySelector('#spdBar'),
        'spd_num': document.querySelector('#spdNum')
    };
    var moveList = document.querySelector("#movelist");
    var abilties = document.querySelector("#abilities");
    var hiddenAbility = document.querySelector("#hiddenAbility");
    var hiddenTitle = document.querySelector("#hiddenTitle");

    // wipe movesList from previous request
    $('#movelist tr').slice(1).remove();

    // reset abilities
    abilities.innerHTML = "???";
    hiddenAbility.innerHTML = "???";

    // hide loading pokeball
    var loading = document.querySelector("#loading");
    var innerLoading = document.querySelector("#innerLoading");

    $(loading).animate({
        opacity: 0.0
    }, 200);
    $(innerLoading).animate({
        opacity: 0.0
    }, 200, function () {
        loading.hidden = true;
    });

    switch (xhr.status) {
        case 200:
            name.innerHTML = "<b>Success</b>";
            break;
        case 201:
            name.innerHTML = "<b>Create</b>";
            break;
        case 204:
            name.innerHTML = "<b>Updated (No Content)</b>";
            break;
        case 400:
            name.innerHTML = "<b>Bad Request</b>";
            break;
        case 404:
            name.innerHTML = "<b>Resource Not Found</b>";
            break;
        default:
            name.innerHTML = "Error code not implemented by client.";
            break;
    }

    // parse xhr response as JSON
    var obj = JSON.parse(xhr.response);
    console.log(obj);

    // check if obj.name exists (basically, if data is sent back)
    if (obj.name) {
        // get name with proper formatting
        name.innerHTML = handleName(obj.name);

        // get sprites from showdown
        handleImgs(img, shinyImg, obj.name);

        // get types
        type1.src = typeImages[obj.types[0].type.name];
        type1.title = "Type 1: " + capitalizeString(obj.types[0].type.name);
        if (obj.types.length == 2) {
            type2.hidden = false;
            type2.src = typeImages[obj.types[1].type.name];
            type2.title = "Type 2: " + capitalizeString(obj.types[1].type.name);
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

        // create a tr (row) for every move
        for (var i = 0; i < obj.moves.length; i++) {
            var tr = document.createElement('tr');
            var moveName = document.createElement('td');
            var moveLevel = document.createElement('td');
            var moveMethod = document.createElement('td');

            // set move name
            moveName.innerHTML = capitalizeString(obj.moves[i].move.name);

            // loop through movelist looking for usum moveset
            for (var j = 0; j < obj.moves[i].version_group_details.length; j++) {
                if (obj.moves[i].version_group_details[j].version_group.name === "ultra-sun-ultra-moon") {

                    // set level
                    moveLevel.innerHTML = obj.moves[i].version_group_details[j].level_learned_at;

                    // switch statement to handle method of learning
                    switch (obj.moves[i].version_group_details[j].move_learn_method.name) {
                        case "level-up":
                            moveMethod.innerHTML = "Level Up";
                            break;
                        case "machine":
                            moveMethod.innerHTML = "TM/HM";
                            break;
                        case "egg":
                            moveMethod.innerHTML = "Egg";
                            break;
                        case "tutor":
                            moveMethod.innerHTML = "Tutor";
                            break;
                        default:
                            moveMethod.innerHTML = "???";
                            break;
                    }

                    // append all data to row, then append row to table
                    tr.appendChild(moveName);
                    tr.appendChild(moveLevel);
                    tr.appendChild(moveMethod);
                    moveList.appendChild(tr);
                }
            }
        }

        // sort table by level
        sortTable(1, moveList);

        // loop through abilities and display them
        for (var _i = 0; _i < obj.abilities.length; _i++) {
            // if ability is hidden, unhide hidden ability section and display ability name
            if (obj.abilities[_i].is_hidden === true) {
                hiddenTitle.hidden = false;
                hiddenAbility.innerHTML = capitalizeString(obj.abilities[_i].ability.name);
            } else {
                // if there is no ability, replace ??? with ability,
                // but if there is already an ability, append it to the abilities string
                if (abilities.innerHTML === "???") {
                    abilities.innerHTML = capitalizeString(obj.abilities[_i].ability.name);
                } else {
                    abilities.innerHTML += " or " + capitalizeString(obj.abilities[_i].ability.name);
                }
            }
        }

        // remove hidden ability section if there is no hidden ability
        // used primarily for megas
        if (hiddenAbility.innerHTML === "???") {
            hiddenTitle.hidden = true;
        }
    }
};

// gets data from server/pokeapi
var requestUpdate = function requestUpdate(e, input) {
    var url = "/pokemon?=" + input.value;
    console.log(url);

    // create new Ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Accept', 'application/json');

    // if get request or head request
    xhr.onload = function () {
        return handleResponse(xhr);
    };

    xhr.send();
    e.preventDefault();
    return false;
};

//function to send our post request
var sendPost = function sendPost(e, nameForm) {
    var nameAction = nameForm.getAttribute('action');
    var nameMethod = nameForm.getAttribute('method');

    var nameField = nameForm.querySelector('#nameField');
    var ageField = nameForm.querySelector('#ageField');

    // create new Ajax request
    var xhr = new XMLHttpRequest();
    xhr.open(nameMethod, nameAction);

    // set headers and set onload to handle response
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = function () {
        return handleResponse(xhr, true);
    };

    // build x-www-form-urlencoded formatted name/age
    var formData = "name=" + nameField.value + "&age=" + ageField.value;

    xhr.send(formData);
    e.preventDefault();
    return false;
};

// runs as soon as site is loaded
var init = function init() {
    // get some dom elements
    var content = document.querySelector("#content");
    var input = document.querySelector("#input");
    var loading = document.querySelector("#loading");
    var innerLoading = document.querySelector("#innerLoading");
    var getButton = document.querySelector("#getButton");
    var ballButton = document.querySelector("#ballButton");
    var closeButton = document.querySelector("#close");

    // table elements
    var moveList = document.querySelector("#movelist");
    var moveName = document.querySelector("#moveName");
    var moveLevel = document.querySelector("#moveLevel");
    var moveMethod = document.querySelector("#moveMethod");

    // set random pokemon to be placeholder upon login
    input.placeholder = randomPoke();

    // arrow function for requestUpdate, 
    var getData = function getData(e) {
        return requestUpdate(e, input);
    };

    // fill in autocomplete with allPokemon array using jqueryUI
    $(input).autocomplete({
        source: function source(request, response) {
            // https://api.jqueryui.com/autocomplete/#entry-examples
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");

            var results = matcher.test($.ui.autocomplete.filter(allPokemon, request.term));
            response($.grep(allPokemon, function (item) {
                return matcher.test(item);
            }).slice(0, 10));
        }
    });

    // event listener for clicking the "get pokemon" button
    getButton.addEventListener('click', function () {

        // if nothing is typed, use placeholder
        if (input.value === "") {
            input.value = input.placeholder;
        }

        // replace special characters and make it all lowercase
        input.value = input.value.replace("'", "").replace(" ", "-").replace(":-", "-").replace("%", "").replace(".", "").toLowerCase();

        // handle some special cases
        switch (input.value) {
            case "aegislash":
                input.value = "aegislash-shield";
                break;
            case "deoxys":
                input.value = "deoxys-normal";
                break;
            case "giratina":
                input.value = "giratina-altered";
                break;
            case "gourgeist":
                input.value = "gourgeist-average";
                break;
            case "lycanroc":
                input.value = "lycanroc-midday";
                break;
            case "meloetta":
                input.value = "meloetta-aria";
                break;
            case "meloetta":
                input.value = "mimikyu-disguised";
                break;
            case "minior-core":
                input.value = "minior-red";
                break;
            case "minior-meteor":
                input.value = "minior-red-meteor";
                break;
            case "necrozma-dawn wings":
                input.value = "necrozma-dawn";
                break;
            case "necrozma-dusk mane":
                input.value = "necrozma-dusk";
                break;
            case "pumpkaboo":
                input.value = "pumpkaboo-average";
                break;
            case "shaymin":
                input.value = "shaymin-land";
                break;
        }

        // animate "content" section if it's not already visible (which it is not by default)
        if (content.hidden === true) {
            content.hidden = false;
            $(content).animate({
                opacity: 1.0
            }, 500);
        }

        // animate loading spinner if it's not already visible (not by default)
        if (loading.hidden === true) {
            loading.hidden = false;

            // spins the "loading" div
            rotateDiv(loading);

            // fades it in
            $(loading).animate({
                opacity: 1.0
            }, 100);

            $(innerLoading).animate({
                opacity: 1.0
            }, 100);
        }
    });

    // second event listener for getting data
    getButton.addEventListener('click', getData);

    // ball in center picks a random poke and calls getButton
    ballButton.addEventListener('click', function () {
        input.value = randomPoke();
        getButton.click();
    });

    // close button to fade out the content section
    closeButton.addEventListener('click', function () {
        $(content).animate({
            opacity: 0.0
        }, 500, function () {
            content.hidden = true;
        });
    });

    moveName.addEventListener('click', function () {
        sortTable(0, moveList);
    });
    moveLevel.addEventListener('click', function () {
        sortTable(1, moveList);
    });
    moveMethod.addEventListener('click', function () {
        sortTable(2, moveList);
    });
};

window.onload = init;
