const questions = [
  ["Eines Morgens ___ der schlaue Fuchs durch den Wald.", "schleichen", ["schlich", "schleichte", "schleich"], "schlich", "‚Schleichen‘ ist ein starkes Verb. Der Stammvokal verändert sich: ei → i."],
  ["Am Bach ___ er einen hungrigen Raben.", "entdecken", ["entdeckte", "entduckte", "entdeckete"], "entdeckte", "Bei einem regelmäßigen Verb setzt du -te an den Verbstamm."],
  ["Der Rabe ___ ein großes Stück Käse im Schnabel.", "halten", ["haltete", "hielt", "holte"], "hielt", "‚Halten‘ ist unregelmäßig. Im Präteritum heißt es ‚hielt‘."],
  ["Der Fuchs ___ den köstlichen Käse sofort.", "bemerken", ["bemerkte", "bemark", "bemerkete"], "bemerkte", "Verbstamm ‚bemerk-‘ + Endung ‚-te‘ ergibt ‚bemerkte‘."],
  ["Daraufhin ___ er den Raben überschwänglich.", "loben", ["lobte", "lieb", "lobete"], "lobte", "‚Loben‘ ist regelmäßig: lob- + -te."],
  ["Der geschmeichelte Rabe ___ seinen Schnabel.", "öffnen", ["offnete", "öffnete", "öffnete-te"], "öffnete", "Nach dem Verbstamm ‚öffn-‘ hilft ein zusätzliches e bei der Aussprache."],
  ["Der Käse ___ direkt vor die Pfoten des Fuchses.", "fallen", ["fällte", "fiel", "fallte"], "fiel", "‚Fallen‘ ist stark. Der Stammvokal verändert sich: a → ie."],
  ["Der Fuchs ___ die Beute und verschwand zufrieden.", "nehmen", ["nahm", "nehmte", "nahmte"], "nahm", "‚Nehmen‘ ist stark. Im Präteritum heißt es ‚nahm‘."]
];

const vocabularyPairs = [
  { id: 1, spanish: "¡Apúntate!", german: "Mach mit!" },
  { id: 2, spanish: "¡Hola!", german: "Hallo!" },
  { id: 3, spanish: "¿Cómo te llamas?", german: "Wie heißt du?" },
  { id: 4, spanish: "¿cómo?", german: "wie?" },
  { id: 5, spanish: "soy", german: "ich bin" },
  { id: 6, spanish: "¿Y tú?", german: "Und du?" },
  { id: 7, spanish: "y", german: "und" },
  { id: 8, spanish: "me llamo", german: "ich heiße" },
  { id: 9, spanish: "soy de", german: "ich komme aus" },
  { id: 10, spanish: "de", german: "aus" },
  { id: 11, spanish: "¿De dónde eres?", german: "Woher kommst du?" },
  { id: 12, spanish: "¿de dónde?", german: "woher?" },
  { id: 13, spanish: "pues", german: "also, na" },
  { id: 14, spanish: "aquí", german: "hier" },
  { id: 15, spanish: "sí", german: "ja" },
  { id: 16, spanish: "claro", german: "klar" },
  { id: 17, spanish: "España", german: "Spanien" },
  { id: 18, spanish: "¿Qué tal?", german: "Wie geht's?" },
  { id: 19, spanish: "¿qué?", german: "was?, wie?" },
  { id: 20, spanish: "Bueno…", german: "Okay, … / Gut…" },
  { id: 21, spanish: "¡Adiós!", german: "Tschüss" },
  { id: 22, spanish: "¡Hasta luego!", german: "Bis später!" },
  { id: 23, spanish: "¡Buenos días!", german: "Guten Tag." },
  { id: 24, spanish: "genial", german: "genial, super, toll" },
  { id: 25, spanish: "(muy) bien", german: "(sehr) gut" },
  { id: 26, spanish: "muy", german: "sehr" },
  { id: 27, spanish: "gracias", german: "danke" },
  { id: 28, spanish: "fatal", german: "furchtbar" },
  { id: 29, spanish: "más o menos", german: "geht so" },
  { id: 30, spanish: "regular", german: "geht so" },
  { id: 31, spanish: "(muy) mal", german: "(sehr) schlecht" },
  { id: 32, spanish: "¿Cuántos años tienes?", german: "Wie alt bist du?" },
  { id: 33, spanish: "Tengo … años.", german: "Ich bin … Jahre alt." },
  { id: 34, spanish: "el año", german: "das Jahr" }
];

