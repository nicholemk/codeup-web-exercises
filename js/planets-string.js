(function(){
    "use strict";



    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    console.log(planetsString);

    var planetsArray = planetsString.split("|");

    console.log(planetsArray);



    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

     var newPlanetsString = planetsArray.join("<br>");
    console.log(newPlanetsString);


    /**
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


   var planetsListHTML = "<ul></ul>";

   var innerPlanetHTML = planets.Array.join("<li></li>");

   var endingPlanetListHTML = "</li></ul>";

   planetsListHTML += innerPlanetHTML + endingPlanetListHTML;

   console.log(planetsListHTML);




})();
