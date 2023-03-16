const Services = require('../service/service');

const getController= async (req, res, next) => {
    try {
        const teste = await Services.getService();
        return res.status(201).json(teste);
    } catch (error) {
    next(error);
    }
}

const putController= async (req, res, next) => {
    try {

        const {tarefa, prioridade, prazo } = req.body
        const { message } = await Services.putService(tarefa,  prioridade, prazo);
      
      return res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }

module.exports = {getController, putController};