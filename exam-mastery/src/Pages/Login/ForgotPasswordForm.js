import { useState } from "react";
import { Link } from "react-router-dom";
import Form from './Form'
import 'bootstrap/scss/bootstrap.scss';



const Forgot = () => {

    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});

    const validateforgotPassword = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }
    function sendEmail(){
        fetch('http://localhost:8080/exam-mastery/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Error sending email');
              }
              console.log('Email sent successfully');
            })
            .catch(error => {
              console.error(error);
            });
    }
    const forgotPassword = (e) => {
        e.preventDefault();

        const validate = validateforgotPassword();

        if (validate) {
            alert('Reset password link is sent to '+email);
            setValidate({});
            setEmail('');
        }
    }

    return (

        <div className="row g-0 auth-wrapper" style={{marginTop:'150px',marginRight:'500px'}}>
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center" >
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                      <p style={{fontSize:'30px'}}>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                    </div>
                                </div>
                                
                                <div className="text-center">
                               <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto" style={{backgroundColor: 'black'}} onClick={sendEmail}>Forgot Password</button>
                                </div>

                            </form>
                            <hr />
                            <div className="auth-option text-center pt-2">
                            <Link className="text-link" to="/login" style={{ color: "black" }}>Back to Login</Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Forgot;