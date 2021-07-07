import React from 'react'
import { Descriptions } from 'antd'
import { Input } from 'formik-antd'

import {
    /* _54TOTAL_PROCED,
    _55TOTAL_DIAR,
    _56TOTAL_TAXAS_ALUG,
    _57TOTAL_MAT,
    _58TOTAL_OPME,
    _59TOTAL_MEDC,
    _60TOTAL_GASES,
    _61TOTAL, */
    _81OBS_TOTAL
} from '../fieldsNames'


export default function FormDadBenef() {

    return (
        <section id="totais" >
            <Descriptions layout="vertical" style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="54 - Total Proced (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="55 - Total de Diárias">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="56 - Total Taxas/Aluguéis">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="57 - Total Materiais (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="58 - Total de OPME (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="59 - Total Medicamentos (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="60 - Total Gases (R$)">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="61 - Total (R$)">
                    R$: 4.000,00
                </Descriptions.Item>
            </Descriptions>
            <Descriptions style={{ margin: "10px 0px" }} bordered size="small">
                <Descriptions.Item label="81 - Observação">
                    <Input.TextArea name={_81OBS_TOTAL} type="text" />
                </Descriptions.Item>
            </Descriptions>
        </section>
    )

}



