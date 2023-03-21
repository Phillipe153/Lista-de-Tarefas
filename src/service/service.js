require('dotenv/config');
const { prazos, tarefas } = require('../../models');

const getAllService = async () => {
    try {
        const TodasAstarefas = await tarefas.findAll({
            attributes: {exclude: ['id']},
            include: {
                model: prazos, as: 'prazos',
                attributes: {exclude: ['id']}
            }
            });
        if (!TodasAstarefas[0]) {return  "Nenhuma terafa encontrada!"}
        return TodasAstarefas
    } catch (error) {
    console.log(error);
    }
};

const getOneService = async (id) => {
    try {
        const tarefa = await tarefas.findOne({
            where: { id },
            attributes: {exclude: ['id']},
            include: {
                model: prazos, as: 'prazos',
                attributes: {exclude: ['id']}
            }
            });
            console.log(id);
        if (!tarefa) {return  "Nenhuma terafa encontrada!"}
        return tarefa
    } catch (error) {
    console.log(error);
    }
};

const postService = async (tarefa, prioridade, prazo) => {
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

const putService = async (id, status, prioridade, prazo) => {
    try {
        console.log(status);
        const teste = await prazos.findOne({
            where: { id }            
            });

    if (teste) {
        teste.update({
            status, prioridade, prazo
        });
        return {message: 'Tarefa alterada com successo'}
    }

    return {message: 'Tarefa nao encontrada!'}
    } catch (error) {
        console.log(error);
    }
}

const deleteService = async (id) => {
    try {
        const teste = await tarefas.findOne({
            where: { id }            
            });
            console.log(teste);

    if (teste) {
        teste.destroy();
        return {message: 'Tarefa excluida com successo'}
    }

    return {message: 'Tarefa nao encontrada!'}
    } catch (error) {
        console.log(error);
    }
    };


module.exports = {getAllService, getOneService, postService, putService, deleteService}

