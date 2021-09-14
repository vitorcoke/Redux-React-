import React from "react";
import { connect } from "react-redux";
import { alterarNumMax, alterarNumMin } from "../store/actions/numeros";
import Card from "./Cards";



const Intervalo: React.FC = (props: any) => {

    const { max, min } = props

    return (
        <Card title='Intervalo de Números' red>
            <div>
                <span>
                    <strong>Minimo:</strong>
                    <input value={min} className='text-3xl ml-5 mr-5 w-24 text-black p-1' onChange={e => props.alterarMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input value={max} className='text-3xl ml-5 mr-5 w-24 text-black p-1' onChange={e => props.alterarMax(+e.target.value)} />
                </span>
            </div>

        </Card>
    )
}

const mapStateToProps = (state: any) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        alterarMin(novoNumero:number){
            const action = alterarNumMin(novoNumero)
            dispatch(action)
        },
        alterarMax(novoNumero:number){
            const action = alterarNumMax(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)