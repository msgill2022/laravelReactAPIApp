export const validLatitudePattern = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/
export const validLongitudePattern = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
export const validDigitPattern = /[0-9]/

export const validUser = (num)=>{
    return !isNaN(num)
  }
  

export const patternValidator = (pattern, value) => {
   return pattern.test(value)
}

export const getMetaData = (attr, val) => {
    try {
        return document.querySelector(`[${attr}=${val}]`).content;
    } catch (error) {
        error.message("wrong attribute and value");
    }
   
}