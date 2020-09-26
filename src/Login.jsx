import React from "react"
import {auth,provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login()
{
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            console.log(result);
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            });
          })
          .catch((error) => {
            alert(error.message);
          });
      };
    
return(
    <div  className="Login">
    <img style={{marginRight:"auto",marginLeft:"auto",display:"block"}} src="data:image/png;base64,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"></img>
    <h1 style={{textAlign:"center"}}> Welcome to slack-clone</h1>
    <button onClick={signIn} style={{marginRight:"auto",marginLeft:"auto",display:"block"}} type="button" className="btn btn-outline-success">SIGN IN with google to continure</button>
    </div>
);

}
export default Login;