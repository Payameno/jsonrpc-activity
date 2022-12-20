const provider = require('./provider');

async function getTotalBalance(addresses) {

    const responses = await provider.send(addresses.map((addr , index) => ({
      jsonrpc: "2.0",
      id: index,
      method: "eth_getBalance",
      params: [ addr ,"latest" ],
  })));
    
   return responses.reduce((a, c) => a + parseInt(c.result), 0);
}

//parseInt to convert Hex values to Number