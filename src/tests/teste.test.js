const chai = require('chai');
const { expect } = chai
const chaiHttp = require('chai-http');
const { app } = require('../app')
const sinon = require('sinon');
const service = require('../service/service');
const mockTarefas = require('./mockTarefas');
// const fs = require('fs');

chai.use(chaiHttp);


describe('Teste de status da tarefa', () => {
  before(() => {
    sinon.stub(service, 'getAllService').resolves(mockTarefas);
  });
  after(() => {
    service.getAllService.restore()
  })
    describe ('teste da tarefa 1', () => {
        it('testa se retorna um tarefa pendente', async () => {
          const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

          expect(mockTarefas[0].prazos.status).to.be.equal('pendente');
          });
        it ('testa se tem a propriedade tarefa', async ()  => {
          const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

          expect(mockTarefas[0]).to.have.property('tarefa');

        })
        it ('testa se tem a propriedade prazos', async () => {
          const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

          expect(mockTarefas[0]).to.have.property('prazos');
          
        })
        it ('testa o nome da terefa', async () => {
          const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

          expect(mockTarefas[0].tarefa).to.be.equal('terminar o projeto Tarefas');
          
        })
        
  })

  describe ('teste da tarefa 2', () => {
    it ('testa o nome da terefa', async () => {
      const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

      expect(mockTarefas[1].tarefa).to.be.equal('Candidatar-se a vagas backend');
      
    })
    it('testa se retorna um tarefa nao urgente', async () => {
      const {  body: {mockTarefas} } = await chai.request(app).get('/getAll');
    
      expect(mockTarefas[1].prazos.prioridade).to.be.equal('nao urgente')
    });
   
    
})

describe ('teste da tarefa 3', () => {
  it ('testa o nome da terefa', async () => {
    const { body: {mockTarefas} } = await chai.request(app).get('/getAll');

    expect(mockTarefas[2].tarefa).to.be.equal('Terminar o projeto1');
    
  })
  it('testa se retorna uma tarefa concluida', async () => {
    const {  body: {mockTarefas} } = await chai.request(app).get('/getAll ');
  
    expect(mockTarefas[2].prazos.status).to.be.equal('concluido')
  });
  
})


});
