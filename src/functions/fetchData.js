
async function fetchData(url){
    try{
      const response = await fetch(url); 

       if(!response.ok){
        throw new Error('Network response was not okay.');
       } 
       const data = response.json();
       return data;
    } catch(error){
        throw new Error('There was an issue with the fetch request.');
    }
}

module.exports = fetchData;