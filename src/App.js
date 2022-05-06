import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            <BrowserRouter>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <div className="app__body">
                            <Sidebar />
                            <Routes>
                                <Route
                                    path="/room/:roomId"
                                    element={<Chat />}
                                />

                                <Route path="/" element={<Chat />} />

                                <Route path="/" element={<h1>Wlcome</h1>} />
                            </Routes>
                        </div>{" "}
                        ) )
                    </>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
