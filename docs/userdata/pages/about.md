title: About Vuelog
------------------------------------
### Why did I create Vuelog?

Several years ago, I migrated my blog to [GitHub Pages](https://pages.github.com/). At that time, I have several choices: Jekyll, Hexo, or something I hand-crafted with AngularJS. Finally I chose [Hexo](https://hexo.io/) to generate the static website, because I’m lazy and don’t like Ruby.

Before Hexo I was using [WordPress](https://wordpress.org/). It’s rather simple - log in, write something, publish. With Hexo, everytime I want to write something, I need to generate the whole static site locally after finished writing, and then push the generated copy via git client. In the beginning I thought, well, boring but I can stand it. However, one thing changed my mind - I got a new laptop. You know the dirty works to set up a work station. Hexo only pushed the generated site to GitHub, all the configurations and source markdown files are stored locally. Fortunately, I didn’t format the old laptop before I realized I forgot to backup them.

Then I wondered, can I put the configurations into the repository? Also, can I get rid of building the static copy all the time? A coder’s answer is (always) to build own wheels. This time, I told myself not to be lazy again.

### Why did I choose Vue?

Why not AngularJS or React?

AngularJS (1.x) is not an option because I use it quite a lot in my daily job. I want to try something I haven’t used before.

[Vue](http://vuejs.org/) has a well crafted core library. Its APIs are inspired from AngularJS, very friendly to coders familiar with AngularJS, like me. But it’s also light-weighted with good performance.

Besides the incredibly sufficient documentation, Vue has a complete line-up for developement, including scaffolding tool ([vue-cli](https://github.com/vuejs/vue-cli)), client-side routing ([vue-router](https://github.com/vuejs/vue-router)), centralized state management ([vuex](https://github.com/vuejs/vuex)), Chrome DevTools add-on ([vue-devtools](https://github.com/vuejs/vue-devtools)) and other useful tools.

I’ve also written some React “toys” before but never got a chance for real deal. It just doesn’t attract me much. React has its own ecosystem. Maybe I’ll try it in my next project.

### Who can use Vuelog?

Anyone, as long as you are willing to write something more than 140 words (characters), and have a place (e.g. GitHub Pages) to host your writings.

### Is the project still alive?

Of course! In the beginning it’s experimental indeed. As I learn more about Vue and other useful add-ons, I decide to continuously improve, not only to consolidate my knowledge but also to make myself more happily writing.

The latest version is totally rewritten, built on vue 2.x, vue-router 2.x and vuex 2.x now. And it constantly develops features, fixes bugs, and updates dependencies.
