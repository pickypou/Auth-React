import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext';


export default function SignUp() {

    const { modalState, toggleModals, SignUp } = useContext(UserContext)

    const [validation, setValidation] = useState(" ");

    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault()

        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 Characters min")
            return;
        }
        else if(inputs.current[1].value !== inputs.current[2].value) {
            setValidation("Password do not match")
            return;
        }

        try {
            const cred = await SignUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
        } catch (error) {
            
        }
    }


    return (
        <>
            {modalState.signUpModal && (


                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        onClick={() => toggleModals("close")}
                        className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>{/*w-100*/}
                    <div className="position-absolute top-50 start-50 translate-middle bg-light" style={{ minWidth: "400px" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title ">Sign Up</h5>
                                    <button
                                        onClick={() => toggleModals("close")}
                                        className="btn-close"></button>

                                </div>{/*modal-header*/}
                                <div className="modal-body">
                                    <form
                                        ref={formRef}
                                        onSubmit={handleForm}
                                        className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail" className='form-label'>Email address</label>
                                            <input
                                                ref={addInputs}
                                                type="email"
                                                name='email'
                                                required
                                                id='signUpEmail'
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className='form-label'>password</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                name='pwd'
                                                required
                                                id='signUpPwd'
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className='form-label'>Repeat password</label>
                                            <input
                                                ref={addInputs}
                                                type="password"
                                                name='pwd'
                                                required
                                                id='repeatPwd'
                                                className="form-control"
                                            />
                                            <p className="text-danger mt-1">{validation}</p>
                                        </div>
                                        <button className="btn btn-primary">Submit</button>
                                    </form>
                                </div>{/*modal-body*/}
                            </div>{/*modal-content*/}
                        </div>{/*modal-dialog*/}
                    </div>{/*position-absolute*/}

                </div>/*position-fixxed*/

            )}
        </>
    );
}
