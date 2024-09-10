import React from 'react'

const ResultList = ({result}) => {
  return (
    <div>
      <ul>
        {result.map((item,i)=>(
          <li key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultList