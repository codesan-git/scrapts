const puppeteer = require('puppeteer-extra')
const stealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from "puppeteer"

puppeteer.use(stealthPlugin())

const { executablePath } = require('puppeteer')

// const url = 'https://bot.sannysoft.com/'
// const url = 'https://www.tigaorang.dev/login'
const url = 'https://qerjakan.vercel.app/'

const main = async () => {
    const browser: Browser = await puppeteer.launch({ headless: false, executablePath: executablePath() })
    const page = await browser.newPage()
    await page.goto(url)
    // await page.screenshot({path: 'bot.jpg'})

    await page.click('ul > li')
    await page.type('#email', 'satrianugraha4000@gmail.com')
    await page.type('#password', 'satria24')
    await page.click('[type="submit"]')

    await page.waitForTimeout(5000)

    // await browser.close()
}

main()