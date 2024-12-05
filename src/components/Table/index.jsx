import React from 'react'

const Table = ({arrayProps=[],objects=[]}) => {

  

  return (
    <>
       <table>
            <thead>
                <tr>{arrayProps.map((arrayProp) => <th scope='col'>{arrayProp}</th> )}</tr>
            </thead>
            <tbody>
              {objects.map(object => 
                    <tr>
                        <td>{object.id}</td>
                        <td>{object.dataEntrada}</td>
                        <td>{object.dataVenda}</td>
                        <td>{object.linhagem}</td>
                        <td>{object.quantidadeAnimais}</td>
                        <td>{object.quantidadeConsumo}</td>
                        <td>{object.quantidadeMortos}</td>
                        <td>{object.vendido.toString()}</td>
                    </tr>)}
            </tbody>

       </table>
    
    </>
  )
}
export {Table};