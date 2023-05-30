
import Accordion from "../components/Accordion";

function AccordionPage (){
     
    const items=[
        {
         id:"frdwfh",
         label: "Can I use React?",
         content:"yes"
        },
        { 
            id:"frdwff",
          label:"Can I use js?",
          content:"yes"
        },
        {
         id:"fcrdwfh",
         label:"Can I use CSS?",
         content: "yes"
        }
    ];

    function myFunction(items, expandedIndex){

    }
   

    return  <Accordion items={items} />;  
}

export default AccordionPage;