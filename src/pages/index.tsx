import React from 'react'
import { useRouteData, addPrefetchExcludes } from 'react-static'
import { Typography, Layout } from 'antd'
import { LinkTecnology } from 'types'
import Nav from 'components/nav'

const { Title, Link } = Typography
const { Header, Content } = Layout;

addPrefetchExcludes([/c/])

export default () => {
  const { linktecnology }: { linktecnology: LinkTecnology[] } = useRouteData()

  return (
  <div>
    <Header>
      <Nav current="home" />
    </Header>
    <div style={{ padding: '25px 15px' }} >
      <Content style={{
        background: 'rgba(235, 235, 235, 0.88)',
        padding: 24,
        minHeight: 380
      }}>
        <Title style={{ textAlign: 'center' }}>Welcome to my portfolio</Title>
        <Title level={3}>This proyect contains:</Title>
        <ul>
          {linktecnology.map(linktecnology => (
            <li key={linktecnology.name}>
              <Link href={linktecnology.url}>{linktecnology.name}</Link>
            </li>
          ))}
        </ul>
      </Content>
    </div>
  </div>
)}

//<img src={require("../images/logo.png")} alt="" />