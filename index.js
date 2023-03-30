function receivesAFunction(cb) {
    console.log(cb());
}

receivesAFunction(function () { return 'receive';});

function returnsANamedFunction(thing) {
    return receivesAFunction

}

function returnsAnAnonymousFunction() {
    return function() {"something"};
}