const subjects = {
  deutsch: ["Deutsch", "Grammatik, Literatur und Schreiben", "▤", "terracotta"],
  spanisch: ["Spanisch", "Lengua, cultura y comunicación", "Ñ", "petrol"],
  medien: ["Medienunterricht", "Sicher und kompetent in der digitalen Welt", "⌘", "petrol-light"],
  sonstiges: ["Sonstiges", "Weitere Materialien für den Unterricht", "✦", "brown"]
};

let view = "home";
let index = 0;
let score = 0;
let choice = "";
let checked = false;
let started = false;

let vocabularyStarted = false;
let vocabularyRounds = [];
let vocabularyRoundIndex = 0;
let matchedSpanishIds = new Set();
let matchedGermanIds = new Set();
let selectedMatch = { spanish: null, german: null };
let vocabularyMistakes = 0;
let vocabularyFeedback = "";

const app = document.querySelector("#app");
document.querySelector("[data-go=home]").addEventListener("click", () => go("home"));

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function go(next) {
  view = next;
  if (next === "praeteritum") {
    started = false;
    resetPraeteritum();
  }
  if (next === "vokabeln") resetVocabulary();
  render();
  scrollTo({ top: 0, behavior: "smooth" });
}

function resetPraeteritum() {
  index = 0;
  score = 0;
  choice = "";
  checked = false;
}

function resetVocabulary() {
  vocabularyStarted = false;
  vocabularyRounds = [];
  vocabularyRoundIndex = 0;
  matchedSpanishIds = new Set();
  matchedGermanIds = new Set();
  selectedMatch = { spanish: null, german: null };
  vocabularyMistakes = 0;
  vocabularyFeedback = "";
}

function startVocabulary() {
  resetVocabulary();
  vocabularyStarted = true;
  const shuffledPairs = shuffle(vocabularyPairs);
  for (let i = 0; i < shuffledPairs.length; i += 6) {
    const pairs = shuffledPairs.slice(i, i + 6);
    vocabularyRounds.push({ pairs, spanishOrder: shuffle(pairs), germanOrder: shuffle(pairs) });
  }
  render();
}

function crumbs(items) {
  return `<nav class="breadcrumbs"><button data-go="home">⌂ Startseite</button>${items.map((x) => `<b>/</b>${x[1] ? `<button data-go="${x[1]}">${x[0]}</button>` : `<em>${x[0]}</em>`}`).join("")}</nav>`;
}

function bindNav() {
  document.querySelectorAll("[data-go]").forEach((el) => el.addEventListener("click", () => go(el.dataset.go)));
}

function render() {
  if (view === "home") renderHome();
  else if (subjects[view]) renderSubject(view);
  else if (view === "klasse6") renderGermanGrade();
  else if (view === "spanisch7") renderSpanishGrade();
  else if (view === "praeteritum") renderPraeteritumLesson();
  else if (view === "vokabeln") renderVocabularyLesson();
  else renderHome();
  bindNav();
}

function renderHome() {
  app.innerHTML = `<div class="catalog-page"><section class="catalog-hero"><p class="eyebrow">✦ Digitale Lernmaterialien</p><h1>Interaktive<br><em>Lernumgebungen</em></h1><p>Wähle ein Fach und entdecke die verfügbaren Übungen und Lernmaterialien.</p></section><section class="catalog-section"><div class="section-heading"><span>01</span><h2>Fachbereiche</h2></div><div class="subject-grid">${Object.entries(subjects).map(([key, [label, intro, icon, tone]]) => `<button class="subject-card ${tone}" data-go="${key}"><span class="subject-icon">${icon}</span><span><strong>${label}</strong><small>${intro}</small></span><i>→</i></button>`).join("")}</div></section></div>`;
}

