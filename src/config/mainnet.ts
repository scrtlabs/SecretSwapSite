export const config = {
  NETWORK_TYPE: 'MAINNET',

  CHAIN_ID: 'secret-4',
  CHAIN_NAME: 'Secret 4',

  SECRET_POST_ADDRESS: 'https://lcd.mainnet.secretsaturn.net/',
  SECRET_RPC: 'https://rpc.mainnet.secretsaturn.net/',
  // SECRET_WS: 'wss://bootstrap.secrettestnet.io:26667/websocket',
  SECRET_LCD: 'https://lcd.mainnet.secretsaturn.net/',

  BACKEND_URL: 'https://api-bridge-mainnet.azurewebsites.net',
  // PLSM_BACKEND_URL: 'https://bridge-plasm-backend-testnet.azurewebsites.net',
  BSC_BACKEND_URL: 'https://bridge-bsc-mainnet.azurewebsites.net',

  SCRT_SWAP_CONTRACT: 'secret1sferux27lpr3lm52c8sq2dd7m54xhm28thnj5y',
  BSC_SCRT_SWAP_CONTRACT: 'secret168mwctng6s7vk9w5d7n0wsty2f7vaq3rjq8g7c',
  // PLSM_SWAP_CONTRACT: 'secret15qjcgvf7djvvlnfmls90vmetflgr20vn5p00as',

  ETH_MANAGER_CONTRACT: '0xf4B00C937b4ec4Bb5AC051c3c719036c668a31EC',
  BSC_MANAGER_CONTRACT: '0x3E171dD33502fb993A853F420eA3cd8E9385B757',
  // PLSM_MANAGER_CONTRACT: '0xa0483CA2E6768Fa2aA4c65150225DF4560459558',

  ETH_EXPLORER_URL: 'https://etherscan.io',
  BSC_EXPLORER_URL: 'https://bscscan.com/',
  SCRT_EXPLORER_URL: 'https://secretnodes.com/secret/chains/secret-4',

  SSCRT_CONTRACT: 'secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek',
  CSHBK_CONTRACT: 'secret1eckd8jyjjz5qvse3t42qnepy4ywg9qj6hlh46s',
  MASTER_CONTRACT: 'secret1cm5k5k2kzwgnyccqnz4ml8uqaa25egzzvsmn2f',
  MINTER_CONTRACT: 'secret1tgagwaea268dkz7255mcau28z8qs08lnllgecm',
  WSCRT_PROXY_CONTRACT: 'secret1zxt48uqzquvjsp2a7suzxlyd9n3jfpdw4k5zve',
  WSCRT_PROXY_CONTRACT_ETH: 'secret1zxt48uqzquvjsp2a7suzxlyd9n3jfpdw4k5zve',
  WSCRT_PROXY_CONTRACT_BSC: 'secret1t9cdexpf8pxtjlz4k9cfydd0ml2jxanl0uw5s0',
  SIENNA_CONTRACT: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
  SIENNA_PROXY_CONTRACT_ETH: 'secret1vq0gc5wdjqnalvtgra3dr4m07kaxkhq2st3hzx',
  SIENNA_PROXY_CONTRACT_BSC: '',
  SEFI_STAKING_CONTRACT: 'secret1t32sqak9mr844p0vwhmt4c23nsw8t03vexk4xv',
  SEFI_STAKING_V2_CONTRACT: 'secret1knars62aly28xkqxe8xeqtf7ans8hqxgm6a05k',
  SEFI_STAKING_V1_CONTRACT: 'secret1y9z3ck449a46r4ku7klkhdxnlq07zh4shc7cuy',
  FACTORY_CONTRACT: 'secret1yzmqf06vcrzdz3str4xa3ncf7ndxq732s4vvjl',

  LEADER_ACCOUNT_BSC: '0x08E54C84d61E9dB2ED7ea53e2216276d75B5b426',
  LEADER_ACCOUNT_ETH: '0x9d06d59677b412c48F5f8546b45b9Ea694A99698',

  ETH_GOV_TOKEN_ADDRESS: '0x773258b03c730f84af10dfcb1bfaa7487558b8ac',
  ETH_DIST_TOKEN_ADDRESS: '0x421b003b056dad54de1fe44247c1e5b8e69f6286',

  SCRT_GOV_TOKEN_ADDRESS: 'secret15l9cqgz5uezgydrglaak5ahfac69kmx2qpd6xt',
  SCRT_DIST_TOKEN_ADDRESS: 'secret1d47hy7sjm88dpls0vu7hvmeuqkxlmtvv2dcfqv',

  AMM_FACTORY_CONTRACT: 'secret1fjqlk09wp7yflxx7y433mkeskqdtw3yqerkcgp',
  AMM_ROUTER_CONTRACT: 'secret1xy5r5j4zp0v5fzza5r9yhmv7nux06rfp2yfuuv',
  SIG_THRESHOLD: 3,

  FETCHER_CONFIGS: {}, // comes from the services/index.ts => getFetcherConfigs function
  PRICE_DATA: {},      // comes from the services/index.ts => getPriceData function
};
