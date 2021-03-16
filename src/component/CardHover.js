import React from 'react'
import '../assets/css/CoursesCard.css'

function CardHover(props) {
    return (
        <div className="popup p-3 ml-1">
            <h6>{props.hoverTitle}</h6>
            <div className="d-flex justify-content-between">
                <div className="card pl-1 pr-1" style={{ backgroundColor: "orange", color: "brown", height: "20px", fontSize: "12px" }}><p>Best Seller</p></div>
                <div style={{ fontSize: "12px", color: "green" }}><p>{props.hoverTime}</p></div>
            </div>
            <p style={{ fontSize: "12px", color: "grey" }}>{props.hoverAuthor}</p>
            <p>{props.hoverDesc}</p>
            <div className="d-flex">
                <button className="btn btn-cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default CardHover
