class DebugPanelComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .debug-panel {
                    position: fixed;
                    top: 50%;
                    left: 0;
                    background-color: var(--gra-grey);
                    opacity: 0.5;
                    margin: 10px;
                    padding: 10px;
                    border-radius: 25px;
                    border: 1px solid var(--primary-color-light);
                }
            </style>
            <div id="debugPanel" class="debug-panel"></div>
        `;
    }
}
customElements.define('debug-panel-component', DebugPanelComponent);

// Screen width x height
function updateWidth() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById('debugPanel').innerHTML = width + ' x ' + height;
}
updateWidth();
window.onresize = updateWidth;
