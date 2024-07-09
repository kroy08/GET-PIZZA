const tabs =  document.querySelectorAll(".offer__img");
// the purpose of this --- to put an active in all images 
const contents = document.querySelectorAll(".offer__details");
// the purpose of this --- to put an active in all details

tabs.forEach((tab) =>{
    tab.addEventListener("click", () =>{
        removeActiveTab(); //this is just a variable
        tab.classList.add("active");
        const activeContent = document.querySelector(`#${tab.id}-content`);
        //$ it is used as its alias and used it o know  the string that needs to be imported in JS, 
        //it  is shorthand for the  getElementByID method.
        removeActiveContent();
        activeContent.classList.add("active");
    });
});

function removeActiveTab(){
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    })
};
function removeActiveContent(){
    contents.forEach((content) => {
        content.classList.remove("active");
    })
};