var fname = "kenneth cunningham";
var career = "Management";
var info = "I'm a simple guy who finds purpose in assisting others";
var interest = ["Reading", "Writing", "Good conversation", "Walking", "Holistic living"];
var companyName = "City Winery";
var jobTitle = "Operations Director";
var discription = ["Hiring", "Training", "Project Management"];
var skills = ["Analytical", "Program Development", "Employee Development", "Digital Marketing"];
console.log("Name :", fname.toUpperCase());
console.log("Career :", career);
console.log("Discription :", info);
console.log('');
console.log('My Interests:');
interest.forEach(function (item) {
    console.log("*, " + item);
});
function displayPosition(companyName, jobTitle, discription) {
    console.log('');
    console.log("My Previous Experience:");
    console.log(jobTitle + " at " + companyName + " - " + discription);
}
displayPosition(companyName, jobTitle, discription);
function displaySkill(skill, cool) {
    if (cool === true) {
        console.log("* Bam: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
;
console.log('');
console.log("My Skills:");
displaySkill("math", false);
displaySkill("english", true);
displaySkill("geometry", false);
displaySkill("biology", true);
