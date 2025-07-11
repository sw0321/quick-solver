document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('apiKey');
  const saveButton = document.getElementById('saveButton');
  const statusDiv = document.getElementById('status');

  // Load saved API key
  chrome.storage.local.get(['geminiApiKey'], (result) => {
    if (result.geminiApiKey) {
      apiKeyInput.value = result.geminiApiKey;
    }
  });

  // Save API key
  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    chrome.storage.local.set({ geminiApiKey: apiKey }, () => {
      statusDiv.textContent = 'API Key saved!';
      setTimeout(() => { statusDiv.textContent = ''; }, 2000);
    });
  });
});