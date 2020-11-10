const runPreloader = () => {
  function loadData() {
    return new Promise((resolve) => {
      setTimeout(resolve, 200);
    });
  }

  loadData().then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });
};

export default runPreloader();
