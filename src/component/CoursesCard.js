import React from 'react'
import '../assets/css/CoursesCard.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import CardHover from './CardHover'
import 'tippy.js/themes/light.css';

function CoursesCard(props) {
    return (
        <div >
            <Tippy
                content={<CardHover hoverTitle={props.title} hoverTime={props.time} hoverAuthor={props.author} hoverDesc={props.desc} />}
                theme={'light'}
                placement={'auto-end'}
                interactive={true}
            >
                <div className="card courses-card" style={{ width: "15rem", minHeight: "60vh" }}>
                    <div className="card-body course">
                        <img src={props.thumbnail} alt="image" style={{ width: '200px' }} />
                        <h6>{props.title}</h6>
                        <p>{props.author}</p>
                        <div className="stars d-flex"><h6>4.6 </h6>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p>(348,148)</p>
                        </div>
                        <h6>Rp 179,000</h6>
                        <div className="card pl-1" style={{ backgroundColor: "orange", color: "brown", height: "20px", width: "65px", fontSize: "12px" }}>Best seller</div>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default CoursesCard
