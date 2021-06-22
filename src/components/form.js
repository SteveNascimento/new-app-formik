import React, { useState } from 'react'
import { Collapse, Descriptions, Button } from 'antd';
import './form.css'
import * as Service from '../services/submit-service'

const { Panel } = Collapse;



export default function Form() {

    const [sending, setSending] = useState(false);

    const data = {
        name:"Steve"
    }
    
    const callback = (key) => {
      console.log(key);
    }
    
    const submit = async () => {
        setSending(true)
        await Service.submitForm(data)
        setSending(false)
    }
    
    return (
        <div>

            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Informações do Paciente" key="1">
                    <Descriptions title="Paciente" bordered style={{padding:'10px'}}>
                        <Descriptions.Item label="Nome">Stevenson Nascimento</Descriptions.Item>
                        <Descriptions.Item label="Data de Nascimento"> 04 de Setembro de 2001</Descriptions.Item>
                    </Descriptions>
                    <Descriptions title="Diagnóstico" bordered style={{padding:'10px'}}>
                        <Descriptions.Item label="Sintomas">Dor no corpo</Descriptions.Item>
                        <Descriptions.Item label="Início dos sintomas"> 04 de Setembro de 2001</Descriptions.Item>
                    </Descriptions>
                </Panel>
                <Panel header="Família do Paciente" key="2">
                    <Descriptions title="Pais" bordered style={{padding:'10px'}}>
                        <Descriptions.Item label="Nome do Pai">Francisco Cheurides Silva Nascimento</Descriptions.Item>
                        <Descriptions.Item label="Data de Nascimento">28 de Janeiro de 1965</Descriptions.Item>
                        <Descriptions.Item label="Nome da Mãe">Maria do Amparo Melo Nascimento</Descriptions.Item>
                        <Descriptions.Item label="Data de Nascimento">10 de Fevereiro de 1964</Descriptions.Item>
                    </Descriptions>
                </Panel>
            </Collapse>
            <Button loading={sending} type="primary" className="submit" onClick={submit}>Submit</Button>
        </div>
            

    )
}