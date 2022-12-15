let zoneTexte = document.getElementById('zonedetexte')

const synonymesDonneMoi = ["Fournis-moi", "Offre-moi", "Accorde-moi", "Transmets-moi", "Transfère-moi", "Remets-moi", "Remise-moi", "Confie-moi", "Cède-moi", "Alloue-moi", "Procure-moi", "Transmets-moi", "Octroie-moi", "Réserve-moi", "Délivre-moi", "Donne-m'en", "Mets-moi", "Ravitaille-moi", "Distribue-moi", "Distribue-m'en"];

function updateData(){
  var url = "https://api.openai.com/v1/completions";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        writeData(xhr.responseText);
     }};

  var data = {
  "model": "text-davinci-003",
  "prompt": zoneTexte.value,
  "temperature": 0.7,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
};

  xhr.send(JSON.stringify(data));
}

function writeData(donnee){
  zoneTexte.value += JSON.parse(donnee).choices[0].text;
}

function checkForUpdate(e){
  if(e.ctrlKey && e.keyCode == 10){
    updateData();
  }
  if(e.ctrlKey && e.key == "q"){
    zoneTexte.value = "";
    console.log("clean up");
  }


}
