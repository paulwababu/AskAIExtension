document.addEventListener('mouseup', function(event) {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText.length > 0) {
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
      submitButton.innerHTML = '&#8629;'; // Enter icon
  
      // Append elements
      askAiForm.appendChild(askAiInput);
      askAiForm.appendChild(submitButton);
      askAiOverlay.appendChild(askAiForm);
  
      // Add event listener for AskAI form submission
      submitButton.addEventListener('click', function() {
        // Your AskAI logic here
        console.log('AskAI form submitted');
      });
  
      // Append AskAI overlay to body
      document.body.appendChild(askAiOverlay);
  
      // Position the overlay
      const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
      askAiOverlay.style.left = `${rect.left + window.scrollX}px`;
      askAiOverlay.style.top = `${rect.top + window.scrollY - askAiOverlay.offsetHeight}px`;
    }
  });
  