// import React from 'react';
// import { getSession } from './main';

// import Axios from 'axios';

// class MyProfile extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             firstname: "",
//             lastname: "",
//             contactno: "",
//             emailid: ""
//         };
//     }

//     componentDidMount() {
//         this.fetchProfileInfo();
//     }

//     fetchProfileInfo() {
//         const url = "http://localhost:5000/home/profile";
//         const sid = getSession("sid");
        
//         Axios.post(url, { emailid: sid })
//             .then(res => {
//                 const data = res.data;
//                 this.setState({
//                     firstname: data.firstname,
//                     lastname: data.lastname,
//                     contactno: data.contactno,
//                     emailid: data.emailid
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching profile info:", error);
//                 // Handle error, maybe display a message to the user
//             });
//     }

//     render() {
//         return (
//             <div className='full-height'>
//                 <h3>User Profile</h3>
//                 <table className='tablestyle'>
//                     <tbody>
//                         <tr>
//                             <td className='firstcolumn'>First Name</td>
//                             <td><label>{this.state.firstname}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Last Name</td>
//                             <td><label>{this.state.lastname}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Contact No.</td>
//                             <td><label>{this.state.contactno}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Email Id</td>
//                             <td><label>{this.state.emailid}</label></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default MyProfile;


// import React from 'react';
// import { getSession } from './main';
// import Axios from 'axios';

// class MyProfile extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             firstname: "",
//             lastname: "",
//             contactno: "",
//             emailid: ""
//         };
//     }

//     componentDidMount() {
//         this.fetchProfileInfo();
//     }

//     fetchProfileInfo() {
//         const url = "http://localhost:5000/home/profile";
//         const sid = getSession("sid");
        
//         Axios.post(url, { emailid: sid })
//             .then(res => {
//                 const data = res.data;
//                 this.setState({
//                     firstname: data.firstname,
//                     lastname: data.lastname,
//                     contactno: data.contactno,
//                     emailid: data.emailid
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching profile info:", error);
//                 // Handle error, maybe display a message to the user
//             });
//     }

//     render() {
//         return (
//             <div className='full-height'>
//                 <h3>User Profile</h3>
//                 <table className='tablestyle'>
//                     <tbody>
//                         <tr>
//                             <td className='firstcolumn'>First Name</td>
//                             <td><label>{this.state.firstname}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Last Name</td>
//                             <td><label>{this.state.lastname}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Contact No.</td>
//                             <td><label>{this.state.contactno}</label></td>
//                         </tr>
//                         <tr>
//                             <td className='firstcolumn'>Email Id</td>
//                             <td><label>{this.state.emailid}</label></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default MyProfile;


import React from 'react';
import { getSession } from './main';
import Axios from 'axios';
import './myprofile.css'

class MyProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            contactno: "",
            emailid: ""
        };
    }

    componentDidMount() {
        this.fetchProfileInfo();
    }

    fetchProfileInfo() {
        const url = "http://localhost:5000/home/profile";
        const sid = getSession("sid");
        
        Axios.post(url, { emailid: sid })
            .then(res => {
                const data = res.data;
                this.setState({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    contactno: data.contactno,
                    emailid: data.emailid
                });
            })
            .catch(error => {
                console.error("Error fetching profile info:", error);
                // Handle error, maybe display a message to the user
            });
    }

    render() {
        return (
            <div className='profile-container'>
                <h3>User Profile</h3>
                <table className='profile-table'>
                    <tbody>
                        <tr>
                            <td className='profile-label'>First Name</td>
                            <td className='profile-value'>{this.state.firstname}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Last Name</td>
                            <td className='profile-value'>{this.state.lastname}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Contact No.</td>
                            <td className='profile-value'>{this.state.contactno}</td>
                        </tr>
                        <tr>
                            <td className='profile-label'>Email Id</td>
                            <td className='profile-value'>{this.state.emailid}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyProfile;
