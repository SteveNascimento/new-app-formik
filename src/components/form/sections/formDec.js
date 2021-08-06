import React from 'react'
import { Divider, Row, Col, Button, Form, Input, Select } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import TableDec from './../tables/table-dec'
import { PlusOutlined } from '@ant-design/icons';
import { useStoreActions } from 'easy-peasy';
import { TableDecValidationSchema } from '../validationSchema';

import {
    _30TIPO_DE_DECL,
    _31CID_OBITO,
    _32NUMERO_DECL,
    _33OBITO_RN
} from '../fieldsNames'


export default function FormDadBenef() {

    const listNames = [
        _30TIPO_DE_DECL,
        _31CID_OBITO,
        _32NUMERO_DECL,
        _33OBITO_RN]

    const addDecOnList = useStoreActions(
        actions => actions.tableDec.addToList
    )

    const { getValues, setError, clearErrors } = useFormContext()

    const valuesFields = () => {
        const values = getValues()
        return {
            [_30TIPO_DE_DECL]: values[_30TIPO_DE_DECL] === 2 ? 'Óbito' : 'Nascimento',
            [_31CID_OBITO]: values[_31CID_OBITO],
            [_32NUMERO_DECL]: values[_32NUMERO_DECL],
            [_33OBITO_RN]: values[_33OBITO_RN] ? 'True' : 'False',
        }
    }

    const addOnTable = () => {
        const values = valuesFields()

        TableDecValidationSchema
            .validate(values, {abortEarly:false})
            .then(values => {
                clearErrors(listNames)
                addDecOnList(values)
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
                render={({ field, fieldState:{error} }) => {
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
                            <Select {...field} >
                                {children}
                            </Select>
                        </Form.Item>
                    )
                }}
            >
            </Controller>
        )
    }

    return (
        <section id="declaracoes">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Declarações</Divider>
            <Row align='top' gutter={[20, 10]} >
                <Col>
                    <SelectField name={_30TIPO_DE_DECL} label="30 - Tipo Declaracao" >
                        <Select.Option value={1}>Nascimento</Select.Option>
                        <Select.Option value={2}>Obito</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_31CID_OBITO} label="31 - CID Óbito" />
                </Col>
                <Col>
                    <InputField name={_32NUMERO_DECL} label="32 - Numero da Declaração" />
                </Col>
                <Col>
                    <SelectField name={_33OBITO_RN} label="33 - Obito do RN" >
                        <Select.Option value={true}>Sim</Select.Option>
                        <Select.Option value={false}>Não</Select.Option>
                    </SelectField>
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
            <TableDec />
        </section >
    )

}
