export const FACTORY_ADDRESS = '0xeAa20BEA58979386A7d37BAeb4C1522892c74640'
export const FACTORY_ADDRESS_ZKSYS = '0xC701afF2302f2461faE33ec5978495FB80884837'
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x4a995152ad4a45ce61f15e514146bc642453130f5c3ef14b85098e9c6266c43d'

export const POOL_INIT_CODE_HASH_MAP: { [chainId: number]: string } = {
  570: POOL_INIT_CODE_HASH,
  57000: POOL_INIT_CODE_HASH,
  5701: '0x010013f1775c5d6840f6191dd3fcb1b0576d8a149687d32a63c222521394af32'
}


/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
