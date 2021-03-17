import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "reactstrap";

/*import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

const UserProfileFrom = ({ username }) => {

    //key จาก unspash
    const accessKey = "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4"
    //เรียก api ด้วย username 
    const apiuser = "https://api.unsplash.com/users/" + username + "/photos?page=1&query=&per_page=15&client_id=" + accessKey;


    const [pics, setPics] = useState([]);
    useEffect(() => {
        axios.get(apiuser).then((response) => {
            console.log(response);
            setPics(response.data);
        });
    }, [username])
    return (
        <Container>
            <form>
                <div className="card-list">

                    {pics.map(pics => (

                        <div className="card" key={pics.id}>
                            <img
                                className="card--image"
                                alt={pics.alt_description}
                                src={pics.urls.small}
                                width="50%"
                                height="50%"
                            ></img>
                        </div>

                    ))}

                </div>
            </form >
        </Container>
    );
}
export default UserProfileFrom;