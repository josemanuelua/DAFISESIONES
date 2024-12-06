import React from 'react';

interface RelojDisplayProps{
    time:string;
}

const RelojDisplay:React.FC<RelojDisplayProps> = ({time}) =>{
    return (
        <div className="Reloj">{time}</div>
    );

};

export default RelojDisplay