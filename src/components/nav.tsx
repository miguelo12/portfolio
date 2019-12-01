import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { Menu, Icon } from 'antd';

export default (props: any) => {
  const [current, setCurrent] = useState('')
  function handleClick(name: any) {
    console.log('click ', name)
    setCurrent(name.key)
  }
  useEffect(() => {
    setCurrent(props.current)
  })
  return (
    <Menu style={{ lineHeight: '64px' }} theme="dark" onClick={name => handleClick(name)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to="/portfolio/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/portfolio/about">
          <Icon type="user" />
          Me
        </Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/portfolio/blog">
          <Icon type="windows" />
          Pc
        </Link>
      </Menu.Item>
    </Menu>
  )
}