function renderSubject(key) {
  const [label, intro, icon, tone] = subjects[key];
  let grades = `<div class="empty-state"><strong>▱</strong><div><h3>Hier entsteht etwas Neues</h3><p>Sobald die erste Übung für diesen Bereich fertig ist, erscheint hier die passende Jahrgangsstufe.</p></div></div>`;
  if (key === "deutsch") grades = `<div class="grade-grid"><button class="grade-card" data-go="klasse6"><span class="grade-number">6</span><span><strong>Klasse 6</strong><small>Grammatik und Fabeln</small><i>Materialien ansehen →</i></span></button></div>`;
  if (key === "spanisch") grades = `<div class="grade-grid"><button class="grade-card spanish-grade" data-go="spanisch7"><span class="grade-number">7</span><span><strong>Klasse 7</strong><small>Vorkurs und erste Kommunikation</small><i>Materialien ansehen →</i></span></button></div>`;
  app.innerHTML = `<div class="catalog-page inner-page">${crumbs([[label]])}<section class="inner-hero ${tone}"><span class="inner-icon">${icon}</span><div><p class="eyebrow">Fachbereich</p><h1>${label}</h1><p>${intro}</p></div></section><section class="catalog-section"><div class="section-heading"><span>02</span><h2>Jahrgangsstufen</h2></div>${grades}</section></div>`;
}

function renderGermanGrade() {
  app.innerHTML = `<div class="catalog-page inner-page">${crumbs([["Deutsch", "deutsch"], ["Klasse 6"]])}<section class="inner-hero terracotta"><span class="inner-icon">6</span><div><p class="eyebrow">Deutsch · Jahrgangsstufe</p><h1>Klasse 6</h1><p>Interaktive Übungen und Lernangebote für den Deutschunterricht.</p></div></section><section class="catalog-section"><div class="section-heading"><span>03</span><h2>Lernmaterialien</h2></div><button class="material-card" data-go="praeteritum"><span class="material-art">Prä<br>ter</span><span class="material-copy"><small>Grammatik · Fabeln</small><strong>Verben im Präteritum</strong><p>Regelmäßige und unregelmäßige Verbformen in einer Fabel erkennen und einsetzen.</p><i>Übung öffnen →</i></span></button></section></div>`;
}

function renderSpanishGrade() {
  app.innerHTML = `<div class="catalog-page inner-page">${crumbs([["Spanisch", "spanisch"], ["Klasse 7"]])}<section class="inner-hero petrol"><span class="inner-icon">7</span><div><p class="eyebrow">Spanisch · Jahrgangsstufe</p><h1>Klasse 7</h1><p>Interaktive Übungen und Lernangebote für den Spanischunterricht.</p></div></section><section class="catalog-section"><div class="section-heading"><span>03</span><h2>Lernmaterialien</h2></div><button class="material-card" data-go="vokabeln"><span class="material-art spanish-art">¡Ho<br>la!</span><span class="material-copy"><small>Vorkurs · Wortschatz</small><strong>Vokabelquiz: Primeros pasos</strong><p>Ordne die ersten spanischen Wörter und Wendungen ihren deutschen Bedeutungen zu.</p><i>Übung öffnen →</i></span></button></section></div>`;
}

function praeteritumCrumbs() {
  return crumbs([["Deutsch", "deutsch"], ["Klasse 6", "klasse6"], ["Präteritum"]]);
}

function renderPraeteritumLesson() {
  if (!started) return renderPraeteritumStart();
  if (index >= questions.length) return renderPraeteritumResult();
  renderPraeteritumQuiz();
}

