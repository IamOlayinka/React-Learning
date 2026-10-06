import { useState } from "react";
import { produce } from "immer";
import {Trash, RefreshCcw, ArrowDownWideNarrow} from "lucide-react";


// This component will display a list of animals with their name, type, and speed. It will also have buttons to add a new random animal, remove an animal, replace an animal with a new random animal, and sort the animals by speed in ascending order. The state of the animals will be managed using the useState hook and the produce function from immer to create a new state based on the current state.
const AnimalUpdate = () => {
    // This will create a state variable called animals with an initial value of an array of objects representing different animals. Each object will have an id, name, type, and speed property.
    const [animals, setAnimal] = useState([
        { id: 1, name: "Dog", type: "Mammal", speed: 100 },
        { id: 2, name: "Cheetah", type: "Mammal", speed: 120 },
        { id: 3, name: "Eagle", type: "Bird", speed: 160 },
        { id: 4, name: "Shark", type: "Fish", speed: 80 },
    ]);
    // This will create a new array of animals with random id, name, type, and speed. The id will be generated using the Date.now() method to ensure that it is unique. The name, type, and speed will be randomly selected from the newAnimal array.
    const newAnimal = [
        { id: Date.now(), name: "Horse", type: "Mammal", speed: 88 },
        { id: Date.now(), name: "Falcon", type: "Bird", speed: 200 },
        { id: Date.now(), name: "Rabbit", type: "Mammal", speed: 40 },
        { id: Date.now(), name: "Dolphin", type: "Mammal", speed: 60 },
        { id: Date.now(), name: "Elephant", type: "Mammal", speed: 25 },

    ];

    // This will map through the animals state and create a list of animals with their name, type, speed, and buttons to remove, replace, and sort the animals. The remove button will remove the animal from the list, the replace button will replace the animal with a new random animal from the newAnimal array, and the sort button will sort the animals by speed in ascending order.
    const animalList = animals.map((animal) => (
        <ul style={{ padding:0, listStyleType: "none" }} key={animal.id}>
            <li key={animal.id} style={{ display: "flex", marginBottom: "5px",borderBottom: "1px solid #252525"}}>
                <div >
                    <p>{animal.name} - {animal.type} - {animal.speed} km/h</p>  
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "flex-end", marginLeft: "auto" }}>
                    <Trash size={16}
                        onClick={() => removeAnimal(animal.id)}
                        style={{ padding: "5px 10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}
                    />
                    <RefreshCcw size={16}
                        onClick={() => replaceAnimal(animal.id)}
                        style={{ padding: "5px 10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}
                    />
                    
                </div>
            </li>
                
            
        </ul>
        )); 
    // function to add a new random animal from the newAnimal array to the animals state using the produce function from immer to create a new state based on the current state.   
    const addAnimal = () => {
        setAnimal(
            produce(animals, draft => {
                draft.push(newAnimal[Math.floor(Math.random() * newAnimal.length)]);
            }))
    };
   // function to remove an animal from the animals state based on its id using the filter function to create a new state based on the current state.
    const removeAnimal = (id) => {
        setAnimal(animals.filter(animal => animal.id !== id));
    };
  // This will replace the animal with a new random animal from the newAnimal array using the produce function from immer to create a new state based on the current state.
    const replaceAnimalProduce = (id) => {
        setAnimal(
            produce(animals, draft => {
                const index = draft.findIndex((animal) => animal.id === id);
                if (index !== -1) {
                    draft[index] = { ...draft[index], ...newAnimal[Math.floor(Math.random() * newAnimal.length)] };
                }
            }))
    };
 // This will replace the animal with a new random animal from the newAnimal array using the map function to create a new state based on the current state.
    const replaceAnimal = (id) => {
    setAnimal(
        animals.map(animal =>
            animal.id === id
                ? { ...animal, ...newAnimal[Math.floor(Math.random() * newAnimal.length)] }
                : animal
        )
    );
    };
    
// This will sort the animals by speed in ascending order using the sort function to create a new state based on the current state.
    const sortAnimals = () => {
        setAnimal([...animals].sort((a, b) => a.speed - b.speed));
        
    };

        return (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f0f0f0", margin: "20px auto" }}>
                <h2>Animals and Their Speed</h2>
                
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                <button onClick={addAnimal} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Add Random Animal
                </button>
                 <ArrowDownWideNarrow size={24}
                        onClick={() => sortAnimals()}
                        style={{ padding: "5px 10px", backgroundColor: "#FF9800", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}
                        
                    />
                </div>
                {animalList}
            </div>
        );
        
    }


    export default AnimalUpdate;