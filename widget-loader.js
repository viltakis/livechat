
window.addEventListener('load', function () {
  function injectWidget() {
    if (!document.getElementById('vilta-widget')) {
      const s = document.createElement('script');
      s.id = 'vilta-widget';
      s.src = 'https://vilta.onrender.com/widget-loader.js';
      s.async = true;
      s.onload = () => {
        setTimeout(() => {
          if (window.ViltaWidget && window.ViltaWidget.open) {
            window.ViltaWidget.open();
          }
        }, 1000);
      };
      document.body.appendChild(s);
    }
  }

  injectWidget();

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      injectWidget();
    }
  });
});
