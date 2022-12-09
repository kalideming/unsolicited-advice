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
        <div class="self-center object-center items-center m-20">
            <div class="self-center object-center items-center text-center font-Barrio text-5xl text-white bg-black opacity-90 rounded-xl">
                <h1>Tell Us, O Wise One, How To Live</h1>
            </div>
            <br></br>
            <div class="self-center object-center items-center text-center">
                <form onSubmit={handleSubmit}>
                    <input 
                    class="w-60 rounded text-center font-NanumBrushScript text-xl"
                    type="text" 
                    name="topic" 
                    placeholder="Topic of Shit Advice" 
                    value={formData.topic} 
                    onChange={handleChange}/>
                    <br></br>
                    <input 
                    class="w-60 text-center font-NanumBrushScript text-xl"
                    type="text" 
                    name="relation" 
                    placeholder="Recipient of Shit Advice" 
                    value={formData.relation} 
                    onChange={handleChange}/>
                    <br></br>
                    <input 
                    class="w-60 h-60 text-center font-NanumBrushScript text-2xl"
                    type="text" 
                    name="advice" 
                    placeholder="Your Shit Advice" 
                    value={formData.advice} 
                    onChange={handleChange}/>
                    <br></br>
                    <br></br>
                    <button class="font-Barrio text-3xl text-black bg-white opacity-90 rounded-3xl" type="submit">You Know Best</button>
                </form>
            </div>
        </div>
      );

};

export default NewAdvicePage;