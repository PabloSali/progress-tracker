"use strict"
// Selectors for Nav Bar
let dashboard = document.querySelector("#user-dashboard");
dashboard.addEventListener('click', loadDashboard);
let attributes = document.querySelector("#user-attributes");
attributes.addEventListener('click', loadAttributes);
let skills = document.querySelector("#user-skills");
skills.addEventListener('click', loadSkills);
let tests = document.querySelector("#user-tests");
tests.addEventListener('click', loadHowToTest);

function loadDashboard(){
    loadPageTitle("Dashboard");
}
function loadAttributes(){
    loadPageTitle("Attributes");
}
function loadSkills(){
    loadPageTitle("Skills");
}
function loadHowToTest(){
    loadPageTitle("How To Test");
}

function loadPageTitle(pageTitle){
    if(pageTitle === "Dashboard") {
        console.log("dashboard loaded")
        let titleCard = document.querySelector("#page-title");
        titleCard.innerHTML = "Dashboard";
    }
    if(pageTitle === "Attributes") {
        let titleCard = document.querySelector("#page-title");
        titleCard.innerHTML = "Attributes";
    }
    if(pageTitle === "Skills") {
        let titleCard = document.querySelector("#page-title");
        titleCard.innerHTML = "Skills";
    }
    if(pageTitle === "How To Test") {
        let titleCard = document.querySelector("#page-title");
        titleCard.innerHTML = "How To Test";
    }
}



// -- Stats Chart End --
/* -----------------------------------------------------------------
                       Operation Plan
- Create a dashboard to display all important data
- Overall Caliber Score
    - Need a Variable that assigned to the overall score
        - Use function to add and feed data to variable
    - Need to use dom manip. to push to HTML

- Skills that are close to next level
    - Create function that is called once a skill is within a certain percentage of being "leveled up"
    - Create a better word for "leveled up" (maybe something with caliber)
    - Compare variables within that percentage and display on the three closest ones

- Skills that are deteriorating
    - Create function that is called once a certain amount of degradation is met

- Skills that are marked as favorite
    - Button that adds this skill to the HTML displaying info

- Create functionality that establishes core service of Wherewithal
- Create Deterioration
    - Create variable that defines how fast a skill deteriorates
    - Assign value of degradation within the skills calculation function
    - Research skills degradation

- Create Progression
    - Create skill breakdowns, so they can feed multiple skills
    -

- Create Parent Attributes that house skills
    -

- Create customization option
    - Dark mode toggle
    - Background selector

- Create measures for muscular endurance

----------------------------------------------------------------- */