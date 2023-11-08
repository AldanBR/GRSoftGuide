
const fieldInstallOption = document.querySelector(".cardInstallBody");
const fieldIntegrOption = document.querySelector(".cardIntegrBody");

//const installProcedures = require("./json/install.json")
//const integrProcedures = require("./json/integr.json")

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
        const proceduresList = data.intalacoes ? data.intalacoes.map(x => x.procedimento) : data.integracoes.map(x => x.procedimento);

        for (let i = 0; i < proceduresList.length; i++) {
          let newOption = newProcedureOption(`${campoAlvo}${i}`, proceduresList[i]);
          campoAlvo.appendChild(newOption);
        }
      })
      .catch(error => {
        console.error(`Erro ao carregar o JSON de ${jsonPath}: `, error);
      });


};

apontarECriar("js/json/install.json", fieldInstallOption)
apontarECriar("js/json/integr.json", fieldIntegrOption)
/*
let installProceduresList = installProcedures.intalacoes.map((x) => x.procedimento);
let integrProceduresList = integrProcedures.integracoes.map((x) => x.procedimento);

// For para adicionar procedimentos de instalação
for(let i = 0; i < installProceduresList.length; i++){
    
    let newOption = newProcedureOption(`Install${i}`,installProceduresList[i])

    fieldInstallOption.appendChild(newOption);
}

for(let i = 0; i < integrProceduresList.length; i++){
    let newOption = newProcedureOption(`Integr${i}`,integrProceduresList[i])
    fieldIntegrOption.appendChild(newOption);
}*/