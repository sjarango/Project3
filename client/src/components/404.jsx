import React from 'react';
// import { Editor } from './index';
import '../index.css';


const NotFound = () => {
    return (
		<div className="NotFound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<a href="/">Go To Homepage</a>
		</div>
    );
}

export default NotFound;