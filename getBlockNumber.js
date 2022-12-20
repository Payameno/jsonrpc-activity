const provider = require('./provider');

async function getBlockNumber() {
    const response = await provider.send({
        jsonrpc: "2.0",
        id: 1,
        method: "", // <-- TODO: fill in the method name
    });
    
    // TODO: return the block number
}

module.exports = getBlockNumber;