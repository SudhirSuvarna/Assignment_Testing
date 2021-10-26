'use strict'

/* global browser, describe, it, expect */
/* eslint-disable new-cap */

const Home = require('../pages/home')
const videoUrl = "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero_16x9_loop_clean.mp4";
const carModels = [
  {
    "type" : "SUV",
    "itemName" : "XC90 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "SUV",
    "itemName" : "XC60 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "SUV",
    "itemName" : "XC40 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "SUV",
    "itemName" : "XC40 Recharge",
    "rechargeType" : "pure electric"
  },
  {
    "type" : "ESTATE",
    "itemName" : "V90 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "ESTATE",
    "itemName" : "V60 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "SEDAN",
    "itemName" : "S90 Recharge",
    "rechargeType" : "plug-in hybrid"
  },
  {
    "type" : "SEDAN",
    "itemName" : "S60 Recharge",
    "rechargeType" : "plug-in hybrid"
  }
]

describe('Session', () => {
  it('Open home page', async () => {
    await Home.open()
    await expect(browser).toHaveTitle('A million more | Volvo Cars - International')
    await expect(Home.productCarousel).toBeDisplayed()
    await expect(Home.sideBarMenuBtn).toBeDisplayed()
    await expect(Home.videoSection).toBeDisplayed()
    await expect(Home.videoTag).toBeDisplayed()
    await expect(Home.sideBar).toHaveText("Our Cars")
    await expect(Home.alertBoxContent).toHaveText('We use cookies and local storage for the best experience on our website, including to personalise content and ads, to provide social media features and to analyse traffic. These cookies include targeted media cookies and advanced analytics cookies. For more information see our Information Notice on the cookie page. By clicking accept you agree to our use of cookies and local storage. To alter the types of cookies we use click “Cookie Settings"')
    await Home.acceptCookies.click();
    await expect(Home.videoSourceTag).toHaveAttribute("src", videoUrl)
  })

  it('Check intro text', async () => {
      Home.ModelIntro.scrollIntoView();
      await expect(Home.ModelIntroHeaderText).toHaveText("Ideas that change the world are often the most controversial.");
      await expect(Home.ModelIntroBodyText).toHaveText("After we introduced the 3-point safety belt, we faced a world of criticism. Since then, it has saved more than a million lives. Now it's time for the next step. For everyone's safety.")
  });

  it('Open side bar menu', async () => {
      await expect(Home.sideBarMenuBtn).toBeClickable()
      await Home.sideBarMenuBtn.click()
      await expect(Home.sideBarListItem).toHaveChildren(5)
      await expect(Home.sideBarListItems).toBeElementsArrayOfSize(5)
      const listItems = ["Buy", "Own", "About Volvo", "Explore", "More"];
      Home.sideBarListItems.forEach((listitem, index) => {
         expect(listitem).toHaveText(listItems[index]);
      })
      await expect(Home.sideBarListItemMarketSelector).toBeDisplayed();
  })

  it('Open side bar menu market selector', async () => {
        Home.sideBarListItemMarketSelector.click();
        Home.siteNavCLoseBtn.click()
  });

  it('Test car model carousel', async () => {
    Home.productCarousel.scrollIntoView();
    await expect(Home.productCarouselHeader).toHaveTextContaining("Explore our models")
    await expect(Home.productCarouselItemCategory).toBeElementsArrayOfSize(8)
    await expect(Home.productCarouselItemName).toBeElementsArrayOfSize(8)
    await expect(Home.productCarouselItemNameSuffix).toBeElementsArrayOfSize(8)
    Home.productCarouselItemCategory.forEach((category, index) => {
      expect(category).toHaveText(carModels[index]['type']);
    })

    Home.productCarouselItemName.forEach((itemName, index) => {
      expect(itemName).toHaveText(carModels[index]['itemName']);
    })

    Home.productCarouselItemNameSuffix.forEach((rechargeType, index) => {
      expect(rechargeType).toHaveText(carModels[index]['rechargeType']);
    })

    //await expect(Home.productListCarouselLinks).toBeElementsArrayOfSize(8)

    //Home.productListCarouselLinks.forEach(())

  });

})

