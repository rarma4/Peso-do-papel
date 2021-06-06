function showResult(){

    var result = 0;

    //Acerta v�rgulas para pontos
    document.calcForm.elements['ladoMaior'].value = document.calcForm.elements['ladoMaior'].value.split(",").join(".");
    document.calcForm.elements['ladoMenor'].value = document.calcForm.elements['ladoMenor'].value.split(",").join(".");

    var qtdPaginas = document.calcForm.elements['qtdPaginas'].value;
    var ladoMaior = document.calcForm.elements['ladoMaior'].value;
    var ladoMenor = document.calcForm.elements['ladoMenor'].value;
    var gramatura = document.calcForm.elements['gramatura'].value;
    var gramaturaCapa = document.calcForm.elements['gramaturaCapa'].value;
    var tiragem = document.calcForm.elements['tiragem'].value;

    //Lados passados de cm para metros:
    ladoMaior = ladoMaior/100;
    ladoMenor = ladoMenor/100;

    //Total de metros quadrados:
    var totalMts = qtdPaginas * ladoMaior * ladoMenor;

    //Total de gramas obtidas:
    var totalGramas = totalMts * gramatura;

    //Passa pra kg. Resultado ser� o peso de uma folha:
    var massaPaginas = totalGramas/1000;

    //Multiplica pela tiragem:
    result = massaPaginas * tiragem;

    //SE TIVER CAPA ESPECIAL:
    if(gramaturaCapa!=""){

      //Total de metros quadrados de capas:
      var totalMtsCapas = ladoMaior * ladoMenor * tiragem;

      //Total de gramas em capas:
      var massaCapas = totalMtsCapas * gramaturaCapa;

      //Para kg:
      massaCapas/=1000;

      //Adiciona ao que j� havia sido calculado das paginas comuns
      result += massaCapas;
    }
    document.getElementById('campo-resultado').innerHTML = "<span style=\"font-size:18px\">Peso estimado: <b> "+result+"kg</b></span>";
  }