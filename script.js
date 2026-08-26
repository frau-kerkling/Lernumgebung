const questions = [
  ["Eines Morgens ___ der schlaue Fuchs durch den Wald.","schleichen",["schlich","schleichte","schleich"],"schlich","‚Schleichen‘ ist ein starkes Verb. Der Stammvokal verändert sich: ei → i."],
  ["Am Bach ___ er einen hungrigen Raben.","entdecken",["entdeckte","entduckte","entdeckete"],"entdeckte","Bei einem regelmäßigen Verb setzt du -te an den Verbstamm."],
  ["Der Rabe ___ ein großes Stück Käse im Schnabel.","halten",["haltete","hielt","holte"],"hielt","‚Halten‘ ist unregelmäßig. Im Präteritum heißt es ‚hielt‘."],
  ["Der Fuchs ___ den köstlichen Käse sofort.","bemerken",["bemerkte","bemark","bemerkete"],"bemerkte","Verbstamm ‚bemerk-‘ + Endung ‚-te‘ ergibt ‚bemerkte‘."],
  ["Daraufhin ___ er den Raben überschwänglich.","loben",["lobte","lieb","lobete"],"lobte","‚Loben‘ ist regelmäßig: lob- + -te."],
  ["Der geschmeichelte Rabe ___ seinen Schnabel.","öffnen",["offnete","öffnete","öffnete-te"],"öffnete","Nach dem Verbstamm ‚öffn-‘ hilft ein zusätzliches e bei der Aussprache."],
  ["Der Käse ___ direkt vor die Pfoten des Fuchses.","fallen",["fällte","fiel","fallte"],"fiel","‚Fallen‘ ist stark. Der Stammvokal verändert sich: a → ie."],
  ["Der Fuchs ___ die Beute und verschwand zufrieden.","nehmen",["nahm","nehmte","nahmte"],"nahm","‚Nehmen‘ ist stark. Im Präteritum heißt es ‚nahm‘."]
];
let index=0, score=0, choice="", checked=false;
const app=document.querySelector("#app");

function start(){ index=0;score=0;choice="";checked=false;renderQuiz(); }
function renderHome(){
  app.innerHTML=`<div class="landing"><section class="hero"><div class="eyebrow">✦ Selbstständig üben</div><h1>Verben im<br><em>Präteritum</em></h1><p>Begleite Fuchs und Rabe durch eine kleine Fabel. Wähle jeweils die passende Verbform und erhalte sofort eine Rückmeldung.</p><button class="primary-button" id="start">Übung starten →</button><div class="meta-row"><span>8 Aufgaben</span><span>ca. 5 Minuten</span><span>direkte Auswertung</span></div></section><aside class="lesson-card"><span class="card-number">01</span><div class="animal-seal">F &amp; R</div><div><p class="card-kicker">Grammatiktraining</p><h2>Der Fuchs und der Rabe</h2><p>Regelmäßige und unregelmäßige Verben sicher unterscheiden.</p></div></aside><details class="rule-box"><summary>▤ Merkhilfe zum Präteritum</summary><div class="rule-grid"><p><strong>Regelmäßig:</strong><br>Verbstamm + <mark>-te</mark><br>loben → lobte</p><p><strong>Unregelmäßig:</strong><br>Der Stamm verändert sich.<br>fallen → fiel</p></div></details></div>`;
  document.querySelector("#start").addEventListener("click",start);
}
function renderQuiz(){
  const [sentence,infinitive,answers,correct,hint]=questions[index];
  app.innerHTML=`<section class="quiz-wrap"><div class="quiz-heading"><div><p>Aufgabe ${index+1} von ${questions.length}</p><h1>Setze das Verb ins Präteritum.</h1></div><span class="score">${score} Punkte</span></div><div class="progress"><span style="width:${index/questions.length*100}%"></span></div><article class="question-card"><span class="infinitive">Infinitiv: <strong>${infinitive}</strong></span><p class="sentence">${sentence}</p><div class="answer-list">${answers.map(a=>`<button class="answer" data-answer="${a}">${a}</button>`).join("")}</div><div id="feedback"></div><div class="quiz-actions"><button class="primary-button" id="action" disabled>Antwort prüfen</button></div></article></section>`;
  document.querySelectorAll(".answer").forEach(button=>button.addEventListener("click",()=>{
    if(checked)return; choice=button.dataset.answer; document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected")); button.classList.add("selected"); document.querySelector("#action").disabled=false;
  }));
  document.querySelector("#action").addEventListener("click",()=>{
    if(!checked){
      checked=true; const good=choice===correct;if(good)score++;
      document.querySelectorAll(".answer").forEach(b=>{b.disabled=true;if(b.dataset.answer===correct)b.classList.add("correct");else if(b.dataset.answer===choice)b.classList.add("wrong")});
      document.querySelector("#feedback").innerHTML=`<div class="feedback ${good?'good':'try-again'}"><strong>${good?'Richtig!':`Fast! Richtig ist „${correct}“.`}</strong><span>${hint}</span></div>`;
      const action=document.querySelector("#action");action.disabled=false;action.textContent=index===questions.length-1?'Ergebnis ansehen':'Nächste Aufgabe →';document.querySelector(".progress span").style.width=`${(index+1)/questions.length*100}%`;
    }else{ checked=false;choice="";if(index===questions.length-1)renderResult();else{index++;renderQuiz()} }
  });
}
function renderResult(){
  const text=score===8?"Fabelhaft! Du beherrschst das Präteritum sehr sicher.":score>=6?"Sehr gut! Nur wenige Formen solltest du noch einmal ansehen.":score>=4?"Gut angefangen! Mit einer zweiten Runde wirst du noch sicherer.":"Bleib dran! Lies die Merkhilfe und probiere die Übung noch einmal.";
  app.innerHTML=`<section class="result-card"><div class="result-icon">✒</div><p class="eyebrow">Übung abgeschlossen</p><h1>${score} von 8 richtig</h1><p>${text}</p><div class="score-track">${questions.map((_,i)=>`<span class="${i<score?'filled':''}"></span>`).join("")}</div><button class="primary-button" id="restart">↻ Noch einmal üben</button></section>`;
  document.querySelector("#restart").addEventListener("click",start);
}
renderHome();
