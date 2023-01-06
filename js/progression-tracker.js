"use strict"
let dashboard = document.querySelector("#dashboard");
dashboard.addEventListener('click', loadDashboard);

function loadDashboard(){
    makeCard();
}
function makeCard(){
    let card = '<div class="max-w-sm rounded overflow-hidden shadow-lg content-card">\n';
    card += '<div class="font-bold text-xl mb-2"></div>';
    card += '<p class="text-gray-700 text-base">'
    card += ''
    card += '</p>'
    card += '</div>'

    return card;
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