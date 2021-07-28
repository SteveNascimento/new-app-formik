import React from 'react'
import {
    Divider, Row, Col,
    Form, Input, Select, TimePicker, DatePicker
} from 'antd'
import TableProc from './../tables/table-proc'
import { Controller } from 'react-hook-form'

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

    const InputField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                            hasFeedback
                        >
                            <Input {...field} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const SelectField = (props) => {
        const { label, name, children } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                        >
                            <Select {...field}>
                                {children}
                            </Select>
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const DatePickerField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                        >
                            <DatePicker
                                {...field}
                                placeholder={'Data'}
                                format={'DD/MM/YYYY'}
                            />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    const TimePickerField = (props) => {
        const { label, name } = props;
        return (
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <Form.Item
                            label={label}
                            validateStatus={error ? 'error' : ''}
                            help={error ? error.message : ''}
                        >
                            <TimePicker
                                {...field}
                                placeholder='Hora'
                                format={'HH:mm:ss'} />
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    return (
        <section id="procedimentos-e-exames-realizados">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Procedimentos e Exames Realizados</Divider>
            <Row align='bottom' gutter={[20, 10]}>
                <Col>
                    <DatePickerField name={_34DATA_PROC} label="34 - Data" />
                </Col>
                <Col>
                    <TimePickerField name={_35HORA_INICIO_PROC} label="35 - Hora Inicial" />
                </Col>
                <Col>
                    <TimePickerField name={_36HORA_FIM_PROC} label="36 - Hora Final" />
                </Col>
                <Col>
                    <InputField name={_37TAB_PROC} label="37 - Tabela" />
                </Col>
                <Col>
                    <InputField name={_38COD_PROC} label="38 - Código do Procedimento" />
                </Col>
                <Col>
                    <InputField name={_39DESC_PROC} label="39 - Descrição" />
                </Col>
                <Col>
                    <InputField name={_40QTD_PROC} label="40 - Qtde" />
                </Col>
                <Col>
                    <SelectField name={_41VIA_PROC} label="41 - Via" >
                        <Select.Option value={1}>Unica</Select.Option>
                        <Select.Option value={2}>Mesma Via</Select.Option>
                        <Select.Option value={3}>Diferentes Vias</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_42TEC_PROC} label="42 - Téc" >
                        <Select.Option value={1}>Convencional</Select.Option>
                        <Select.Option value={2}>Videolaparoscopia</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_43RED_ACRESC} label="43 - % Red/Acrésc" />
                </Col>
                <Col>
                    <InputField name={_44VALOR_UNIT_PROC} label="44 - Valor Unitário - R$" />
                </Col>
                <Col>
                    <InputField name={_45VALOR_TOT_PROC} label="45 - Valor Total" />
                </Col>
            </Row>
            <TableProc />
        </section>
    )

}
