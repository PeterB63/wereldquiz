const countries = [
  ["Afghanistan","Kabul","Azië"],
  ["Albanië","Tirana","Europa"],
  ["Algerije","Algiers","Afrika"],
  ["Andorra","Andorra la Vella","Europa"],
  ["Angola","Luanda","Afrika"],
  ["Antigua en Barbuda","Saint John's","Noord-Amerika"],
  ["Argentinië","Buenos Aires","Zuid-Amerika"],
  ["Armenië","Jerevan","Azië"],
  ["Australië","Canberra","Oceanië"],
  ["Oostenrijk","Wenen","Europa"],
  ["Azerbeidzjan","Bakoe","Azië"],
  ["Bahama's","Nassau","Noord-Amerika"],
  ["Bahrein","Manama","Azië"],
  ["Bangladesh","Dhaka","Azië"],
  ["Barbados","Bridgetown","Noord-Amerika"],
  ["België","Brussel","Europa"],
  ["Belize","Belmopan","Noord-Amerika"],
  ["Benin","Porto-Novo","Afrika"],
  ["Bhutan","Thimphu","Azië"],
  ["Bolivia","Sucre","Zuid-Amerika"],
  ["Bosnië en Herzegovina","Sarajevo","Europa"],
  ["Botswana","Gaborone","Afrika"],
  ["Brazilië","Brasília","Zuid-Amerika"],
  ["Brunei","Bandar Seri Begawan","Azië"],
  ["Bulgarije","Sofia","Europa"],
  ["Burkina Faso","Ouagadougou","Afrika"],
  ["Burundi","Gitega","Afrika"],
  ["Cambodja","Phnom Penh","Azië"],
  ["Kameroen","Yaoundé","Afrika"],
  ["Canada","Ottawa","Noord-Amerika"],
  ["Kaapverdië","Praia","Afrika"],
  ["Centraal-Afrikaanse Republiek","Bangui","Afrika"],
  ["Tsjaad","N'Djamena","Afrika"],
  ["Chili","Santiago","Zuid-Amerika"],
  ["China","Beijing","Azië"],
  ["Colombia","Bogotá","Zuid-Amerika"],
  ["Comoren","Moroni","Afrika"],
  ["Congo","Brazzaville","Afrika"],
  ["Costa Rica","San José","Noord-Amerika"],
  ["Ivoorkust","Yamoussoukro","Afrika"],
  ["Kroatië","Zagreb","Europa"],
  ["Cuba","Havana","Noord-Amerika"],
  ["Cyprus","Nicosia","Europa"],
  ["Tsjechië","Praag","Europa"],
  ["Denemarken","Kopenhagen","Europa"],
  ["Djibouti","Djibouti","Afrika"],
  ["Dominica","Roseau","Noord-Amerika"],
  ["Dominicaanse Republiek","Santo Domingo","Noord-Amerika"],
  ["Ecuador","Quito","Zuid-Amerika"],
  ["Egypte","Caïro","Afrika"],
  ["El Salvador","San Salvador","Noord-Amerika"],
  ["Equatoriaal-Guinea","Malabo","Afrika"],
  ["Eritrea","Asmara","Afrika"],
  ["Estland","Tallinn","Europa"],
  ["Eswatini","Mbabane","Afrika"],
  ["Ethiopië","Addis Abeba","Afrika"],
  ["Fiji","Suva","Oceanië"],
  ["Finland","Helsinki","Europa"],
  ["Frankrijk","Parijs","Europa"],
  ["Gabon","Libreville","Afrika"],
  ["Gambia","Banjul","Afrika"],
  ["Georgië","Tbilisi","Azië"],
  ["Duitsland","Berlijn","Europa"],
  ["Ghana","Accra","Afrika"],
  ["Griekenland","Athene","Europa"],
  ["Grenada","Saint George's","Noord-Amerika"],
  ["Guatemala","Guatemala-Stad","Noord-Amerika"],
  ["Guinee","Conakry","Afrika"],
  ["Guinee-Bissau","Bissau","Afrika"],
  ["Guyana","Georgetown","Zuid-Amerika"],
  ["Haïti","Port-au-Prince","Noord-Amerika"],
  ["Honduras","Tegucigalpa","Noord-Amerika"],
  ["Hongarije","Boedapest","Europa"],
  ["IJsland","Reykjavik","Europa"],
  ["India","New Delhi","Azië"],
  ["Indonesië","Jakarta","Azië"],
  ["Iran","Teheran","Azië"],
  ["Irak","Bagdad","Azië"],
  ["Ierland","Dublin","Europa"],
  ["Israël","Jeruzalem","Azië"],
  ["Italië","Rome","Europa"],
  ["Jamaica","Kingston","Noord-Amerika"],
  ["Japan","Tokio","Azië"],
  ["Jordanië","Amman","Azië"],
  ["Kazachstan","Astana","Azië"],
  ["Kenia","Nairobi","Afrika"],
  ["Kiribati","Tarawa","Oceanië"],
  ["Koeweit","Koeweit-Stad","Azië"],
  ["Kirgizië","Bisjkek","Azië"],
  ["Laos","Vientiane","Azië"],
  ["Letland","Riga","Europa"],
  ["Libanon","Beiroet","Azië"],
  ["Lesotho","Maseru","Afrika"],
  ["Liberia","Monrovia","Afrika"],
  ["Libië","Tripoli","Afrika"],
  ["Liechtenstein","Vaduz","Europa"],
  ["Litouwen","Vilnius","Europa"],
  ["Luxemburg","Luxemburg","Europa"],
  ["Madagaskar","Antananarivo","Afrika"],
  ["Malawi","Lilongwe","Afrika"],
  ["Maleisië","Kuala Lumpur","Azië"],
  ["Maldiven","Malé","Azië"],
  ["Mali","Bamako","Afrika"],
  ["Malta","Valletta","Europa"],
  ["Marshalleilanden","Majuro","Oceanië"],
  ["Mauritanië","Nouakchott","Afrika"],
  ["Mauritius","Port Louis","Afrika"],
  ["Mexico","Mexico-Stad","Noord-Amerika"],
  ["Micronesië","Palikir","Oceanië"],
  ["Moldavië","Chisinau","Europa"],
  ["Monaco","Monaco","Europa"],
  ["Mongolië","Ulaanbaatar","Azië"],
  ["Montenegro","Podgorica","Europa"],
  ["Marokko","Rabat","Afrika"],
  ["Mozambique","Maputo","Afrika"],
  ["Myanmar","Naypyidaw","Azië"],
  ["Namibië","Windhoek","Afrika"],
  ["Nauru","Yaren","Oceanië"],
  ["Nepal","Kathmandu","Azië"],
  ["Nederland","Amsterdam","Europa"],
  ["Nieuw-Zeeland","Wellington","Oceanië"],
  ["Nicaragua","Managua","Noord-Amerika"],
  ["Niger","Niamey","Afrika"],
  ["Nigeria","Abuja","Afrika"],
  ["Noord-Korea","Pyongyang","Azië"],
  ["Noord-Macedonië","Skopje","Europa"],
  ["Noorwegen","Oslo","Europa"],
  ["Oman","Muscat","Azië"],
  ["Pakistan","Islamabad","Azië"],
  ["Palau","Ngerulmud","Oceanië"],
  ["Panama","Panama-Stad","Noord-Amerika"],
  ["Papoea-Nieuw-Guinea","Port Moresby","Oceanië"],
  ["Paraguay","Asunción","Zuid-Amerika"],
  ["Peru","Lima","Zuid-Amerika"],
  ["Filipijnen","Manila","Azië"],
  ["Polen","Warschau","Europa"],
  ["Portugal","Lissabon","Europa"],
  ["Qatar","Doha","Azië"],
  ["Roemenië","Boekarest","Europa"],
  ["Rusland","Moskou","Europa"],
  ["Rwanda","Kigali","Afrika"],
  ["Saint Kitts en Nevis","Basseterre","Noord-Amerika"],
  ["Saint Lucia","Castries","Noord-Amerika"],
  ["Saint Vincent en de Grenadines","Kingstown","Noord-Amerika"],
  ["Samoa","Apia","Oceanië"],
  ["San Marino","San Marino","Europa"],
  ["Sao Tomé en Principe","São Tomé","Afrika"],
  ["Saoedi-Arabië","Riyad","Azië"],
  ["Senegal","Dakar","Afrika"],
  ["Servië","Belgrado","Europa"],
  ["Seychellen","Victoria","Afrika"],
  ["Sierra Leone","Freetown","Afrika"],
  ["Singapore","Singapore","Azië"],
  ["Slowakije","Bratislava","Europa"],
  ["Slovenië","Ljubljana","Europa"],
  ["Salomonseilanden","Honiara","Oceanië"],
  ["Somalië","Mogadishu","Afrika"],
  ["Zuid-Afrika","Pretoria","Afrika"],
  ["Zuid-Korea","Seoul","Azië"],
  ["Zuid-Soedan","Juba","Afrika"],
  ["Spanje","Madrid","Europa"],
  ["Sri Lanka","Sri Jayawardenepura Kotte","Azië"],
  ["Soedan","Khartoem","Afrika"],
  ["Suriname","Paramaribo","Zuid-Amerika"],
  ["Zweden","Stockholm","Europa"],
  ["Zwitserland","Bern","Europa"],
  ["Syrië","Damascus","Azië"],
  ["Tadzjikistan","Doesjanbe","Azië"],
  ["Tanzania","Dodoma","Afrika"],
  ["Thailand","Bangkok","Azië"],
  ["Timor-Leste","Dili","Azië"],
  ["Togo","Lomé","Afrika"],
  ["Tonga","Nuku'alofa","Oceanië"],
  ["Trinidad en Tobago","Port of Spain","Noord-Amerika"],
  ["Tunesië","Tunis","Afrika"],
  ["Turkije","Ankara","Azië"],
  ["Turkmenistan","Asjchabad","Azië"],
  ["Tuvalu","Funafuti","Oceanië"],
  ["Oeganda","Kampala","Afrika"],
  ["Oekraïne","Kyiv","Europa"],
  ["Verenigde Arabische Emiraten","Abu Dhabi","Azië"],
  ["Verenigd Koninkrijk","Londen","Europa"],
  ["Verenigde Staten","Washington","Noord-Amerika"],
  ["Uruguay","Montevideo","Zuid-Amerika"],
  ["Oezbekistan","Tasjkent","Azië"],
  ["Vanuatu","Port Vila","Oceanië"],
  ["Vaticaanstad","Vaticaanstad","Europa"],
  ["Venezuela","Caracas","Zuid-Amerika"],
  ["Vietnam","Hanoi","Azië"],
  ["Jemen","Sana'a","Azië"],
  ["Zambia","Lusaka","Afrika"],
  ["Zimbabwe","Harare","Afrika"],
  ["Congo (Democratische Republiek)","Kinshasa","Afrika"],
  ["Kosovo","Pristina","Europa"]
];
let current;
let mode = "countryToCapital";

