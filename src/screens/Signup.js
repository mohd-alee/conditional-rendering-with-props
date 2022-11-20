export default function Signup(){
    return (
        <form>
            <h2 className="text-center text-white my-4">Signup Form</h2>
            <input type="text" className="form-control mb-3" placeholder="Full Name"/>
            <input type="email" className="form-control mb-3" placeholder="Email Address"/>
            <input type="password" className="form-control mb-3" placeholder="Password"/>
            <input type="password" className="form-control mb-3" placeholder="Confirm Password"/>
            <input type="submit" className="btn btn-success w-100" value="Signup"/>
        </form>
    );
}