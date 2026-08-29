import { useState, useEffect} from "react";

export default function UserForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    // Automatically clear feedback message after 3 seconds
    useEffect(() => {
        if (!feedback) return;

        const timer = setTimeout(() => {
            setFeedback("");
        }, 3000);

        // Cleanup timer if component unmounts or feedback changes again
        return () => clearTimeout(timer);
    }, [feedback]);

    function handleUser(e) {
        e.preventDefault();
        setFeedback("User has been saved successfully");
        console.log("username:", username);
        console.log("email:", email);
    }

    return (
        <form onSubmit={handleUser}>
            {feedback && <p className="alert alert-success">{feedback}</p>}
            
            <div className="form-group mb-2">
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Username" 
                    name="username" 
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            
            <div className="form-group mb-2">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email Address" 
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group mb-2">
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    className="form-control" 
                />
            </div>

            <div className="row g-3">
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="col-auto">
                    <button 
                        type="reset" 
                        className="btn btn-danger"
                        onClick={() => { setUsername(""); setEmail(""); setFeedback(""); }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </form>
    );
}