import App from "./App.svelte"

function init () {
    new App({
        target: document.getElementById("view-root"),
        props: {}
    })
}

export default init
