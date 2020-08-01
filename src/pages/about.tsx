import React from 'react'
import { Layout, Breadcrumb, Progress, Typography, Card, Row, Col, Divider } from 'antd'
import { green, blue, geekblue, yellow, red, purple, gold } from '@ant-design/colors'
import { HomeFilled, CodeFilled, UserAddOutlined, GlobalOutlined } from '@ant-design/icons'
import { Link } from '@reach/router'
import Nav from 'components/nav'
import Modal from 'components/modals'

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography

const programming_language = [
  {'title': 'Python',
   'icon_color': blue.primary,
   'progress': 70,
   'progress_color': {
    from: blue.primary,
    to: yellow.primary,
  }},
  {'title': 'Javascript',
  'icon_color': yellow.primary,
   'progress': 50,
   'progress_color': yellow.primary },
  {'title': 'PHP',
   'icon_color': purple.primary,
   'progress': 45,
   'progress_color': purple.primary },
  {'title': 'Ruby',
   'icon_color': red.primary,
   'progress': 55,
   'progress_color': red.primary },
  {'title': 'MongoDB',
   'icon_color': green.primary,
   'progress': 35,
   'progress_color': green.primary },
  {'title': 'Postgres',
   'icon_color': geekblue.primary,
   'progress': 50,
   'progress_color': geekblue.primary },
  {'title': 'Oracle 12c',
   'icon_color': red[7],
   'progress': 50,
   'progress_color': red[7] },
  {'title': 'AWS',
   'icon_color': gold.primary,
   'progress': 30,
   'progress_color': gold.primary }]

const about_me = [
  {
    'field': 'Name',
    'value': 'Miguel Sánchez Padilla'
  },
  {
    'field': 'Sex',
    'value': 'Male'
  },
  {
    'field': 'Github-1',
    'value': 'miguelo12',
    'href': 'https://www.github.com/miguelo12'
  },
  {
    'field': 'Github-2',
    'value': 'miguelo13',
    'href': 'https://www.github.com/miguelo13'
  },
  {
    'field': 'Linkedin',
    'value': 'miguel-a-sánchez-p',
    'href': 'https://www.linkedin.com/in/miguel-a-sánchez-p/'
  }
]

const sections = [
  {
    'name': 'Location',
    'fields': [
      {
        'field': 'Country',
        'value': 'Chile'
      },
      {
        'field': 'City',
        'value': 'Santiago'
      }
    ]
  },
  {
    'name': 'Education',
    'fields': [
      {
        'field': 'b',
        'value': 'b'
      }
    ]
  },
  {
    'name': 'Experience',
    'fields': [
      {
        'field': 'a',
        'value': 'a'
      }
    ]
  }
]

export default () => (
  <div>
    <Header>
      <Nav current="about" />
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
            <UserAddOutlined />
            <span>Me</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Content>
    </div>
    <div style={{ padding: '0px 15px' }} >
      <Content style={{ background: 'rgba(235, 235, 235, 0.88)', padding: 24, minHeight: 380 }}>
        <Title>About Me</Title>
        <Row gutter={[16, 16]}>
          {about_me.map((data) => {
            if ("href" in data) {
              return(
                <Col key={data.field} xs={24} sm={24} md={12} lg={8} xl={6}>
                  <Paragraph copyable={{ text: data.href }}>
                    <b>{data.field}:</b> {data.value} <a target="_blank" href={data.href}>
                        <GlobalOutlined style={{ color: "rgba(58, 36, 94)" }} />
                      </a>
                  </Paragraph>
                </Col>
              )
            } else {
              return(
                <Col key={data.field} xs={24} sm={24} md={12} lg={8} xl={6}>
                  <p><b>{data.field}:</b> <span className="ant-form-text">{data.value}</span></p>
                </Col>
              )
            }
          })}
          {sections.map((data) => {
            return(
              <div key={data.name}>
                <Divider orientation="left">{ data.name }</Divider>
                {data.fields.map((data) => {
                  return(
                    <p key={data.field} ><b>{data.field}:</b> <span className="ant-form-text">{data.value}</span></p>
                  )
                })}
              </div>
            )
          })}
        </Row>
      </Content>
    </div>
    <div style={{ padding: '25px 15px' }} >
      <Content style={{ background: 'rgba(235, 235, 235, 0.88)', padding: 24, minHeight: 380 }}>
        <Title>My Skills</Title>
        <Row gutter={[16, 16]}>
          {programming_language.map((data) => {
            return(
              <Col key={data.title} xs={24} sm={24} md={12} lg={8} xl={6}>
                <Card title={<div><CodeFilled style={{ color: data.icon_color }}/> {data.title} </div>}
                      extra={<Modal title={data.title} icon_color={data.icon_color} content="weeee" />}
                      style={{ width: '100%' }}>
                  <Title level={4}>Progress</Title>
                  <Progress percent={data.progress} strokeColor={data.progress_color} status="active"/>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Content>
    </div>
  </div>
)
