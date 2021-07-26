import React from 'react'
import { Row, Col, Input, Form, DatePicker } from 'antd'
import { useFormContext } from 'react-hook-form'
import { defaultValues } from '../defaultValues'

import {
    _1REG_ANS, _3GUIA_SOLIC_INT, _2GN_GUIA_PREST, _4DT_DE_AUT,
    _5SENHA_GUI_RES_INT, _6VAL_DE_SENHA, _7N_GUIA_OP
} from '../fieldsNames'

export default function FormResInt() {
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

    return (
        <section id="guia-resumo-internacao">
            <Row align='top' gutter={[10, 10]}>
                <Col className="coluna">
                    <InputField label="1 - Registro ANS" name={_1REG_ANS} />
                </Col>
                <Col className="coluna">
                    <InputField label="3 - Guia Solicitação de Internação" name={_3GUIA_SOLIC_INT} />
                </Col>
                <Col className="coluna">
                    <InputField label="2 - Nº Guia no Prestador" name={_2GN_GUIA_PREST} />
                </Col>
                <Col className="coluna">
                    <DatePickerField label="4 - Data da Autorização" name={_4DT_DE_AUT} />
                </Col>
                <Col className="coluna">
                    <InputField label="5 - Senha" name={_5SENHA_GUI_RES_INT} />
                </Col>
                <Col className="coluna">
                    <DatePickerField label="6 - Validade da Senha" name={_6VAL_DE_SENHA} />
                </Col>
                <Col className="coluna">
                    <InputField label="7 - Nº Guia Operadora" name={_7N_GUIA_OP} />
                </Col>
            </Row>
        </section>
    )
}