
async function fetchData(url){
    try{
      const response = await fetch(url); 

       if(!response.ok){
        throw new Error('There was a network error.');
       } 
       const data = await response.json();
       return data;
    } catch(error){
        throw new Error('There was a network error.');
    }
}

module.exports = fetchData;