var fs = require("fs");
var funcionarios = null;
fs.readFile("funcionarios.json", "utf-8", function(err, data){
    if (err) {
        console.log(err);
    }else {
        funcionarios = JSON.parse(data).funcionarios;
        console.log("Maior salário: " + JSON.stringify(maiorSalario()));
        console.log("Menor salário: " + JSON.stringify(menorSalario()));
        console.log("Maior salário Comercial: " + JSON.stringify(maiorSalario("Comercial")));
        console.log("Maior salário Produção: " + JSON.stringify(maiorSalario("Produção")));
        console.log("Maior salário Administrativo: " + JSON.stringify(maiorSalario("Administrativo")));
        console.log("Menor salário Comercial: " + JSON.stringify(menorSalario("Comercial")));
        console.log("Menor salário Produção: " + JSON.stringify(menorSalario("Produção")));
        console.log("Menor salário Administrativo: " + JSON.stringify(menorSalario("Administrativo")));
       
    }
});

function maiorSalario(setor){
    var funcMaiorSalario = null;
    for (var i = 1; i < funcionarios.length; i++){
        if (setor && (funcionarios[i].setor !== setor)){
            continue;
        }

        if (funcMaiorSalario === null) {
            funcMaiorSalario = funcionarios[i];
            continue;
        }

        if (funcionarios[i].salario > funcMaiorSalario.salario){
            funcMaiorSalario = funcionarios[i];
        }
    }
    return funcMaiorSalario;
}

function menorSalario(setor){
    var funcMenorSalario = null;
    for (var i = 1; i < funcionarios.length; i++){
        if (setor && (funcionarios[i].setor !== setor)){
            continue;
        }

        if (funcMenorSalario === null) {
            funcMenorSalario = funcionarios[i];
            continue;
        }

        if (funcionarios[i].salario < funcMenorSalario.salario){
            funcMenorSalario = funcionarios[i];
        }
    }
    return funcMenorSalario;
}


