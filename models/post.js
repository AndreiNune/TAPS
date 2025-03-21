const db = require('./banco.js');
const Agendamentos = db.seq.define('agendamento', {
    nome: {
        type: db.Sequilize.STRING
    },
    telefone: {
        type: db.Sequilize.STRING
    },
    origem: {
        type: db.Sequilize.STRING
    },
    data: {
        type: db.Sequilize.DATE
    },
    observacoes: {
        type: db.Sequilize.TEXT
    }
});

//Agendamentos.sync({ force: true });

module.exports = Agendamentos;