const tabs = document.querySelectorAll('.tab');

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.remove('tab--active'));
      tab.classList.add('tab--active');
    });
  });
}
