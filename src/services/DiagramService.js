import { BASE_URL } from "./config";


  async function postDiagram (diagram) {
    // console.log(diagram);
    try {
      const response = await fetch (`${BASE_URL}`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: diagram
      })
      const data  = await response.json();
      return data;

    } catch (error) {
      throw error;
    }
};

export default postDiagram;