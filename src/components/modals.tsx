import React, { useState, useEffect } from 'react'
import { Modal, Button, Icon } from 'antd';

export default (props: any) => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [icon_color, setIconColor] = useState("#000")

    const handleClose = () => setShow(false)
    function handleOk() {
        setShow(false)
    }
    const handleShow = () => setShow(true)

    useEffect(() => {
        setContent(props.content)
        setTitle(props.title)
        setIconColor(props.icon_color)
    })
    return (
        <div>
            <Button type="link" onClick={handleShow}>
                <Icon type="switcher" style={{ color: icon_color, fontSize: '21px' }} />
            </Button>
            <Modal
            title={title}
            visible={show}
            onOk={handleOk}
            onCancel={handleClose}
            footer={[
                    <Button key="submit" type="primary" onClick={handleClose}>
                      Exit
                    </Button>
                ]}
            >
                {content}
            </Modal>
        </div>
    )
}
