import React from "react";
import "../../Style/pages/Services.css";
import { MdCoffeeMaker } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";
import { MdBakeryDining } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";
import { FaGifts } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className="services_container">
        <h1 className="services_heading">Our Services</h1>
        <div className="service_row">
          <div className="services_cart">
            <MdCoffeeMaker className="service_icon" />
            <h2 className="services_title">Coffee & Tea</h2>
            <p className="services_p">
              Serving a variety of coffee and tea beverages, including espresso,
              cappuccino, latte, drip coffee, herbal teas, and specialty blends.
            </p>
          </div>

          <div className="services_cart">
            <GiSlicedBread className="service_icon" />
            <h2 className="services_title">Breakfast</h2>
            <p className="services_p">
              Offering a selection of breakfast options such as pastries,
              muffins, bagels, breakfast sandwiches, oatmeal, and yogurt
              parfaits.
            </p>
          </div>

          <div className="services_cart">
            <MdDinnerDining className="service_icon" />
            <h2 className="services_title">Lunch & Dinner</h2>
            <p className="services_p">
              Providing a menu of lunch and dinner items such as sandwiches,
              salads, soups, paninis, wraps, and small plates.
            </p>
          </div>

          <div className="services_cart">
            <MdBakeryDining className="service_icon" />
            <h2 className="services_title">Desserts & Baked Goods</h2>
            <p className="services_p">
              Featuring a range of sweet treats including cakes, cookies,
              brownies, pies, tarts, and specialty desserts.
            </p>
          </div>

          <div className="services_cart">
            <FaWifi className="service_icon" />
            <h2 className="services_title">WiFi & Workspace</h2>
            <p className="services_p">
              Offering free WiFi access for customers along with comfortable
              seating and a conducive environment for remote work or studying.
            </p>
          </div>

          <div className="services_cart">
            <SiMusicbrainz className="service_icon" />
            <h2 className="services_title">Live Music & Events</h2>
            <p className="services_p">
              Hosting live music performances, open mic nights, poetry readings,
              or other cultural events to enhance the café experience.
            </p>
          </div>

          <div className="services_cart">
            <FaGifts className="service_icon" />
            <h2 className="services_title">Loyalty Programs & Rewards</h2>
            <p className="services_p">
              Implementing a loyalty program to reward frequent customers with
              discounts, freebies, or exclusive offers.
            </p>
          </div>

          <div className="services_cart">
            <MdDeliveryDining className="service_icon" />
            <h2 className="services_title">Online Ordering & Delivery</h2>
            <p className="services_p">
              Offering online ordering for pickup or delivery services, allowing
              customers to enjoy café offerings from the comfort of their homes
              or offices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
