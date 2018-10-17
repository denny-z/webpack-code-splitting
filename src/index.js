function component() {
    var button = document.createElement('button');

    button.innerHTML = 'Click me to load things!'

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(loadedModule => {
        var print = loadedModule.default;
        
        print()
    })

    return button;
}

document.body.appendChild(component())