const Form = () => {
    
    const handleClick = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const message = formData.get("message");
        console.log("Message:", message);
        console.log("Link clicked but event default prevented");
    
    };
  
    return (
        <>
  
            {/* Link exmaple */}
      
    
            <a href="https://www.google.com" onClick={handleClick}>
                Link
            </a>
    

            {/* Form exmaple */}
            <form onSubmit={handleClick}>
                <div style={{ display: "flex", gap: "10px", width: "200px", marginTop: "20px" }} >
                    <input name="message" type="text" placeholder="Enter your name" />

                    <button type="submit">Submit</button>


                </div>

            </form>
  
        </>
    );
}


export default Form;