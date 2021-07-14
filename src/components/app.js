import React from 'react'
import Aside from './aside'
import Form from './form/form'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './app.css'
const { Header, Content, Sider } = Layout;

export default function app() {
    return (
        <Layout className="layout">
            <Header className="header">
                <h3 style={{ color: '#fff' }}> Guia de Resumo de Internação </h3>
            </Header>
            <Layout>
                <Layout>
                    <Content className="form">
                        <Form />
                    </Content>
                </Layout>
                <Sider width={250} className="aside" theme="light">
                    <Aside />
                </Sider>
            </Layout>
        </Layout>
    )
}