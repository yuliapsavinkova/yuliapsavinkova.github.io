export async function loadDebugTools() {
  if (document.getElementById('debug-panel')) return;

  console.log('Debug mode active');

  await import('./components/debug-panel.js');

  const container = document.createElement('div');
  container.id = 'debug-panel';
  container.innerHTML = '<debug-panel-component></debug-panel-component>';
  document.body.appendChild(container);
}
