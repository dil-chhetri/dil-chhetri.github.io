import {Component } from "react";
import Profile from "./components/Profile";
import Connect from "./components/Connects";
import githubImage from "./assets/images/github-mark-white.png"
import linkedInImage from "./assets/images/LI-In-Bug.png";
import gmailImage from "./assets/images/gmail.png";
import Projects from "./components/Projects";


 class App extends Component  {
  render() {

   const user = "Dil Chhetri"
   const title = "Software Engineer"
   const connects = [
    [githubImage,'Github','https://github.com/dil-chhetri?tab=repositories','dil-chhetri'],
    [gmailImage,'G-mail','https://mail.google.com/mail/u/0/#inbox','dilchhetri1999@gmail.com'],
    [linkedInImage,'LinkedIn','https://www.linkedin.com/in/dil-chhetri-8260b829b/','Dil Chhetri'],
   ]

   const projects = [
    ["React", [
      ['https://github.com/dil-chhetri/todo_react', 'Todo React', 'TODO'],
      ['https://github.com/dil-chhetri/dil-chhetri.github.io', 'Portfolio(this website)', 'Portfolio'],
      ['https://github.com/dil-chhetri/job-portal', 'Job Portal', 'Job Portal'],
    ]],

    ["Python", [
      ['https://github.com/dil-chhetri/match_prediction', 'Match Prediction (Django)', 'Match Prediction'],
      ['https://github.com/dil-chhetri/password-manager', 'Password Manager (Django)', 'Password Manager'],
      ['https://github.com/dil-chhetri/Object-detection-yolov8_flask', 'Object Detection YOLOv8 + Flask', 'Nepali Object Detection'],
    ]],

    ["Java", [
      ['https://github.com/dil-chhetri/SMS-Student-management-System-', 'Student Management System', 'SMS'],
      ['https://github.com/dil-chhetri/call-history', 'Call History', 'Call History'],
      ['https://github.com/dil-chhetri/Android-Weather-App', 'Weather App', 'Android Weather App'],

    ]],

    ["Laravel/PHP", [
      ['https://github.com/dil-chhetri/eccom', 'Ecommerce Laravel', 'eccom'],
      ['https://github.com/dil-chhetri/group-chat-portal', 'Group Chat Portal', 'Community||Group Portal'],
      ['https://github.com/dil-chhetri/Thifted-commerce', 'Ecommerce For Used Clothes', 'Thrifted'],
    ]],
   ]

   return (
    <div className="">
        <Profile username={user}  title={title} />
        <Connect connects={connects} />
  
        <Projects projects={projects}  />
    </div>
   )
}
 }



export default App