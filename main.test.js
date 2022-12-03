let main = require('./main')

test ('apple should return appleway', () => {
 
    let test = main.translate('apple');
    expect(test).toEqual('appleway');
})

test ('else should return elseway', () => {
 
    let test = main.translate('else');
    expect(test).toEqual('elseway');
})

test ('giraffe should return iraffegay', () => {
 
    let test = main.translate('giraffe');
    expect(test).toEqual('iraffegay');
})

test ('arrow should return arrowway', () => {
 
    let test = main.translate('arrow');
    expect(test).toEqual('arrowway');
})

test ('each should return eachway', () => {
 
    let test = main.translate('each');
    expect(test).toEqual('eachway');
})

test ('Ice should return iceway', () => {
 
    let test = main.translate('Ice');
    expect(test).toEqual('iceway');
})

test ('ocean should return oceanway', () => {
 
    let test = main.translate('ocean');
    expect(test).toEqual('oceanway');
})

test ('umbrella should return umbrellaway', () => {
 
    let test = main.translate('umbrella');
    expect(test).toEqual('umbrellaway');
})

test ('klwearn should return earnklway', () => {
 
    let test = main.translate('klwearn');
    expect(test).toEqual('earnklway');
})

test ('aeiou should return aeiouway', () => {
 
    let test = main.translate('aeiou');
    expect(test).toEqual('aeiouway');
})


test ('jackson should return acksonjay', () => {
 
    let test = main.translate('jackson');
    expect(test).toEqual('acksonjay');
})

test ('jason should return asonjay', () => {
 
    let test = main.translate('jason');
    expect(test).toEqual('asonjay');
})

test ('jjaron should return aronjjay', () => {
 
    let test = main.translate('jjaron');
    expect(test).toEqual('aronjjay');
})

test ('klwjnk should return klwjnkay', () => {
 
    let test = main.translate('klwjnk');
    expect(test).toEqual('klwjnkay');
})

test ('aaron should return aaronway', () => {
 
    let test = main.translate('aaron');
    expect(test).toEqual('aaronway');
})

test ('JACKSON should return jackson', () => {
 
    let test = main.translate('JACKSON');
    expect(test).toEqual('acksonjay');
})
