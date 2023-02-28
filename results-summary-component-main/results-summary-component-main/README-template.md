# Frontend Mentor - Results summary component solution

This is my solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). It is my second Frontend Mentor challenge! Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Challenge Level: 1 -> Newbie 🟢

🕒 Estimated time: 3h      
🕓 Time taken:     3h50min 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover states for the continue button

### Screenshot

Here is a screenshot of my solution:

![](./solution.PNG)

### Links

- Link to the solution: [Results summary challenge](https://www.frontendmentor.io/solutions/challenge-2-results-summary-challenge-using-react-iKk0RpxO6y)
- Live Site URL: [See solution on my live site](https://frontend-mentor2-results-summary-e528.vercel.app/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- [React](https://reactjs.org/) - JS library

### What I learned

This challenge was very helpful for me to review how to display data in React from a JSON file. I did not use JSON files so often so it was nice to refresh my memory. However, the project took longer than expacted because I had problems displaying the icons whose path was stored in the JSON file. I tried to read the icon path from the JSON file in a map using {data.icon} as shown below but it did not work. 

```
{
  data.map((data, i) => (
    <div>
      <img src={data.icon} alt={data.category} />
      <ScoreComponent key={i} category={data.category} score={data.score} maxScore="100" />
    </div>
  ))
}
```
I could not figure out how to do this in a nice way, so I just created my own Icon component which ultimately allowed the icons to appear as intended. 

Also somehow my solution on Frontend Mentor is not centered in the design comparison, even though it is centered on my live website. I guess this is an issue on Frontend Mentor`s platform, as I could not find a solution that is centered in the design comparison. 

## Author

- Frontend Mentor - [@Orchi1904](https://www.frontendmentor.io/profile/Orchi1904)
- LinkedIn - [Alexej Kunz](https://www.linkedin.com/in/alexej-kunz/)
