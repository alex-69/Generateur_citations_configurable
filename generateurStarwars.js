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