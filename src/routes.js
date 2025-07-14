async function routes (fastify, options) {
    const { getTopPlayers } = await import('./controllers/topPlayersController.js');
        fastify.get('/chess/top10', async (request, reply) => {
        await getTopPlayers(request, reply);
    })
}

export default routes;