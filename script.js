document.querySelector('.tree').addEventListener('click', (event) => {
  if (event.target.tagName != 'SPAN') return;

  const container = event.target.parentNode.querySelectorAll('ul')[0];
  if (!container) return;

  container.hidden = !container.hidden;
});