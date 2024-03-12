function addComment() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() === '') {
      alert('Por favor, insira um comentário válido.');
      return;
    }
  
    const timeline = document.getElementById('timeline');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentInput;
    timeline.appendChild(commentDiv);
  
    document.getElementById('commentInput').value = '';
  }
  