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


export default function FormDadInt() {

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
            <Divider orientation="left" style={{ marginBottom: '30px', fontSize: "20px", fontWeight: "bold" }}>Dados da Interna????o</Divider>
            <Row align='top' gutter={[20, 10]}>
                <Col>
                    <SelectField name={_16CAR_INT} label="16 - Car??ter Interna????o">
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
                    <SelectField name={_22TIPO_INT} label="22 - Tipo de Interna????o" >
                        <Select.Option value={1}>1 - C??nica</Select.Option>
                        <Select.Option value={2}>2 - Cir??rgica</Select.Option>
                        <Select.Option value={3}>3 - Obst??trica</Select.Option>
                        <Select.Option value={4}>4 - Pedi??trica</Select.Option>
                        <Select.Option value={5}>5 - Psiqui??trica</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_23REGIME_INT} label="23 - Regime de Interna????o" >
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
                    <SelectField name={_28IND_DE_ACID} label="28 - Indica????o de Acidente (Acidente ou doen??a relacionada)" >
                        <Select.Option value={0}>0 - Trabalho</Select.Option>
                        <Select.Option value={1}>1 - Tr??nsito</Select.Option>
                        <Select.Option value={2}>2 - Outros Acidentes</Select.Option>
                        <Select.Option value={9}>9 - N??o Acidentes</Select.Option>
                    </SelectField>
                </Col>
                <Col>
                    <SelectField name={_29MOTIV_DE_ENCER} label="29 - Motivo de Encerramento da Interna????o " >
                        <Select.Option value={11}>11 - Alta Curado</Select.Option>
                        <Select.Option value={12}>12 - Alta Melhorado</Select.Option>
                        <Select.Option value={14}>14 - Alta a pedido</Select.Option>
                        <Select.Option value={15}>15 - Alta com previs??o de retorno para acompanhamento do paciente</Select.Option>
                        <Select.Option value={16}>16 - Alta por Evas??o</Select.Option>
                        <Select.Option value={17}>17 - Alta da Pu??rpera e rec??m-nascido</Select.Option>
                        <Select.Option value={18}>18 - Alta por Outros motivos</Select.Option>
                        <Select.Option value={21}>21 - Permanencia por caracter??sticas pr??prias da doen??a</Select.Option>
                        <Select.Option value={22}>22 - Permanencia por Intercorr??ncia</Select.Option>
                        <Select.Option value={23}>23 - Permanencia por impossibilidade s??cio-familiar</Select.Option>
                        <Select.Option value={'24 - permanencia por Processo de doa????o de ??rg??os'}>24 - permanencia por Processo de doa????o de ??rg??os</Select.Option>
                        <Select.Option value={24}> tecidos e c??lulas - doador vivo</Select.Option>
                        <Select.Option value={'25 - Permanencia por Processo de doa????o de ??rg??os'}>25 - Permanencia por Processo de doa????o de ??rg??os</Select.Option>
                        <Select.Option value={25}> tecidos e c??lulas - doador morto</Select.Option>
                        <Select.Option value={26}>26 - Permanencia por mudan??a de procedimento</Select.Option>
                        <Select.Option value={27}>27 - Permanencia por re-opera????o</Select.Option>
                        <Select.Option value={28}>28 - Permanencia por outros motivos</Select.Option>
                        <Select.Option value={31}>31 - Transferido para outro estabelecimento</Select.Option>
                        <Select.Option value={32}>32 - Transferencia para interna????o domiciliar</Select.Option>
                        <Select.Option value={41}>41 - ??bito com declara????o de ??bito fornecida pelo m??dico assistente</Select.Option>
                        <Select.Option value={42}>42 - ??bito com declara????o de ??bito fornecida pelo Instituto M??dico Legal - IML</Select.Option>
                        <Select.Option value={43}>43 - ??bito com declara????o de ??bito fornecida pelo Servi??o de Verifica????o de ??bito - SVO.</Select.Option>
                        <Select.Option value={51}>51 - ENCERRAMENTO ADMINISTRATIVO</Select.Option>
                        <Select.Option value={61}>61 - Alta m??e/puerpera e do recem nascido</Select.Option>
                        <Select.Option value={62}>62 - Alta m??e/puerpera e permanencia do recem-nascido</Select.Option>
                        <Select.Option value={63}>63 - Alta m??e/puerpera e obito do recem-nascido</Select.Option>
                        <Select.Option value={64}>64 - Alta m??e/puerpera com obito fetal</Select.Option>
                        <Select.Option value={65}>65 - ??bito da gestante e do concepto</Select.Option>
                        <Select.Option value={66}>66 - ??bito da m??e/puerpera e alta do recem-nascido</Select.Option>
                        <Select.Option value={67}>67 - Obito da mae/puerpera e permanencia do recem nascido</Select.Option>
                    </SelectField>
                </Col>
            </Row>
        </section>
    )

}