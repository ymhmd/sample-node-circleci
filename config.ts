import {Config } from 'protractor';

var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    capabilities: {
        directConnect: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=1200x800"]
        }
    },
    framework: 'jasmine',
    specs: ['./src/specs/**/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: async () => {

        //generates html report and screenshots
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports/screenshots'
        }).getJasmine2Reporter());

        //prepare browser
        let globals = require('protractor');
        let browser = globals.browser;
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
        await browser.manage().timeouts().implicitlyWait(30*1000);
    }
};