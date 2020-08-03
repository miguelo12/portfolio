import React from 'react'
import { Link } from '@reach/router'
import { Breadcrumb, Layout } from 'antd'
import { HomeFilled, WindowsFilled } from '@ant-design/icons'
import Posts from 'containers/post'
import Nav from 'components/nav'

const { Header, Content } = Layout

export default () => {
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
            <Posts />
        </Content>
      </div>
    </div>
  )
}
