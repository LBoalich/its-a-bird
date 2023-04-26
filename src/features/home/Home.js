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
                <img src={require("./homePics/punk-rock.jpg")} alt="Punk Rock Cockatoo" className="home-img" id="left-top"/>
                <div className="home-font-container">
                    <img src={require("./homePics/cockatoos.png")} alt="featherd font reading 'Cockatoos'" className="home-font-img"/>
                </div>
                <p> are the true rockstars of the bird world! These feathery divas love to headbang to their own beat, with their luscious crests bouncing in perfect rhythm. They're not just singers, they're screamers too! With their powerful lungs, they can belt out a tune that can be heard from miles away.
                </p>
                <br />
                <img src={require("./homePics/dancing.jpg")} alt="Breakdancing Cockatoo" className="home-img" id="right"/>
                <p> But that's not all - these quirky creatures have a knack for saying the funniest things! From mimicking human speech to coming up with their own unique phrases, they'll have you in stitches with their witty repertoire. Just make sure to turn up the music and watch them bust a move with their hilarious dance moves - you won't be able to resist joining in on the fun!
                </p>
                <br />
                <img src={require("./homePics/singing.jpg")} alt="Singing Cockatoo" className="home-img" id="left-bottom"/>
                <p> Cockatoos are truly the life of the party, and they'll leave you in awe with their comedic talents and contagious energy. Rock on, feathered friends!
                </p>
            </article>
        </div>
    );
};
