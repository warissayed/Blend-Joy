import React from "react";
import "../../Style/pages/Services.css";
import { MdCoffeeMaker } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <div className="services_container">
        <h1 className="services_heading">Our Services</h1>
        <div className="service_row">
          <div className="services_cart">
            <MdCoffeeMaker />
            <h2 className="services_title">Coffee & Tea</h2>
            <p className="services_p">
              Serving a variety of coffee and tea beverages, including espresso,
              cappuccino, latte, drip coffee, herbal teas, and specialty blends.
            </p>
          </div>

          <div className="services_cart">
            <GiSlicedBread />
            <h2 className="services_title">Breakfast</h2>
            <p className="services_p">
              Offering a selection of breakfast options such as pastries,
              muffins, bagels, breakfast sandwiches, oatmeal, and yogurt
              parfaits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
