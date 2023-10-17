import React from 'react';

export default function Notes(props: any){
    const {data} = props;
    let msg: string;
    
    if(data === 1 || data  <= 4){
       return msg = 'Reprovado'
    }else if(data === 5 || data  <= 9){
        return msg = 'Recurso'
    }else if(data === 9){
        return msg = 'Aprovado'
    }else {
        msg = 'Nota inválida';
      }
    return(
        <>
            Carregando Notes...{msg}
        </>
    )
}