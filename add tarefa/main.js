// Selecionado os elementos do HTML
const InputTarefa = document.getElementById('tarefa')
const btnAdicionar = document.getElementById('adicionar')
const listaTarefas = document.getElementById('tarefas')

btnAdicionar.addEventListener('click', adicionarTarefa);

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    // Obter o valor que tem no campo tarefa
    const textoTarefa = tarefa.value;

    // Podemos utilizar o trim() para retirar os espaços desnecessários
    if(textoTarefa.trim() !== ""){

        // Criar um elemente li para inserir a tarefa na lista ul
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = textoTarefa;

        // Acrescentar a tarefa no elemente pai ul
        listaTarefas.appendChild(novaTarefa);
        
        // Limpar o campo de entrada (inpput)
        tarefa.value = "";
    }
}