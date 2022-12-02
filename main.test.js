let main = require('./main')

test ('jackson should return acksonjay', () => {
 
    let test = main.translatePigLatin('jackson');
    expect(test).toEqual('acksonjay');
})

test ('jason should return asonjay', () => {
 
    let test = main.translatePigLatin('jason');
    expect(test).toEqual('asonjay');
})

test ('jjaron should return aronjjay', () => {
 
    let test = main.translatePigLatin('jjaron');
    expect(test).toEqual('aronjjay');
})

test ('aaron should return aaronway', () => {
 
    let test = main.translatePigLatin('aaron');
    expect(test).toEqual('aaronway');
})
