import {describe, test, expect} from '@jest/globals'
import {validateCard} from '../service/validate.js'
import {validateDate1} from '../service/validate.js'
import {validateDate2} from '../service/validate.js'
import {validatePhoneNumber} from '../service/validate.js'
import {validatePositiveNumber} from '../service/validate.js'

describe('validateCard', () => {
    test('should be true', () => {
        expect(validateCard("12345678")).toBe(true)
        expect(validateCard("1234567887654321")).toBe(true)
        expect(validateCard("1234567890")).toBe(true)
    });
    test('should be false', () => {
        expect(validateCard("1234567")).toBe(false);
        expect(validateCard("12345678987654321")).toBe(false);


    })
})

describe('validateDate1', () => {
    test('should be true', () => {
        expect(validateDate1("25.12.2018")).toBeTruthy();
    });
    test('should be false', () => {
        expect(validateDate1("32.01.2018")).toBeFalsy();
        expect(validateDate1("25/12/2018")).toBeFalsy();
        expect(validateDate1("2018.12.08")).toBeFalsy();
    })
})
describe('validateDate2', () => {
    test('should be true', () => {
        expect(validateDate2("2018-12-25")).toBeTruthy();
        expect(validateDate2("2018-12-31")).toBeTruthy();
        expect(validateDate2("2018-02-29")).toBeTruthy();
    });
    test('should be false', () => {
        expect(validateDate2("25.12.2018")).toBeFalsy();
        expect(validateDate2("2018-13-01")).toBeFalsy();
        expect(validateDate2("2018-121-30")).toBeFalsy();
    })
})

describe('validatePhoneNumber', () => {
    test('should be true', () => {
        expect(validatePhoneNumber("+99(01)1234-5678")).toBeTruthy();

    });
    test('should be false', ()=>{
        expect(validateDate2("99(01)1234-5678")).toBeFalsy();
        expect(validateDate2("99(1)12345-5678")).toBeFalsy();
    })
})

describe('validatePositiveNumber', () => {
    test('should be true', () => {
        expect(validatePositiveNumber(10)).toBeTruthy();
        expect(validatePositiveNumber(100)).toBeTruthy();
        expect(validatePositiveNumber(255)).toBeTruthy();
    });
    test('should be false', () => {
        expect(validatePositiveNumber(-10)).toBeFalsy();
        expect(validatePositiveNumber(1000)).toBeFalsy();
        expect(validatePositiveNumber(257)).toBeFalsy();
    })
})



