import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from 'types'
import { Breadcrumb, Icon, Layout, Typography } from 'antd'
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
      <div style={{ padding: '25px 50px' }} >
        <Content style={{ background: 'rgba(220, 220, 220, 0.85)', padding: 24, minHeight: 50 }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <Icon type="home" />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="windows" />
              <span>App</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </div>
      <div style={{ padding: '0px 50px' }} >
        <Content style={{ background: 'rgba(220, 220, 220, 0.85)', padding: 24, minHeight: 380 }}>
          <Title>It's blog time.</Title>
          <br />
          All Posts:
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </Content>
      </div>
    </div>
  )
}
