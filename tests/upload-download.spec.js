const ExcelJs = require('exceljs');
import {test, expect} from '@playwright/test';
import { read } from 'node:fs';

async function writeExcelFile(searchText,replaceText,change,filePath){

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
    const output = readExcelFile(worksheet,searchText);

    const cell = worksheet.getCell(output.row,output.column+change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);

}

function readExcelFile(worksheet,searchText){

    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value == searchText){
                output={row:rowNumber,column:colNumber};
            }
        });
    });
    return output;
}

//Update Mango price to 350
//writeExcelFile('Mango',350,{rowChange:0,colChange:1},'./data/test.xlsx');


test.skip('upload and download file', async ({ page }) => {

    const textSearch = 'Mango';
    const updateValue = 350;

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const download = page.waitForEvent('download'); 
    await page.getByRole('button', { name: 'Download' }).click();

    const downloadFile = await download;
    const filePath = "C:/Users/91770/Downloads/download.xlsx";


    await writeExcelFile(textSearch,updateValue,{rowChange:0,colChange:2},filePath);

    await page.locator('input[type="file"]').setInputFiles(filePath);
    const desiredRow = await page.getByRole('row').filter({has:page.getByText(textSearch)}).first();
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue.toString());



})