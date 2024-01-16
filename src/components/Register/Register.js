import React, { useState } from "react";
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import SidePanel from './components/SidePanel'
function App() {
  let currentStep = localStorage.getItem('currentStep')
  const [step,setStep] = useState(currentStep ? currentStep : 1)
  return (
    <div className='register-form'>
      <SidePanel/>
      {step == 1 && <PersonalInfo/ >}
      {step == 2 &&  <SelectPlan/>}
      {step == 3 &&  <AddOns/>}
      {step == 4 &&  <Summary/>}
    </div>
  );
}

export default App;
