import React from 'react';
import './style.scss';

export default function Ribbon( props:{ msg:string, placement:"left"|"right" }){

    return <div className={`ribbon ribbon-${props.placement}`}>
        {props.msg}
    </div>

}
