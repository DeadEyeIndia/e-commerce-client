import React, { useState } from "react";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

import SellerLogo from "../assets/E Com Seller Logo.svg";
import "../styles/sellerregistration.scss";

const SellerRegisterationPage = () => {
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("Select your selling category");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");

  const [isBusinessNameButtonDisabled, setIsBusinessNameButtonDisabled] =
    useState(true);
  const [isButtonHide, setIsButtonHide] = useState(true);
  const [isDisableInput, setIsDisableInput] = useState(false);

  const categories = [
    {
      value: "Clothing",
      name: "Clothing",
    },
    {
      value: "Computer & accessories",
      name: "Computer & accessories",
    },
    {
      value: "Electronics",
      name: "Electronics",
    },
    {
      value: "Footwear",
      name: "Footwear",
    },
    {
      value: "Watches",
      name: "Watches",
    },
  ];

  const handleBusinessButton = () => {
    if (!isBusinessNameButtonDisabled) {
      setIsButtonHide(false);
      setIsDisableInput(true);
    }
  };

  const handleSellerRegistration = (e) => {
    e.preventDefault();

    const myForm = {
      buinessname: businessName,
      category: category,
      description: description,
      about: about,
    };

    console.log(myForm);
  };

  useEffect(() => {
    if (businessName.length <= 5) {
      setIsBusinessNameButtonDisabled(true);
    } else {
      setIsBusinessNameButtonDisabled(false);
    }
  }, [businessName]);

  return (
    <>
      <div className="app__seller">
        <div className="app__seller-logo">
          <img src={SellerLogo} alt="Seller Logo icon" />
        </div>
        <div className="app__seller-form">
          <form onSubmit={handleSellerRegistration}>
            <h1>Register and Start Selling</h1>

            {/* <p>
              Please ensure that all the information you submit is accurate.
            </p> */}

            <div className="app__seller-businessname">
              <h2>Enter details below to continue registration:</h2>

              <div>
                <label>Company/Business name:</label>
                <input
                  type="text"
                  value={businessName}
                  disabled={isDisableInput}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                {isButtonHide ? (
                  <div>
                    <button
                      disabled={isBusinessNameButtonDisabled}
                      className={
                        isBusinessNameButtonDisabled
                          ? "showButton"
                          : "hideButton"
                      }
                      type="button"
                      onClick={handleBusinessButton}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {isButtonHide ? (
              <></>
            ) : (
              <>
                <div>
                  <div className="app__seller-category">
                    <label>Please select your selling category:</label>
                    <div className="app__category-customBox">
                      <span>{category}</span>
                      <FiChevronDown style={{ marginRight: "0.5rem" }} />
                    </div>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" disabled>
                        Select your category
                      </option>
                      {categories.map((category, i) => (
                        <>
                          <option key={i} value={category.value}>
                            {category.name}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
                  <div className="app__seller-description">
                    <div className="description">
                      <label>Please provide description:</label>
                      <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="about">
                      <label>Please provide about:</label>
                      <input
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="app__seller-submit">
                  <button type="submit">Submit</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SellerRegisterationPage;
