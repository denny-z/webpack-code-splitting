async function doHelloWorld() {
    const {default: _} = await import(/* webpackChunkName: "lodash" */ 'lodash');
    
    console.log(_.join(['hello', 'webpack'], ' '));

    return 'you are hello-worlded ;)';
}

doHelloWorld().then( message => {
    console.log(message);
})
