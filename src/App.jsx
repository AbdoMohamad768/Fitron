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
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProtectedRout from "./components/ProtectedRout";
import WorkoutPlan from "./components/WorkOutPlan";
import Profile from "./pages/Profile";
import ProfiledDetails from "./pages/ProfiledDetails";
import ProfileDisplay from "./pages/ProfileDisplay";
import ProfileInfo from "./pages/ProfileInfo";
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

        <Route
          path="/app"
          element={
            <ProtectedRout>
              <AppLayout />
            </ProtectedRout>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="workout-plan" element={<WorkoutPlan />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate replace to="info" />} />
            <Route path="info" element={<ProfileInfo />} />
            <Route path="display" element={<ProfileDisplay />} />
            <Route path="details" element={<ProfiledDetails />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
