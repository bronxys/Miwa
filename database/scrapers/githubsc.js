const fetch = require('node-fetch');

async function searchGithubRepositories(query) {
if (!query) throw new Error('Por favor, forneça um termo de pesquisa.');
const githubSearchUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc`;
try {
const response = await fetch(githubSearchUrl, {
headers: { 'Accept': 'application/vnd.github.v3+json' }
});
const data = await response.json();
const repositories = data.items.slice(0, 5);
if (repositories.length === 0) return 'Nenhum repositório encontrado.';
return repositories.map(repo => {
const name = repo.name;
const description = repo.description || 'Sem descrição';
const link = repo.html_url;
return `*${name}*\n${description}\n${link}`;
}).join('\n\n–\n\n');
} catch (error) {
console.error('Erro ao buscar resultados no GitHub:', error);
throw new Error('Ocorreu um erro ao buscar os resultados.');
}
}

module.exports = searchGithubRepositories;