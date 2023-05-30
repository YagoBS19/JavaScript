function sleep(ms){
    console.log('Essa é uma Promise')
    return new Promise(Timer => setTimeout(Timer, ms));
}

async function main(){
    console.log('Essa é uma função async');
    await sleep(2000);
    console.log('༼ つ ◕_◕ ༽つ');
}

main();