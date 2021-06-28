import React from 'react'
import Aside from './aside'
import Form from './form'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './app.css'

const { Header, Content, Sider } = Layout;

export default function app() {
    return (
        <Layout>
            <Header className="header" title="Cadastro de Paciente">
                <h3 style={{ color: '#fff' }}> Guia de Resumo de Internação </h3>
            </Header>
            <Layout>
                <Layout>
                    <Content className="form">
                        <Form />
                    </Content>
                </Layout>
                <Sider width={200} className="aside" theme="light">
                    <Aside />
                </Sider>
            </Layout>
        </Layout>
    )
}