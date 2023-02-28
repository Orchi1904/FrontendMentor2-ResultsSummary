import './App.css';
import { Helmet } from 'react-helmet';
import { React, useEffect, useState } from 'react';
import data from './data.json';
import ScoreComponent from './Components/ScoreComponent/ScoreComponent';

function App() {
  let scoreArr = [];
  const [avgScore, setAvgScore] = useState(0);

  data.map(data => {
    scoreArr.push(data.score);
  })

  //Logic to calculate average score
  useEffect(() => {
    let finalScore = 0;
    for(let score of scoreArr){
      finalScore += parseInt(score);
    }
    finalScore /= scoreArr.length;
    setAvgScore(Math.round(finalScore));
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/*displays site properly based on user's device -->*/}
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png" />
        <title>Frontend Mentor | Results summary component</title>
      </Helmet>
      <main>
        <div className="resultContainer">
          <h4>Your Result</h4>
          <div className="resultContainerCircle">
            <span className="resultContainerCircleScore">{avgScore}</span>
            <span className="resultContainerCircleMaxScore">of 100</span>
          </div>
          <div className="resultContainerDescription">
            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>

        <div className="summaryContainer">
          <h4>Summary</h4>
          {
            data.map((data, i) => (
              <ScoreComponent key={i} category={data.category} icon={data.icon} score={data.score} maxScore="100" />
            ))
          }
          <button>Continue</button>
        </div>
      </main>
    </div>
  );
}

export default App;
