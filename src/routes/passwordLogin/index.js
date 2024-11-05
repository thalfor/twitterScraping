//
const env = require('../../env');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { setTimeout } = require('node:timers/promises');

puppeteer.use(StealthPlugin());


async function passwordLogin(page) {

  await page.waitForSelector(`xpath/.//input[@name='password']`); 
  const [inputPasswordField] = await page.$$(`xpath/.//input[@name='password']`);
  await inputPasswordField.type(env.PASSWORD);
  //await page.screenshot({ path: 'src/routes/passwordLogin/passwordFilled.jpg' });
  //await page.keyboard.press('Enter');
  //await setTimeout(2000);
  
};

module.exports.passwordLogin = passwordLogin;
//