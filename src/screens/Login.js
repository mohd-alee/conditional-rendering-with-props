export default function Login(){
    return (
        <form>
            <h2 className="text-center text-white my-4">Login Form</h2>
            <input type="email" className="form-control mb-3" placeholder="Email Address"/>
            <input type="password" className="form-control mb-3" placeholder="Password"/>
            <input type="submit" className="btn btn-success w-100" value="Login"/>
        </form>
    );
}
