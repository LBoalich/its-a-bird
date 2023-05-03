import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    return (
        <div>
            <div className="quiz-banner">
                <p>Which cockatoo are you?  Take the <span><Link to="/quiz" className="quiz-link">QUIZ</Link></span> to find out!</p>
            </div>
            <article className="home-container">
                <picture
                   id="left-top"
                >
                    <source 
                        srcSet={`${require("./homePics/punk-rock-80.webp")}, ${require("./homePics/punk-rock.webp")} 1.5x 2x`}
                        media="(min-width: 1601px)" 
                    />
                    <source 
                        srcSet={`${require("./homePics/punk-rock-60.webp")}, ${require("./homePics/punk-rock-90.webp")} 1.5x, ${require("./homePics/punk-rock.webp")} 2x`}
                        media="(min-width: 1025px)"
                    />
                    <source 
                        srcSet={`${require("./homePics/punk-rock-40.webp")}, ${require("./homePics/punk-rock-60.webp")} 1.5x, ${require("./homePics/punk-rock-80.webp")} 2x`}
                        media="(min-width: 747px)"
                    />
                    <source 
                        srcSet={`${require("./homePics/punk-rock-30.webp")}, ${require("./homePics/punk-rock-45.webp")} 1.5x, ${require("./homePics/punk-rock-60.webp")} 2x`}
                        media="(min-width: 481px)"
                    />
                    <source 
                        srcSet={`${require("./homePics/punk-rock-20.webp")}, ${require("./homePics/punk-rock-30.webp")} 1.5x, ${require("./homePics/punk-rock-40.webp")} 2x`}
                        media="(min-width: 0px)"
                    />
                    <img 
                        src={require("./homePics/punk-rock-40.webp")} 
                        alt="Punk Rock Cockatoo" 
                        className="home-img" 
                    />
                </picture>
                <picture 
                className="home-font-container"
                >
                    <source 
                        srcSet={require("./homePics/cockatoos-80.webp")} 
                        media="(min-width: 1601px)"
                    />
                    <source 
                        srcSet={require("./homePics/cockatoos-60.webp")} 
                        media="(min-width: 1025px)"
                    />
                    <source 
                        srcSet={require("./homePics/cockatoos-40.webp")} 
                        media="(min-width: 747px)"
                    />
                    <source 
                        srcSet={require("./homePics/cockatoos-20.webp")} 
                        media="(min-width: 481px)"
                    />
                    <source 
                        srcSet={require("./homePics/cockatoos-10.webp")} 
                        media="(min-width: 0px)"
                    />
                    <img 
                        src={require("./homePics/cockatoos-40.webp")} 
                        alt="featherd font reading 'Cockatoos'" className="home-font-img"
                    />
                </picture>
                <p> are the true rockstars of the bird world! These feathery divas love to headbang to their own beat, with their luscious crests bouncing in perfect rhythm. They're not just singers, they're screamers too! With their powerful lungs, they can belt out a tune that can be heard from miles away.
                </p>
                <br />
                <picture
                   id="right"
                >
                    <source 
                        srcSet={`${require("./homePics/dancing-80.webp")}, ${require("./homePics/dancing.webp")} 1.5x 2x`}
                        media="(min-width: 1601px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/dancing-60.webp")}, ${require("./homePics/dancing-90.webp")} 1.5x, ${require("./homePics/dancing.webp")} 2x`}
                        media="(min-width: 1025px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/dancing-40.webp")}, ${require("./homePics/dancing-60.webp")} 1.5x, ${require("./homePics/dancing-80.webp")} 2x`}
                        media="(min-width: 747px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/dancing-30.webp")}, ${require("./homePics/dancing-45.webp")} 1.5x, ${require("./homePics/dancing-60.webp")} 2x`}
                        media="(min-width: 481px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/dancing-20.webp")}, ${require("./homePics/dancing-30.webp")} 1.5x, ${require("./homePics/dancing-40.webp")} 2x`}
                        media="(min-width: 0px)"
                        fetchpriority="high"
                    />
                    <img 
                        src={require("./homePics/dancing-40.webp")} 
                        alt="Breakdancing Cockatoo" 
                        className="home-img"
                        fetchpriority="high" 
                    />
                </picture>
                <p> But that's not all - these quirky creatures have a knack for saying the funniest things! From mimicking human speech to coming up with their own unique phrases, they'll have you in stitches with their witty repertoire. Just make sure to turn up the music and watch them bust a move with their hilarious dance moves - you won't be able to resist joining in on the fun!
                </p>
                <br />
                <picture
                    id="left-bottom"
                >
                    <source 
                        srcSet={`${require("./homePics/singing-80.webp")}, ${require("./homePics/singing.webp")} 1.5x 2x`}
                        media="(min-width: 1601px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/singing-60.webp")}, ${require("./homePics/singing-90.webp")} 1.5x, ${require("./homePics/singing.webp")} 2x`}
                        media="(min-width: 1025px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/singing-40.webp")}, ${require("./homePics/singing-60.webp")} 1.5x, ${require("./homePics/singing-80.webp")} 2x`}
                        media="(min-width: 747px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/singing-30.webp")}, ${require("./homePics/singing-45.webp")} 1.5x, ${require("./homePics/singing-60.webp")} 2x`}
                        media="(min-width: 481px)"
                        fetchpriority="high"
                    />
                    <source 
                        srcSet={`${require("./homePics/singing-20.webp")}, ${require("./homePics/singing-30.webp")} 1.5x, ${require("./homePics/singing-40.webp")} 2x`}
                        media="(min-width: 0px)"
                        fetchpriority="high"
                    />
                    <img 
                        src={require("./homePics/singing-40.webp")} 
                        alt="Singing Cockatoo"
                        className="home-img" 
                    />
                </picture>
                <p> Cockatoos are truly the life of the party, and they'll leave you in awe with their comedic talents and contagious energy. Rock on, feathered friends!
                </p>
            </article>
        </div>
    );
};
