import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
    _3GUIA_SOLIC_INT: Yup.string().required('Obrigatório'),
})

export const TableDecValidationSchema = Yup.object().shape({
    _30TIPO_DE_DECL: Yup.string().required('Obrigatório'),
    _31CID_OBITO: Yup.string().required('Obrigatório'),
    _32NUMERO_DECL: Yup.string().required('Obrigatório'),
    _33OBITO_RN: Yup.string().required('Obrigatório'),
})

export const TableProcValidationSchema = Yup.object().shape({
    /* _34DATA_PROC: Yup.string().required('Obrigatório'),
    _35HORA_INICIO_PROC: Yup.string().required('Obrigatório'),
    _36HORA_FIM_PROC: Yup.string().required('Obrigatório'), */
    _37TAB_PROC: Yup.string().required('Obrigatório'),
    /* _38COD_PROC: Yup.string().required('Obrigatório'),
    _39DESC_PROC: Yup.string().required('Obrigatório'),
    _40QTD_PROC: Yup.string().required('Obrigatório'),
    _41VIA_PROC: Yup.string().required('Obrigatório'),
    _42TEC_PROC: Yup.string().required('Obrigatório'),
    _43RED_ACRESC: Yup.string().required('Obrigatório'),
    _44VALOR_UNIT_PROC: Yup.string().required('Obrigatório'),
    _45VALOR_TOT_PROC : Yup.string().required('Obrigatório'), */
})