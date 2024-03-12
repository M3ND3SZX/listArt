document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
  
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;
        const taskDueDate = document.getElementById('taskDueDate').value;
  
        if (taskTitle && taskDescription && taskDueDate) {
            const newTaskItem = document.createElement('li');
            newTaskItem.innerHTML = `
                <strong>${taskTitle}</strong> - ${taskDescription} (Data final: ${taskDueDate})
            `;
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Concluir';
            completeButton.addEventListener('click', function () {
                newTaskItem.remove();
                completedTasksList.appendChild(newTaskItem);
                completeButton.remove();
            });
            newTaskItem.appendChild(completeButton);
            
  
            pendingTasksList.appendChild(newTaskItem);
  
            taskForm.reset();
        } else {
            alert('Por favor, preencha todos os campos da tarefa.');
        }
    });
  });
  
  
  const redirectButton = document.getElementById('botao');
            
            redirectButton.addEventListener('click', function premium () {
                alert('Você agora é um usuário premium');
                window.location.href = './tarefas.html';  
            });
            newTaskItem.appendChild(redirectButton);
        





    
          