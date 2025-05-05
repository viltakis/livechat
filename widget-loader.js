
(function() {
  if (window.viltaWidgetLoaded) return;
  window.viltaWidgetLoaded = true;

  const style = document.createElement('style');
  style.textContent = `
    #vilta-chat-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background-color: #FFD700;
      color: black;
      border: none;
      border-radius: 50px;
      padding: 14px 18px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      z-index: 9998;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    #vilta-chat-frame {
      position: fixed;
      bottom: 80px;
      right: 24px;
      width: 350px;
      height: 500px;
      border: none;
      border-radius: 8px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
      z-index: 9999;
      display: none;
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement('button');
  button.id = 'vilta-chat-button';
  button.innerText = '💬 Chat with us';
  document.body.appendChild(button);

  const iframe = document.createElement('iframe');
  iframe.id = 'vilta-chat-frame';
  iframe.src = 'https://embed.tawk.to/6818c700f5c93a190ee01cc0/1iqgcin8m'; // Tawk.to embed
  document.body.appendChild(iframe);

  button.addEventListener('click', () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  });
})();
