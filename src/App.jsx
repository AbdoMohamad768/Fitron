import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import ConfirmEmail from "./pages/ConfirmEmail";
import RecoveryCode from "./pages/RecoveryCode";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./pages/AppLayout";
import '@fortawesome/fontawesome-free/css/all.min.css';

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

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
