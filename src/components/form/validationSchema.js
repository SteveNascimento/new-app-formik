import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
    _3GUIA_SOLIC_INT: Yup.string().required('Obrigatório')
})