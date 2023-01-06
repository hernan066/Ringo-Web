import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

/* Response
"sub" (Subject) Claim - Users google internal id
"aud" (Audience) Claim - Who the token was intended for.
"exp" (Expiration Time) Claim - when it will expire
"nbf" (Not Before) Claim - when it was good from
"iat" (Issued At) Claim - when it was issued
"jti" (JWT ID) Claim - Id of this claimset.
"azp". Authorized party - the party to which the ID Token was issued */

export const GoogleAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  async function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token" + response.credential);
    const userObject = jwt_decode(response.credential);
    if (userObject) {
      try {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/google`, {
          id_social: userObject.sub,
          email: userObject.email,
          name: userObject.given_name,
          lastName: userObject.family_name,
        });
        console.log(data)
        if(data){
          dispatch(setCredentials({ ...data }));
          navigate('/')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1079768340170-0t1b4vceu0ibs35fofa0v3ip29akihsl.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("singInDiv"), {
      theme: "filled_blue",
      size: "large",
      type: "standard",
      text: "continue_with",
      width: 240,
    });
  }, []);

  return (
    <>
      <div id="singInDiv"></div>
    </>
  );
};
