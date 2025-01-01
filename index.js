const inputElm = document.querySelector("#myInput");
const OutputElm = document.querySelector("#myOutput");

let UserName = "User";

const action = {
  help: () =>
    "Availables Commands : <br>- help<br>- clear<br>- triangle<br>- square<br>- rename<br>- echo",
  clear: () => {
    OutputElm.innerHTML = "";
    return "";
  },
  echo: (args) => handleEcho(args),
  triangle: (args) => drawTriangle(args),
  square: (args) => drawSquare(args),
  rename: (args) => renameUser(args)

};

function drawTriangle(arg){

    let n = parseInt(arg);

    if (isNaN(n)) {
      return "Triangle with non Valid Value";
    }
    let t = "";
    for (let i = 1; i <= n; i++) {
      t += "*".repeat(i) + "<br>";
    }
    return t + "Finished !";
}

function handleEcho(arg){
    if (arg.length <= 0) {
      return "echo done";
    } else {
      return arg.join(" ");
    }  
}

function drawSquare(arg){
  {
    let n = parseInt(arg);

    if (isNaN(n)) {
      return "Square with non Valid Value";
    }
    let t = "";

    for (let i = 1; i <= n; i++) {
      t += "*".repeat(n) + "<br>";
    }

    return t + "Finished !";
  }
}

function renameUser(arg){
    UserName = arg;
    return `User Name Succefully Changed to "${UserName}"`; 
}

function handleAction(command){
    const [X, ...args] = command.trim().split(" ");

    if (action[X]) {
        return action[X](args);
    }
    else{
        return `Unkown Command : ${command} <br>Write "help" to see available command`;
    }

}

inputElm.addEventListener("keypress", (event) => {
        
    if(event.key === "Enter" ){
        const X = inputElm.value.trim(); // Récupérer la valeur actuelle
        console.log(X); // Afficher la valeur dans la console
        
        const output = handleAction(X);

        OutputElm.innerHTML += `<span style="color: white;">${UserName}#~ :</span> ${X} <br>`;

        OutputElm.innerHTML += `<span style="color: green;">${output}</span><br>`;
        
        OutputElm.scrollTop = OutputElm.scrollHeight;
        inputElm.value = "";
    }
});