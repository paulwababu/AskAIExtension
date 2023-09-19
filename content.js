document.addEventListener('mouseup', function(event) {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText.length > 0) {
    setTimeout(() => {
      // Remove existing overlay if any
      const existingOverlay = document.getElementById('ask-ai-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }

      // Create AskAI overlay
      const askAiOverlay = document.createElement('div');
      askAiOverlay.id = 'ask-ai-overlay';

      // Create AskAI form
      const askAiForm = document.createElement('div');
      askAiForm.id = 'ask-ai-form';

      // Create input field
      const askAiInput = document.createElement('input');
      askAiInput.id = 'ask-ai-input';
      askAiInput.placeholder = '✨ Find a better way to word this';

      // Create submit button
      const submitButton = document.createElement('button');
      submitButton.id = 'submit-button';
      submitButton.innerHTML = '⏎'; // Enter icon

      // Append elements
      askAiForm.appendChild(askAiInput);
      askAiForm.appendChild(submitButton);
      askAiOverlay.appendChild(askAiForm);

      // Create and append ResultDiv (initially hidden)
      const resultDiv = document.createElement('div');
      resultDiv.className = 'result-div hidden';
      resultDiv.innerHTML = '<div class="result-text">Your Result Here</div>';
      askAiOverlay.appendChild(resultDiv);

      // Add event listener for AskAI form submission
      submitButton.addEventListener('click', function() {
        submitButton.innerHTML = '⏳'; // Loader icon
        fetch('your-url-here')
          .then(response => response.json())
          .then(data => {
            document.querySelector('.result-text').innerText = data.result;
            resultDiv.classList.remove('hidden'); // Show results
          })
          .catch(error => {
            document.querySelector('.result-text').innerText = 'An error occurred';
            resultDiv.classList.remove('hidden'); // Show results
          })
          .finally(() => {
            submitButton.innerHTML = '⏎'; // Enter icon
          });
      });

      // Submit on Enter
      askAiInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          submitButton.click();
        }
      });

      // Append AskAI overlay to body
      document.body.appendChild(askAiOverlay);

      // Position the overlay below the selected text
      const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
      askAiOverlay.style.left = `${rect.left + window.scrollX}px`;
      askAiOverlay.style.top = `${rect.bottom + window.scrollY}px`;

      // Close on click outside
      document.addEventListener('click', function(event) {
        if (!askAiOverlay.contains(event.target)) {
          askAiOverlay.remove();
        }
      });
    }, 2000); // 2-second delay
  }
});
