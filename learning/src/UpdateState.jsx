import { useState } from "react";
import { produce } from "immer";  //immer is a library that allows you to work with immutable state in a more convenient way. It provides a simple and intuitive API for updating nested state without mutating the original state object.

const UpdateState = () => {
    // Initial state with nested objects
    const [user, setUser] = useState({
        name: "John Doe",
        bio: {
            age: 30,
            email: "john.doe@example.com"
        },
        details: {
            address: " 222 Livery Street Birmingham",
            job: "Software Engineer"
        }
    });

    // Wrong way to update state that causes mutating the state directly and not triggering a re-render
    const handleUpdateState = () => {
        user.name = "Jane Doe";
        setUser(user);
    }

    // Correct way to update state that creates a new object and triggers a re-render
    const handleUpdateStateCorrect = () => {
        setUser({
            ...user,
            name: "Jane Doe",
        })
    }

    //Updating nested state correctly
    const handleUpdateNestedState = () => {
        setUser({
            ...user,
            bio: {
                ...user.bio,
                age: 25
            },
            details: {
                ...user.details,
                address: " 123 Main Street Birmingham",
                job: "Senior Software Engineer"
            }
        });
    }
// Using Immer to update nested state
    const updateNestedStateWithImmer = () => {
        setUser(
            produce(user, (draft) => {
                //immer allows direct updates without breaking immutability, it creates a draft state that can be modified directly, and then produces a new immutable state based on the changes made to the draft.
                draft.bio.age = 40;
                draft.details.address = "800 Elm Street Birmingham";
        }));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" , fontFamily: "Arial", fontSize: "16px", padding: "20px"}}>   

            <button onClick={handleUpdateState}>Update State (Wrong Way)</button>
            <button onClick={handleUpdateStateCorrect}>Update State (Correct Way)</button>
            <button onClick={handleUpdateNestedState}>Update Nested State (Correct Way)</button>
            <button onClick={updateNestedStateWithImmer}>Update Nested State with Immer</button>

            <p> <strong>Name:</strong> {user.name} </p>
            <p> <strong>Age:</strong> {user.bio.age} </p>
            <p> <strong>Email:</strong> {user.bio.email} </p>
            <p> <strong>Address:</strong> {user.details.address} </p>
            <p> <strong>Job:</strong> {user.details.job} </p>
        </div>
    );
}       


export default UpdateState;



