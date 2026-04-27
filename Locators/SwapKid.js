const { expect } = require('@playwright/test');
class swapKids {
    constructor(page) {
        this.kidsMenuOption = page.locator("//button[@id='dropdownMenuButton1']")

        this.selectKidId2494James = page.locator("//li//a[@id='2494' and @class='dropdown-item text-capitalize active']")
        this.selectKidId2494JamesActive = page.locator("//li//a[@id='2494' and @class='dropdown-item text-capitalize active']")
        
        this.selectKidId2914Deepu = page.locator("//li//a[@id='2914' and @class='dropdown-item text-capitalize']")
        this.selectKidId2914DeepuActive = page.locator("//li//a[@id='2914' and @class='dropdown-item text-capitalize active']")

        this.selectKidId2916Krish = page.locator("//li//a[@id='2916' and @class='dropdown-item text-capitalize']")
        this.selectKidId2916KrishActive = page.locator("//li//a[@id='2916' and @class='dropdown-item text-capitalize active']")

        this.selectKidId3620Antony = page.locator("//li//a[@id='3620' and @class='dropdown-item text-capitalize']")
        this.selectKidId3620AntonyActive = page.locator("//li//a[@id='3620' and @class='dropdown-item text-capitalize active']")


    }
}

module.exports = {swapKids}