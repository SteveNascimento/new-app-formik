import React from 'react'
import { Descriptions, Divider } from 'antd'
import {
    FormItem, Input, Select, TimePicker,
    DatePicker
} from 'formik-antd'

import {
    _16CAR_INT, _17TIPO_FAT, _18HORA_INIC_FAT, _18DATA_INIC_FAT, _20HORA_FIM_FAT,
    _20DATA_FIM_FAT, _22TIPO_INT, _23REGIME_INT, _24CID_101, _25CID_102,
    _26CID_103, _27CID_104, _28IND_DE_ACID, _29MOTIV_DE_ENCER,
} from '../fieldsNames'


export default function FormDadBenef() {

    const MyTextInput = (props) => {
        return (
            <>
                <FormItem name={props.name}>
                    <Input {...props} />
                </FormItem>
            </>
        )
    }

    return (
        <section id="dados-da-internacao">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados da Internação</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="16 - Caráter Internação" >
                    <Select
                        name={_16CAR_INT}
                        placeholder="Caráter Internação"
                    >
                        <Select.Option value="E-Eletiva">E-Eletiva</Select.Option>
                        <Select.Option value="U-Urgencia/Emergencia">U-Urgencia/Emergencia</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="17 - Tipo de Faturamento" >
                    <Select
                        name={_17TIPO_FAT}
                        placeholder="Tipo de Faturamento"
                    >
                        <Select.Option value={1}>1 - Parcial</Select.Option>
                        <Select.Option value={2}>2 - Final</Select.Option>
                        <Select.Option value={3}>3 - Complementar</Select.Option>
                        <Select.Option value={4}>4 - Total</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="18 - Data e Hora do Faturamento" >
                    <TimePicker name={_18HORA_INIC_FAT} placeholder="Hora" />
                    <DatePicker name={_18DATA_INIC_FAT} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="20 - Data e Hora Fim do Faturamento" >
                    <TimePicker name={_20HORA_FIM_FAT} placeholder="Hora" />
                    <DatePicker name={_20DATA_FIM_FAT} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="22 - Tipo de Internação" >
                    <Select
                        name={_22TIPO_INT}
                        placeholder="Tipo de Internação"
                    >
                        <Select.Option value={1}>1 - Cínica</Select.Option>
                        <Select.Option value={2}>2 - Cirúrgica</Select.Option>
                        <Select.Option value={3}>3 - Obstétrica</Select.Option>
                        <Select.Option value={4}>4 - Pediátrica</Select.Option>
                        <Select.Option value={5}>5 - Psiquiátrica</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="23 - Regime de Internação" >
                    <Select
                        name={_23REGIME_INT}
                        placeholder="Regime de Internação"
                    >
                        <Select.Option value={1}>1 - Hospitalar</Select.Option>
                        <Select.Option value={2}>2 - Hospital-dia</Select.Option>
                        <Select.Option value={3}>3 - Domiciliar</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="24 - CID10 Principal" >
                    <MyTextInput name={_24CID_101} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="25 - CID10 (2)" >
                    <MyTextInput name={_25CID_102} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="26 - CID10 (3)" >
                    <MyTextInput name={_26CID_103} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="27 - CID10 (4)" >
                    <MyTextInput name={_27CID_104} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="28 - Indicação de Acidente (Acidente ou doença relacionada)" >
                    <Select
                        name={_28IND_DE_ACID}
                        placeholder="Indicação de Acidente"
                    >
                        <Select.Option value={0}>0 - Trabalho</Select.Option>
                        <Select.Option value={1}>1 - Trânsito</Select.Option>
                        <Select.Option value={2}>2 - Outros Acidentes</Select.Option>
                        <Select.Option value={9}>9 - Não Acidentes</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="29 - Motivo de Encerramento da Internação " >
                    <Select
                        name={_29MOTIV_DE_ENCER}
                        placeholder="Motivo de Encerramento"
                    >
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
                    </Select>
                </Descriptions.Item>
            </Descriptions>
        </section>
    )

}