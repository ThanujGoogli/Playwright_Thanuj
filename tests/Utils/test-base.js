const base = require('@playwright/test');


exports.customtest = base.test.extend({

    testDataForOrder:{

        username:'thanujgoogli@gmail.com',
        password:'Test@1234',
        productName:'ZARA COAT 3',
        country:'India'
    }
})