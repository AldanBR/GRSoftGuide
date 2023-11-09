const fieldGuideWindow = document.querySelector(".listWindow");
const printGuideButton = document.getElementById('confirmButton');
//Apontar caminhos de jsons de procedimentos
const  installJsonPath = ("js/json/install.json");
const integrJsonPath = ("js/json/integr.json");

let checkedIds = [];
let currentStep = 0;

//Enviroments Variables

function getGuidesChosed(){
  checkedIds = [];
  currentStep = 0;
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedIds.push(checkbox.id);
    }
  });

  return checkedIds;

}

function printGuides(){
  fieldGuideWindow.innerHTML = '';
  fetch(installJsonPath)
    .then(response => response.json())
    .then(data => {

      for(let i = 0; i < checkedIds.length; i++){
        let currentProcedure = data.procedimentos.find(x => x.idOP === checkedIds[i]);
        let procedureStepsNumber = currentProcedure.passos.length;

        for(let j = 0; j < procedureStepsNumber; j++){
          let newStep = document.createElement("tr");
          let stepNumber = document.createElement("td");
          stepNumber.appendChild(document.createTextNode(currentStep+1));

          let stepGuide = document.createElement("td");

          let stepGuideInstructions = currentProcedure.passos[j];        
          stepGuide.appendChild(document.createTextNode(stepGuideInstructions));


          newStep.appendChild(stepNumber);
          newStep.appendChild(stepGuide);
          currentStep++;
          fieldGuideWindow.appendChild(newStep);

        }  
      }    
    })
    .catch(error => {
      console.error(`Erro ao carregar o JSON de ${installJsonPath}: `, error);
    });

    fetch(integrJsonPath)
    .then(response => response.json())
    .then(data => {

      for(let i = 0; i < checkedIds.length; i++){
        let currentProcedure = data.procedimentos.find(x => x.idOP === checkedIds[i]);
        let procedureStepsNumber = currentProcedure.passos.length;

        for(let j = 0; j < procedureStepsNumber; j++){
          let newStep = document.createElement("tr");
          let stepNumber = document.createElement("td");
          stepNumber.appendChild(document.createTextNode(currentStep+1));

          let stepGuide = document.createElement("td");

          let stepGuideInstructions = currentProcedure.passos[j];        
          stepGuide.appendChild(document.createTextNode(stepGuideInstructions));


          newStep.appendChild(stepNumber);
          newStep.appendChild(stepGuide);
          fieldGuideWindow.appendChild(newStep);
          currentStep++;

        }  
      }    
    })
    .catch(error => {
      console.error(`Erro ao carregar o JSON de ${integrJsonPath}: `, error);
    });
  
};

printGuideButton.addEventListener('click', function(){getGuidesChosed(); printGuides();});
