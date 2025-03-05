import { Token } from '@pollum-io/sdk-core'
import JSBI from 'jsbi'
import { AllowedPermitArguments, SelfPermit, StandardPermitArguments } from './selfPermit'

const token = new Token(570, '0x0000000000000000000000000000000000000001', 18, 't0', 'token0')
const standardPermitOptions: StandardPermitArguments = {
  v: 0,
  r: '0x0000000000000000000000000000000000000000000000000000000000000001',
  s: '0x0000000000000000000000000000000000000000000000000000000000000002',
  amount: JSBI.BigInt(123),
  deadline: JSBI.BigInt(123)
}
const allowedPermitOptions: AllowedPermitArguments = {
  v: 0,
  r: '0x0000000000000000000000000000000000000000000000000000000000000001',
  s: '0x0000000000000000000000000000000000000000000000000000000000000002',
  nonce: JSBI.BigInt(123),
  expiry: JSBI.BigInt(123)
}

describe('SelfPermit', () => {
  describe('#encodePermit', () => {
    it('works with StandardPermitArguments', () => {
      const calldata = SelfPermit.encodePermit(token, standardPermitOptions)
      expect(calldata).toBe(
        '0xf3995c670000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002'
      )
    })

    it('works with AllowedPermitArguments', () => {
      const calldata = SelfPermit.encodePermit(token, allowedPermitOptions)
      expect(calldata).toBe(
        '0x4659a4940000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000007b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002'
      )
    })
  })
})
