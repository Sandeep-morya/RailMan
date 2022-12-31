import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../Pages/Auth";
import Booking from "../Pages/Booking";
import CoachPosition from "../Pages/CoachPosition";
import Home from "../Pages/Home";
import LiveSattion from "../Pages/LiveStaion";
import PnrEnquiry from "../Pages/PnrEnquiry";
import RunningStatus from "../Pages/RunningStatus";
import TrainBetween from "../Pages/TrainBetween";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pnr" element={<PnrEnquiry />} />
      <Route path='/trains_between_stations' element={<TrainBetween />} />
      <Route path='/live_station' element={<LiveSattion />} />
      <Route path="/running_status" element={<RunningStatus />} />
      <Route path='/coach_position' element={<CoachPosition />} />
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/auth" element={<Auth />}/>
    </Routes>
  );
};

export default AllRoutes;
