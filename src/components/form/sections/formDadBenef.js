import React from 'react'
import { Divider, Row, Col, Input, Select, DatePicker, Form } from 'antd'
import { useFormContext } from 'react-hook-form'
import { defaultValues } from '../defaultValues'

import {
    _8NUM_CART, _9VAL_CART, _10NOME_BENEF, _11CART_NAC_SAUD,
    _12AT_A_RN
} from '../fieldsNames'

export default function FormDadBenef() {

    const { register, setValue, formState: { errors } } = useFormContext();

    const InputField = (props) => {
        const { label, name } = props;
        return (
            <Form.Item
                label={label}
                validateStatus={errors[name] ? 'error' : ''}
                help={errors[name] ? errors[name].message : ''}
                hasFeedback
            >
                <Input name={name} {...register(name)} defaultValue={defaultValues[name]}
                    onChange={e => setValue(name, e.target.value)} />
            </Form.Item>
        )
    }

    const DatePickerField = (props) => {
        const { label, name } = props;
        return (
            <Form.Item
                label={label}
                validateStatus={errors[name] ? 'error' : ''}
                help={errors[name] ? errors[name].message : ''}
                hasFeedback
            >
                <DatePicker placeholder={'Data'} name={name} {...register(name)} defaultValue={defaultValues[name]}
                    onChange={(e, _) => e != null ? setValue(name, e.d) : setValue(name, undefined)}
                    format={'DD/MM/YYYY'} />
            </Form.Item>
        )
    }

    const SelectField = (props) => {
        const { label, name, children } = props;
        return (
            <Form.Item
                label={label}
                validateStatus={errors[name] ? 'error' : ''}
                help={errors[name] ? errors[name].message : ''}
                hasFeedback
            >
                <Select name={name} {...register(name)} defaultValue={defaultValues[name]}
                    onChange={e => setValue(name, e)}>
                    {children}
                </Select>
            </Form.Item>
        )
    }

    return (
        <section id="dados-do-beneficiario">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados do Beneficiário</Divider>
            <Row align='bottom' gutter={[10, 10]}>
                <Col className="coluna" >
                    <InputField name={_8NUM_CART} label="8 - Número da Carteira" />
                </Col>
                <Col className="coluna">
                    <DatePickerField name={_9VAL_CART} placeholder="Data" />
                </Col>
                <Col className="coluna">
                    <InputField name={_10NOME_BENEF} label="10 - Nome" />
                </Col>
                <Col className="coluna">
                    <InputField name={_11CART_NAC_SAUD} label="11 - Cartão Nacional de Saúde" />
                </Col>
                <Col className="coluna">
                    <SelectField name={_12AT_A_RN} label="12 - Atendimento a RN" >
                        <Select.Option value={true}>Sim</Select.Option>
                        <Select.Option value={false}>Não</Select.Option>
                    </SelectField>
                </Col>
            </Row>
        </section>
    )
}