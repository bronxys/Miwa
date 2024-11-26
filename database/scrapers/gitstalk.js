const fetch = require('node-fetch');

async function githubStalk(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.message === "Not Found") {
            return { error: "Usuário não encontrado" };
        }
        return {
            name: data.name || "Nome não disponível",
            bio: data.bio || "Biografia não disponível",
            public_repos: data.public_repos || 0,
            followers: data.followers || 0,
            following: data.following || 0,
            avatar_url: data.avatar_url,
            profile_url: data.html_url
        };
    } catch (error) {
        console.error("Erro ao buscar perfil do GitHub:", error);
        return { error: "Erro ao buscar dados do GitHub" };
    }
}

module.exports = { githubStalk };