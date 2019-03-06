
const randomize = document.querySelector('.randomize');

const nbCitationChoisie = document.getElementById('nb_citations');
const CitationChoisie = document.getElementById('generateur_citations');


const citationAffichee = document.querySelector('.citation');
 
const para1 = document.createElement('p');
citationAffichee.appendChild(para1);

const para2 = document.createElement('p');
citationAffichee.appendChild(para2);

const para3 = document.createElement('p');
citationAffichee.appendChild(para3);

const para4 = document.createElement('p');
citationAffichee.appendChild(para4);

const para5 = document.createElement('p');
citationAffichee.appendChild(para5);


function randomValueFromArray(array){
  let random = Math.floor(Math.random()*array.length);
  return array[random];
};

class citations {
  constructor (insertX, insertY, insertZ) {
    this.tableau1 = randomValueFromArray(insertX);
    this.tableau2 = randomValueFromArray(insertY);
    this.tableau3 = randomValueFromArray(insertZ);
  };
  genererCitation(){
    return `${this.tableau1} - ${this.tableau2} - ${this.tableau3}`;
  };
};

const citationStarWarsX = ['Luke, je suis ton père.','Si tu n\'es pas avec moi, alors tu es contre moi','Je suis un Jedi'];
const citationStarWarsY = ['comme mon père l\'a été avant moi','missa accepté...avec Maximax d\'humilité','plutôt embrasser un Wookie'];
const citationStarWarsZ = ['ne m\'oblige pas à te tuer','allez Chico on met la gomme','que la Force soit avec toi'];

const citationOss117X = ['Comment est votre blanquette ?','Tous les allemands ne sont pas Nazis !','- Nous avons besoin de vous sur place. Un Expert. Un spécialiste du monde Arabo-Musulman.- Arabo... ? - ... Musulman. Cherchez ce qu\'avait découvert Jefferson et trouvez qui l\'a tué.- Comptez sur moi.- Profitez-en pour me calmer tout ce petit monde. Américains, Soviétiques, Anglais. Confortez les positions de la France, instaurez la paix en Égypte, sécurisez le Proche-Orient.- Pas de problème.'];
const citationOss117Y = ['C\'est marrant, c\'est toujours les nazis qui ont le mauvais rôle.','Oui, je connais cette théorie','Tu n\'es pas seulement un lâche, tu es un traitre, comme ta petite taille le laissait deviner.'];
const citationOss117Z = ['Une dictature c\'est quand les gens sont communistes, déjà. Qu\'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair. C\'est ça, une dictature','Mais enfin Armand, le général de gaulle n\'a t\'il pas dit que toute la France avait été résistante','- Avant de partir sale espion, fais-moi l\'amour ! - Non je ne crois pas non.- Pourquoi ?- Pas envie.'];

randomize.addEventListener('click', result);

function result(){
  switch(CitationChoisie.value){
    case "generateur_starwars":
    generateurStarwars();
    
    break;
    case "generateur_Oss117":
    generateurOss117();
    break;
  };
};

function generateurOss117() {
  let citationOss1171 = new citations(citationOss117X, citationOss117Y, citationOss117Z);
  let citationOss1172 = new citations(citationOss117X, citationOss117Y, citationOss117Z);
  let citationOss1173 = new citations(citationOss117X, citationOss117Y, citationOss117Z);
  let citationOss1174 = new citations(citationOss117X, citationOss117Y, citationOss117Z);
  let citationOss1175 = new citations(citationOss117X, citationOss117Y, citationOss117Z);

  function citationGeneree1() {
    para1.textContent = citationOss1171.genererCitation();
  }
  ;
  function citationGeneree2() {
    para2.textContent = citationOss1172.genererCitation();
  }
  ;
  function citationGeneree3() {
    para3.textContent = citationOss1173.genererCitation();
  }
  ;
  function citationGeneree4() {
    para4.textContent = citationOss1174.genererCitation();
  }
  ;
  function citationGeneree5() {
    para5.textContent = citationOss1175.genererCitation();
  }
  ;
  switch (nbCitationChoisie.value) {
    case "une":
      citationGeneree1();
      para1.style.display = "block";
      para2.style.display = "none";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "deux":
      citationGeneree1();
      citationGeneree2();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "trois":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "quatre":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      citationGeneree4();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "none";
      break;
    case "cinq":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      citationGeneree4();
      citationGeneree5();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "block";
      break;
  };
};

function generateurStarwars() {
  let citationStarWars1 = new citations(citationStarWarsX, citationStarWarsY, citationStarWarsZ);
  let citationStarWars2 = new citations(citationStarWarsX, citationStarWarsY, citationStarWarsZ);
  let citationStarWars3 = new citations(citationStarWarsX, citationStarWarsY, citationStarWarsZ);
  let citationStarWars4 = new citations(citationStarWarsX, citationStarWarsY, citationStarWarsZ);
  let citationStarWars5 = new citations(citationStarWarsX, citationStarWarsY, citationStarWarsZ);
  function citationGeneree1() {
    para1.textContent = citationStarWars1.genererCitation();
  }
  ;
  function citationGeneree2() {
    para2.textContent = citationStarWars2.genererCitation();
  }
  ;
  function citationGeneree3() {
    para3.textContent = citationStarWars3.genererCitation();
  }
  ;
  function citationGeneree4() {
    para4.textContent = citationStarWars4.genererCitation();
  }
  ;
  function citationGeneree5() {
    para5.textContent = citationStarWars5.genererCitation();
  }
  ;
  switch (nbCitationChoisie.value) {
    case "une":
      citationGeneree1();
      para1.style.display = "block";
      para2.style.display = "none";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "deux":
      citationGeneree1();
      citationGeneree2();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "trois":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "quatre":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      citationGeneree4();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "none";
      break;
    case "cinq":
      citationGeneree1();
      citationGeneree2();
      citationGeneree3();
      citationGeneree4();
      citationGeneree5();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "block";
      break;
  }
  ;
};




