
let faker = require('faker-br');

let cpf = faker.br.cpf();
console.log("CPF: ",cpf);

//let paragrafos = faker.lorem.paragraphs();
//console.log("paragrafos: ",paragrafos);

let ana = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 20,
    temGuardaChuva: true,
    grana: 120.5,
    frutas: [ "maça", "banana", "abacate" ],
    endereco: {
        logradouro: "Rua Alface",
        numero: 1234,
        bairro: "Vila Almeirão"
    }
}

ana.sobrenome = "Garcia";
ana.endereco.numero = 2345;
console.log("Valor da variável ana: ",ana);

let vetor = [ "maça", "banana", "abacate" ];
console.log(vetor[1]);


let marceloGithub = {
  "login": "mmamorim",
  "id": 2755009,
  "node_id": "MDQ6VXNlcjI3NTUwMDk=",
  "avatar_url": "https://avatars.githubusercontent.com/u/2755009?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mmamorim",
  "html_url": "https://github.com/mmamorim",
  "followers_url": "https://api.github.com/users/mmamorim/followers",
  "following_url": "https://api.github.com/users/mmamorim/following{/other_user}",
  "gists_url": "https://api.github.com/users/mmamorim/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mmamorim/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mmamorim/subscriptions",
  "organizations_url": "https://api.github.com/users/mmamorim/orgs",
  "repos_url": "https://api.github.com/users/mmamorim/repos",
  "events_url": "https://api.github.com/users/mmamorim/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mmamorim/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 8,
  "following": 0,
  "created_at": "2012-11-09T00:50:33Z",
  "updated_at": "2022-02-08T20:08:44Z"
}

console.log(marceloGithub.login);
