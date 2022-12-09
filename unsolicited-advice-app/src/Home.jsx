import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <div class="block max-w-screen-md justify-self-center object-center m-20 bg-white bg-opacity-60 rounded-lg border-neutral-800 border-2">
        <div class="text-center m-8 font-Barrio text-4xl">
          <h1>
          Welcome To The Online Dumpster-Gallery Of Advice No One Wants.
        </h1></div>
        <div class="break-words text-center font-Gaegu text-xl">
          <p class="break-word text-center m-4">
            Dumpster-Gallery? What is that?! Well, imagine if someone took a literal dumpster and made an art gallery of it. 
            Wow, so avant-garde. Picasso could never! But I could. And I did.

            Unsolicited Advice was made for folks who want to support, but just can't seem to shut the hell up. It was made 
            for those chomping at the bit to force-feed their two billion cents to all those around them. Do you know what it's like to choke on cents? Do you?! No? Well, it sucks.

            Enter Unsolicited Advice.

            Instead of inundating those around you with your undesired, wayward counsel, post it here! 
            Read the unsolicited advice of others, and marvel as your relationships flourish when you speak less and listen more.
          </p>
        </div>
        <span>
          <div>
            <div class="items-center text-center self-center m-4 font-Barrio text-2xl border-2 bg-white border-black rounded">
            <Link className="button" to="/new">
            Tell Everyone How To Live Their Lives
            </Link>
            </div>
            <div class="items-center self-center text-center m-4 font-Barrio text-2xl border-2 bg-white border-black rounded">
            <Link className="button" to="/advice">
            Be Told How To Live Your Life
            </Link></div>
          </div>
       </span>
      </div>
    );
  }
  
  export default Home;