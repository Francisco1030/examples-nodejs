const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main() {
    Commander.version('v1')
    .option('-n --nome [value]', "Nome do Heroi")
    .option('-p --poder [value]', "Poder do Heroi")

    .option('-c --cadastrar', "Cadastrar um heroi")
    .parse(process.argv);

    const heroi = new Heroi(Commander);

    try {
        if(Commander.cadastrar) {
            console.log(heroi);
            //const resultado = await Database.cadastrar(Commander);
        }
        
    } catch (error) {
        console.log('Deu ruim', error);
    }
}

main();