const axios = require('axios');

// This is Alchemy API URL which communicates with the node client
const ALCHEMY_URL = "https://eth-mainnet.g.alchemy.com/v2/gCcE7E6A9zRPwfL3pyDvouxFNc_ZzLYD";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443", // block 46147
    false  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});