require('dotenv/config');
const { prazos, tarefas } = require('../../models');

const getService = async () => {
    try {
        const teste = await tarefas.findAll({
            attributes: {exclude: ['id']},
            include: {
                model: prazos, as: 'prazos',
                attributes: {exclude: ['id']}
            }
            });
        console.log(teste);
        return teste
    } catch (error) {
    console.log(error);
    }
};

const putService = async (tarefa, prioridade, prazo) => {
    try {
        const novaTarefa =  await tarefas.create({
            tarefa
            });
            await prazos.create({
            prioridade,
            prazo,
            status: 'pendente',
            tarefaId: novaTarefa.id
            });

    return {message: 'DB atualizado com successo'}
        } catch (error) {
        console.log(error);
        }
    };

module.exports = {getService, putService}

