import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({

    patientName: "",
    fatherOrCO: "",
    attenderName: "",
    attenderMobile: "",
    sex: "Male",
    age: "",
    mobile: "",
    address1: "",
    address2: "",
    address3: "",
    district: "",
    otherDistrict: "",
    email: "",
    visualRight: "",
    visualLeft: "",
    ownGlasses: "",
    procedureName: "",
    surgeonName: "",
    diagnosis: "",
    registrationDateTime: "",
    otInDateTime: "",
    surgeryDate: "",
    surgeryPlace: "",
    operatedEye: "",
    registrationDatetime: "",
    otDatetime: "",
    
    // Add fields for all pages
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
