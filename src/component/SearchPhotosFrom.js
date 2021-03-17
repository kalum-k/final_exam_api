import React, { useState } from "react";
import { Container } from "reactstrap";
import Unsplash, { toJson } from "unsplash-js";
/*import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

//เรียกใช้ unsplash
const unsplash = new Unsplash({
    accessKey: "6rKVEZd1gWGlA8FLgveFQZFC7sOucq0rpGK9hqf1W-4",
});

export default function SearchPhotos() {

    //รอรับค่าจากช่อง search
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    //searchphoto 
    const searchPhotos = async (e) => {
        e.preventDefault(); //ใช้หยุดการเกิดเหตุการณ์ใดๆขึ้น ที่เป็นเหตุการณ์ของ browser 
                            //คือเหตุการณ์ที่ไม่ได้เกิดขึ้นจากการที่เรากำหนดให้มัน
                            //เช่น จะไม่ link ไปยังหน้าถัดไปของการ click tag a
        unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                // console.log(json);
                setPics(json.results);
            });

    };

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                {" "}
                <label className="label" htmlFor="query">
                    {" "}
          📷
        </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "dog" or "apple"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Search
        </button>
            </form>
            <Container>
            <from >
                <div class="row">
                    <div class="col">
                        {pics.map((pic) => (
                            <div key={pic.id}>
                                <section class="photo">
                                    <header class="photo__header">
                                        <div class="photo__header-color">
                                            <a href={"/profile/" + pic.user.username} >
                                                <img class="photo__avatar" src={pic.user.profile_image.medium} />
                                            </a>
                                        </div>
                                        <div class="photo__header-column">
                                            <span class="photo__username"><h2><a href={"/profile/" + pic.user.username} >{pic.user.username}</a></h2></span>
                                        </div>
                                    </header>
                                    <div class="photo__file-container">
                                        <img class="photo__file" src={pic.urls.raw} />
                                    </div>
                                </section>
                            </div>
                        ))}{" "}

                    </div></div>
            </from>
</Container>

        </>
    );
}
