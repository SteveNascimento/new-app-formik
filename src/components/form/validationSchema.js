import * as Yup from 'yup'


export const validationSchema = Yup.object().shape({
    guiaSolictInt: Yup.string().required('Obrigatório')
})