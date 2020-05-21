import React, { Component } from 'react';

class Score extends Component {
  render() {

    return (
      <>
        {this.props.scores.map((d, idx) => {
          
          return (
            <>
              <li key={idx}>
                scores: {d["score"]} <br/>
                date: {d["date"]}
              </li>
            </>
          )
        })}
      </>
    );
  }
}


export default Score;
