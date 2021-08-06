import React from 'react'
import {
    Divider, Row, Col, Form, Input,
    Select, TimePicker, DatePicker
} from 'antd'
import { Controller } from 'react-hook-form'
import TableDesp from './../tables/table-desp'

import {
    _106CD_REALIZADA,
    _107DATA_DESP,
    _108HORA_INICIO_DESP,
    _109HORA_FIM_DESP,
    _110TAB_DESP,
    _111ITEM_DESP,
    _112QTD_DESP,
    _UNID_MEDIDA,
    _113RED_ACRESC_DESP,
    _114VALOR_UNIT_DESP,
    _115TOTAL,
    _116DESCR,
    _REG_ANVISA,
    _REF_FABRIC,
    _AUT_FUNC,
} from '../fieldsNames'


export default function FormOtherProc() {

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
            <Col>
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
            </Col>
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
        <section id="codigos-de-despesas-realizadas">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Códigos de Despesas Realizadas</Divider>
            <Row align='top' gutter={[10, 10]}>
                <Col>
                    <SelectField name={_106CD_REALIZADA} label="6 - CD">
                        <Select.Option value={1}>1 - Gases Medicinais</Select.Option>
                        <Select.Option value={2}>2 - Medicamentos</Select.Option>
                        <Select.Option value={3}>3 - Materiais</Select.Option>
                        <Select.Option value={4}>4 - Taxas Diversas</Select.Option>
                        <Select.Option value={5}>5 - Diárias</Select.Option>
                        <Select.Option value={6}>6 - Aluguéis</Select.Option>
                        <Select.Option value={7}>7 - Taxas/Aluguéis</Select.Option>
                        <Select.Option value={8}>8 - OPME</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <DatePickerField name={_107DATA_DESP} label="7 - Data" />
                </Col>
                <Col>
                    <TimePickerField name={_108HORA_INICIO_DESP} label="8 - Hora Incial" />
                </Col>
                <Col>
                    <TimePickerField name={_109HORA_FIM_DESP} label="9 - Hora Final" />
                </Col>
                <Col>
                    <InputField name={_110TAB_DESP} label="10 - Tabela" />
                </Col>
                <Col>
                    <InputField name={_111ITEM_DESP} label="11 - Item" />
                </Col>
                <Col>
                    <InputField name={_112QTD_DESP} label="12 - Qtde." />
                </Col>
                <Col>
                    <SelectField name={_UNID_MEDIDA} label="Unidade Medida" >
                        <Select.Option value={'1'}>Medicinais</Select.Option>
                        <Select.Option value="001">Ampola</Select.Option>
                        <Select.Option value="002">Bilhões de Unidades Internacionais</Select.Option>
                        <Select.Option value="003">Bisnaga</Select.Option>
                        <Select.Option value="004">Bolsa</Select.Option>
                        <Select.Option value="005">Caixa</Select.Option>
                        <Select.Option value="006">Cápsula</Select.Option>
                        <Select.Option value="007">Carpule</Select.Option>
                        <Select.Option value="008">Comprimido</Select.Option>
                        <Select.Option value="009">Dose</Select.Option>
                        <Select.Option value="010">Drágea</Select.Option>
                        <Select.Option value="011">Envelope</Select.Option>
                        <Select.Option value="012">Flaconete</Select.Option>
                        <Select.Option value="013">Frasco</Select.Option>
                        <Select.Option value="014">Frasco Ampola</Select.Option>
                        <Select.Option value="015">Galão</Select.Option>
                        <Select.Option value="016">Glóbulo</Select.Option>
                        <Select.Option value="017">Gotas</Select.Option>
                        <Select.Option value="018">Grama</Select.Option>
                        <Select.Option value="019">Litro</Select.Option>
                        <Select.Option value="020">Microgramas</Select.Option>
                        <Select.Option value="021">Milhões de Unidades Internacionais</Select.Option>
                        <Select.Option value="022">Miligrama</Select.Option>
                        <Select.Option value="023">Milímetro</Select.Option>
                        <Select.Option value="024">Óvulo</Select.Option>
                        <Select.Option value="025">Pastilha</Select.Option>
                        <Select.Option value="026">Lata</Select.Option>
                        <Select.Option value="027">Pérola</Select.Option>
                        <Select.Option value="028">Pílula</Select.Option>
                        <Select.Option value="029">Pote</Select.Option>
                        <Select.Option value="030">Quilograma</Select.Option>
                        <Select.Option value="031">Seringa</Select.Option>
                        <Select.Option value="032">Supositório</Select.Option>
                        <Select.Option value="033">Tablete </Select.Option>
                        <Select.Option value="034">Tubete</Select.Option>
                        <Select.Option value="035">Tubo</Select.Option>
                        <Select.Option value="036">Unidade</Select.Option>
                        <Select.Option value="037">Unidade Internacional </Select.Option>
                        <Select.Option value="038">Centímetro</Select.Option>
                        <Select.Option value="039">Conjunto</Select.Option>
                        <Select.Option value="040">Kit</Select.Option>
                        <Select.Option value="041">Maço</Select.Option>
                        <Select.Option value="042">Metro</Select.Option>
                        <Select.Option value="043">Pacote</Select.Option>
                        <Select.Option value="044">Peça</Select.Option>
                        <Select.Option value="045">Rolo</Select.Option>
                        <Select.Option value="046">Gray</Select.Option>
                        <Select.Option value="047">Centgray</Select.Option>
                        <Select.Option value="048">Par</Select.Option>
                        <Select.Option value="049">Adesivo Transdérmico</Select.Option>
                        <Select.Option value="050">Comprimido Efervecente</Select.Option>
                        <Select.Option value="051">Comprimido Mastigável</Select.Option>
                        <Select.Option value="052">Sache</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_113RED_ACRESC_DESP} label="13 - % Red/Acrésc" />
                </Col>
                <Col>
                    <InputField name={_114VALOR_UNIT_DESP} label="14 - Valor Unitário" />
                </Col>
                <Col>
                    <InputField name={_116DESCR} label="16 - Descrição" />
                </Col>
                <Col>
                    <InputField name={_REG_ANVISA} label="Reg. Anvisa" />
                </Col>
                <Col>
                    <InputField name={_REF_FABRIC} label="Ref. Fabricante" />
                </Col>
                <Col>
                    <InputField name={_AUT_FUNC} label="Aut. Funcionamento" />
                </Col>
            </Row>
            <Row align='top' gutter={[10, 10]}>
                <Col className='formTotals'>
                    <InputField name={_115TOTAL} label="15 - Valor Total" />
                </Col>
            </Row>
            <TableDesp />
        </section>
    )

}
