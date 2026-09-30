"use strict";

const exercises = [
  {
    id: 1, group: 1, icon: "🦅", color: "#db7a27", title: "Artikel der Tiernamen",
    short: "der, die oder das richtig zuordnen", instruction: "Wähle vor jedem Tiernamen den passenden bestimmten Artikel.",
    type: "select", items: [
      ["Adler", "der"], ["Giraffe", "die"], ["Krokodil", "das"], ["Löwe", "der"],
      ["Schildkröte", "die"], ["Zebra", "das"], ["Elefant", "der"], ["Eule", "die"],
      ["Kaninchen", "das"], ["Bär", "der"], ["Maus", "die"], ["Pferd", "das"]
    ], options: ["der", "die", "das"], prompt: q => `___ ${q}`
  },
  {
    id: 2, group: 1, icon: "🦊", color: "#bd6330", title: "Tiernamen im Plural",
    short: "Pluralformen sicher bilden", instruction: "Schreibe die passende Pluralform. Der Artikel „die“ steht schon da.",
    type: "text", items: [
      ["der Fuchs – die …", ["Füchse"]], ["die Giraffe – die …", ["Giraffen"]],
      ["das Krokodil – die …", ["Krokodile"]], ["der Löwe – die …", ["Löwen"]],
      ["die Maus – die …", ["Mäuse"]], ["das Pferd – die …", ["Pferde"]]
    ]
  },
  {
    id: 3, group: 1, icon: "🐾", color: "#9b713e", title: "Körperteile der Tiere",
    short: "treffende Nomen einsetzen", instruction: "Wähle das Körperteil, das den Satz sinnvoll ergänzt. Jedes Wort passt genau einmal.",
    type: "select", options: ["Schnabel", "Mähne", "Pfoten", "Fell", "Hufe", "Flügel"], items: [
      ["Der Adler hat einen kräftigen …", "Schnabel"], ["Der Löwe trägt eine dichte …", "Mähne"],
      ["Die Katze läuft auf weichen …", "Pfoten"], ["Der Eisbär besitzt ein weißes …", "Fell"],
      ["Das Pferd hat harte …", "Hufe"], ["Der Vogel breitet seine … aus.", "Flügel"]
    ]
  },
  {
    id: 4, group: 1, icon: "🐺", color: "#5f7587", title: "Die vier Fälle erkennen",
    short: "Nominativ, Akkusativ, Dativ, Genitiv", instruction: "Bestimme den Fall der hervorgehobenen Wortgruppe.",
    type: "select", options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], items: [
      ["Der junge Wolf lebt im Wald. – Der junge Wolf", "Nominativ"],
      ["Man erkennt den jungen Wolf an seinem grauen Fell. – den jungen Wolf", "Akkusativ"],
      ["Die langen Beine helfen dem jungen Wolf beim Laufen. – dem jungen Wolf", "Dativ"],
      ["Die Ohren des jungen Wolfes sind spitz. – des jungen Wolfes", "Genitiv"],
      ["Die Tierpflegerin gibt den hungrigen Wölfen Fleisch. – den hungrigen Wölfen", "Dativ"]
    ]
  },
  {
    id: 5, group: 1, icon: "🐈", color: "#5c8791", title: "Mit Fallfragen prüfen",
    short: "Frage und Antwort zuordnen", instruction: "Wähle zuerst die passende Fallfrage und dann die Antwort aus dem Satz.",
    type: "double-select", items: [
      {q:"Der Luchs beobachtet die Beute.", a:"Wen oder was beobachtet der Luchs?", b:"die Beute", aopts:["Wer oder was beobachtet der Luchs?","Wen oder was beobachtet der Luchs?","Wem beobachtet der Luchs?","Wessen beobachtet der Luchs?"], bopts:["der Luchs","die Beute","dem Luchs","des Luchses"]},
      {q:"Der buschige Schwanz gehört dem Luchs.", a:"Wem gehört der buschige Schwanz?", b:"dem Luchs", aopts:["Wen gehört der buschige Schwanz?","Wer gehört der buschige Schwanz?","Wem gehört der buschige Schwanz?","Wessen gehört der buschige Schwanz?"], bopts:["den Luchs","dem Luchs","der buschige Schwanz","des Luchses"]},
      {q:"Das Fell des Luchses ist gefleckt.", a:"Wessen Fell ist gefleckt?", b:"des Luchses", aopts:["Wem Fell ist gefleckt?","Wen oder was ist gefleckt?","Wer Fell ist gefleckt?","Wessen Fell ist gefleckt?"], bopts:["das Fell","dem Luchs","des Luchses","den Luchs"]}
    ]
  },
  {
    id: 6, group: 2, icon: "🐻", color: "#855a38", title: "Bestimmte Artikel im Satz",
    short: "Artikel an den Fall anpassen", instruction: "Wähle den passenden bestimmten Artikel.",
    type: "select", options: ["der", "die", "das", "den", "dem", "des"], items: [
      ["___ Braunbär ist ein kräftiges Tier.", "Der"], ["Man erkennt ___ Braunbären an seinem dichten Fell.", "den"],
      ["Im Winter hilft ___ Braunbären eine dicke Fettschicht.", "dem"], ["Die Tatzen ___ Braunbären sind breit.", "des"],
      ["___ Wölfe leben oft im Rudel.", "Die"], ["Die Leitwölfin zeigt ___ jungen Wölfen den Weg.", "den"]
    ], caseInsensitive: true
  },
  {
    id: 7, group: 2, icon: "🐈‍⬛", color: "#476977", title: "Unbestimmte Artikel beim Luchs",
    short: "ein, eine, einen, einem …", instruction: "Wähle den passenden unbestimmten Artikel.",
    type: "select", options: ["ein", "eine", "einen", "einem", "einer", "eines"], items: [
      ["Im Gehege lebt ___ kleiner Luchs.", "ein"], ["Er hat ___ kurzen Schwanz.", "einen"],
      ["Auf den Ohren sitzt je ___ dunkler Haarpinsel.", "ein"], ["Die Pflegerin nähert sich ___ ruhigen Luchs.", "einem"],
      ["Die Spuren ___ jungen Luchses sind im Schnee zu sehen.", "eines"]
    ]
  },
  {
    id: 8, group: 2, icon: "🦌", color: "#788e54", title: "Dativ nach Präpositionen",
    short: "Wortgruppen in den Dativ setzen", instruction: "Schreibe die vollständige Wortgruppe im Dativ. Die Präposition steht schon im Satz.",
    type: "text", items: [
      ["mit (der lange Schwanz): mit …", ["dem langen Schwanz"]],
      ["bei (die alten Elefanten): bei …", ["den alten Elefanten"]],
      ["von (das flinke Reh): von …", ["dem flinken Reh"]],
      ["zu (ein großer Käfig): zu …", ["einem großen Käfig"]]
    ]
  },
  {
    id: 9, group: 2, icon: "🐘", color: "#6f7f8a", title: "Adjektivendungen beim Elefanten",
    short: "passende Endungen ergänzen", instruction: "Schreibe nur die fehlende Adjektivendung, zum Beispiel -e oder -en.",
    type: "text", items: [
      ["Der groß___ Elefant", ["e", "-e"]], ["breit___ Ohren", ["e", "-e"]],
      ["Die lang___ Stoßzähne", ["en", "-en"]], ["den alt___ Elefanten", ["en", "-en"]],
      ["an seiner faltig___ Haut", ["en", "-en"]], ["Mit dem beweglich___ Rüssel", ["en", "-en"]],
      ["klein___ Gegenstände", ["e", "-e"]], ["des schwer___ Tieres", ["en", "-en"]]
    ]
  },
  {
    id: 10, group: 2, icon: "🐅", color: "#d97824", title: "Wortgruppen mit Adjektiv",
    short: "Artikel, Adjektiv und Nomen verbinden", instruction: "Wähle die Wortgruppe in der verlangten Form.",
    type: "select-custom", items: [
      ["Nominativ: der + gefährlich + Tiger", "der gefährliche Tiger", ["der gefährlichen Tiger","dem gefährlichen Tiger","der gefährliche Tiger","des gefährlichen Tigers"]],
      ["Akkusativ: der + gefährlich + Tiger", "den gefährlichen Tiger", ["den gefährliche Tiger","den gefährlichen Tiger","dem gefährlichen Tiger","der gefährliche Tiger"]],
      ["Dativ: ein + gefährlich + Tiger", "einem gefährlichen Tiger", ["einen gefährlichen Tiger","eines gefährlichen Tigers","ein gefährlicher Tiger","einem gefährlichen Tiger"]],
      ["Genitiv: ein + gefährlich + Tiger", "eines gefährlichen Tigers", ["einem gefährlichen Tiger","eines gefährlichen Tigers","einen gefährlichen Tiger","ein gefährlicher Tiger"]]
    ]
  },
  {
    id: 11, group: 2, icon: "🦉", color: "#695f89", title: "Wiederholungen vermeiden",
    short: "Nomen durch Pronomen ersetzen", instruction: "Wähle das passende Pronomen für die Wiederholung.",
    type: "select", options: ["er", "sie", "es", "ihn"], items: [
      ["Der Luchs ist eine Raubkatze. ___ lebt in großen Waldgebieten.", "Er"],
      ["Die Eule jagt nachts. Man erkennt ___ an ihren großen Augen.", "sie"],
      ["Das Zebra trägt ein Streifenmuster. Das Streifenmuster schützt ___.", "es"],
      ["Die Wölfe heulen. ___ verständigen sich so.", "Sie"]
    ], caseInsensitive: true
  },
  {
    id: 12, group: 2, icon: "🦚", color: "#387e76", title: "Sein oder ihr?",
    short: "Possessivbegleiter richtig einsetzen", instruction: "Wähle den passenden Possessivbegleiter.",
    type: "select", options: ["sein", "seine", "seinen", "seiner", "seinem", "seines", "ihr", "ihre", "ihren", "ihrer", "ihrem", "ihres"], items: [
      ["Der Pfau öffnet ___ prächtiges Rad.", "sein"], ["Die Giraffe erreicht mit ___ langen Hals hohe Blätter.", "ihrem"],
      ["Der Tiger jagt mit ___ kräftigen Beinen.", "seinen"], ["Die Eule dreht ___ beweglichen Kopf.", "ihren"],
      ["Das Zebra schützt ___ Fohlen.", "sein"], ["Die Löwin bleibt bei ___ Jungen.", "ihren"]
    ]
  },
  {
    id: 13, group: 3, icon: "🦒", color: "#c8872f", title: "Fehlertext: Die Giraffe",
    short: "12 Grammatikfehler verbessern", instruction: "In diesem Text stecken 12 Grammatikfehler. Wähle an jeder markierten Stelle die richtige Form.",
    type: "error-text"
  },
  {
    id: 14, group: 3, icon: "✍️", color: "#0f7777", title: "Eigene Tierbeschreibung",
    short: "einen sachlichen Text planen und schreiben", instruction: "Wähle ein Tier. Sammle Stichwörter und schreibe vom Allgemeinen zum Besonderen. Prüfe deinen Text anschließend mit der Checkliste.",
    type: "writing"
  }
];

