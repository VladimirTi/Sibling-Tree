document.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');
  item.insertBefore(span, item.firstChild);
  span.appendChild(span.nextSibling);
});

document.querySelector('.tree').addEventListener('click', (event) => {
  if (event.target.tagName != 'SPAN') {
    return;
  }
  const container = event.target.parentNode.getElementsByTagName('ul')[0];
  if (!container) {
    return;
  }
  container.hidden = !container.hidden;
});