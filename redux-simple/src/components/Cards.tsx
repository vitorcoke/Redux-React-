import React from "react";

type cardProps = {
    title: string,
    red?: boolean,
    green?: boolean,
    blue?: boolean,
    purple?: boolean
}

function getColor(props:any) {
    if(props.red) return "bg-red-500"
    if(props.green) return "bg-green-500"
    if(props.blue) return "bg-blue-500"
    if(props.purple) return "bg-purple-500"
    return ""
}
function getColorTitle(props:any) {
    if(props.red) return "bg-red-300"
    if(props.green) return "bg-green-300"
    if(props.blue) return "bg-blue-300"
    if(props.purple) return "bg-purple-300"
    return ""
}

const Card: React.FC<cardProps> = props => {
    return (
        <div className={`flex-1 flex flex-col m-1.5 bg-red-500 ${getColor(props)}`}>
            <div className='flex justify-center'>
                <span className={`p-1.5 flex-1 ${getColorTitle(props)}`}>
                    {props.title}
                </span>
            </div>
            <div className='p-5'>
                {props.children}
            </div>
        </div>
    )

}

export default Card