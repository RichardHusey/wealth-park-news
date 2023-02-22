1. Requirement.
 01 - HackerNews List
 -Subject
   To display HackerNews info as list.
 -Requirements for UI
  1. Display a list of hacker news top stories(100news).
  2. Before data finishes fetching, please show a loader.
  3. Each news post has a link to navigate to the actual page as a new tab.
  4. Infinite scrolling or Pagination
  5. Animations
  6. Unit testing, snapshot testing
 -Requirements about Tech
  1. Use React. If you would like, you can use any meta framework of your choice
   (eg. Next.js).
  2. Use Typescript.
  3. DO NOT use a UI library (eg. material design, bootstrap). You can use a CSS
    framework if you would like(eg. styled-component, css-in-module, tailwindcss,
    etc).
2. How to run.
 1) Install dependencies, npm i
 2) Start app, npm start
3. What I have done.
 -UI
   1) Displayed a list of hacker news top 100 stories which could be loaded individually for user experience.
   2) Implemented loading during data fetching per story card.
   3) Implemented post link to navigate to the actual page as a new tab.
   4) Implemented Pagination (limit 10, total 10 pages)
   5) Animation with css.
 - Tech
   1) Used React.
   2) Used TypeScript
   3) Used styled-component
 4. What I have not done.
  - I didn't isolate fetch part from component so that it made unit testing hardly.
  - Because of above reason and lack of timeline, I didn't implement testing.
 5. User Interface and Workflow.
  ![Main UI](https://us![Loading](https://user-images.githubusercontent.com/112401701/220585356-030e30ca-6642-4a1d-a5e6-ed1507b72784.PNG)
  er-images.githubusercontent.com/112401701/220585318-36ab0106-0511-44b1-8d1b-6283bcf6ca85.PNG)

 Thanks for your time.
 Richard
