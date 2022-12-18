"use strict"
    let overallScore = overallCalc();//Assign variable to a function that calculates gear score
    let physicalScore = physicalCalc();
    let cognitiveScore = cognitiveCalc();
    let emotionalScore = emotionalCalc();
    let socialScore = socialCalc();

// Score calculating functions
    function overallCalc(){
        return physicalCalc + cognitiveCalc + emotionalCalc + socialCalc;
    }

    function physicalCalc(){
        let muscularStrength;
        let muscularEndurance;
        let cardioStrength;
        let cardioEndurance;
    }

    function cognitiveCalc(){

    }

    function emotionalCalc(){

    }

    function socialCalc(){

    }
// Selectors and DOM manipulations
    let homeButton = document.querySelector('#home-button');
    homeButton.addEventListener('click', renderHome);

// Function that renders page's cards
    function renderHome(){
        let overallScoreCard = document.querySelector('#overall-card');

        let overallCardContents = '<div className="max-w-sm rounded overflow-hidden shadow-lg">';
        overallCardContents += '<img class="w-full" src="/img/card-top.jpg" alt="">';
        overallCardContents += '<div class="px-6 py-4">';
        overallCardContents += '<div class="font-bold text-xl mb-2">Your Capability</div>';
        overallCardContents += '<p class="text-gray-700 text-base" id="overall-score">';
        overallCardContents += 'Your Score </p>';
        overallCardContents += '</div>';
        overallCardContents += '</div>';
        overallCardContents += '</div>';

        overallScoreCard.innerHTML = overallCardContents;
        }



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
----------------------------------------------------------------- */