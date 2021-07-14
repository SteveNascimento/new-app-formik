import { action } from 'easy-peasy'


const tableDecModel = {
    decList: [
        {
            key: '1',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
        {
            key: '2',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
        {
            key: '3',
            tipoDec: 'Nascimento',
            numDec: 32,
            diagObit: 'Diagnóstico',
            obitoRN: 'Sim',
        },
    ],

    count: 3,

    addToList: action((state, payload) => {
        state.count += 1
        payload.key = state.count
        state.decList.push(payload)
    }),

    removeFromList: action((state, payload) => {
        state.decList.splice(payload, 1)
    })

}

export default tableDecModel