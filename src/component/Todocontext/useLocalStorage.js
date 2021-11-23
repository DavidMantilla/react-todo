import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
      const [loading, setLoading] = React.useState(true);
      const [item, setItem] = React.useState(initialValue);
      
      React.useEffect(() => {
        setTimeout(()=>{
          try {
            
        
      const local=localStorage.getItem(itemName);
      let Items=initialValue;
      if(!local){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        Items=initialValue;
    
      }else{
       
        Items= JSON.parse(local);
      }
      setItem(Items);
      setLoading(false);
    } catch (error) {
        setError(error);
    }
    },4000);
    });
      const guardarItem=(nuevoItem)=>{
    
        try {
          localStorage.setItem(itemName,JSON.stringify(nuevoItem));
          setItem(nuevoItem);
          
        } catch (error) {
          
        }
    
      }
    
      return {item, guardarItem,error,loading}
    
    
    }
    export { useLocalStorage };