import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className = "container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className ="form-group">
                            <label>E-mail</label>
                            <input type="email" className ="form-control" placeholder="Digite seu e-mail" required/>
                    </div>
                    <div className ="form-group">
                            <label>Senha</label>
                            <input type="password" className ="form-control" placeholder="Digite uma senha" require/>
                    </div>
                    <div className ="form-group">
                            <label>Confirmação de Senha</label>
                            <input type="password" className ="form-control" placeholder="Confirme sua senha" required/>
                    </div>
                    <div>
                        <buttom type="submit" className="btn btn-primary btn-round">Cadastrar</buttom>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Já possui uma conta?</div>
                    <Link to='/sign-in'>Sign In</Link>
                </div>
            </div>
        </div>



    )
}

export default SignUp;