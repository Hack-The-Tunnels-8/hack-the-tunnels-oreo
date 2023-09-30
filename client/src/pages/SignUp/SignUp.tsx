import { Page } from "../../components";
import "./SignUp.style.scss";

function SignUp() {
  return (
    <Page>
      <div className="signup-page">
        <input placeholder="username">
        
        </input>

        <br/>
        <br/>

        <input placeholder="pass">
        
        </input>
        <br/>
        <br/>
        <button>
        Sign Up
        </button>
      </div>
      
    </Page>
  );
}

export default SignUp;
