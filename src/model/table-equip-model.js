import { action } from 'easy-peasy'


const tableEquipModel = {
    equipList: [],

    count: 0,

    addToList: action((state, payload) => {
        state.count += 1
        payload.id = state.count
        state.equipList.push(payload)
    }),

    removeFromList: action((state, payload) => {
        state.equipList.splice(payload, 1)
    })

}

export default tableEquipModel