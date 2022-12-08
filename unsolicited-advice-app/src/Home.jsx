import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
      <section>
        <h2>
          Welcome To The Online Dumpster-Gallery Of Advice No One Wants.
        </h2>
        <p>
          Dumpster-Gallery? What is that?! Well, imagine if someone took a literal dumpster and made an art gallery of it. Wow, so avant-garde. Picasso could never! But I could. And I did.
        </p>
        <p>
          Unsolicited Advice was made for folks who want to support, but just can't seem to shut the hell up. It was made for those chomping at the bit to force-feed their two billion cents to all those around them. Do you know what it's like to choke on cents? Do you?! No? Well, it sucks.
        </p>
        <p>
          Enter Unsolicited Advice.
        </p>
        <p>
          Instead of inundating those around you with your undesired, wayward counsel, post it here! Read the unsolicited advice of others, and marvel as your relationships flourish when you speak less and listen more.
        </p>
        <span>
          <div>
            <Link className="button" to="/new">
            Tell Everyone How To Live Their Lives
            </Link>
            <Link className="button" to="/advice">
            Be Told How To Live Your Life
            </Link>
          </div>
       </span>
      </section>
    );
  }
  
  export default Home;