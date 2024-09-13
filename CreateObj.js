const cons = require("consolidate");

class CreateObjects {

    createObj(dados){

        const colunas = []
        return new Promise((resolve, reject) => {
            dados[0].forEach(titulos => {
                colunas.push({titulo: titulos, dados: []})
            });
            dados.shift()

            dados.forEach(elementos => {
                for(let i = 0; i < elementos.length; i++){
                    colunas[i].dados.push(elementos[i])
                }
            })
            
            resolve(colunas)
        });
    };
};

async function main(dados){

    try {

        var dadosProcess = await new CreateObjects().createObj(dados)

        return dadosProcess

    } catch (error) {

        console.log(error)
        
        return(error)
        
    }
}

module.exports = (main)