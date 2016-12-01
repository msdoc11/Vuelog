import '../../../userdata/database'
import { getters } from 'src/store'

const {
  title,
  lang,
  menu,
  system,
  config,
  navigation,
  pages,
  categories,
  posts,
  postsByCategory,
  postsByYear
} = getters

describe('Getters', () => {
  it('Title', () => {
    const state = { title: 'Apple' }
    const result = title(state)
    expect(result).to.equal('Apple')
  })

  it('Language', () => {
    const state = { lang: 'fr-FR' }
    const result = lang(state)
    expect(result).to.equal('fr-FR')
  })

  it('Side menu visibility', () => {
    const state = { menu: false }
    const result = menu(state)
    expect(result).to.equal(false)
  })

  it('System settings', () => {
    const state = {
      system: { project: 'Vuelog Test', version: '2016' }
    }
    const result = system(state)
    expect(result).to.deep.equal({ project: 'Vuelog Test', version: '2016' })
  })

  it('Configurations', () => {
    const state = {
      database: {
        config: { project: 'Vuelog Test', version: '2016' }
      }
    }
    const result = config(state)
    expect(result).to.deep.equal({ project: 'Vuelog Test', version: '2016' })
  })

  it('Navigation', () => {
    const state = {
      database: {
        navigation: { project: 'Vuelog Test', version: '2016' }
      }
    }
    const result = navigation(state)
    expect(result).to.deep.equal({ project: 'Vuelog Test', version: '2016' })
  })

  it('Pages', () => {
    const state = {
      database: {
        pages: [
          { title: 'All about Vuelog', slug: 'all-about-vuelog', titleless: false },
          { title: 'Changelog', slug: 'changelog', commentless: false }
        ]
      }
    }
    const result = pages(state)
    expect(result).to.deep.equal([
      {
        title: 'All about Vuelog',
        slug: 'all-about-vuelog',
        titleless: false,
        markdown: './userdata/pages/all-about-vuelog.md'
      },
      {
        title: 'Changelog',
        slug: 'changelog',
        commentless: false,
        markdown: './userdata/pages/changelog.md'
      }
    ])
  })

  it('Categories', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ]
      }
    }
    const result = categories(state)
    expect(result).to.deep.equal([
      { title: 'Guide', slug: 'guide' },
      { title: 'Empty', slug: 'empty' }
    ])
  })

  it('Posts', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const result = posts(state, {
      categories: cats
    })
    expect(result).to.deep.equal([
      {
        title: 'How to add a post or page?',
        slug: 'how-to-add-a-post-or-page',
        category: 'guide',
        date: '2016-10-21',
        year: 2016,
        markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
        categoryTitle: 'Guide'
      },
      {
        title: 'The (so-called) database',
        slug: 'the-so-called-database',
        category: 'guide',
        date: '2015-10-20',
        year: 2015,
        markdown: './userdata/posts/2015/the-so-called-database.md',
        categoryTitle: 'Guide'
      }
    ])
  })

  it('Posts by category', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const pos = posts(state, {
      categories: cats
    })
    const result = postsByCategory(state, {
      posts: pos,
      categories: cats
    })
    expect(result).to.deep.equal([
      {
        title: 'Guide',
        slug: 'guide',
        posts: [
          {
            title: 'How to add a post or page?',
            slug: 'how-to-add-a-post-or-page',
            category: 'guide',
            date: '2016-10-21',
            year: 2016,
            markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
            categoryTitle: 'Guide'
          },
          {
            title: 'The (so-called) database',
            slug: 'the-so-called-database',
            category: 'guide',
            date: '2015-10-20',
            year: 2015,
            markdown: './userdata/posts/2015/the-so-called-database.md',
            categoryTitle: 'Guide'
          }
        ]
      },
      {
        title: 'Empty',
        slug: 'empty',
        posts: []
      }
    ])
  })

  it('Posts by year', () => {
    const state = {
      database: {
        categories: [
          { title: 'Guide', slug: 'guide' },
          { title: 'Empty', slug: 'empty' }
        ],
        posts: [
          { title: 'How to add a post or page?', slug: 'how-to-add-a-post-or-page', category: 'guide', date: '2016-10-21' },
          { title: 'The (so-called) database', slug: 'the-so-called-database', category: 'guide', date: '2015-10-20' }
        ]
      }
    }
    const cats = categories(state)
    const pos = posts(state, {
      categories: cats
    })
    const result = postsByYear(state, {
      posts: pos,
      categories: cats
    })
    expect(result).to.deep.equal([
      {
        year: 2016,
        posts: [
          {
            title: 'How to add a post or page?',
            slug: 'how-to-add-a-post-or-page',
            category: 'guide',
            date: '2016-10-21',
            year: 2016,
            markdown: './userdata/posts/2016/how-to-add-a-post-or-page.md',
            categoryTitle: 'Guide'
          }
        ]
      },
      {
        year: 2015,
        posts: [
          {
            title: 'The (so-called) database',
            slug: 'the-so-called-database',
            category: 'guide',
            date: '2015-10-20',
            year: 2015,
            markdown: './userdata/posts/2015/the-so-called-database.md',
            categoryTitle: 'Guide'
          }
        ]
      }
    ])
  })
})
