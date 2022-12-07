import React, { useState } from "react";

function NewAdvicePage({ handleNewAdvice }) {

    const [formData, setFormData] = useState({
        topic: "",
        relation: "",
        advice: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event) {
        const newAdvice = {
            topic: formData.topic,
            relation: formData.relation,
            advice: formData.advice
        };

        fetch("http://localhost:3000/unsolicited", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAdvice)
        })
            .then((r) => r.json())
            .then(handleNewAdvice)
    };

    return (
        <div>
          <h2>Tell Us, O Wise One, How To Live</h2>
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="topic" 
            placeholder="Advice Topic" 
            value={formData.topic} 
            onChange={handleChange}/>
            <input 
            type="text" 
            name="relation" 
            placeholder="relation to recipient" 
            value={formData.relation} 
            onChange={handleChange}/>
            <input 
            type="text" 
            name="advice" 
            placeholder="some shitty advice" 
            value={formData.advice} 
            onChange={handleChange}/>
            <button type="submit">You Know Best</button>
          </form>
        </div>
      );

};

export default NewAdvicePage;