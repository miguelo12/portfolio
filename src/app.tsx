import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import { Layout, Spin, Result, Typography, BackTop } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons'
import './app.css'

const { Title } = Typography;
const { Content, Footer } = Layout;
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 60, color: "#fff" }} spin />;


function App() {
  return (
    <Root>
      <Layout className="principal-layout">
        <Content className="content-background">
          <FancyDiv>
            <React.Suspense fallback={
              <Content style={{ paddingTop: '20vh' }} >
                <Result icon={<Spin indicator={antIcon}/>} title={
                  <em><Title style={{color: "#fff"}} >Loading... </Title></em>
                }/>
              </Content>
            }>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </FancyDiv>
        </Content>
        <BackTop />
        <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Root>
  )
}



export default App
