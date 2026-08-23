const validateEcmascriptText = text => {
    const pattern = /^ *ecmascript([1-9]|)1[0-6]?$/i;
    return pattern.test(text);

}

const validateDomainZone = text => {
    //const pattern = /^[a-z.0-9-]+\.(com|org|il)$/i
    const pattern = /^\w(\w|[.-])+(com|org|il)$/i
    return pattern.test(text);
}



// Home work:

const validateCard = text => {
    const pattern = /^\d{8,16}$/
    return pattern.test(text);
}

const validateDate1 = text => {
    const pattern = /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/
    return pattern.test(text);
}

const validateDate2 = text => {
    const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    return pattern.test(text);
}

const validatePhoneNumber = text => {
    const pattern = /^\+\d{2}\(\d{2}\)\d{4}-\d{4}$/
    return pattern.test(text);
}

const validatePositiveNumber = text => {
    const pattern = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/
    return pattern.test(text);
}


export  {validateEcmascriptText, validateDomainZone,validateCard,validateDate1,validateDate2,validatePhoneNumber,validatePositiveNumber}
