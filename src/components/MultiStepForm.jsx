import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className=" w-1/2 mx-auto p-4" onSubmit={handleSubmit}>
      {step === 1 && (
        <Step1 formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} />
      )}
      {step === 2 && (
        <Step2 formData={formData} handleChange={handleChange} handlePrevStep={handlePrevStep} handleSubmit={handleSubmit} />
      )}
    </form>
  );
};

export default MultiStepForm;
