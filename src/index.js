'use strict'

module.exports = url => {
    if (typeof url !== 'string') {
        throw new TypeError('Provided value is not a string');
    }
    try {
        const validateURL = new URL(url);
        if(validateURL.protocol === 'http:' || validateURL.protocol === 'https:'){
            // https://example.com -> [ 'https:', '', 'example.com', '' ]
            var sepURL = validateURL.origin.split('/')
            // Following google and microsoft rules of limiting url
            if (validateURL.href.length > 2087){
                return false
            }
            if (sepURL[2] === 'localhost') {
                return true
            }
            return /^[0-9a-z.-]+\.[0-9a-z.-]+$/i.test(sepURL[2]);
        }
        return false
    } catch {
        return false;
    }
};