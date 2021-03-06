const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 8080;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`)
}) 

//ao inves de pedir para o json server rodar o back end, a gente pede para o node ler o arquivo
// o npm run dev esta rodando o comando para rodar o json, estão trocando,
//o npm run dev vai rodar o server.js, e o server.js vai chamar o json server
//então troque o comando do json server por node ./server.js , no scripts/server do package.json

//para rodar no terminal é o comando npm run server


//"server": "json-server --watch db.json --port 8080",  por
//"server": "node ./server.js",

//a heroku utiliza o comando scripts/start para rodar o servidor quando são códigos em javascript
//sendo assim, temos que colocar o comando de iniciar o servidor no script start
//e mudar o comando "start": "react-scripts start", PARA "start": "npm run server",
//e agora o comando do terminal ' npm start ' vai rodar o servidor, e não mais o react

//Agora acrescente o comando dev": "react-scripts start", no package.sjon 
//e inicie o react com o comando npm run dev

//a heroku usa o script start para rodar, e a vercel utiliza o script build para rodar