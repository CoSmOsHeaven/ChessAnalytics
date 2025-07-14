const fastify = require('fastify')({logger: true});
const PORT = 5000;

fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})

