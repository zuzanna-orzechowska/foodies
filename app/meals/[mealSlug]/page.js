import React from 'react'

export default function page({params}) {
    const nazwa = params.someName;
  return (
    <div>Szczegóły na temat: {nazwa}</div>
  )
}