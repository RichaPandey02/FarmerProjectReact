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
            The farmer has to be an optimist or he wouldn’t still be a farmer
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
            Agriculture engenders good sense, and good sense of an excellent kind
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
            Love cultivates hope; hope fertilizes resilience, and we can all be farmers of dreams
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
            The story of family farming underscores a legacy of sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
