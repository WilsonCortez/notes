import React from 'react';

interface Props {
    data: number 
}

export default function Notes(props: Props){
    let data = props.data
    if(data > 5) data = 5;
    let msg: string = 'As tuas notas ainda não foram lançadas';
    const emojs = ['','😭','😢','😐','😀','😁'];
    const reacoes = emojs[data]
    if(data === 1)msg = "Reprovado ";
    if(data === 2)msg = "Recurso ";
    if(data === 3)msg = "Exame ";
    if(data === 4) msg = "Aprovado ";
    if(data === 5)msg = "Dispensado ";
    
    return(
        <>
            <h1>{msg}</h1>   
            <h3>{reacoes.repeat(data) + '😐'.repeat(5 - data)}</h3>        
        </>
    )
}