import { TEST } from "../ActionTypes/TestType";
import axios from "axios";

export const TestAction = () => ({
    type: TEST,
    payload:"test firstName"
  });

  export  const serverRequest=(url,methodType,data?,params?,config?)=>
  {
      
      var promiseObject=new Promise(
          (resolve,reject)=>
          {
          axios({
      method: methodType,
      url: url,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': "Basic dDMwZjAxMTIzMmRhZWEyZjktZDg5ZDdlYzc3YjNkMjg2ZjoyMDNiOGNmZDUyMjA0YzI1YmZiMWJkYjU4ZjRiY2I1OA=="

      }
      })
      .then( (res)=> {
       resolve((res));
      })
      .catch( (err) =>{
         reject((err));
      });
          }
      )
  
     return promiseObject;
  }

 