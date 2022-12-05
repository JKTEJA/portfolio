import React,{useState} from 'react';
import "./qualification.css"

const Qualification = () => {
    const [ toggleState,setToggleState]=useState(1);

    const toggleTab=(inedx)=>{
        setToggleState(inedx);
    }

  return (
    <section className='qualification section'>
    <h2 className='section_title'>Qualification</h2>
    <span className='section_subtitle'>My personal journey</span>

    <div className="qualification_container container">
        <div className="qualification_tabs">

            <div 
            className={toggleState === 1 
            ? "qualification_button qualification_active button--flex" :
            "qualification_button button--flex"
        }
        onClick={()=>toggleTab(1)}
        >

        <i className="uil uil-graduation-cap 
        qualification_icon"></i>
        Education
            </div>

            <div 
            className={
            toggleState === 2 
            ? "qualification_button qualification_active button--flex" :
            "qualification_button button--flex"
        }
        onClick={()=>toggleTab(2)}
            >

        <i className="uil uil-briefcase 
        qualification_icon"></i>
                Experience
            </div>
        </div>

        <div className="qualification_section">
            <div 
            className={toggleState === 1 
            ? "qualification_content qualification_content-active"
            : "qualification_content"
          }
            >
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">M.Tech[cse]</h3>
                        <span className="qualification_subtitle">JNTUH - Hyderabad</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2019
                        </div>
                    </div>
                <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>

                </div>

                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>
                </div>

                    <div>
                        <h3 className="qualification_title">B.Tech[cse]</h3>
                        <span className="qualification_subtitle">JNTUH - Hyderabad</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2016 
                        </div>
                    </div>
             

                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Intermediat[mpc]</h3>
                        <span className="qualification_subtitle">Govt College</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2012
                        </div>
                    </div>
                <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>

                </div>

                </div>
                
                <div className="qualification_data">
                    <div></div>

                    <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>
                </div>

                    <div>
                        <h3 className="qualification_title">SSC</h3>
                        <span className="qualification_subtitle">Govt School</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2010 
                        </div>
                    </div>
             

                </div>

            </div>


            <div  className={toggleState === 2 
            ? "qualification_content qualification_content-active"
            : "qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Web Developer</h3>
                        <span className="qualification_subtitle">Grepthor Software Solution</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2021-2022 -Present
                        </div>
                    </div>
                <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>

                </div>

                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>
                </div>

                    <div>
                        <h3 className="qualification_title">UI/UX Designer</h3>
                        <span className="qualification_subtitle">Nirmaan</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2020 -Present
                        </div>
                    </div>
             

                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Fornt-End</h3>
                        <span className="qualification_subtitle">My Self</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calendar-alt"></i>2019 
                        </div>
                    </div>
                <div>
                   <span className='qualification_rounder'></span>
                   <span className="qualification_line"></span>

                </div>

                </div>
                
               

            </div>

        </div>
    </div>
    </section>
  )
}

export default Qualification