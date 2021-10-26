'use strict'

/* global browser, $ */
/* eslint-disable class-methods-use-this */

class Home {
  get ModelIntro() {
      return $("#ModelIntro-1")
  }

  get ModelIntroBodyText() {
    return $("#ModelIntro-1 p")
  }

  get ModelIntroHeaderText() {
    return $("#ModelIntro-1 h2")
  }

  get sideBar() {
      return $('#site-nav-topbar-wrapper')
  }
  get sideBarMenuBtn() {
    return $('#sitenav-sidenav-toggle')
  }

  get siteNavCLoseBtn() {
    return $('.SiteNav_topBarButton')
  }

  get videoSection() {
      return $('#Video-1')
  }

 get videoTag() {
    return $('#Video-1 video' )
 }

 get videoSourceTag() {
    return $('#Video-1 source' )
 }

  get productCarousel() {
    return $('#ProductListCarousel-1')
  }

  get productCarouselHeader() {
    return $('#ProductListCarousel-1 h2')
  }

  get productCarouselItemCategory() {
      return $$('#ProductListCarousel-1 .item-category')
  }

  get productCarouselItemName() {
      return $$('#ProductListCarousel-1 .item-name')
  }

  get productCarouselItemNameSuffix() {
    return $$('#ProductListCarousel-1 .item-name-suffix')
  }

  get productListCarouselLinks() {
      return $('.product-list-carousel-item-links')
  }

  get productCarouselNextBtn() {
      return $('#springCarouselNextButton')
  }

  get productCarouselPreviousBtn() {
    return $('#springCarouselPreviousButton')
  }

  get alertBoxContent() {
      return $('#alert-box-message')
  }
  get acceptCookies() {
      return $('.accept-cookies-button')
  }
  get sideBarListItem() {
    return $('.SiteNav_LinksMenu')
  }
  get sideBarListItems() {
    return $$('.SiteNav_LinksMenu>div')
  }
  get sideBarListItemMarketSelector() {
      return $('.SiteNav_sideNavigationMarketSelector')
  }
   /**
   * Opens the home page
   *
   * @param {number} [timeout] Wait timeout
   */
   async open(timeout) {
        await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        await this.sideBar.waitForExist({ timeout })
   }
}

module.exports = new Home()
