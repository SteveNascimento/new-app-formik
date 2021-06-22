import React from 'react'
import Aside from './aside'
import Form from './form'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './app.css'

const { Header, Content, Sider } = Layout;

export default function app() {
    return(
        <Layout>
            <Header className="header" title="Cadastro de Paciente">
                <h1 style={{color:'#fff'}}> Cadastro de Paciente </h1>
            </Header>
            <Layout>
                <Sider width={300} className="aside" theme="light">
                    <Aside/>
                </Sider>
                <Layout>
                    <Content className="form">
                        <Form/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}