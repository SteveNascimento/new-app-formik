import { action } from 'easy-peasy'


const tableDecModel = {
    decList: [],

    count: 0,

    addToList: action((state, payload) => {
        state.count += 1
        payload.id = state.count
        state.decList.push(payload)
    }),

    removeFromList: action((state, payload) => {
        state.decList.splice(payload, 1)
    })

}

export default tableDecModel