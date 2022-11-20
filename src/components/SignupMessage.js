export default function SignupMessage(props){
    return (
        <p className="text-white text-center mt-4">Don't have an account yet? Click <a href="#" onClick={()=>{props.setScreen('signup')}}>here</a> to sign up.</p>
    );
}