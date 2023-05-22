import React from 'react';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

export default function Horloge(){
    const element = (
        <div>
            <h1> Bonjour all, ceci est une horloge</h1>
            <p> Il est { new Date().toLocaleDateString()}. </p>
        </div>
    )
    root.render(element);
}

setInterval(Horloge, 10000);