function renderPraeteritumStart() {
  app.innerHTML = `<div class="catalog-page inner-page">${praeteritumCrumbs()}<div class="landing compact-landing"><section class="hero"><div class="eyebrow">✦ Selbstständig üben</div><h1>Verben im<br><em>Präteritum</em></h1><p>Begleite Fuchs und Rabe durch eine kleine Fabel. Wähle jeweils die passende Verbform und erhalte sofort eine Rückmeldung.</p><button class="primary-button" id="start">Übung starten →</button><div class="meta-row"><span>8 Aufgaben</span><span>ca. 5 Minuten</span><span>direkte Auswertung</span></div></section><aside class="lesson-card"><span class="card-number">01</span><div class="animal-seal">F &amp; R</div><div><p class="card-kicker">Grammatiktraining</p><h2>Der Fuchs und der Rabe</h2><p>Regelmäßige und unregelmäßige Verben sicher unterscheiden.</p></div></aside><details class="rule-box"><summary>▤ Merkhilfe zum Präteritum</summary><div class="rule-grid"><p><strong>Regelmäßig:</strong><br>Verbstamm + <mark>-te</mark><br>loben → lobte</p><p><strong>Unregelmäßig:</strong><br>Der Stamm verändert sich.<br>fallen → fiel</p></div></details></div></div>`;
  document.querySelector("#start").addEventListener("click", () => { started = true; render(); });
}

function renderPraeteritumQuiz() {
  const [sentence, infinitive, answers, correct, hint] = questions[index];
  app.innerHTML = `<div class="catalog-page inner-page">${praeteritumCrumbs()}<section class="quiz-wrap"><div class="quiz-heading"><div><p>Aufgabe ${index + 1} von ${questions.length}</p><h1>Setze das Verb ins Präteritum.</h1></div><span class="score">${score} Punkte</span></div><div class="progress"><span style="width:${index / questions.length * 100}%"></span></div><article class="question-card"><span class="infinitive">Infinitiv: <strong>${infinitive}</strong></span><p class="sentence">${sentence}</p><div class="answer-list">${answers.map((answer) => `<button class="answer" data-answer="${answer}">${answer}</button>`).join("")}</div><div id="feedback"></div><div class="quiz-actions"><button class="primary-button" id="action" disabled>Antwort prüfen</button></div></article></section></div>`;
  document.querySelectorAll(".answer").forEach((button) => button.addEventListener("click", () => {
    if (checked) return;
    choice = button.dataset.answer;
    document.querySelectorAll(".answer").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    document.querySelector("#action").disabled = false;
  }));
  document.querySelector("#action").addEventListener("click", () => {
    if (!checked) {
      checked = true;
      const good = choice === correct;
      if (good) score++;
      document.querySelectorAll(".answer").forEach((button) => {
        button.disabled = true;
        if (button.dataset.answer === correct) button.classList.add("correct");
        else if (button.dataset.answer === choice) button.classList.add("wrong");
      });
      document.querySelector("#feedback").innerHTML = `<div class="feedback ${good ? "good" : "try-again"}"><strong>${good ? "Richtig!" : `Fast! Richtig ist „${correct}“.`}</strong><span>${hint}</span></div>`;
      const action = document.querySelector("#action");
      action.disabled = false;
      action.textContent = index === questions.length - 1 ? "Ergebnis ansehen" : "Nächste Aufgabe →";
      document.querySelector(".progress span").style.width = `${(index + 1) / questions.length * 100}%`;
    } else {
      checked = false;
      choice = "";
      index++;
      render();
    }
  });
}

