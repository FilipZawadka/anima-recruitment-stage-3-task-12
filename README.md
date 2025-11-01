# Thank You card generator for Anima International Recruitment process

## How to run and deploy

To run the project locally simply run

```
npm install
```
To install all dependencies and then 
```
npm run dev

```
To run on localhost.

```
npm run build
```

Builds the project to "dist" directory.


### How to deploy

Project is deployed here:

https://animarecruitmentthankyoutask.netlify.app/

And can be updated by simply pushing changes to master branch.


## Code structure

All logic of the project is under src/ directory

Main app can be found in src/App.tsx file, while the
thank you card printing componnt is located under src/components/Card.tsx. Logic of the printing is in src/utils/pdf.ts
