import React from 'react';

const SwitchCase = (props) =>{
    const value1 = props.value;
     
    const CustomCase = ({children}) =>{
        return children;
    }
    const CustomSwitch = ({value , children}) => {
    console.log(value , children);
    const cases = [];
    const defaults = [];

   children.forEach(child  => {
      if(child?.type?.name === "CustomCase"){
      // either we recieve a function in a value
      if(typeof child?.props?.value === "function"){
           if(child?.props?.value(value)){
               cases.push(child);
           }
      }
      else if(value === child?.props?.value){
          cases.push(child)
      }
    }
      
    else if(child?.type?.name === "DefaultCase"){
           defaults.push(child);
      }
         });

         if(cases.length > 0){
            return cases;
        }
        else{
            return defaults;
        }
  
  




    
    }
    const DefaultCase = ({children}) =>{
       return children;

    }
            {/* we can get function or a single value itself */}

    return(
      
         <CustomSwitch value = {value1}>
            <CustomCase value = {(e) => e > 10}><div>Hello The value of custom case is 10</div></CustomCase>
            <CustomCase value = "20"><div>Hello The value of custom case is 20</div></CustomCase>

            <CustomCase value = "30"><div>Hello the value of custom case is 30 </div></CustomCase>
            <CustomCase value = "40"><div>Hello the value of custom case is 40</div></CustomCase>
            <DefaultCase><div>default case</div></DefaultCase>
         </CustomSwitch>
    )
}
export default SwitchCase;