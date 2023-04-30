
const sum = require('./sum');
// define uma descrição de grupo para teste
describe('Descrição das grupo de operação', () => {
    it('soma dois numero', ()=> {
        expect(sum(10, 5)).toBe(15)
    })
})

let inicializou

describe('Adicioando valores antes da inicialização', () => {
    beforeAll(() => {
        inicializou = true
    })

    it('Valor da inicialização é true', () => {
        expect(inicializou).toBe(true)
    })
})


describe('inicializando em cada e operação a ser feita no final',  () => {
    
    beforeEach(() => {
        console.log('Inicialisado acada iteração dos bloco it')
    })

    afterAll(() => {
        console.log('Tira os valores que foram inicializado não precisamos mais')
    })

    afterEach(() => {
        console.log('Tira os valores acada iteração dos bloco it')

    })
    it('soma 1 + 1 é 2', () => {
        expect(sum(1, 1)).toBe(2)
    })
})