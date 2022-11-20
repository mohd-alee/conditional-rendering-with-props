export default function LoginMessage(props){
    return (
        <p className="text-white text-center mt-4">Already have an account? Click <a href="#" onClick={()=>{props.setScreen('login')}}>here</a> to login</p>
    );
}