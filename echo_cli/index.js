const readline=require("readline");

//readlineするためのオブジェクト
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

(async function(){
    while(true){
        await new Promise(resolve => {
            rl.question('What do you think of Node.js? ', (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
                resolve();
            });
        })
    }
})();