let fname:string="kenneth cunningham";
let career:string = "Management";
let info:string="I'm a simple guy who finds purpose in assisting others";
let interest:string[] =["Reading","Writing","Good conversation","Walking","Holistic living"];
let companyName:string="City Winery";
let jobTitle:string="Operations Director";
let discription:string[]=["Hiring","Training","Project Management"];
let skills:string[]=["Analytical","Program Development","Employee Development","Digital Marketing"];




console.log("Name :", fname.toUpperCase());
console.log("Career :", career);
console.log("Discription :", info);
console.log('');
console.log('My Interests:');

interest.forEach(item=>{
    console.log(`*, ${item}`)
})


function displayPosition(companyName:string,jobTitle:string,discription:string[]){
console.log('')
console.log("My Previous Experience:");
console.log(`${jobTitle} at ${companyName} - ${discription}`)
}
 
displayPosition(companyName,jobTitle,discription);

function displaySkill(skill:string,cool:true|false) {
    if (cool === true) {
        console.log(`* Bam: ${skill}`);
    } else {
        console.log(`* ${skill}`);
    }

};

console.log('')

console.log("My Skills:");
displaySkill("math",false);
displaySkill("english",true);
displaySkill("geometry",false);
displaySkill("biology",true);



