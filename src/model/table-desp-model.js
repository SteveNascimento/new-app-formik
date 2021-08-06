import { action } from 'easy-peasy'


const tableDespModel = {
    despList: [],

    count: 0,

    addToList: action((state, payload) => {
        state.count += 1
        payload.id = state.count
        state.despList.push(payload)
    }),

    removeFromList: action((state, payload) => {
        state.despList.splice(payload, 1)
    })

}

export default tableDespModel