/*
Variáveis e Constantes
Variáveis é um tipo de dado que pode receber modificação dentro do código. Já as constantes não podem 
receber modificações em seu valor posteriormente.
ex: var nome = bruno - a variavel nome pode receber outro valor a frente. nome = weberson
const pi = 3.1416 - é uma constante que não permite mundaça em seu valor.

Comandos de decisão
Comandos de decisão são comandos que serve para decidir entre duas ou mais possibilidades
ex: if(idade < 18){
    alert("vc é menor de idade");
}else{
    alert("vc é maior de idade");
}
o comando de decisão IF vai decidir a resposta ao usuário se idade for menor que 18 ou não.

Loops
Os comandos de loop serve para realizar uma instrução repetidas vezes.
ex: contador =0;
    while(numero <= 10){
        contador++;
    }
esse loop irá se repetir até contar até 10.

Funções
As funções são maneiras de criar blocos de código que podem ser invocados a qualquer momento no código
ex: function bomDia(){
    alert("Bom dia");
}
essa função pode ser chamada a qualquer momento no código e irá exibir "Bom dia" através de um Pop-up na tela.

Escopos
Escopos determinam a acessibilidade das variáveis. Podem ser locais ou globais.
Os escoppos globais são aqueles que são passíveis de acesso em qualquer lugar. Já os locais só pode ser acessados
no local onde foram criados.
ex: <script>
    var nome = bruno;
    function chamaSobrenome(){
        var sobreNome = barros;
    }
    </script>
a variável nome está em escopo global. já a variável sobreNome está em escopo local.

Inputs e Outputs
Input é a entrada de dados e output é a saída de dados.
ex: prompt("Digite seu nome"); - é um input que irá abrir uma caixa num Pop-up para o usuário digitar o nome.
    document.write("uma hora é pouco tempo weberson rs") - é um output que irá escrever no html a frase entre
    parenteses.
    
    
Array
Array também chamado de vetor ou matriz são coleções de coisas.
ex: var nomeAlunos["Bruno", "Bianca", "Weberson"] é uma variável que recebeu uma coleção de nomes.

Objetos
Objetos dentro da programação são variáveis com propriedades.
ex: var carro {marca: "Ford", modelo: "Ka", cor: "azul"}; O objeto carro tem as propriedades marca, modelo e cor.

Tipos de escrita
camelCase, PascalCase, kibab-case, snake_case são tipo de escritas das diversas linguagens de programção
no javaScript usamos a camelCase por exemplo.

Diferença entre &&, ||, == e !=
São operados de lógicas.
&&("e" lógico) = Para ser verdadeiro ambas as condições precisam ser satisfeitas.
|| ("ou" lógico) = Para ser verdadeiro apenas uma das condições precisa ser satisfeita.
== ("igual") = Para ser verdadeiro as condições precisam ser iguais.
!= ("diferente") =  Para ser verdadeiro as condições precisam ser diferentes.

EPER
EPER é uma silga (Entender, Planejar, Executar, Revisar) e trata-se de um método de organização e uma
boa prática ao mesmo tempo. Muito similar ao PDCA usado em muitas empresas.

Pilha e Fila
Pilha é uma forma de organização na qual o primeiro que entra é o último a sair.
Fila também é uma forma de organização, mas o primeiro que entra é o primeiro a sair.

HTML, javaScript e CSS
HTML é uma linguagem que permite você criar o "esqueleto" de uma pagina de internet.
javaScritp é a linguagem que permite você dar função ao esqueleto de uma página de internet.
CSS é uma linguagem que permite você dar um corpo ao esqueleto, tornando-o mais atraente.
*/