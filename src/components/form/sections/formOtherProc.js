import React, { useState } from 'react'
import { Descriptions, Divider, Button } from 'antd'
import { FormItem, Input, Select, TimePicker, DatePicker } from 'formik-antd'
import TableDesp from './../tables/table-desp'

import {
    _106CD_REALIZADA,
    _107DATA_DESP,
    _108HORA_INICIO_DESP,
    _109HORA_FIM_DESP,
    _110TAB_DESP,
    _111ITEM_DESP,
    _112QTD_DESP,
    UNID_MEDIDA,
    _113RED_ACRESC_DESP,
    _114VALOR_UNIT_DESP,
    /* _115TOTAL, */
    _116DESCR,
    REG_ANVISA,
    REF_FABRIC,
    AUT_FUNC,
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
        <section id="codigos-de-despesas-realizadas">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Códigos de Despesas Realizadas</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="6 - CD" >
                    <Select
                        style={{ width: "100%" }}
                        name={_106CD_REALIZADA}
                    >
                        <Select.Option value={'1'}>1 - Gases Medicinais</Select.Option>
                        <Select.Option value={'2'}>2 - Medicamentos</Select.Option>
                        <Select.Option value={'3'}>3 - Materiais</Select.Option>
                        <Select.Option value={'4'}>4 - Taxas Diversas</Select.Option>
                        <Select.Option value={'5'}>5 - Diárias</Select.Option>
                        <Select.Option value={'6'}>6 - Aluguéis</Select.Option>
                        <Select.Option value={'7'}>7 - Taxas/Aluguéis</Select.Option>
                        <Select.Option value={'8'}>8 - OPME</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="7 - Data" >
                    <DatePicker name={_107DATA_DESP} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="8 - Hora Incial">
                    <TimePicker name={_108HORA_INICIO_DESP} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="9 - Hora Final">
                    <TimePicker name={_109HORA_FIM_DESP} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="10 - Tabela">
                    <MyTextInput name={_110TAB_DESP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="11 - Item">
                    <MyTextInput name={_111ITEM_DESP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="12 - Qtde.">
                    <MyTextInput name={_112QTD_DESP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="Unidade Medida" >
                    <Select
                        style={{ width: "100%" }}
                        name={UNID_MEDIDA}
                    >
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
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="13 - % Red/Acrésc">
                    <MyTextInput name={_113RED_ACRESC_DESP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="14 - Valor Unitário">
                    <MyTextInput name={_114VALOR_UNIT_DESP} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="15 - Valor Total">
                    Valor total
                </Descriptions.Item>
                <Descriptions.Item label="16 - Descrição">
                    <MyTextInput name={_116DESCR} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="Reg. Anvisa">
                    <MyTextInput name={REG_ANVISA} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="Ref. Fabricante">
                    <MyTextInput name={REF_FABRIC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="Aut. Funcionamento">
                    <MyTextInput name={AUT_FUNC} type="text" />
                </Descriptions.Item>
            </Descriptions>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableDesp />
        </section>
    )

}



