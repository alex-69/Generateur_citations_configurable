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