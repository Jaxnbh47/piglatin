let translatePigLatin = require('./main')

test ('jackson should return acksonay', () => {
    //Here is where the unit test will happen

    //Arrange
    //Where you test
    //Variables you might need

    //Act
    //Do the test
    let testjackson = translatePigLatin('jackson');

    //Assert
    //This is what should happen
    expect(testjackson).toBe('acksonay');

})
