import React from 'react'
import { Descriptions } from 'antd'

/* import {
    _117TOTAL_GASES,
    _118TOTAL_MEDC,
    _119TOTAL_MAT,
    _120TOTAL_TAXAS_ALUG,
    _121TOTAL_DIAR,
    _122TOTAL_OPME,
    _123TOTAL,
} from '../fieldsNames' */


export default function FormDadBenef() {

    return (
        <section >
            <Descriptions layout="vertical" style={{ margin: "10px 0px" }} bordered size="small" column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="17 - Total Gases">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="18 - Total Medicamentos">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="19 - Total Materiais">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="20 - Total Taxas/Alugéis">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="21 - Total Diárias">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="22 - Total de OPME">
                    R$: 4,00
                </Descriptions.Item>
                <Descriptions.Item label="23 - Total GERAL">
                    R$: 4.500,00
                </Descriptions.Item>
            </Descriptions>
        </section>
    )

}



