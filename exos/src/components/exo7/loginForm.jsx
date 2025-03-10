import { useRef } from "react";

const LoginForm = ({parentFunction})=>{

    const username = useRef();
    const password = useRef();

    const getValueFromInput = () => {
        parentFunction(username.current.value, password.current.value);
    }

        return (
            <>
    <form action={getValueFromInput}>
                <input type="text" ref={username} placeholder="Identifiant"/>&nbsp;
                <input type="password" ref={password} placeholder="Mot de passe"/>&nbsp;
                <button type='submit'>Valider</button>
            </form>
            </>
        );
}
export default LoginForm;