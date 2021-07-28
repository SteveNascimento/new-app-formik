import React from 'react'
import { Controller } from 'react-hook-form'
import {
    Divider, Row, Col, Input, Select, TimePicker,
    DatePicker, Form
} from 'antd'

import {
    _16CAR_INT, _17TIPO_FAT, _18HORA_INIC_FAT, _18DATA_INIC_FAT, _20HORA_FIM_FAT,
    _20DATA_FIM_FAT, _22TIPO_INT, _23REGIME_INT, _24CID_101, _25CID_102,
    _26CID_103, _27CID_104, _28IND_DE_ACID, _29MOTIV_DE_ENCER,
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
        <section id="dados-da-internacao">
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados da Internação</Divider>
            <Row align='top' gutter={[20, 10]}>
                <Col>
                    <SelectField name={_16CAR_INT} label="16 - Caráter Internação">
                        <Select.Option value="E-Eletiva">E-Eletiva</Select.Option>
                        <Select.Option value="U-Urgencia/Emergencia">U-Urgencia/Emergencia</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_17TIPO_FAT} label="17 - Tipo de Faturamento" >
                        <Select.Option value={1}>1 - Parcial</Select.Option>
                        <Select.Option value={2}>2 - Final</Select.Option>
                        <Select.Option value={3}>3 - Complementar</Select.Option>
                        <Select.Option value={4}>4 - Total</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <DatePickerField name={_18DATA_INIC_FAT} label="18 - Data Inicio do Faturamento" />
                </Col>
                <Col>
                    <TimePickerField name={_18HORA_INIC_FAT} label="18 - Hora Inicio do Faturamento" />
                </Col>
                <Col>
                    <DatePickerField name={_20DATA_FIM_FAT} label="20 - Data Fim do Faturamento" />
                </Col>
                <Col>
                    <TimePickerField name={_20HORA_FIM_FAT} label="20 - Hora Fim do Faturamento" />
                </Col>
                <Col>
                    <SelectField name={_22TIPO_INT} label="22 - Tipo de Internação" >
                        <Select.Option value={1}>1 - Cínica</Select.Option>
                        <Select.Option value={2}>2 - Cirúrgica</Select.Option>
                        <Select.Option value={3}>3 - Obstétrica</Select.Option>
                        <Select.Option value={4}>4 - Pediátrica</Select.Option>
                        <Select.Option value={5}>5 - Psiquiátrica</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_23REGIME_INT} label="23 - Regime de Internação" >
                        <Select.Option value={1}>1 - Hospitalar</Select.Option>
                        <Select.Option value={2}>2 - Hospital-dia</Select.Option>
                        <Select.Option value={3}>3 - Domiciliar</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <InputField name={_24CID_101} label="24 - CID10 Principal" />
                </Col>
                <Col>
                    <InputField name={_25CID_102} label="25 - CID10 (2)" />
                </Col>
                <Col>
                    <InputField name={_26CID_103} label="26 - CID10 (3)" />
                </Col>
                <Col>
                    <InputField name={_27CID_104} label="27 - CID10 (4)" />
                </Col>
                <Col>
                    <SelectField name={_28IND_DE_ACID} label="28 - Indicação de Acidente (Acidente ou doença relacionada)" >
                        <Select.Option value={0}>0 - Trabalho</Select.Option>
                        <Select.Option value={1}>1 - Trânsito</Select.Option>
                        <Select.Option value={2}>2 - Outros Acidentes</Select.Option>
                        <Select.Option value={9}>9 - Não Acidentes</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_29MOTIV_DE_ENCER} label="29 - Motivo de Encerramento da Internação " >
                        <Select.Option value={11}>11 - Alta Curado</Select.Option>
                        <Select.Option value={12}>12 - Alta Melhorado</Select.Option>
                        <Select.Option value={14}>14 - Alta a pedido</Select.Option>
                        <Select.Option value={15}>15 - Alta com previsão de retorno para acompanhamento do paciente</Select.Option>
                        <Select.Option value={16}>16 - Alta por Evasão</Select.Option>
                        <Select.Option value={17}>17 - Alta da Puérpera e recém-nascido</Select.Option>
                        <Select.Option value={18}>18 - Alta por Outros motivos</Select.Option>
                        <Select.Option value={21}>21 - Permanencia por características próprias da doença</Select.Option>
                        <Select.Option value={22}>22 - Permanencia por Intercorrência</Select.Option>
                        <Select.Option value={23}>23 - Permanencia por impossibilidade sócio-familiar</Select.Option>
                        <Select.Option value={'24 - permanencia por Processo de doação de órgãos'}>24 - permanencia por Processo de doação de órgãos</Select.Option>
                        <Select.Option value={24}> tecidos e células - doador vivo</Select.Option>
                        <Select.Option value={'25 - Permanencia por Processo de doação de órgãos'}>25 - Permanencia por Processo de doação de órgãos</Select.Option>
                        <Select.Option value={25}> tecidos e células - doador morto</Select.Option>
                        <Select.Option value={26}>26 - Permanencia por mudança de procedimento</Select.Option>
                        <Select.Option value={27}>27 - Permanencia por re-operação</Select.Option>
                        <Select.Option value={28}>28 - Permanencia por outros motivos</Select.Option>
                        <Select.Option value={31}>31 - Transferido para outro estabelecimento</Select.Option>
                        <Select.Option value={32}>32 - Transferencia para internação domiciliar</Select.Option>
                        <Select.Option value={41}>41 - Óbito com declaração de óbito fornecida pelo médico assistente</Select.Option>
                        <Select.Option value={42}>42 - Óbito com declaração de Óbito fornecida pelo Instituto Médico Legal - IML</Select.Option>
                        <Select.Option value={43}>43 - Óbito com declaração de Óbito fornecida pelo Serviço de Verificação de Óbito - SVO.</Select.Option>
                        <Select.Option value={51}>51 - ENCERRAMENTO ADMINISTRATIVO</Select.Option>
                        <Select.Option value={61}>61 - Alta mãe/puerpera e do recem nascido</Select.Option>
                        <Select.Option value={62}>62 - Alta mãe/puerpera e permanencia do recem-nascido</Select.Option>
                        <Select.Option value={63}>63 - Alta mãe/puerpera e obito do recem-nascido</Select.Option>
                        <Select.Option value={64}>64 - Alta mãe/puerpera com obito fetal</Select.Option>
                        <Select.Option value={65}>65 - Óbito da gestante e do concepto</Select.Option>
                        <Select.Option value={66}>66 - Óbito da mãe/puerpera e alta do recem-nascido</Select.Option>
                        <Select.Option value={67}>67 - Obito da mae/puerpera e permanencia do recem nascido</Select.Option>
                    </SelectField>
                </Col>
            </Row>
        </section>
    )

}