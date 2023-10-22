import { useEffect } from 'react';
import axios from 'axios';

function App() {
    const login = async () => {
        const res = await axios.get(`http://13.124.47.91:8090/onlytest`).catch((err) => {
            console.error(err);
        });
        if (res) console.log(res);
    };

    useEffect(() => {
        login();
    }, []);
    return <div className="App"></div>;
}

export default App;
