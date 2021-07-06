import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
    _3guiaSolictInt: Yup.string().required('Obrigatório')
})