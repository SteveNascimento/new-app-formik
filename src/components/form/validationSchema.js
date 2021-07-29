import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({

})

export const TableDecValidationSchema = Yup.object().shape({
    _30TIPO_DE_DECL: Yup.string().required('Obrigatório'),
    _31CID_OBITO: Yup.string().required('Obrigatório'),
    _32NUMERO_DECL: Yup.string().required('Obrigatório'),
    _33OBITO_RN: Yup.string().required('Obrigatório'),
})