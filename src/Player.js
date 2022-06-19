import React from 'react';
import ReactPlayer from "react-player";

function App() {
    return (
        <div class="grid grid-cols-2 mx-auto my-5 gap-10 lg:grid-cols-2 sm:grid-cols-1">
            <div>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=_2YW--5g3lA"
                />
            </div>

        </div>
    );
}

export default App;