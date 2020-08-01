import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from 'types'
import { Breadcrumb, Layout, Typography } from 'antd'
import { HomeFilled, WindowsFilled } from '@ant-design/icons'
import Nav from 'components/nav'

const { Header, Content } = Layout
const { Title } = Typography

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  return (
    <div>
      <Header>
        <Nav current="app" />
      </Header>
      <div style={{ padding: '25px 15px' }} >
        <Content style={{ background: 'rgba(235, 235, 235, 0.88)', padding: 24, minHeight: 50 }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/portfolio/">
                <HomeFilled />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <WindowsFilled />
              <span>App</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </div>
      <div style={{ padding: '0 15px 25px' }} >
        <Content style={{ background: 'rgba(235, 235, 235, 0.88)', padding: 24, minHeight: 380 }}>
          <Title>It's blog time.</Title>
          <br />
          All Posts:
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/portfolio/blog/post/${post.id}/`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </Content>
      </div>
    </div>
  )
}
