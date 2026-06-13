window.addEventListener("load", function () {

    let btn = document.getElementById("botao");

    btn.addEventListener("click", function () {

        let registro = document.getElementById("v1").value;
        let nome = document.getElementById("v2").value;
        let salario = Number(document.getElementById("v3").value);

        let imposto = 0;
        let aliquota = 0;

        if (salario <= 2428.80) {
            imposto = 0;
            aliquota = 0;
        }
        else if (salario <= 2826.65) {
            aliquota = 7.5;
            imposto = salario * 0.075 - 182.16;
        }
        else if (salario <= 3751.05) {
            aliquota = 15;
            imposto = salario * 0.15 - 394.16;
        }
        else if (salario <= 4664.68) {
            aliquota = 22.5;
            imposto = salario * 0.225 - 675.49;
        }
        else {
            aliquota = 27.5;
            imposto = salario * 0.275 - 908.73;
        }

        document.getElementById("impostoResultado").value =
            `R$ ${imposto.toFixed(2)}`;

        let texto = document.getElementById("texto");

        texto.innerHTML += `
            <div>
                <hr><br>

                Registro: <b>${registro}</b><br>
                Nome: <b>${nome}</b><br>
                Salário: <b>R$ ${salario.toFixed(2)}</b><br>
                Imposto de Renda: <b>R$ ${imposto.toFixed(2)}</b><br>
                Alíquota: <b>${aliquota}%</b><br>
                Salário Líquido: <b>R$ ${(salario - imposto).toFixed(2)}</b>

            </div>
        `;
    });

});
