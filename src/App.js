import React, {useState} from "react";
import "./App.css";
import Entry from "./pages/entry/Entry.page";
import DefaultLayout from './layout/DefaultLayout'
import DashBoard from "./pages/dashboard/DashBoard";
import AddTicket from "./pages/new-ticket/AddTicket";


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <DashBoard/> */}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