function renderPraeteritumResult() {
  const text = score === questions.length ? "Fabelhaft! Du beherrschst das Präteritum sehr sicher." : score >= 6 ? "Sehr gut! Nur wenige Formen solltest du noch einmal ansehen." : score >= 4 ? "Gut angefangen! Mit einer zweiten Runde wirst du noch sicherer." : "Bleib dran! Lies die Merkhilfe und probiere die Übung noch einmal.";
  app.innerHTML = `<div class="catalog-page inner-page">${praeteritumCrumbs()}<section class="result-card"><div class="result-icon">✒</div><p class="eyebrow">Übung abgeschlossen</p><h1>${score} von ${questions.length} richtig</h1><p>${text}</p><div class="score-track">${questions.map((_, i) => `<span class="${i < score ? "filled" : ""}"></span>`).join("")}</div><button class="primary-button" id="restart">↻ Noch einmal üben</button></section></div>`;
  document.querySelector("#restart").addEventListener("click", () => { resetPraeteritum(); started = true; render(); });
}

function vocabularyCrumbs() {
  return crumbs([["Spanisch", "spanisch"], ["Klasse 7", "spanisch7"], ["Vokabelquiz"]]);
}

function renderVocabularyLesson() {
  if (!vocabularyStarted) return renderVocabularyStart();
  if (vocabularyRoundIndex >= vocabularyRounds.length) return renderVocabularyResult();
  renderVocabularyQuiz();
}

function renderVocabularyStart() {
  app.innerHTML = `<div class="catalog-page inner-page">${vocabularyCrumbs()}<div class="landing compact-landing"><section class="hero"><div class="eyebrow">✦ Primeros pasos</div><h1>Vokabeln<br><em>zuordnen</em></h1><p>Klicke zuerst einen spanischen Begriff und dann die passende deutsche Bedeutung an. Arbeite dich in sechs überschaubaren Runden durch den Wortschatz.</p><button class="primary-button" id="start-vocabulary">Quiz starten →</button><div class="meta-row"><span>${vocabularyPairs.length} Wortpaare</span><span>6 Runden</span><span>direkte Rückmeldung</span></div></section><aside class="lesson-card spanish-card"><span class="card-number">01</span><div class="animal-seal">ES<br>↔<br>DE</div><div><p class="card-kicker">Vorkurs · Wortschatz</p><h2>Primeros pasos</h2><p>Erste Wörter und Wendungen auf Spanisch sicher verstehen.</p></div></aside><details class="rule-box"><summary>▤ So funktioniert die Zuordnung</summary><div class="rule-grid"><p><strong>1. Spanisch wählen</strong><br>Klicke links einen spanischen Begriff an.</p><p><strong>2. Deutsch zuordnen</strong><br>Klicke rechts auf die passende Bedeutung.</p></div></details></div></div>`;
  document.querySelector("#start-vocabulary").addEventListener("click", startVocabulary);
}

