import React from "react";
import { connect} from "react-redux";
import Card from "./Cards";


const Media: React.FC = (props:any) => {

    const {min, max} = props

    return (
        <Card title='Media dos Números' green>
           <div>
               <span>
                   <span>Resultado:</span>
                   <strong>{min + max / 2}</strong>
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

export default connect(mapStateToProps) (Media)