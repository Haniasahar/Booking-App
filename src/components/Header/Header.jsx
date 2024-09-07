
import "./header.css"
import { FaBed } from "react-icons/fa6";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import {Children, useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'

const Header = ({type}) => {


  //calender 
  const [openDate, setOpenDate] =useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  //Room selector
  const [openOptions, setOpenOptions] =useState(false);
  const [options, setOptions] =useState({
    adult:1,
    children:0,
    room:1,
  });

  const handleOption = (name, Operation) => {
    setOptions(prev => {return {
      ...prev, [name] : Operation === "i" ? options[name] +1 : options[name] -1,
    };});
  };



  return (
    <div className="header">
        <div className={ type === "List" ? "headerContainer ListMode" : "headerContainer"}>
      <div className="headerList">
        <div className="HeaderListItems active">
        <FaBed />
        <span>Stays</span>
        </div>

        <div className="HeaderListItems">
        <IoAirplaneSharp />
        <span>Flight</span>
        </div>

        <div className="HeaderListItems">
        <FaCar />
        <span>Car rentals</span>
        </div>

        <div className="HeaderListItems">
        <FaBed />
        <span>Attractions</span>
        </div>

        <div className="HeaderListItems">
        <FaTaxi />
        <span>Airpot Taxi</span>
        </div>
      </div>

      { type !== "List" &&
        
        <><h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
      <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free lamabooking account. </p>
      <button className="header-btn">Sign in / Register</button>
      <div className="headersearch">
        <div className="headerSearchItem">
        <FaBed className="headerIcon"/>
        <input type="text" placeholder="where are you going" className="headerSearchInput" />
        </div>
          {/* ----------Calander------ */}
        <div className="headerSearchItem">
        <FaRegCalendarAlt className="headerIcon" />
        <span onClick={()=> setOpenDate(!openDate)} className="headersearchText">
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>}
        </div>
        {/* --------Room selector-------- */}
        <div className="headerSearchItem">
        <FaPerson className="headerIcon" />
        <span onClick={()=>setOpenOptions(!openOptions)} className="headersearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room `}</span> 
         {openOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionCounter">
            <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
          </div>
          
          </div> 

          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionCounter">
            <button disabled={options.children <=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
            <span className="optionCounterNumber">{options.children}</span>
            <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
          </div>
          </div>

          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionCounter">
            <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
            <span className="optionCounterNumber">{options.room}</span>
            <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
          </div>
          </div>
        </div>}
        </div>
     
        <div className="headerSearchItem">
         <button className="header-btn">Search</button>
        </div>
        </div></>}
      </div>
      
    </div>
        
        
      
  )
}

export default Header





// import "./header.css";  
// import { FaBed } from "react-icons/fa"; // Standardized import  
// import { IoAirplaneSharp } from "react-icons/io5";  
// import { FaCar } from "react-icons/fa";  
// import { FaTaxi } from "react-icons/fa"; // Standardized import  
// import { FaRegCalendarAlt } from "react-icons/fa";  
// import { FaPerson } from "react-icons/fa"; // Standardized import  
// import { DateRange } from 'react-date-range';  
// import { useState } from 'react';  
// import 'react-date-range/dist/styles.css'; // main css file  
// import 'react-date-range/dist/theme/default.css'; // theme css file  
// import { format } from 'date-fns';  

// const Header = () => {  
//   // Calendar  
//   const [openDate, setOpenDate] = useState(false);  
//   const [date, setDate] = useState([  
//     {  
//       startDate: new Date(),  
//       endDate: new Date(),  
//       key: 'selection'  
//     }  
//   ]);  

//   // Room selector  
//   const [openOptions, setOpenOptions] = useState(false);  
//   const [options, setOptions] = useState({  
//     adult: 1,  
//     children: 0,  
//     room: 1,  
//   });  

//   const handleOption = (name, Operation) => {  
//     setOptions(prev => ({  
//       ...prev, [name]: Operation === "i" ? options[name] + 1 : options[name] - 1,  
//     }));  
//   };  

//   return (  
//     <div className="header">  
//       <div className="headerContainer">  
//         <div className="headerList">  
//           <div className="HeaderListItems active">  
//             <FaBed />  
//             <span>Stays</span>  
//           </div>  

//           <div className="HeaderListItems">  
//             <IoAirplaneSharp />  
//             <span>Flight</span>  
//           </div>  

//           <div className="HeaderListItems">  
//             <FaCar />  
//             <span>Car rentals</span>  
//           </div>  

//           <div className="HeaderListItems">  
//             <FaBed />  
//             <span>Attractions</span> {/* Corrected typo */}  
//           </div>  

//           <div className="HeaderListItems">  
//             <FaTaxi />  
//             <span>Airport Taxi</span> {/* Corrected spelling */}  
//           </div>  
//         </div>  

//         <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>  
//         <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free lamabooking account.</p>  
//         <button className="header-btn">Sign in / Register</button>  
//         <div className="headersearch">  
//           <div className="headerSearchItem">  
//             <FaBed className="headerIcon" />  
//             <input type="text" placeholder="where are you going" className="headerSearchInput" />  
//           </div>  
//           {/* ----------Calendar------ */}  
//           <div className="headerSearchItem">  
//             <FaRegCalendarAlt className="headerIcon" />  
//             <span onClick={() => setOpenDate(!openDate)} className="headersearchText">  
//               {date[0].startDate && date[0].endDate   
//                 ? `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`   
//                 : "Select Date"}  
//             </span>  
//             {openDate && <DateRange  
//               editableDateInputs={true}  
//               onChange={item => setDate([item.selection])}  
//               moveRangeOnFirstSelection={false}  
//               ranges={date}  
//               className="date"  
//             />}  
//           </div>  
//           {/* --------Room selector-------- */}  
//           <div className="headerSearchItem">  
//             <FaPerson className="headerIcon" />  
//             <span onClick={() => setOpenOptions(!openOptions)} className="headersearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room `}</span>  
//             {openOptions && <div className="options">  
//               <div className="optionItem">  
//                 <span className="optionText">Adult</span>  
//                 <div className="optionCounter">  
//                   <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")} aria-label="Decrease number of adults">-</button>  
//                   <span className="optionCounterNumber">{options.adult}</span>  
//                   <button className="optionCounterButton" onClick={() => handleOption("adult", "i")} aria-label="Increase number of adults">+</button>  
//                 </div>  
//               </div>  

//               <div className="optionItem">  
//                 <span className="optionText">Children</span>  
//                 <div className="optionCounter">  
//                   <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")} aria-label="Decrease number of children">-</button>  
//                   <span className="optionCounterNumber">{options.children}</span>  
//                   <button className="optionCounterButton" onClick={() => handleOption("children", "i")} aria-label="Increase number of children">+</button>  
//                 </div>  
//               </div>  

//               <div className="optionItem">  
//                 <span className="optionText">Room</span>  
//                 <div className="optionCounter">  
//                   <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")} aria-label="Decrease number of rooms">-</button>  
//                   <span className="optionCounterNumber">{options.room}</span>  
//                   <button className="optionCounterButton" onClick={() => handleOption("room", "i")} aria-label="Increase number of rooms">+</button>  
//                 </div>  
//               </div>  
//             </div>}  
//           </div>  
     
//           <div className="headerSearchItem">  
//             <button className="header-btn">Search</button>  
//           </div>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// }  

// export default Header;