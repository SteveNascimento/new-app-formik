import React, { useState } from 'react'
import { Descriptions, Divider, Button } from 'antd'
import { FormItem, Input, Select, TimePicker, DatePicker } from 'formik-antd'
import TableProc from './../tables/table-proc'

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
    /* _45VALOR_TOT_PROC, */
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
        <section id="procedimentos-e-exames-realizados">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Procedimentos e Exames Realizados</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="34 - Data">
                    <DatePicker name={_34DATA_PROC} placeholder="Data" />
                </Descriptions.Item>
                <Descriptions.Item label="35 - Hora Inicial" >
                    <TimePicker name={_35HORA_INICIO_PROC} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="36 - Hora Final" >
                    <TimePicker name={_36HORA_FIM_PROC} placeholder="Hora" />
                </Descriptions.Item>
                <Descriptions.Item label="37 - Tabela" >
                    <MyTextInput name={_37TAB_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="38 - Código do Procedimento" >
                    <MyTextInput name={_38COD_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="39 - Descrição">
                    <MyTextInput name={_39DESC_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="40 - Qtde">
                    <MyTextInput name={_40QTD_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="41 - Via" >
                    <Select
                        style={{ width: "100%" }}
                        name={_41VIA_PROC}
                        placeholder="Via"
                    >
                        <Select.Option value={1}>Unica</Select.Option>
                        <Select.Option value={2}>Mesma Via</Select.Option>
                        <Select.Option value={3}>Diferentes Vias</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="42 - Téc" >
                    <Select
                        style={{ width: "100%" }}
                        name={_42TEC_PROC}
                    >
                        <Select.Option value={1}>Convencional</Select.Option>
                        <Select.Option value={2}>Videolaparoscopia</Select.Option>
                    </Select>
                </Descriptions.Item>
                <Descriptions.Item label="43 - % Red/Acrésc">
                    <MyTextInput name={_43RED_ACRESC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="44 - Valor Unitário - R$">
                    <MyTextInput name={_44VALOR_UNIT_PROC} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="45 - Valor Total">
                    Valor total
                </Descriptions.Item>
            </Descriptions>
            <Button size="small" loading={adding} type="primary" className="add" onClick={adder}>Adicionar</Button>
            <TableProc />
        </section>
    )

}



