import { action } from 'easy-peasy'


const tableProcModel = {
    procList: [],
    allProcList: [],

    count: 0,

    addToList: action((state, payload) => {
        state.count += 1
        const expandable = [{
            _35HORA_INICIO_PROC: payload._35HORA_INICIO_PROC,
            _36HORA_FIM_PROC: payload._36HORA_FIM_PROC,
            _39DESC_PROC: payload._39DESC_PROC,
            _40QTD_PROC: payload._40QTD_PROC,
            _41VIA_PROC: payload._41VIA_PROC,
            _42TEC_PROC: payload._42TEC_PROC,
            _43RED_ACRESC: payload._43RED_ACRESC,
            _44VALOR_UNIT_PROC: payload._44VALOR_UNIT_PROC,
        }]
        const newPayload = {
            id: state.count,
            expand: expandable,
            _34DATA_PROC: payload._34DATA_PROC,
            _37TAB_PROC: payload._37TAB_PROC,
            _38COD_PROC: payload._38COD_PROC,
            _45VALOR_TOT_PROC: payload._45VALOR_TOT_PROC,
        }
        payload.id = state.count
        state.procList.push(newPayload)
        state.allProcList.push(payload)
    }),

    removeFromList: action((state, payload) => {
        state.procList.splice(payload, 1)
        state.allProcList.splice(payload, 1)
    })

}

export default tableProcModel