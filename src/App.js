import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Centro from "./components/centro";
import Card from "./components/card";

const App = (props) => {

  return (
    <>
      <Navbar />
      <Centro />

      <div className="cards container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Artist</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <div className="col">
          <Card
            text="David Bowie"
            desc="1969 Space Oddity - 1972 The Rise And Fall Of Ziggy Stardust - 1977 Heroes - 1980 The Best of Bowie -
            1982 Bowie Rare -
            1983 Let's Dance -
            
            1987 Never Let Me Down -
           
            2013 The Next Day -
            2016 Blackstar."
            link="https://www.infobae.com/new-resizer/9IZmVgQkqKACkrS5mPe5UcSsFSA=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/01/08162528/Bowie-portada.jpg"
            btn="See albums"
          />
          </div>

          <div className="col">
          <Card
            text="The Beatles"
            desc="
            1964 A Hard Day´s Night -
            
            1965 Help -
            1965 Rubber soul -
            1966 Revolver -
            1966 White album 2 -
            
            1967 Sgt. Pepper Lonely Heart's Club Band -
            1969 Abbey Road -
            1969 Yellow Submarine -
            1970 Let it be -
            1991 White album."
            link="https://yt3.googleusercontent.com/5lOkozHE7R-TL0iHNetrVWai47pG7Oa6bJvW4CiUGCMsRUjqXSUAlJWDgpkjdc12iKm0GwzF0Cw=s900-c-k-c0x00ffffff-no-rj"
            btn="See albums"
          />
          </div>

          <div className="col">
          <Card
            text="Led Zeppelin"
            desc="1969 Led Zeppelin -
            1969 Led Zeppelin II - 
            1970 Led Zeppelin III -
            1971 Led Zeppelin IV -
            1979 In Through the Out Door -
            1990 Remasters -
            2007 Mothership."
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75aFb4bOCZOiYVWLs_2CEm8ydgziIYlan8A&usqp=CAU"
            btn="See albums"
          />
          </div>

        </div>
      </div>

      <div className="cards container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Albums</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <div className="col">
          <Card
            text="David Bowie"
            desc="Heroes 1977"
            link="https://www.duna.cl/media/2020/11/heroes.jpg"
            btn="<< Back to artist"
          />
          </div>

          <div className="col">
          <Card
            text="The Beatles"
            desc="1967 Sgt. Pepper Lonely Heart's Club Band"
            link="https://www.udiscovermusic.com/wp-content/uploads/2021/01/TheBeat_SgtPepp_CoverAr_3000DPI300RGB1000135017.jpg"
            btn="<< Back to artist"
          />
          </div>

          <div className="col">
          <Card
            text="Led Zeppelin"
            desc="1969 Led Zeppelin"
            link="https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png"
            btn="<< Back to artist"
          />
          </div>

        </div>
      </div>



    </>
  );
};

export default App;