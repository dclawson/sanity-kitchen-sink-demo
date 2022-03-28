export default {
  widgets: [
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
                  buildHookId: '624190f9cdd1aa0729655b05',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-studio-rk2ezu8x',
                  apiId: '97661fdb-a74e-48eb-903a-8c6f2ed995f7'
                },
                {
                  buildHookId: '624190fa1566b5096b0e8938',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-web-4feqv3je',
                  apiId: '01d61241-820d-47c5-bed4-010331d4d43a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dclawson/sanity-kitchen-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-web-4feqv3je.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
