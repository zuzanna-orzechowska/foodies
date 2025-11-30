import React from 'react'

function page({params}) {
    const nazwa = params.someName;
  return (
    <div>Szczegóły na temat: {nazwa}</div>
  )
}

export default page