let score = 0;
let total = 0;
let streak = 0;
let bestStreak = localStorage.getItem("bestStreak") || 0;
let mistakes = [];

// vlagcodes (werkt voor ALLE landen)
const flagCodes = {
  "Afghanistan": "af",
  "Albanië": "al",
  "Algerije": "dz",
  "Andorra": "ad",
  "Angola": "ao",
  "Antigua en Barbuda": "ag",
  "Argentinië": "ar",
  "Armenië": "am",
  "Australië": "au",
  "Oostenrijk": "at",
  "Azerbeidzjan": "az",
  "Bahama's": "bs",
  "Bahrein": "bh",
  "Bangladesh": "bd",
  "Barbados": "bb",
  "België": "be",
  "Belize": "bz",
  "Benin": "bj",
  "Bhutan": "bt",
  "Bolivia": "bo",
  "Bosnië en Herzegovina": "ba",
  "Botswana": "bw",
  "Brazilië": "br",
  "Brunei": "bn",
  "Bulgarije": "bg",
  "Burkina Faso": "bf",
  "Burundi": "bi",
  "Cambodja": "kh",
  "Kameroen": "cm",
  "Canada": "ca",
  "Kaapverdië": "cv",
  "Centraal-Afrikaanse Republiek": "cf",
  "Tsjaad": "td",
  "Chili": "cl",
  "China": "cn",
  "Colombia": "co",
  "Comoren": "km",
  "Congo": "cg",
  "Congo (Democratische Republiek)": "cd",
  "Kosovo": "xk",
  "Costa Rica": "cr",
  "Ivoorkust": "ci",
  "Kroatië": "hr",
  "Cuba": "cu",
  "Cyprus": "cy",
  "Tsjechië": "cz",
  "Denemarken": "dk",
  "Djibouti": "dj",
  "Dominica": "dm",
  "Dominicaanse Republiek": "do",
  "Ecuador": "ec",
  "Egypte": "eg",
  "El Salvador": "sv",
  "Equatoriaal-Guinea": "gq",
  "Eritrea": "er",
  "Estland": "ee",
  "Eswatini": "sz",
  "Ethiopië": "et",
  "Fiji": "fj",
  "Finland": "fi",
  "Frankrijk": "fr",
  "Gabon": "ga",
  "Gambia": "gm",
  "Georgië": "ge",
  "Duitsland": "de",
  "Ghana": "gh",
  "Griekenland": "gr",
  "Grenada": "gd",
  "Guatemala": "gt",
  "Guinee": "gn",
  "Guinee-Bissau": "gw",
  "Guyana": "gy",
  "Haïti": "ht",
  "Honduras": "hn",
  "Hongarije": "hu",
  "IJsland": "is",
  "India": "in",
  "Indonesië": "id",
  "Iran": "ir",
  "Irak": "iq",
  "Ierland": "ie",
  "Israël": "il",
  "Italië": "it",
  "Jamaica": "jm",
  "Japan": "jp",
  "Jordanië": "jo",
  "Kazachstan": "kz",
  "Kenia": "ke",
  "Kiribati": "ki",
  "Koeweit": "kw",
  "Kirgizië": "kg",
  "Laos": "la",
  "Letland": "lv",
  "Libanon": "lb",
  "Lesotho": "ls",
  "Liberia": "lr",
  "Libië": "ly",
  "Liechtenstein": "li",
  "Litouwen": "lt",
  "Luxemburg": "lu",
  "Madagaskar": "mg",
  "Malawi": "mw",
  "Maleisië": "my",
  "Maldiven": "mv",
  "Mali": "ml",
  "Malta": "mt",
  "Marshall-eilanden": "mh",
  "Mauritanië": "mr",
  "Mauritius": "mu",
  "Mexico": "mx",
  "Micronesië": "fm",
  "Moldavië": "md",
  "Monaco": "mc",
  "Mongolië": "mn",
  "Montenegro": "me",
  "Marokko": "ma",
  "Mozambique": "mz",
  "Myanmar": "mm",
  "Namibië": "na",
  "Nauru": "nr",
  "Nepal": "np",
  "Nederland": "nl",
  "Nieuw-Zeeland": "nz",
  "Nicaragua": "ni",
  "Niger": "ne",
  "Nigeria": "ng",
  "Noord-Korea": "kp",
  "Noord-Macedonië": "mk",
  "Noorwegen": "no",
  "Oman": "om",
  "Pakistan": "pk",
  "Palau": "pw",
  "Panama": "pa",
  "Papoea-Nieuw-Guinea": "pg",
  "Paraguay": "py",
  "Peru": "pe",
  "Filipijnen": "ph",
  "Polen": "pl",
  "Portugal": "pt",
  "Qatar": "qa",
  "Roemenië": "ro",
  "Rusland": "ru",
  "Rwanda": "rw",
  "Saint Kitts en Nevis": "kn",
  "Saint Lucia": "lc",
  "Saint Vincent en de Grenadines": "vc",
  "Samoa": "ws",
  "San Marino": "sm",
  "Sao Tomé en Principe": "st",
  "Saoedi-Arabië": "sa",
  "Senegal": "sn",
  "Servië": "rs",
  "Seychellen": "sc",
  "Sierra Leone": "sl",
  "Singapore": "sg",
  "Slowakije": "sk",
  "Slovenië": "si",
  "Salomonseilanden": "sb",
  "Somalië": "so",
  "Zuid-Afrika": "za",
  "Zuid-Korea": "kr",
  "Zuid-Soedan": "ss",
  "Spanje": "es",
  "Sri Lanka": "lk",
  "Soedan": "sd",
  "Suriname": "sr",
  "Zweden": "se",
  "Zwitserland": "ch",
  "Syrië": "sy",
  "Tadzjikistan": "tj",
  "Tanzania": "tz",
  "Thailand": "th",
  "Timor-Leste": "tl",
  "Togo": "tg",
  "Tonga": "to",
  "Trinidad en Tobago": "tt",
  "Tunesië": "tn",
  "Turkije": "tr",
  "Turkmenistan": "tm",
  "Tuvalu": "tv",
  "Oeganda": "ug",
  "Oekraïne": "ua",
  "Verenigde Arabische Emiraten": "ae",
  "Verenigd Koninkrijk": "gb",
  "Verenigde Staten": "us",
  "Uruguay": "uy",
  "Oezbekistan": "uz",
  "Vanuatu": "vu",
  "Vaticaanstad": "va",
  "Venezuela": "ve",
  "Vietnam": "vn",
  "Jemen": "ye",
  "Zambia": "zm",
  "Zimbabwe": "zw"
};

