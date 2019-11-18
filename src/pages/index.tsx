import React from 'react'
import { Typography, Layout } from 'antd'
import Nav from 'components/nav'

const { Title } = Typography
const { Header, Content } = Layout;

export default () => (
  <div>
    <Header>
      <Nav current="home" />
    </Header>
    <div style={{ padding: '25px 50px' }} >
      <Content style={{ 
        background: 'rgba(235, 235, 235, 0.88)',
        padding: 24,
        minHeight: 380
      }}>
        <Title>Welcome to my portfolio</Title>
        <p>
          Learn{' '}
          <a href="https://github.com/sw-yx/react-typescript-cheatsheet">
            React + TypeScript
          </a>
        </p>
        <p>
          <a href="https://twitter.com/swyx">Report issues with this template</a>
        </p>
      </Content>
    </div>
  </div>
)

//<img src={require("../images/logo.png")} alt="" />