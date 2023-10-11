function checkIsEasy(value: string) {
    const strReg = /^[a-zA-Z]+$/;
    const numReg = /^[0-9]+$/;
    const charReg = /^[^a-zA-Z0-9]*$/;
    if (strReg.test(value) || numReg.test(value) || charReg.test(value)) {
        return true
    } else {
        return false;
    }
}
function checkIsMedium(value: string) {
    const letterDigitsReg = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
    const letterSymbolReg = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z])[^0-9]*$/;
    const digitSymbolReg = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])[^a-zA-Z]*$/;
    if (letterDigitsReg.test(value) || letterSymbolReg.test(value) || digitSymbolReg.test(value)) {
        return true
    } else {
        return false;
    }
}


function checkIsStrong(value: string) {
    const reg = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}

export { checkIsEasy, checkIsMedium, checkIsStrong }
