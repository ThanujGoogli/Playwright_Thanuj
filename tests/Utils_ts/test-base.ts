const base = require('@playwright/test');
import {test as baseTest} from '@playwright/test';

interface testDataForOrder {
    username: string;
    password: string;
    productName: string;
    country: string;
}


export const customtest = baseTest.extend<{ testDataForOrder: testDataForOrder }>({

    testDataForOrder:{

        username:'thanujgoogli@gmail.com',
        password:'Test@1234',
        productName:'ZARA COAT 3',
        country:'India'
    }
})