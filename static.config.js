import axios from 'axios'
import React from 'react'
import path from 'path'

export default {
  siteRoot: 'https://miguelo12.github.io',
  basePath: 'portfolio',
  devBasePath: 'portfolio',
  maxThreads: 2,
  devServer: {
    port: 3000,
    host: 'localhost',
  },
  entry: path.join(__dirname, 'src', 'main.tsx'),
  getSiteProps: () => ({
    title: 'My portfolio'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const linktecnology = [
      {"name": "React-Static", "url": "https://github.com/react-static/react-static"},
      {"name": "Ant-Design", "url": "https://github.com/ant-design/ant-design"},
      {"name": "Typescript", "url": "https://github.com/microsoft/TypeScript"},
      {"name": "Reach Router", "url": "https://github.com/reach/router"},
      {"name": "React Hot Loader", "url": "https://github.com/gaearon/react-hot-loader"},
      {"name": "gh-pages", "url": "https://github.com/tschaub/gh-pages"},
      {"name": "Axios", "url": "https://github.com/axios/axios"},
    ]
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post) => ({
          path: `/post/${post.id}/`,
          template: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/',
        getData: () => ({
          linktecnology,
        })
      }
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <title>Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