function shuffle(values) {
  const copy = [...new Set(values)];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function esc(value) {
  return String(value).replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
}

function normalize(value) {
  return String(value).trim().toLocaleLowerCase("de-DE").replace(/[.!?]+$/, "").replace(/\s+/g, " ");
}

function renderOverview() {
  exercises.forEach(ex => {
    const target = document.getElementById(`cards-${ex.group}`);
    const link = document.createElement("a");
    link.className = "exercise-card";
    link.href = `uebung.html?id=${ex.id}`;
    link.style.setProperty("--accent", ex.color);
    link.innerHTML = `<span class="card-icon" aria-hidden="true">${ex.icon}</span><span><span class="card-number">Übung ${ex.id}</span><h3>${esc(ex.title)}</h3><p>${esc(ex.short)}</p></span>`;
    target.appendChild(link);
  });
}

function optionsHtml(options) {
  return `<option value="">Bitte auswählen</option>${shuffle(options).map(v => `<option value="${esc(v)}">${esc(v)}</option>`).join("")}`;
}

function standardQuestion(index, prompt, control) {
  return `<div class="question" data-question="${index}"><label for="answer-${index}"><span class="question-number">${index + 1}</span>${esc(prompt)}</label>${control}<p class="feedback" aria-live="polite"></p></div>`;
}

function renderExercise() {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const ex = exercises.find(item => item.id === id);
  const root = document.getElementById("exercise-root");
  if (!ex) {
    root.innerHTML = `<div class="missing"><h1>Diese Übung wurde nicht gefunden.</h1><p><a href="index.html">Zur Übersicht</a></p></div>`;
    return;
  }
  document.title = `Übung ${ex.id}: ${ex.title}`;
  let body = "";
  if (ex.type === "select") {
    body = ex.items.map((item, i) => standardQuestion(i, item[0], `<select id="answer-${i}" data-answer="${esc(item[1])}">${optionsHtml(ex.options)}</select>`)).join("");
  } else if (ex.type === "select-custom") {
    body = ex.items.map((item, i) => standardQuestion(i, item[0], `<select id="answer-${i}" data-answer="${esc(item[1])}">${optionsHtml(item[2])}</select>`)).join("");
  } else if (ex.type === "text") {
    body = ex.items.map((item, i) => standardQuestion(i, item[0], `<input id="answer-${i}" class="long-input" type="text" autocomplete="off" data-answers="${esc(JSON.stringify(item[1]))}" placeholder="Antwort eingeben">`)).join("");
  } else if (ex.type === "double-select") {
    body = ex.items.map((item, i) => `<div class="question" data-question="${i}"><p><span class="question-number">${i + 1}</span><strong>${esc(item.q)}</strong></p><div class="inline-gap"><label for="answer-${i}-a">Fallfrage:</label><select id="answer-${i}-a" data-answer="${esc(item.a)}">${optionsHtml(item.aopts)}</select></div><br><div class="inline-gap"><label for="answer-${i}-b">Antwort:</label><select id="answer-${i}-b" data-answer="${esc(item.b)}">${optionsHtml(item.bopts)}</select></div><p class="feedback" aria-live="polite"></p></div>`).join("");
  } else if (ex.type === "error-text") {
    body = renderErrorText();
  } else if (ex.type === "writing") {
    body = renderWriting();
  }

  root.innerHTML = `
    <section class="exercise-head" style="--accent:${ex.color}">
      <div><span class="exercise-number">Einzelübung ${ex.id} von 14</span><h1>${esc(ex.title)}</h1><p>${esc(ex.short)}</p></div>
      <div class="exercise-head__icon" aria-hidden="true">${ex.icon}</div>
    </section>
    <section class="exercise-body">
      <p class="instruction"><strong>Arbeitsauftrag:</strong> ${esc(ex.instruction)}</p>
      <div class="question-list">${body}</div>
      ${ex.type === "writing" ? "" : `<div class="actions"><button class="btn btn-primary" id="check">Antworten prüfen</button><button class="btn btn-secondary" id="reset">Noch einmal</button><a class="btn btn-link" href="uebung.html?id=${ex.id === 14 ? 1 : ex.id + 1}">Nächste Übung →</a></div><div id="result" class="result" aria-live="polite"></div>`}
    </section>`;

  if (ex.type !== "writing") {
    document.getElementById("check").addEventListener("click", checkAnswers);
    document.getElementById("reset").addEventListener("click", () => location.reload());
  }
  if (ex.type === "writing") setupWriting();
}

function renderErrorText() {
  const choices = [
    ["Der", "Die", "Den"], ["auffällig", "auffällige", "auffälliges"], ["der Giraffe", "die Giraffe", "dem Giraffen"],
    ["sein", "ihrem", "ihrer"], ["langer", "langen", "langem"], ["der langen", "dem langen", "den langen"],
    ["die hohen Bäume", "der hohen Bäume", "den hohen Bäumen"], ["Ihre", "Ihr", "Sein"],
    ["Die kräftige", "Die kräftigen", "Den kräftigen"], ["den", "dem", "das"],
    ["groß", "großen", "große"], ["Ein", "Eine", "Einer"]
  ];
  const answers = ["Die", "auffälliges", "die Giraffe", "ihrem", "langen", "dem langen", "der hohen Bäume", "Ihr", "Die kräftigen", "dem", "großen", "Eine"];
  const selects = choices.map((opts, i) => `<select aria-label="Fehlerstelle ${i + 1}" data-answer="${esc(answers[i])}">${optionsHtml(opts)}</select>`);
  return `<div class="question" data-question="0"><div class="error-box">${selects[0]} Giraffe ist ein ${selects[1]} Tier. Man erkennt ${selects[2]} besonders an ${selects[3]} ${selects[4]} Hals. Mit ${selects[5]} Hals erreicht sie die Blätter ${selects[6]}. ${selects[7]} Fell zeigt braune Flecken. ${selects[8]} Beine helfen ${selects[9]} ${selects[10]} Tier beim Laufen. ${selects[11]} Giraffe kann sehr schnell werden.</div><p class="feedback" aria-live="polite"></p></div>`;
}

function renderWriting() {
  return `<div class="writing-plan">
    <div class="plan-field"><label for="tier">Tierart, Lebensraum, Größe</label><input id="tier" type="text" placeholder="z. B. Wolf, Wald, mittelgroß"></div>
    <div class="plan-field"><label for="koerper">Körperbau</label><input id="koerper" type="text" placeholder="Kopf, Körper, Beine, Schwanz"></div>
    <div class="plan-field"><label for="fell">Fell oder Haut</label><input id="fell" type="text" placeholder="Farbe, Muster, Beschaffenheit"></div>
    <div class="plan-field"><label for="merkmale">Besondere Merkmale</label><input id="merkmale" type="text" placeholder="Zähne, Ohren, Krallen, Bewegung"></div>
  </div>
  <label for="text"><strong>Meine Tierbeschreibung</strong></label>
  <textarea id="text" placeholder="Schreibe hier deinen Text …"></textarea>
  <div class="checklist"><strong>Meine Checkliste</strong>
    <label><input type="checkbox"> Artikel und Nomen passen zusammen.</label>
    <label><input type="checkbox"> Die Adjektivendungen stimmen.</label>
    <label><input type="checkbox"> Die Pronomen sind eindeutig.</label>
    <label><input type="checkbox"> Ich habe die Fälle geprüft.</label>
    <label><input type="checkbox"> Ich schreibe sachlich vom Allgemeinen zum Besonderen.</label>
  </div>
  <div class="actions"><button class="btn btn-secondary" id="clear-writing">Eingaben löschen</button><a class="btn btn-link" href="index.html">Zur Übersicht</a></div>`;
}

function setupWriting() {
  const fields = [...document.querySelectorAll(".writing-plan input, textarea")];
  fields.forEach(field => {
    const key = `tierbeschreibung-${field.id}`;
    field.value = localStorage.getItem(key) || "";
    field.addEventListener("input", () => localStorage.setItem(key, field.value));
  });
  document.getElementById("clear-writing").addEventListener("click", () => {
    if (!confirm("Möchtest du alle Eingaben dieser Übung löschen?")) return;
    fields.forEach(field => { field.value = ""; localStorage.removeItem(`tierbeschreibung-${field.id}`); });
    document.querySelectorAll(".checklist input").forEach(box => box.checked = false);
  });
}

function checkAnswers() {
  const questions = [...document.querySelectorAll(".question")];
  let correct = 0;
  let total = 0;
  questions.forEach(question => {
    const controls = [...question.querySelectorAll("select[data-answer], input[data-answers]")];
    let questionCorrect = true;
    controls.forEach(control => {
      total++;
      let ok;
      if (control.matches("select")) ok = normalize(control.value) === normalize(control.dataset.answer);
      else {
        const accepted = JSON.parse(control.dataset.answers).map(normalize);
        ok = accepted.includes(normalize(control.value));
      }
      if (ok) correct++; else questionCorrect = false;
    });
    question.classList.toggle("correct", questionCorrect);
    question.classList.toggle("incorrect", !questionCorrect);
    const feedback = question.querySelector(".feedback");
    if (questionCorrect) feedback.textContent = "✓ Richtig!";
    else if (controls.length === 1) {
      const c = controls[0];
      const answer = c.dataset.answer || JSON.parse(c.dataset.answers)[0];
      feedback.textContent = `Noch nicht richtig. Tipp: Die Lösung lautet „${answer}“.`;
    } else feedback.textContent = "Noch nicht ganz richtig. Prüfe alle markierten Stellen dieser Aufgabe.";
  });
  const result = document.getElementById("result");
  const perfect = correct === total;
  result.className = `result show ${perfect ? "good" : "keep-going"}`;
  result.textContent = perfect ? `Stark! Du hast alle ${total} Antworten richtig.` : `Du hast ${correct} von ${total} Antworten richtig. Verbessere die markierten Stellen und prüfe noch einmal.`;
  result.scrollIntoView({behavior:"smooth", block:"nearest"});
}
