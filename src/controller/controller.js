const Services = require('../service/service');

const getAllController= async (req, res, next) => {
    try {
        const teste = await Services.getAllService();
        return res.status(201).json(teste);
    } catch (error) {
    next(error);
    }
}

const getOneController= async (req, res, next) => {
    try {

        const id = req.body
        const teste = await Services.getOneService(id);
        return res.status(201).json(teste);
    } catch (error) {
    next(error);
    }
}

const postController= async (req, res, next) => {
    try {

        const {tarefa, prioridade, prazo } = req.body
        const { message } = await Services.postService(tarefa,  prioridade, prazo);
      
      return res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }

  const deleteController= async (req, res, next) => {
    try {

        const { id } = req.body
        const { message } = await Services.deleteService(id);
      
      return res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }

module.exports = {getAllController, getOneController, postController, deleteController};