
test('Testando objeto valores do objeto', () => {
    const dados = {um : 1};
    dados['dois'] = 2;


    expect(dados).toEqual({um: 1, dois: 2})
})
