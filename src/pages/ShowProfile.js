import React from "react";
import Profile from "../component/UserProfileFrom";
import PhotoList from "../component/PhotoListFrom";


const ShowProfile = (props) => {
    return (
        <main>
            <h1 className="title" >My Profile</h1>
            <Profile username={props.match.params.username} /> {/**ส่ง username ไปยัง profile */}
            <PhotoList username={props.match.params.username}/>{/**ส่ง username ไปยัง PhotoList */}
        </main>
    );
};

export default ShowProfile;
