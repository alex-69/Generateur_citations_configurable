
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





