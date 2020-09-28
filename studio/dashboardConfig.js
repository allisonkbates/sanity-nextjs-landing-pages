export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f713ce9441c2000abdf2238',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ejav8g18',
                  apiId: '52e86d4f-6522-4bfa-8b87-0c82d971f28f'
                },
                {
                  buildHookId: '5f713cea8b909001586c660c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ahfuv9vn',
                  apiId: 'e00a05c9-d84c-42c5-9c02-a80f43afd007'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allisonkbates/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ahfuv9vn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
