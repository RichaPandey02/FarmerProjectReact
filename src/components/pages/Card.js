import React from "react";
import slide from "../styles/slide.css";

const Slider = () => {
  return (
    <div className="flexcards">
      <div class="flexcards__row">
        <div class="column">
          <div class="column__card">
            
            <img
              className="column__card-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP-AJpBjpXDF30FfmKGbMLH2fVTRET0_VVQ&usqp=CAU"
            ></img>
            <p className="column__para">
              “Agriculture is our wisest pursuit because it will, in the end,
              contribute most to real wealth, good morals, and happiness.”
            </p>
          </div>
        </div>

        <div class="column">
          <div class="column__card">
           
            <img
              className="column__card-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2wdD9oOVDCPVMtLQh8KGYXQPwtirah11c3XrNz7Qn7gNUX6AoQ4_9zbo8-sfqdL5-e4&usqp=CAU"
            />
            <p className="column__para">
              “Frankly, any city person who doesn’t think I deserve a
              white-collar salary as a farmer doesn’t deserve my special food.”
            </p>
          </div>
        </div>

        <div class="column">
          <div class="column__card">
            
            <img
              className="column__card-img"
              src="https://www.sbv-usp.ch/fileadmin/_processed_/e/0/csm_Bauer_mit_iPad__Nolanberg11_d6c48a67cc.jpg"
            />
            <p className="column__para">
              Agriculture is the foundation of manufactures, since the
              productions of nature are the materials of art.
            </p>
          </div>
        </div>

        <div class="column">
          <div class="column__card">
            
            <img
              className="column__card-img"
              src="https://thumbs.dreamstime.com/b/indian-farmer-holding-crop-plant-his-wheat-field-indian-farmer-holding-crop-plant-his-wheat-field-123557695.jpg"
            />
            <p className="column__para">
              I’ve always said I want a farmer, not a hunter. Hunters go for the
              kill and they move on. A farmer nurtures; he watches things grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
