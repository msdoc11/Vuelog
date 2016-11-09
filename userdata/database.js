// DO NOT CHANGE THE GLOBAL VARIABLE NAME
window.VUELOG_DATABASE = {

  config: {
    brand: 'Vuelog Demo',
    logo: './static/vuelog.svg',
    home: 'https://myst729.github.io/Vuelog/',
    base: '/Vuelog',                   // Path to the domain root that serves your site. Set to `''` if your site is under domain root.
    lang: 'cn',                        // Vuelog interface language. Currently only support 'cn' and 'en'.
    switchLang: true,                  // Allow/disallow visitors to switch interface language.
    useHomepage: false,                // Enable the dedicated homepage, otherwise route `/` and `/home` to `/blog`.
    postsCount: 3,                     // Number of posts listed in a blog/category view.
    metadataDelimiter: '---',          // The string to separate metadata from actual content in *.md files.
    excerptDelimiter: '<!-- more -->', // The string to annotate excerpt out of the complete content in *.md files.
    disqusShortname: 'vuelog',         // Fill in the shortname to integrate Disqus with your blog. Leave it blank to turn it off.
    spinnerPattern: 'logo'             // Can be either `logo` or `line`, set to other values to disable the loading spinner.
  },

  navigation: [
    {
      label: 'Guide',
      type: 'category',
      path: '/blog/guide'
    },
    {
      label: 'About',
      type: 'page',
      path: '/page/all-about-vuelog'
    },
    {
      label: 'Changelog',
      type: 'page',
      path: '/page/changelog'
    },
    {
      label: 'Archive',
      type: 'archive',
      path: '/archive'
    },
    {
      label: 'Links',
      type: 'dropdown',
      // path: 'dropdown can be linkable too',
      children: [
        {
          label: 'Weibo',
          type: 'outgoing',
          link: 'http://weibo.com/myst729'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/myst729'
        },
        {
          label: 'StackOverflow',
          type: 'outgoing',
          link: 'https://stackoverflow.com/users/1032492'
        }
      ]
    }
  ],

  pages: [
    {
      title: 'All about Vuelog',
      // titleless: true, // set to true if you want to hide title in single view
      slug: 'all-about-vuelog'
    },
    {
      title: 'Changelog',
      // commentless: true, // set to true if you want to disable comments for this particular page or post
      slug: 'changelog'
    }
  ],

  categories: [
    {
      title: 'Guide',
      slug: 'guide'
    },
    {
      title: 'Empty',
      slug: 'empty'
    }
  ],

  posts: [
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: '2016-10-21'
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'Show me the styles!',
      slug: 'show-me-the-styles',
      category: 'guide',
      date: '2016-10-19'
    },
    {
      title: 'Using Disqus comment service',
      slug: 'using-disqus-comment-service',
      category: 'guide',
      date: '2016-04-10'
    },
    {
      title: '[DEPRECATED] Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: '2016-04-09'
    },
    {
      title: '[TODO] Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: '2016-04-08'
    }
  ]

}