function renderVocabularyQuiz() {
  const round = vocabularyRounds[vocabularyRoundIndex];
  const roundComplete = round.pairs.every((pair) => matchedSpanishIds.has(pair.id));
  const roundMatched = round.pairs.filter((pair) => matchedSpanishIds.has(pair.id)).length;
  const totalMatched = matchedSpanishIds.size;
  const feedbackClass = vocabularyFeedback.startsWith("Richtig") ? "good" : vocabularyFeedback.startsWith("Noch nicht") ? "try-again" : "";
  const matchButton = (pair, side) => {
    const isMatched = side === "spanish" ? matchedSpanishIds.has(pair.id) : matchedGermanIds.has(pair.id);
    const isSelected = selectedMatch[side] === pair.id;
    return `<button class="match-button ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}" data-side="${side}" data-pair="${pair.id}" ${isMatched ? "disabled" : ""} aria-pressed="${isSelected}">${side === "spanish" ? pair.spanish : pair.german}</button>`;
  };
  app.innerHTML = `<div class="catalog-page inner-page">${vocabularyCrumbs()}<section class="quiz-wrap vocabulary-wrap"><div class="quiz-heading"><div><p>Runde ${vocabularyRoundIndex + 1} von ${vocabularyRounds.length}</p><h1>Was gehört zusammen?</h1></div><span class="score">${totalMatched} von ${vocabularyPairs.length} Paaren</span></div><div class="progress"><span style="width:${totalMatched / vocabularyPairs.length * 100}%"></span></div><article class="question-card matching-card"><div class="matching-instruction"><p>Wähle je einen Begriff aus beiden Spalten.</p><span>${roundMatched} von ${round.pairs.length} in dieser Runde</span></div><div class="matching-grid"><section class="matching-column"><h2>Español</h2>${round.spanishOrder.map((pair) => matchButton(pair, "spanish")).join("")}</section><section class="matching-column"><h2>Deutsch</h2>${round.germanOrder.map((pair) => matchButton(pair, "german")).join("")}</section></div><div class="match-feedback ${feedbackClass}" aria-live="polite">${vocabularyFeedback || "Beginne mit einem spanischen Begriff."}</div>${roundComplete ? `<div class="round-complete"><strong>Runde geschafft!</strong><button class="primary-button" id="next-vocabulary-round">${vocabularyRoundIndex === vocabularyRounds.length - 1 ? "Ergebnis ansehen" : "Nächste Runde →"}</button></div>` : ""}</article></section></div>`;
  document.querySelectorAll(".match-button").forEach((button) => button.addEventListener("click", () => chooseVocabulary(button.dataset.side, Number(button.dataset.pair))));
  const nextButton = document.querySelector("#next-vocabulary-round");
  if (nextButton) nextButton.addEventListener("click", () => {
    vocabularyRoundIndex++;
    selectedMatch = { spanish: null, german: null };
    vocabularyFeedback = "";
    render();
    scrollTo({ top: 0, behavior: "smooth" });
  });
}

function chooseVocabulary(side, pairId) {
  selectedMatch[side] = selectedMatch[side] === pairId ? null : pairId;
  vocabularyFeedback = side === "spanish" ? "Jetzt fehlt noch die deutsche Bedeutung." : "Jetzt fehlt noch der spanische Begriff.";
  if (selectedMatch.spanish !== null && selectedMatch.german !== null) {
    const spanishPair = vocabularyPairs.find((pair) => pair.id === selectedMatch.spanish);
    const germanPair = vocabularyPairs.find((pair) => pair.id === selectedMatch.german);
    if (spanishPair.german === germanPair.german) {
      matchedSpanishIds.add(spanishPair.id);
      matchedGermanIds.add(germanPair.id);
      vocabularyFeedback = "Richtig zugeordnet!";
    } else {
      vocabularyMistakes++;
      vocabularyFeedback = "Noch nicht ganz – probiere eine andere Kombination.";
    }
    selectedMatch = { spanish: null, german: null };
  }
  renderVocabularyQuiz();
}

function renderVocabularyResult() {
  const resultText = vocabularyMistakes === 0 ? "¡Perfecto! Du hast alle Paare ohne Fehlversuch gefunden." : vocabularyMistakes <= 5 ? "¡Muy bien! Du hast den Wortschatz schon sehr sicher zugeordnet." : vocabularyMistakes <= 12 ? "Gut gemacht! Wiederhole das Quiz noch einmal, um noch sicherer zu werden." : "Ein guter Anfang! Mit einer zweiten Runde prägen sich die Wortpaare besser ein.";
  app.innerHTML = `<div class="catalog-page inner-page">${vocabularyCrumbs()}<section class="result-card"><div class="result-icon">Ñ</div><p class="eyebrow">Quiz abgeschlossen</p><h1>${vocabularyPairs.length} Paare geschafft</h1><p>${resultText}</p><div class="result-stats"><span><strong>${vocabularyPairs.length}</strong> richtige Zuordnungen</span><span><strong>${vocabularyMistakes}</strong> Fehlversuche</span></div><button class="primary-button" id="restart-vocabulary">↻ Noch einmal üben</button></section></div>`;
  document.querySelector("#restart-vocabulary").addEventListener("click", startVocabulary);
}

render();
