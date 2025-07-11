chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "askGemini",
    title: "Geminiに質問する",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "askGemini" && info.selectionText) {
    chrome.storage.local.set({ selectedText: info.selectionText }, () => {
      chrome.action.openPopup();
    });
  }
});