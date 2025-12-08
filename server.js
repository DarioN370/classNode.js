import { createServer } from 'node:http'

const server = createServer((request, response) => { //request = obtem os dados da requisicao do user (ex: em um sistema de criar user, o request busca as informacoes do usuario - nome, email, senha, etc...), response = objeto pra devolver respostas pra quem ta chamando
    
    response.write('Hello World!')
    return response.end()
})

server.listen(3333)

console.log("ligou")


//COMENTARIO NO TERMINAL - Sempre que eu não quiser ficar att e tendo que digitar no terminal pra fechar e abrir o servidor pra testar, eu posso colocar o --watch antes do nome do arquivo, que ele vai reiniciar o servidor após qualquer alteração - obs: se der algum aviso, posso colocar dps do --watch o comando --no-warnings, que ele vai travar os avisos, eu criei uma linha no package.json com esse codigo, e eu posso ir la e rodar a linha com "npm run dev", o script ta na linha 10

// Usar um framework para poder fazer funcionalidades como essas, ele vai direcionar o usuario para locais diferentes, dependendo do endereço que ele acessar⬇️
// POST localhost:3333/videos -> metodo POST usado para criar algo
// DELETE localhost:3333/videos/1 -> perceba que com DELETE eu passo um id no final do endereço