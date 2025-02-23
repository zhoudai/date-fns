/* eslint-env mocha */

import assert from 'assert'
import { describe, it } from 'vitest'
import yearsToMonths from './index'

describe('yearsToMonths', () => {
  it('converts years to months', () => {
    assert(yearsToMonths(1) === 12)
    assert(yearsToMonths(2) === 24)
  })

  it('uses floor rounding', () => {
    assert(yearsToMonths(1.7) === 20)
    assert(yearsToMonths(0.1) === 1)
  })

  it('handles border values', () => {
    assert(yearsToMonths(1.5) === 18)
    assert(yearsToMonths(0) === 0)
  })
})
