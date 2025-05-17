//função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em java function
function insert(num){//início da função
    //variável é um espaço na emória que armazena uma informação para uso posterior. Ao nomeá-la evite : números e letras maiúsculas no início, espaço entre palavras (use _ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número'
    var numero = document.getElementById('resultado').innerHTML
    //Atualiza o conteúdo do elemwnto 'resultado' concatenando o valor atual com o número ou aoperado (+,-,*,/) passado no parâmetro num
    document.getElementById('resultado').innerHTML = numero + num

} //fim da função    

//Função para limpar todo o conteúdo que aparece no visor (tag p [id=resultado])
function clean(){
    //Define que o conteúdo do elemtno 'resultado' como um elemnto de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar o último caracter digitado
function del(){

    
    //Variável para armazenar a informação atual do visor (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último carcater digitado na tela, atualizando o valor. O método lenght retornará o tamanho da string, ou seja, quantos elementos aparecem na tela
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

//Função 'calcular' irá avaliar a expressão da tela e realizar o cálculo exibindo-o na tela
function calcular(){
    var resultado= document.getElementById('resultado').innerHTML;
    if(eval(resultado)){
        document.getElementById('resultado').innerHTML=eval(resultado);

    }
    else{
        document.getElementById('resultado').innerHTML='Xiii não tem nada';

    }


}

document.addEventListener('keydown', function(event){
    //Salva a tecla pressionada
    var tecla = event.key
    //A condição do if testa se  a tecla pressionada pertence ao intervalo de 0 a 9 ou contem os caracteres +-*/
    if(/[0-9+\-*/]/.test(tecla)){
        insert(tecla);//Chama a função insert
    }
    //verifica se a tecla pressionada é o Enter
    else if (tecla == 'Enter'){
        calcular();//Chama a função calcular
    }
    //Verifica se a tecla pressionada é p Backspace
    else if (tecla == 'Backspace'){
        del();//Chama a função del-Apaga o último caracter
    }
    else if (tecla == 'Delete'){
        clean();//Chama a função clean apagando todo o conteúdo
    }
})
