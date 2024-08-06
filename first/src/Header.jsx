import React from 'react';

function Header({ asd, children }) {
    console.log(asd);
    return (
        <div>
            <h3>fdf</h3>
            {children}
            <h1>Welcome To RentalWheels {asd.name}</h1>
        </div>
    );
}

export { Header };
