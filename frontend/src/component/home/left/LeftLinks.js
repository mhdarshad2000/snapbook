import React from 'react'

export default function LeftLinks({img,text,notification}) {
    console.log(img)
  return (
    <div className="left_link">
        <img src={`../../../left/${img}.png`} alt="" />
        {
            notification !== undefined ? (
                <div className="col">
                    <div className="col_1">{text}</div>
                    <div className="col_2">{notification}</div>
                </div>
            ):(
                <span>{text} </span>
            )
        }
    </div>
  )
}
