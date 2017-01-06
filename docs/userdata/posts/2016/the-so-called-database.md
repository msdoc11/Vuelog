title: The (so-called) database
date: 2016-10-20
---
Let’s take a look at the most important file of your Vuelog deployment - `database.js`:

```js
window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: 'Vuelog Demo',
    // The image displayed in site header right beside the brand.
    logo: './static/vuelog.svg',
    // The full URL where your site is hosted.
    home: 'https://myst729.github.io/Vuelog',
    // Path to the domain root that serves your site, starts and ends with slash (`/`). Set to `'/'` if your site is under domain root.
    base: '/Vuelog/',
    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    lang: 'en-US',
    // Allow/disallow visitors to switch interface language.
    switchLang: true,
    // Enable the dedicated homepage, otherwise route `/` and `/home` to `/blog`.
    useHomepage: true,
    // Number of posts listed in a blog/category view.
    postsCount: 3,
    // The string to separate metadata from actual content in *.md files.
    metadataDelimiter: '---',
    // The string to annotate excerpt out of the complete content in *.md files.
    excerptDelimiter: '<!-- more -->',
    // The string to annotate content pagination points *.md files.
    contentDelimiter: '<!-- next -->',
    // Fill in the shortname to integrate Disqus with your blog. Leave it blank to turn it off.
    disqusShortname: 'DQ_SHORTNAME',
    // Fill in the account to integrate IntenseDebate with your blog. Leave it blank to turn it off.
    intenseDebateAccount: 'ID_ACCOUNT',
    // Fill in the uid to integrate LiveRe with your blog. Leave it blank to turn it off.
    livereUid: 'LIVERE_UID',
    // Can be either `logo` or `line`, set to other values to disable the loading spinner.
    spinnerPattern: 'logo'
  },

  navigation: [
    { label: 'Blog', type: 'blog', path: '/blog' },
    { label: 'Archive', type: 'archive', path: '/archive' },
    { label: 'Guide', type: 'category', path: '/blog/guide' },
    { label: 'Cheatsheet', type: 'category', path: '/blog/cheatsheet' },
    { label: 'About', type: 'page', path: '/page/all-about-vuelog' },
    {
      label: 'Links',
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        { label: 'Weibo', type: 'outgoing', link: 'http://weibo.com/myst729' },
        { label: 'GitHub', type: 'outgoing', link: 'https://github.com/myst729' },
        { label: 'StackOverflow', type: 'outgoing', link: 'https://stackoverflow.com/users/1032492' }
      ]
    }
  ],

  pages: [
    {
      title: 'All about Vuelog',
      slug: 'all-about-vuelog',
      titleless: false,   // (OPTIONAL) set this to true if you want to hide the title in page view (same for post)
      commentless: false, // (OPTIONAL) set this to true if you want to disable comments for the particular page (same for post)
      draft: false        // (OPTIONAL) set this to true if you want to make the particular page invisible in your site (same for post)
    }
  ],

  categories: [
    { title: 'Guide', slug: 'guide' },
    { title: 'Empty', slug: 'empty' }
  ],

  posts: [
    { title: 'This post is invisible', slug: 'this-post-is-a-draft', category: 'guide', date: '2016-12-31', draft: true },
    { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-04-16' },
    { title: 'The structure of Vuelog', slug: 'the-structure-of-vuelog', category: 'guide', date: '2016-04-14' },
    { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2016-04-12' },
    ...
  ]

}
```

<!-- more -->

The purpose of each section:

- `config`: Overall settings of your site. Let’s take a look at some confusing fields.
  - `base`: This is very important if your site is **NOT** served under your domain root! Starts and ends with `/`.
  - `lang`: The language applied to render Vuelog interface. Currently only Simplified Chinese (`'zh-CN'`) and English (`'en-US'`) are available, contributors are welcome!
  - `switchLang`: A boolean value that enables/disables visitors to switch the interface language.
  - `useHomepage`: Set to `true` if you want a dedicated home page. However, to customize the home page you need to fork the Vuelog repository.
  - `metadataDelimiter`: Metadata are not meant to render the page, so they are really optional. They are recommended for better maintenance of your markdown source files.
  - `excerptDelimiter`: Sometimes we write [tl;dr](http://www.urbandictionary.com/define.php?term=tl%3Bdr) posts. And we don’t want to show its full content in a category view. That’s why “excerpt” was introduced. Set to empty string will suppress this feature.
  - `contentDelimiter`: For tl;dr pages or posts, show full content in a page/post view is also boring. Use the content delimiter to split into multiple parts and get rid of super long web pages.
  - `disqusShortname`: A string that is used to uniquely identify your website on Disqus. Can be viewed on your Disqus admin page.
  - `intenseDebateAccount`: A string that is used to uniquely identify your website on IntenseDebate. Can be viewed on your IntenseDebate admin page.
  - `livereUid`: A string that is used to uniquely identify your website on LiveRe. Can be viewed on your LiveRe admin page.
  - `spinnerPattern`: By default, a spinner is applied to tell the visitor that a page/post is loading asynchronously. There are two built-in spinners, you can also turn it off.
- `navigation`: This determines the navigation menu in header area. You can link to any thing here, even a single post. These types need to care:
  - `category`: The path must be `/blog/${category-slug}`.
  - `page`: The path must be `/page/${page-slug}`.
  - `post`: The path must be `/blog/${category-slug}/${year}/${post-slug}`, time should be in the route time format.
  - `dropdown`: Create a sub menu. Must provide a `children` array of navigation links. Parent item can be linkable too, depends on whether `path` field is defined or not.
  - `outgoing`: Only used for links outside your site. New target will pop up in a new browser window or tab.
- `pages`: Entries of your pages. Must specify the title and slug (markdown file name, **without** extension).
- `categories`: Entries of your categories. Must specify the title and slug (category identifier displayed in URL).
- `posts`: Entries of your posts. Must specify the title, slug (markdown file name, **without** extension), category slug and publish date (in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) date format, **YYYY-MM-DD**).
