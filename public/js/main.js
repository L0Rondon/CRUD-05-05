
document.addEventListener('DOMContentLoaded', () => {
    fetch('/tarefas')
        .then(res => res.json())
        .then(tarefas => {
            const tabela = document.getElementById('tabelaTarefas');
            tarefas.forEach(tarefa => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${tarefa.id}</td>
                    <td>${tarefa.nome}</td>
                    <td>${tarefa.descricao}</td>
                    <td>${tarefa.data_entrega}</td>
                    <td>${tarefa.responsavel_nome || 'N/A'}</td>
                    <td>${tarefa.status}</td>
                    <td><a href="/tarefas/${tarefa.id}/excluir">Excluir</a></td>
                `;
                tabela.appendChild(tr);
            });
        });
});
