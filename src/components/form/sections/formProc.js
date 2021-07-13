import React, { useState } from 'react'
import { Divider, Button, Row, Col } from 'antd'
import { Form, Input, Select, TimePicker, DatePicker } from 'formik-antd'
import TableProc from './../tables/table-proc'

import {
    _34DATA_PROC,
    _35HORA_INICIO_PROC,
    _36HORA_FIM_PROC,
    _37TAB_PROC,
    _38COD_PROC,
    _39DESC_PROC,
    _40QTD_PROC,
    _41VIA_PROC,
    _42TEC_PROC,
    _43RED_ACRESC,
    _44VALOR_UNIT_PROC,
    _45VALOR_TOT_PROC,
} from '../fieldsNames'


export default function FormDadBenef() {


    const [adding, setAdding] = useState(false)

    const adder = () => {
        setAdding(true)
        setTimeout(() => {
            console.log('Dados adicionados a Tabela!');
            setAdding(false)
        }, 2000)

    }


    return (
        <section id="procedimentos-e-exames-realizados">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Procedimentos e Exames Realizados</Divider>
            <Row align='bottom' gutter={[20, 10]}>
                <Col>
                    <Form.Item name={_34DATA_PROC} label="34 - Data">
                        <DatePicker name={_34DATA_PROC} placeholder="Data" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_35HORA_INICIO_PROC} label="35 - Hora Inicial" >
                        <TimePicker name={_35HORA_INICIO_PROC} placeholder="Hora" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_36HORA_FIM_PROC} label="36 - Hora Final" >
                        <TimePicker name={_36HORA_FIM_PROC} placeholder="Hora" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_37TAB_PROC} label="37 - Tabela" >
                        <Input name={_37TAB_PROC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_38COD_PROC} label="38 - Código do Procedimento" >
                        <Input name={_38COD_PROC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_39DESC_PROC} label="39 - Descrição">
                        <Input name={_39DESC_PROC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_40QTD_PROC} label="40 - Qtde">
                        <Input name={_40QTD_PROC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_41VIA_PROC} label="41 - Via" >
                        <Select
                            style={{ width: "100%" }}
                            name={_41VIA_PROC}
                            placeholder="Via"
                        >
                            <Select.Option value={1}>Unica</Select.Option>
                            <Select.Option value={2}>Mesma Via</Select.Option>
                            <Select.Option value={3}>Diferentes Vias</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_42TEC_PROC} label="42 - Téc" >
                        <Select
                            style={{ width: "100%" }}
                            name={_42TEC_PROC}
                        >
                            <Select.Option value={1}>Convencional</Select.Option>
                            <Select.Option value={2}>Videolaparoscopia</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_43RED_ACRESC} label="43 - % Red/Acrésc">
                        <Input name={_43RED_ACRESC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_44VALOR_UNIT_PROC} label="44 - Valor Unitário - R$">
                        <Input name={_44VALOR_UNIT_PROC} type="text" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={_45VALOR_TOT_PROC} label="45 - Valor Total">
                        Valor total
                    </Form.Item>
                </Col>
            </Row>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableProc />
        </section>
    )

}



/*         <section id="procedimentos-e-exames-realizados">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Procedimentos e Exames Realizados</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="34 - Data">
                    <DatePicker name={_34DATA_PROC} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="35 - Hora Inicial" >
                    <TimePicker name={_35HORA_INICIO_PROC} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="36 - Hora Final" >
                    <TimePicker name={_36HORA_FIM_PROC} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="37 - Tabela" >
                    <MyTextInput name={_37TAB_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="38 - Código do Procedimento" >
                    <MyTextInput name={_38COD_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="39 - Descrição">
                    <MyTextInput name={_39DESC_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="40 - Qtde">
                    <MyTextInput name={_40QTD_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="41 - Via" >
                    <Select
                        style={{ width: "100%" }}
                        name={_41VIA_PROC}
                        placeholder="Via"
                    >
                        <Select.Option value={1}>Unica</Select.Option>
                        <Select.Option value={2}>Mesma Via</Select.Option>
                        <Select.Option value={3}>Diferentes Vias</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="42 - Téc" >
                    <Select
                        style={{ width: "100%" }}
                        name={_42TEC_PROC}
                    >
                        <Select.Option value={1}>Convencional</Select.Option>
                        <Select.Option value={2}>Videolaparoscopia</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="43 - % Red/Acrésc">
                    <MyTextInput name={_43RED_ACRESC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="44 - Valor Unitário - R$">
                    <MyTextInput name={_44VALOR_UNIT_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="45 - Valor Total">
                    Valor total
                </Descriptions.Item>
            </Descriptions>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableProc />
        </section> */