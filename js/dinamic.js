const fieldInstallOption = document.querySelector(".cardInstallBody");
const fieldIntegrOption = document.querySelector(".cardIntegrBody");
//Enviroments Variables

function newProcedureOption(idOP,nameOP){
    var newOption = document.createElement("div");
    newOption.classList.add("OptionContent");

    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.id = idOP;

    var newLabel = document.createElement("label");
    newLabel.htmlFor = idOP
    newLabel.appendChild(document.createTextNode(nameOP));

    newOption.appendChild(newInput);
    newOption.appendChild(newLabel);

    return newOption;
    
};

function apontarECriar(caminhoJson, campoAlvo){
    fetch(caminhoJson)
    .then(response => response.json())
    .then(data => {    
        const proceduresList = data.procedimentos.map(x => x.nome);
        const proceduresListID = data.procedimentos.map(x => x.idOP);

        for (let i = 0; i < proceduresList.length; i++) {
          let newOption = newProcedureOption(proceduresListID[i], proceduresList[i]);
          campoAlvo.appendChild(newOption);
        }
      })
      .catch(error => {
        console.error(`Erro ao carregar o JSON de ${caminhoJson}: `, error);
      });


};

apontarECriar("js/json/install.json", fieldInstallOption)
apontarECriar("js/json/integr.json", fieldIntegrOption)
