
//Action Creator
export function alterarNumMin(novoNum:number) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNum
    }
}
export function alterarNumMax(novoNum:number) {
    return {
        type: 'NUM_Max_ALTERADO',
        payload: novoNum
    }
}