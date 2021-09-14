import React from "react";
import { connect } from "react-redux";
import Card from "./Cards";



const Soma: React.FC = (props:any) => {

    const {min, max} = props
    
    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps) (Soma)
