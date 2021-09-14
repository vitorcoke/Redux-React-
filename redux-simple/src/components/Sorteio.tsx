import React from "react";
import { connect } from "react-redux";
import Card from "./Cards";


const Sorteio: React.FC = (props:any) => {

    const {min, max} = props

    function sorteio(min: number, max: number){
        return Math.floor(Math.random()* (max -min) + min)
    }

    return (
        <Card title='Sorteio dos Numeros' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{sorteio(min, max)}</strong>
                </span>
            </div>
        </Card>
    )
}
const mapStateToProps = (state:any) => {
    return {
       min: state.numeros.min,
       max: state.numeros.max
    }
}

export default connect(mapStateToProps) (Sorteio)