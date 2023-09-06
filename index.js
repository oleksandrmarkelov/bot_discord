var fs = require('fs');
let regex = /[.]png$/;
fs.readdirSync('.')
    .filter(f => regex.test(f))
    .map(f => fs.unlinkSync(f))

const puppeteer = require('puppeteer');



(async () => {
    console.log("Start bot");

    

    const bots = new Map()

    //bots.set('XXX', 'XXXl@yahoo.com')
    //bots.set('XXX', 'pXXXra@yahoo.com')
    /**/
let a = 1;
for (const [ key, value ] of bots) {  
    console.log(`Line `+a)

    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://discord.com/login?email=`+value);
        
        await page.waitForTimeout(500)
        await page.keyboard.press('Tab');
        await page.waitForTimeout(500)
        await page.keyboard.type('XXX');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1500)
        await page.screenshot({ path: "login"+a+".png" });
      
        //const selector = 'div[contenteditable=true]:nth-child(2)';
      
        await page.goto('https://discord.com/channels/913091321114296330/1038133368841310280');
        
        await page.waitForTimeout(500)
        await page.keyboard.press('Tab');
        await page.waitForTimeout(500)
        await page.keyboard.press('Space')
        await page.keyboard.type("abcde")
        await page.keyboard.press('Backspace')
        await page.keyboard.press('Backspace')
        await page.keyboard.press('Backspace')
        await page.keyboard.press('Backspace')
        await page.keyboard.press('Backspace')
        await page.keyboard.type("!faucet")
        await page.keyboard.press('Space')

        await page.keyboard.type(key)
        
        await page.waitForTimeout(500)
        await page.screenshot({ path: "request"+a+".png" });
        await page.keyboard.press("Enter")
        await page.waitForTimeout(1000)
        await page.screenshot({ path: "result"+a+".png" });
        await browser.close();
    }catch(err) {
        console.log(err);
    }  

    a++;
  }
console.log(`Finish `)
process.exit(0);
})();
