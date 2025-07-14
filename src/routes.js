async function routes (fastify, options) {
        fastify.get('/chess/top10', async (request, reply) => {
            reply.send("Top 10 endpoint");
    })
}

export default routes;