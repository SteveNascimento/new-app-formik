import React from 'react'
import {
    Divider, Row, Col, Button, 
    Form, Input, Select, TimePicker, DatePicker
} from 'antd'
import TableProc from './../tables/table-proc'
import { Controller, useFormContext } from 'react-hook-form'
import { TableProcValidationSchema } from '../validationSchema'
import { PlusOutlined } from '@ant-design/icons';

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
import { useStoreActions } from 'easy-peasy'


export default function FormDadProc() {

    const listNames = [
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
        _45VALOR_TOT_PROC]

    const addProcOnList = useStoreActions(
        actions => actions.tableProc.addToList
    )

    const { getValues, setError, clearErrors } = useFormContext()

    const valuesFields = () => {
        const values = getValues()
        return {
            _34DATA_PROC : values[_34DATA_PROC],
            _35HORA_INICIO_PROC : values[_35HORA_INICIO_PROC],
            _36HORA_FIM_PROC : values[_36HORA_FIM_PROC],
            _37TAB_PROC : values[_37TAB_PROC],
            _38COD_PROC : values[_38COD_PROC],
            _39DESC_PROC : values[_39DESC_PROC],
            _40QTD_PROC : values[_40QTD_PROC],
            _41VIA_PROC : values[_41VIA_PROC],
            _42TEC_PROC : values[_42TEC_PROC],
            _43RED_ACRESC : values[_43RED_ACRESC],
            _44VALOR_UNIT_PROC : values[_44VALOR_UNIT_PROC],
            _45VALOR_TOT_PROC : values[_45VALOR_TOT_PROC],
            
        }
    }

    const addOnTable = () => {
        const values = valuesFields()
        TableProcValidationSchema
            .validate(values, {abortEarly:false})
            .then(values => {
                clearErrors(listNames)
                addProcOnList(values)
            })
            .catch(err => {
                for (let fieldError of err.inner) {
                    setError(fieldError.path,
                        {
                            type: fieldError.name,
                            message: fieldError.message
                        }
                    )
                }
            })
    }

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
            <Row align='top' gutter={[20, 10]}>
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
                        <Select.Option value={'Unica'}>Unica</Select.Option>
                        <Select.Option value={'Mesma Via'}>Mesma Via</Select.Option>
                        <Select.Option value={'Diferentes Vias'}>Diferentes Vias</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_42TEC_PROC} label="42 - Téc" >
                        <Select.Option value={'Convencional'}>Convencional</Select.Option>
                        <Select.Option value={'Videolaparoscopia'}>Videolaparoscopia</Select.Option>
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
            <Button
                style={{ margin: '25px 10px', float: 'right' }}
                onClick={addOnTable}
                type="primary"
                size='small'
            >
                <PlusOutlined /> Adicionar
            </Button>
            <TableProc />
        </section>
    )

}
