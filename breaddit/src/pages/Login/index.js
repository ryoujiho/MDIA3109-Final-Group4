import React, {useState, useEffect} from 'react';
import Heading1 from 'comps/Headings/Heading1';
import Input from 'comps/Input';
import Divider from 'comps/Divider';
import Button from 'comps/Button';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

  const Login = () => {

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState(null);
    const history = useHistory();

    const CheckToken = async() => {
        var token = await sessionStorage.getItem("token");
        console.log("Token : ", token)
        if(token) {
          axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
          history.push("/Home");
        }
      }

    const Auth = async () => {
        var resp = await axios.post("/api/users/login" , {
          username:username,
          password:pass
        });

        if (resp.data !== "Something went wrong") {
          const token = resp.data
          sessionStorage.setItem("token", token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          history.push("/Home")
        }
    }

    useEffect(()=> {
      CheckToken();
    }, [])

    return <div className="pagebody">
              <div className="logo">
                <Heading1 text="Let's Breaddit!"/>
              </div>

              <div className="login_form">
                  <Input placeholder="Username" catchInput={(e) => 
                    setUsername(e.target.value)}
                  />
                  <Input placeholder="Password" type="password" catchInput={(e) => 
                    setPass(e.target.value)}
                  />
                  <Button text="Log in" width="100%" onClick={Auth}/>
              </div>
              <div>
                {error}
              </div>
              <Divider />
            </div>
  }

  export default Login;