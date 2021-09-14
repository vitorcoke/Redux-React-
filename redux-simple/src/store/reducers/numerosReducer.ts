const estadoInicial = {
    min: 0, 
    max: 0
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state: object = estadoInicial, action:any) {
    console.log(state)
    switch (action.type) {
        case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_Max_ALTERADO':
            return {
                ...state,
                max: action.payload
            }

        default:
            return {
               ...state
            }
        
    }

}