function component() {
    var button = document.createElement('button');

    button.innerHTML = 'Click me to load things!'

    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(loadedModule => {
        var print = loadedModule.default;
        
        print()
    })

    return button;
}

function heavyComponent() {
    var button = document.createElement('button');

    button.innerHTML = 'Click me and I will load a library';

    button.onclick = e => import(/* webpackChunkName: "lodash" */ 'lodash').then(loadedModule => {
        var _ = loadedModule.default;

        console.log(_.join(["Isn't", 'it', 'awesome?'], ' '))
    })

    return button;
}

document.body.appendChild(component());
document.body.appendChild(document.createElement('br'));
document.body.appendChild(heavyComponent());
