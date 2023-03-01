function getSecondsToTomorrow() {
    let d = new Date();

    let dt = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

    return Math.round( (dt - d) / 1000);
}

console.log( getSecondsToTomorrow() );