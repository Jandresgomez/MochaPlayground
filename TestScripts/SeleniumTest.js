const webdriver = require('selenium-webdriver');
   
const driver = new webdriver.Builder().forBrowser('chrome').build();
	
driver.get('https://www.softpost.org');
//driver.quit();