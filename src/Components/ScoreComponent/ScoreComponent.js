import React from 'react';
import Icon from './Icon';
import './ScoreComponent.css';

function ScoreComponent({ icon, category, score, maxScore }) {
    return (
        <div className={`scoreComponent ${category}`}>
            <div className="scoreComponentLeft">
                <img src={icon} alt={category}/>
                <p>{category}</p>
            </div>
            <div className="scoreComponentRight">
                <span><span className="scoreComponentRightFirst">{score}</span>
                      <span className="scoreComponentRightSecond"> / {maxScore}</span>
                </span>
            </div>
        </div>
    )
}

export default ScoreComponent;