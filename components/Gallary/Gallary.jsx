import React from "react";
import BoxLayout from "../layouts/BoxLayout";
import Hajj from "./Hajj/Hajj";
import INITGallary from "./INITGallary/INITGallary";
import Umrah from "./Umrah/Umrah";

const Gallary = () => {
  return (
    <BoxLayout>
      <INITGallary title="Hajj" date="2019" />
      <INITGallary title="Hajj" date="2019" />
      <INITGallary title="Hajj" date="2019" />
      <INITGallary title="Hajj" date="2019" />
    </BoxLayout>
  );
};

export default Gallary;
