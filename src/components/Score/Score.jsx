import React, { Component } from 'react';

import './Score.css';

class Score extends Component {
  render() {

    return (
      <>
        <ul className="scoreUl">
          {this.props.scores.map((d, idx) => {

            return (
              <>
                <li key={idx}>
                 <p>Scores: {d["score"]} <span id='dateSpan'>Date: {d["date"]}</span></p>  
                 
                </li>
              </>
            )
          })}
        </ul>
      </>
    );
  }
}


export default Score;
