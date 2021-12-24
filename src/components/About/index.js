import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I? </h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu leo sit amet lacus euismod luctus sit amet ac massa. In dictum velit nec magna dictum finibus. Praesent non eros ullamcorper, congue mauris a, porttitor est. Duis rutrum ultricies odio, id mattis erat congue sed. Nam consectetur lorem id dictum consectetur. Suspendisse eget velit odio. Suspendisse rhoncus eu elit non vehicula. Nunc elementum, quam venenatis tincidunt pretium, nisl sem posuere ex, sed suscipit orci orci vel quam.</p>
        </section>
    );
}

export default About; 