function startQuiz() {
  document.getElementById("startScreen").classList.remove("active");
  document.getElementById("quizScreen").classList.add("active");
  newQuestion();
}

function updateScore() {
  document.getElementById("score").innerText =
    "Score: " + score + " / " + total +
    " | Streak: " + streak +
    " | Top: " + bestStreak;
}

function resetScore() {
  score = 0;
  total = 0;
  streak = 0;
  mistakes = [];
  updateScore();
}

function getCorrectAnswer() {
  if (mode === "countryToCapital") return current[1];
  if (mode === "capitalToCountry") return current[0];
  if (mode === "flagToCountry") return current[0];
}

function getQuestionText() {
  if (mode === "countryToCapital") {
    return "Wat is de hoofdstad van " + current[0] + "?";
  }

  if (mode === "capitalToCountry") {
    return "Van welk land is " + current[1] + " de hoofdstad?";
  }

  if (mode === "flagToCountry") {
    return "Van welk land is deze vlag?";
  }
}

function getModeText() {
  if (mode === "countryToCapital") return "Land → hoofdstad";
  if (mode === "capitalToCountry") return "Hoofdstad → land";
  if (mode === "flagToCountry") return "Vlag → land";
}

function getWrongAnswers(correctAnswer) {
  let answers = [];

  let correctContinent = current[2];

  // landen uit hetzelfde continent
  let sameContinent = countries.filter(
    c => c[2] === correctContinent && c !== current
  );

  // fallback als er te weinig zijn
  let pool = sameContinent.length >= 3 ? sameContinent : countries;

  while (answers.length < 3) {
    let random = pool[Math.floor(Math.random() * pool.length)];

    let wrong =
      mode === "countryToCapital" ? random[1] : random[0];

    if (wrong !== correctAnswer && !answers.includes(wrong)) {
      answers.push(wrong);
    }
  }

  return answers;
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showFlag() {
  const flag = document.getElementById("flag");
  const code = flagCodes[current[0]];

  if (mode === "flagToCountry" || mode === "countryToCapital") {
    if (code) {
      flag.src = "https://flagcdn.com/w160/" + code + ".png";
      flag.style.display = "inline-block";
    } else {
      flag.style.display = "none";
    }
  } else {
    flag.style.display = "none";
  }
}

function newQuestion() {
  let useMistake = Math.random() < 0.4 && mistakes.length > 0;

  current = useMistake
    ? mistakes[Math.floor(Math.random() * mistakes.length)]
    : countries[Math.floor(Math.random() * countries.length)];

  document.getElementById("result").innerText = "";
  document.getElementById("modeText").innerText = getModeText();
  document.getElementById("question").innerText = getQuestionText();

  showFlag();
  createChoices();
}

function createChoices() {
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  let correctAnswer = getCorrectAnswer();
  let answers = shuffle([
    correctAnswer,
    ...getWrongAnswers(correctAnswer)
  ]);

  answers.forEach(answer => {
    let button = document.createElement("button");
    button.innerText = answer;
    button.className = "choice-button";
    button.onclick = () => checkAnswer(answer, button);
    choicesDiv.appendChild(button);
  });
}

function checkAnswer(selectedAnswer, button) {
  let correctAnswer = getCorrectAnswer();
  total++;

  let buttons = document.querySelectorAll(".choice-button");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedAnswer === correctAnswer) {
    score++;
    streak++;

  if (streak > bestStreak) {
    bestStreak = streak;
    localStorage.setItem("bestStreak", bestStreak);
}

    if (streak > bestStreak) {
      bestStreak = streak;
      localStorage.setItem("bestStreak", bestStreak);
    }

    mistakes = mistakes.filter(item => item !== current);
    button.classList.add("correct");
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    streak = 0;

    if (!mistakes.includes(current)) {
      mistakes.push(current);
    }

    button.classList.add("wrong");

    buttons.forEach(btn => {
      if (btn.innerText === correctAnswer) {
        btn.classList.add("correct");
      }
    });

    document.getElementById("result").innerText =
      "❌ Fout! Juiste antwoord: " + correctAnswer;
  }

  updateScore();
}

function setMode(newMode) {
  mode = newMode;
  updateModeButtons();
  newQuestion();
}
function updateModeButtons() {
  const buttons = document.querySelectorAll(".mode-button");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (mode === "countryToCapital") buttons[0].classList.add("active");
  if (mode === "capitalToCountry") buttons[1].classList.add("active");
  if (mode === "flagToCountry") buttons[2].classList.add("active");
}

function createFlagMarquee() {
  const flagTrack = document.getElementById("flagTrack");
  if (!flagTrack) return;

  const codes = Object.values(flagCodes);

  const shuffled = codes.sort(() => Math.random() - 0.5);

  const flags = [...shuffled, ...shuffled];

  flagTrack.innerHTML = "";

  flags.forEach(code => {
    const img = document.createElement("img");
    img.src = "https://flagcdn.com/w80/" + code + ".png";
    img.alt = "vlag";
    flagTrack.appendChild(img);
  });
}

updateScore();
updateModeButtons();
createFlagMarquee();