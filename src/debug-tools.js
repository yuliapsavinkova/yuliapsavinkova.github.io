export async function loadDebugTools() {
  console.log('Debug mode active!');

  const tools = [
    async () => {
      await import('./components/debug-panel.js');
      const container = document.createElement('div');
      container.id = 'debug-panel';
      container.innerHTML = '<debug-panel-component></debug-panel-component>';
      document.body.appendChild(container);
    },
    async () => {
      // Example: Load another tool
      // await import('./components/another-tool.js');
    },
  ];

  for (const tool of tools) {
    try {
      await tool();
    } catch (err) {
      console.error('Error loading debug tool:', err);
    }
  }
}
