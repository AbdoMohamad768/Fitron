import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import ConfirmEmail from "./pages/ConfirmEmail";
import RecoveryCode from "./pages/RecoveryCode";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import Recovery from "./pages/Recovery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/recovery" element={<Recovery />}>
          <Route index element={<Navigate replace to="confirm-email" />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="recovery-code" element={<RecoveryCode />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
