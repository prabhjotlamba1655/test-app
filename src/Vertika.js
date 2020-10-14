import React from 'react';
import img from './Media/vertika_profile.jpg'
import './Vertika.css'
// use this file as basic layout and name of classes of your css
function Vertika() {
	return (
		<div className="name__resume__Vertika">
			<div className="name__contact__Vertika">
				<span> Name </span>- Vertika Sah
				<br /><br />
				<span>Contact Number</span> - 9818406177
				<br /><br />
				<span>Profile</span>
				<ul>
					<li>
						<a className="vertika__link" href="https://www.linkedin.com/in/vertika-sah-7344441a9/">Linked Profile</a>
					</li>
					<li>
						<a className="vertika__link" href="https://github.com/vertika-gif">Github Profile</a>
					</li>
				</ul>
			</div>
			<section class="sec2__Vertika">
				<div className="name__skills__Vertika">
					<p>
						<span>Skills</span> - C++(moderate), DSA(moderate), c(beginner)
				</p>
					<p>
						<span>Education </span>-
						School - Bal Bharti Public School, Pitampura
						<br /><br />
						College - Netaji Subhas University of Technology
				</p>
				</div>
				<div className="name__img__Vertika">
					<img src={img} alt="Profile Photo" />
				</div>
			</section>
		</div>

	);
}

export default Vertika;
