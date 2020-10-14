import React from 'react';
import img from './Media/Garima.jpeg'
import './Garima.css';

// use this file as basic layout and name of classes of your css
function Garima() {
    return (
        <div className="name__resume__Garima">
            <div className="name__contact__Garima">
                <h1><strong>GARIMA</strong></h1>
                <h3>2nd year COE student in NSUT</h3>
                <h3>Email Id : vatsgarima11@gmail.com</h3>
                <h3>Phone no. 9717153414</h3>
                <a href="https://www.linkedin.com/in/garima-vats-ba39021a9">
                    <h4>Linkedin Profile</h4>
                </a>
                <a href="https://github.com/garima-20">
                    <h4>Github Profile</h4>
                </a>

            </div>
            <section className="sec__Garima">
                <div className="name__skills__Garima">
                    <h3>SKILLS: Data structures and algorithms</h3>
                    <h3>LANGUAGES: C++,C,Basics of Python</h3>
                    <h1>Education:</h1>
                    <p>
                        <h3>Netaji Subhas University of Technology</h3>
                        <h4>B.Tech Computer Engineering</h4>
                        <h4>CGPA: 8.55</h4>
                        <h3>10th class: 10cgpa</h3>
                        <h3>12th class: 94%</h3>
                    </p>


                </div>
                <div className="name__img__Garima">
                    <img src={img} alt="Profile Photo" />

                </div>
            </section>
        </div>
    );
}

export default Garima;
