var assert = require("assert").strict;
var webdriver = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
    //Store the ID of the original window
        const originalWindow = await driver.getWindowHandle();
    //Check we don't have other windows open already
    assert((await driver.getAllWindowHandles()).length === 1);
    await driver.findElement(webdriver.By.linkText("Inscrire un étudiant")).click();
    const matr=await driver.findElement(webdriver.By.id('Matricule'));
    const date = new Date(1999, 09, 30);
    await driver.findElement(webdriver.By.id('Matricule')).sendKeys(170243);
    await driver.findElement(webdriver.By.id('Nom')).sendKeys("Djehaiche");
    await driver.findElement(webdriver.By.id('Prenom')).sendKeys("Saleh");
    await driver.executeScript("document.getElementById('Date_Naissance').value= '30/09/1999'")
    await driver.findElement(webdriver.By.id('Lieu_Naissance')).sendKeys("Setif");
    await driver.findElement(webdriver.By.id('Adresse')).sendKeys("AinOulmene");
    await driver.findElement(webdriver.By.id('Mail')).sendKeys("hs_djehaiche@esi.dz");
    await driver.findElement(webdriver.By.id('Tel')).sendKeys("0658618062");
    await driver.findElement(webdriver.By.css('#Promo > option:nth-child(4)')).click();
    await driver.findElement(webdriver.By.css('#groupe > option:nth-child(9)')).click();
    await driver.findElement(webdriver.By.css("input[type='submit']")).click();    
    await driver.quit();
})();
