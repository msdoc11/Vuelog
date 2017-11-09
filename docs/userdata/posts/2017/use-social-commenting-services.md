title: Use social commenting services
category: docs
date: 2017-01-19
------------------------------------
<!-- en-US:+ -->

As a backend－free application, Vuelog itself does not provide commenting functionality. There are many social commenting service out there. Vuelog adopts [Disqus](https://disqus.com/) and [LiveRe](https://livere.com/). It’s configured in `config` section in `userdata/database.js`.

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

To use it, just fill in your Disqus shortname or LiveRe UID, then the commenting service will be enabled for all posts and pages. If both fields are provided, **Disqus** will win. Or leave both fields blank if you don’t want comments at all.

If you want to disable comments for a particular page or post, set `commentless` to `true` for that page/post (more on [add posts or pages](#/blog/docs/2017/add-posts-or-pages)).

```js
{
  title: 'Use social commenting services',
  slug: 'use-social-commenting-services',
  category: 'docs',
  date: '2017-01-19',
  commentless: true // This turns off the comments for this post.
}
```

If you are using another commenting service, feel free to fork [Vuelog on GitHub](https://github.com/myst729/Vuelog) and send pull requests. Thank you very much!

<!-- en-US:- -->

<!-- zh-CN:+ -->

Vuelog 是一个无后端应用程序，自身不支持评论功能。Vuelog 集成了社会化评论服务 [Disqus](https://disqus.com/) 和 [LiveRe](https://livere.com/)，可在 `userdata/database.js` 的 `config` 部分进行配置：

```js
// Fill in the shortname to integrate Disqus with your blog.
disqusShortname: '',

// Fill in the uid to integrate LiveRe with your blog.
livereUid: ''
```

要使用该功能，请填写你的 Disqus 简称或 LiveRe 用户标识，评论服务将对全部文章和页面开启。如果两项都填写了，Vuelog 会采用 **Disqus**。都留空则完全关闭评论功能。

如果只想关闭某篇文章或页面的评论，可以将其 `commentless` 选项设置为 `true`（详情请阅读[新建文章或页面](#/blog/docs/2017/add-posts-or-pages)）。

```js
{
  title: 'Use social commenting services',
  slug: 'use-social-commenting-services',
  category: 'docs',
  date: '2017-01-19',
  commentless: true // This turns off the comments for this post.
}
```

如果想使用其他的评论服务，欢迎 fork [Vuelog 项目](https://github.com/myst729/Vuelog)并发送拉取请求。

<!-- zh-CN:- -->
