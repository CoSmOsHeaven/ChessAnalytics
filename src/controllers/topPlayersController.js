const getTopPlayers = async (req, reply) => {
    const response = await fetch('https://lichess.org/api/player');
    const data = await response.json();
    reply.send(data);
}

module.exports = {
    getTopPlayers,
};