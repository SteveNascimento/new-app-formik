import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
    _1REG_ANS: Yup.string().required('Obrigatório'),
    _3GUIA_SOLIC_INT: Yup.string().required('Obrigatório')
})