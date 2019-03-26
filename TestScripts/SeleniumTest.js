var webdriver = require('selenium-webdriver');
   
var driver = new webdriver.Builder()
    .forBrowser('chrome')
	.build();
	
driver.get('https://www.softpost.org');
driver.quit();