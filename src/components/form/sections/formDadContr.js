import React from 'react'
import { Descriptions, Divider } from 'antd'
import { FormItem, Input } from 'formik-antd'

import {
    _13COD_OP_CNPJ, _14NOME_CONT, _15COD_CNES
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
        <section id="dados-do-contratado-executante">
            <Divider orientation="left" style={{ fontSize: "20px", fontWeight: "bold" }}>Dados do Contratado Executante</Divider>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="13 - Código na Operadora/CNPJ">
                    09306242000344
                </Descriptions.Item>
                <Descriptions.Item label="14 - Nome do Contratado" >
                    <MyTextInput name={_14NOME_CONT} type="text" />
                </Descriptions.Item>
                <Descriptions.Item label="15 - Código CNES">
                    7730802
                </Descriptions.Item>
            </Descriptions>
        </section>
    )

}