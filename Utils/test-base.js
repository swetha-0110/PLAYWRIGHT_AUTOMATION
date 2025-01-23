const base= require('@playwright/test');

exports.customtest = base.test.extend(
{
    testDataFororder :
    {
     username : "anshika@gmail.com",
     password : "Iamking@000",
     productName :"ADIDAS ORIGINAL"
    }

}




)
