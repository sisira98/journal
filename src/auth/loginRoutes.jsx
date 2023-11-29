
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function LoginPage() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}
export default LoginPage