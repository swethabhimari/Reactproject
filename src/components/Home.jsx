import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseconfig";
import { 
  FaHome, FaComments, FaPhone, FaVideo, FaUsers, 
  FaCalendarAlt, FaSignOutAlt, FaPlus, FaRegCalendarCheck, FaDesktop 
} from "react-icons/fa";
import "../styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Modal States
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isScheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [isShareScreenModalOpen, setShareScreenModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [meetingID, setMeetingID] = useState("");
  const [scheduleDetails, setScheduleDetails] = useState({ title: "", date: "", time: "" });

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format Time & Date
  const formatTime = () => currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formatDate = () => currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Handle Logout
  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  // Handle Join Meeting
  const handleJoinMeeting = () => {
    if (meetingID.trim() === "") {
      alert("Please enter a valid Meeting ID!");
      return;
    }
    alert(`Joining Meeting: ${meetingID}`);
    navigate(`/meeting/${meetingID}`);
    setJoinModalOpen(false);
  };

  // Handle Schedule Meeting
  const handleScheduleMeeting = () => {
    if (!scheduleDetails.title || !scheduleDetails.date || !scheduleDetails.time) {
      alert("Please fill all the fields to schedule a meeting!");
      return;
    }
    alert(`Meeting Scheduled: ${scheduleDetails.title} on ${scheduleDetails.date} at ${scheduleDetails.time}`);
    setScheduleModalOpen(false);
  };

  // Handle Screen Sharing
  const handleShareScreen = async () => {
    try {
      await navigator.mediaDevices.getDisplayMedia({ video: true });
      alert("Screen sharing started!");
      setShareScreenModalOpen(false);
    } catch (error) {
      alert("Screen sharing failed. Please allow permissions.");
    }
  };

  return (
    <div className="home-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <FaHome className="nav-icon active" />
        <FaComments className="nav-icon" />
        <FaPhone className="nav-icon" />
        <FaVideo className="nav-icon" />
        <FaUsers className="nav-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="profile-icon" onClick={() => setLogoutModalOpen(true)}>
          <FaSignOutAlt />
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section - Action Buttons */}
        <div className="left-section">
          <button className="action-btn new-meeting" onClick={() => setMeetingModalOpen(true)}>
            <FaVideo className="icon" /> New Meeting
          </button>
          <button className="action-btn join" onClick={() => setJoinModalOpen(true)}>
            <FaPlus className="icon" /> Join
          </button>
          <button className="action-btn schedule" onClick={() => setScheduleModalOpen(true)}>
            <FaRegCalendarCheck className="icon" /> Schedule
          </button>
          <button className="action-btn share-screen" onClick={() => setShareScreenModalOpen(true)}>
            <FaDesktop className="icon" /> Share Screen
          </button>
        </div>

        {/* Right Section - Calendar Widget */}
        <div className="right-section">
          <div className="calendar-widget">
            <div className="calendar-image">
              <img src="/images/calendar.jpg" alt="Calendar Background" />
            </div>
            <h2 className="time-display">{formatTime()}</h2>
            <p className="date-display">{formatDate()}</p>
            <button className="add-calendar">
              <FaCalendarAlt className="icon" /> Add a calendar
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      
      {/* Join Meeting Modal */}
      {isJoinModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Join a Meeting</h2>
            <input 
              type="text" 
              placeholder="Enter Meeting ID" 
              value={meetingID} 
              onChange={(e) => setMeetingID(e.target.value)} 
            />
            <button onClick={handleJoinMeeting}>Join</button>
            <button onClick={() => setJoinModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Schedule Meeting Modal */}
      {isScheduleModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Schedule a Meeting</h2>
            <input
              type="text"
              placeholder="Meeting Title"
              value={scheduleDetails.title}
              onChange={(e) => setScheduleDetails({ ...scheduleDetails, title: e.target.value })}
            />
            <input
              type="date"
              value={scheduleDetails.date}
              onChange={(e) => setScheduleDetails({ ...scheduleDetails, date: e.target.value })}
            />
            <input
              type="time"
              value={scheduleDetails.time}
              onChange={(e) => setScheduleDetails({ ...scheduleDetails, time: e.target.value })}
            />
            <button onClick={handleScheduleMeeting}>Schedule</button>
            <button onClick={() => setScheduleModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Share Screen Modal */}
      {isShareScreenModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Share Screen</h2>
            <button onClick={handleShareScreen}>Start Sharing</button>
            <button onClick={() => setShareScreenModalOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setLogoutModalOpen(false)}>Cancel</button>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
