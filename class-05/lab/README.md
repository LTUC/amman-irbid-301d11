# Deploy and Extend Your Portfolio

## Overview

You will be deploying a portfolio to [Heroku.com](http://www.heroku.com) using the `server` code provided as the basis for your deployment.

The portfolio will be in the public directory of the server, and you will be modifying that code to make the portfolio your own.

When you have completed all of your features, make sure that your deployed application reflects the changes.

## Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```md
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

## Feature #1: Deployment

Following the deployment checklist found in the [README for Today](../README.md), and using the starter code found in the `starter-code` folder of this lab, complete a full deployment of your portfolio lab to heroku.  

- You will need to initiate a new repository to complete this task.
- Add the URL to your live, deployed server to your README.

### Feature #2: Refactor the CSS

#### Why are we implementing this feature?

- As a user, I want the portfolio to have a clean UI so that it is visually appealing.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the portfolio contents should be displayed  

#### How are we implementing it?

- Refactor the `main.css` file using SMACSS principles.
  - You may decide how many files to include, but at the minimum should include  `base.css`, `layout.css`, and `modules.css`. However, think through the way you separate your CSS rules. For example, you may want several CSS files in a `modules` folder, if you feel that the code needs to be organized in that manner.

### Feature #3: Modify the contents

#### Why are we implementing this feature?

- As a user, I want to view a unique portfolio so that the skills and personality of the developer are portrayed.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the content should be unique and reflect the skills and personality of the developer  

#### How are we implementing it?

- Modify the contents of the template to make it your own. The HTML elements may remain the same if you like, but the content should be adapted to reflect your personal details and skills.
- Apply the following changes, some of which were part of your prework for this course:
  - Next to the header image, add your name and a short, 2-3 word title.
  - In the Intro section, add a personal headline. This should be the same as or similar to your headline on your LinkedIn profile.
  - In the Portfolio section, state what you are excited about in tech. Add links to projects and include placeholders for future 301 and 401 projects. If you would like, you can add links to sites such as LinkedIn and GitHub here, or social sites.
  - In the About Me section, add your personal pitch and banner photo.
- Add you own color scheme and Google fonts.
- Change the content and images to reflect your personal preferences. If you are using online images, make sure they are licensed for free, commercial use. For example, [Unsplash](https://unsplash.com/) has a nice variety of free images.
- Update the list of social media icons with your links using icons for your favorite social media sites from IcoMoon or Font Awesome.
- Keep in mind that this template is just a starting point. It is yours to modify to reflect your personal online presence as a software developer so have fun and be creative!

## Feature #4: Add functionality

### Why are we implementing this feature?

- As a user, I want to view a unique portfolio so that the developer's projects and skills stand out.

### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the portfolio contents should be displayed  

### How are we implementing it?

- Complete the following features:
  - Use CDNs for content from libraries and remove the source code files from the project, as applicable
    - Note: CDNs are available for all libraries except Breakpoints.JS
  - In tablet view, show a fixed navigation menu instead of a hamburger menu
  - Convert the large image at the top of your portfolio to a video background or an image carousel containing at least three images
  - Add any other UI features that you feel will make your portfolio unique and personalized

## Submission Instructions

1. Complete your Feature Tasks for the lab on a branch. 
1. Create a PR back to the `master` branch of your repository, and merge it cleanly.
1. Deploy again, so your latest code is published live via Heroku. 
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
