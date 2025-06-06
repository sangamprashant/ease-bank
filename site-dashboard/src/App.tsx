import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/SideBar";
import { AddBookingPage, AnalyticsPage, BookingSearch, Dashboard, LeadsPage, LoginPage, NotFound, SettingPage } from "./pages";
import { useAuth } from "./providers/AuthenticationContext";

function App() {
  const { user } = useAuth()
  return (
    <>
      {user ?
        <SideBar>
          <Routes>
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<LeadsPage />} />
              <Route path="/bookings/search" element={<BookingSearch />} />
              <Route path="/bookings/create" element={<AddBookingPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="*" element={<NotFound />} />
            </>
          </Routes>
        </SideBar>
        :
        <LoginPage />
      }
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
