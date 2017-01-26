title: Customize navigation menu
category: docs
date: 2017-01-11
------------------------------------
You can customize the navigation menu at your need. Let’s take a look at relevant part in `userdata/database.js`:

```js
navigation: [
  {
    label: {'en-US': 'Guide', 'zh-CN': '指南'},
    type: 'category',
    path: '/blog/guide'
  },
  {
    label: {'en-US': 'About', 'zh-CN': '关于'},
    type: 'page',
    path: '/page/all-about-vuelog'
  },
  {
    label: {'en-US': 'Changelog', 'zh-CN': '变更日志'},
    type: 'page',
    path: '/page/changelog'
  },
  {
    label: {'en-US': 'Archive', 'zh-CN': '归档'},
    type: 'archive',
    path: '/archive'
  },
  {
    label: {'en-US': 'Links', 'zh-CN': '链接'},
    type: 'dropdown',
    path: '', // (OPTIONAL) dropdown can be routable too if you set a valid path
    children: [
      { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
      { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
      { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
    ]
  }
],
```

- Each item in the list is either a plain link or a dropdown.
- A plain link can redirect to an in-site route or an out-going URL.
- A dropdown is just another list of navigation links. It can be routable too if you set a valid path like other in-site links.
- Navigation link label supports multiple languages, please read [multiple languages support](#/blog/docs/2017/multiple-languages-support) for more information.
