const expect = require ('mocha').expect
const platzom = require('../')

describe('#platzom', function(){
	it('Si la palabra termina con ar se le quitan esas 2 letras',function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program") 
	})
	it('si la palabra inicia con Z se le añade pe al final',function(){
		const translation = platzom("Zarpar")
		expect(translation).to.equal("Zarppe") 
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad',function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario") 
	})
	it('si la palabra original es palindromo se devuelve la misma palabra intercalada',function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("Program") 
	})
})