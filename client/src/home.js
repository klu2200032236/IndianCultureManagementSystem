import React from 'react'
import './home.css'
import logouticon from './images/logout.png'
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.png'

const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"}
const HS4 = {"float" : "right", "padding-right" : "10px"}

export function loadMenu(res) {
    var data = JSON.parse(res);
    var menuitems = "";
    for (var x in data) {
        menuitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for (x in data) {
        document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
    }
}

export function showSMenu(mid) {
    var surl = "http://localhost:5000/home/menus";
    var ipdata = JSON.stringify({
        mid: mid
    });
    callApi("POST", surl, ipdata, loadSMenu, errorResponse);

    var smenu = document.getElementById(mid);
    if (smenu.style.display === "block")
        smenu.style.display = "none";
    else
        smenu.style.display = "block";
}

export function loadSMenu(res) {
    var data = JSON.parse(res);
    var smenuitems = "";
    for (var x in data) {
        smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
    }
    var smenu = document.getElementById(`${data[x].mid}`);
    smenu.innerHTML = smenuitems;

    for (x in data) {
        document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
    }
}

export function loadModule(smid) {
    var titlebar = document.getElementById('titlebar');
    var module = document.getElementById('module');
    switch (smid) {
        case "M30101":
            module.src = "/changepassword";
            titlebar.innerText = "Change Password";
            break;
         case "M30102":
                module.src = "/myprofile";
                titlebar.innerText = "My Profile";
                break;
        case "M00102":
                module.src = "/andhra";
                titlebar.innerText = "Andhra Pradhesh";
                break;
        case "M00101":
                module.src = "/aruna";
                titlebar.innerText = "Arunachal Pradhesh";
                    break;
                case "M00103":
                        module.src = "/Bihar";
                        titlebar.innerText = "Bihar";
                            break;
                    case "M00104":
                                module.src = "/Assam";
                                titlebar.innerText = "Assam";
                                    break;
        case "M20101": // New case for Book Appointment
            module.src = "/Diwali1";
            titlebar.innerText = "Diwali";
            break;
        case "M20102": // New case for Book Appointment
            module.src = "/Holi";
            titlebar.innerText = "Holi";
            break;
        case "M20103": // New case for Book Appointment
            module.src = "/Ramzan";
            titlebar.innerText = "Ramzan";
            break;
        case "M20104": // New case for Book Appointment
            module.src = "/Christmas";
            titlebar.innerText = "Christmas";
            break;
        case "M20105": // New case for Book Appointment
            module.src = "/FestivalCalender";
            titlebar.innerText = "Festival Calender";
            break;
        case "M10101": // New case for Book Appointment
            module.src = "/tajmahal";
            titlebar.innerText = "Taj Mahal";
            break;
        case "M10102": // New case for Book Appointment
            module.src = "/redfort";
            titlebar.innerText = "Red Fort";
            break;
        case "M10103": // New case for Book Appointment
            module.src = "/jamamasjid";
            titlebar.innerText = "Jama Masjid";
            break;
        case "M10104": // New case for Book Appointment
            module.src = "/BasilicaofBomJesus";
            titlebar.innerText = "Basilica of Bom Jesus";
            break;
        case "M10105": // New case for Book Appointment
            module.src = "/viewall";
            titlebar.innerText = "View All";
            break;
    
        default:
            module.src = "";
            titlebar.innerText = "";
    }
}


class Home extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);

        url = "http://localhost:5000/home/menu";
        callApi("POST", url, "", loadMenu, errorResponse);
    }

    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render()
    {
        return(
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>KL University | Indian Culture Management System</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div>
                        <div className='menu'>
                            <nav><ul id='mlist' className='mlist'></ul></nav>
                        </div>
                    </div>
                    <div className='outlet'>
                        <div id='titlebar'></div>
                        <iframe id='module' src="" ></iframe>
                    </div>
                </div>
                <div className='footer'>
                    Copyright @ KL University. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Home;