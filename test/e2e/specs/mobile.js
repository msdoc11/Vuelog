// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Prepare': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    browser
      .resizeWindow(375, 667)
      .url(browser.globals.devServerURL)
  },

  'Start': function (browser) {
    browser
      .waitForElementVisible('.vuelog', 5000)
      .assert.elementCount('.vuelog', 1)
  },

  'Home view': function (browser) {
    browser
      .assert.elementPresent('.header-wrap h1 img')
      .assert.hidden('.header-wrap h1 span')
      .assert.hidden('.header-wrap .header-menu')
      .assert.cssClassNotPresent('.header-wrap .side-menu', 'side-menu-open')
      .assert.visible('.header-wrap .menu-icon')
      .assert.elementPresent('.home')
      .assert.containsText('.home > h1', 'Vuelog')
      .assert.containsText('.home > p', 'A backend-free blog system built on top of Vue.js')
      .assert.containsText('.home > a:not(.github)', require('../../../package.json').version)
      .assert.elementNotPresent('.vuelog > footer') // Home view does not show footer
  },

  'Archive view': function (browser) {
    browser
      .click('.header-wrap .menu-icon')
      .pause(1000)
      .assert.cssClassPresent('.header-wrap .side-menu', 'side-menu-open')
      .click('.side-menu > ul > li:nth-last-child(2) > a')
      .pause(1000)
      .assert.cssClassNotPresent('.header-wrap .side-menu', 'side-menu-open')
      .assert.elementCount('.archive-body > h2', 3) // Archive default view has three sections
      .assert.elementPresent('.vuelog > footer')
      .click('.archive-body h4 a')
      .pause(1000)
      .assert.elementCount('.archive-body > h2', 1) // Archive by category view
      .assert.containsText('.archive-body > h2', 'Posts in category')
      .assert.elementPresent('.vuelog > footer')
      .assert.elementPresent('.vuelog > footer select')
  },

  'Post view': function (browser) {
    browser
      .click('.archive-body li:nth-last-child(4) a')
      .pause(1000)
      .assert.elementCount('.content-body', 1)
      .assert.elementPresent('.content-body > h1.content-title')
      .assert.elementNotPresent('.content-body > h2.content-title')
      .assert.elementPresent('.content-body > h4.content-meta')
      .assert.elementNotPresent('.content-pagination') // This post should not have multiple parts
      .assert.elementNotPresent('.content-pagination > .page-number')
      .assert.elementPresent('.post > .comments')
      .assert.elementPresent('.post > .navigation')
      .assert.elementPresent('.vuelog > footer')
  },

  'Post view: multiple parts content': function (browser) {
    browser
      .url(browser.globals.devServerURL + '/#/blog/guide/2017/this-post-has-multiple-parts')
      .pause(1000)
      .assert.elementPresent('.content-pagination')
      .assert.elementCount('.content-pagination > .page-number', 3) // This post should have 3 multiple parts
      .assert.elementCount('.content-pagination > .page-number > span', 1) // Only 1 of which is the active part
      .assert.elementCount('.content-pagination > .page-number > a', 2) // And 2 are router links to other parts
      .click('.content-pagination > .page-number a')
      .pause(1000)
      .assert.urlContains('/#/blog/guide/2017/this-post-has-multiple-parts') // Should still show the same post, a different part through
      .assert.elementCount('.content-pagination > .page-number > span', 1) // Only 1 of which is the active part
      .assert.elementCount('.content-pagination > .page-number > a', 2) // And 2 are router links to other parts
  },

  'Posts view': function (browser) {
    browser
      .click('.content-meta a')
      .pause(1000)
      .assert.elementCount('.content-body', 3) // 3 posts listed in the posts view
      .assert.elementNotPresent('.content-body > h1.content-title')
      .assert.elementPresent('.content-body > h2.content-title')
      .assert.elementPresent('.content-body > h4.content-meta')
      .assert.elementNotPresent('.comments')
      .assert.elementPresent('.posts > .navigation')
      .assert.elementPresent('.vuelog > footer')
  },

  'Page view': function (browser) {
    browser
      .click('.header-wrap .menu-icon')
      .pause(1000)
      .assert.cssClassPresent('.header-wrap .side-menu', 'side-menu-open')
      .click('.side-menu > ul > li:nth-last-child(3) > a')
      .pause(1000)
      .assert.cssClassNotPresent('.header-wrap .side-menu', 'side-menu-open')
      .assert.elementCount('.content-body', 1)
      .assert.elementPresent('.content-body > h1.content-title')
      .assert.elementNotPresent('.content-body > h2.content-title')
      .assert.elementNotPresent('.content-body > h4.content-meta')
      .assert.elementPresent('.page > .comments')
      .assert.elementNotPresent('.navigation')
      .assert.elementPresent('.vuelog > footer')
  },

  'Oops view': function (browser) {
    browser
      .url(browser.globals.devServerURL + '/#/invalid-path')
      .pause(1000)
      .assert.elementPresent('.oops')
      .assert.containsText('.oops > h1', 'Oops!')
      .setSelectValue('.vuelog > footer select', 'zh-CN') // change locale to Chinese Simplified
      .pause(1000)
      .assert.containsText('.oops > h1', '啊哦！')
      .click('.oops > a')
      .pause(1000)
      .assert.elementPresent('.home') // get back to home view
      .assert.containsText('.home > h1', 'Vuelog')
      .assert.containsText('.home > p', '基于 Vue.js 构建的无后端博客系统')
  },

  'End': function (browser) {
    browser
      .end()
  }
}
