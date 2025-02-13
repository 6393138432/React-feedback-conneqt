import React, { useState } from 'react';
import Createnewaccount from './Createnewaccount';
import DataTable from './DataTable';

const NewUserdestaillist = () => {
  const [formData, setFormData] = useState(null); // Store the form data here

  const handleFormSubmit = (data) => {
    setFormData(data); // Update the state with the new form data
  };

  return (
    <div>
      <Createnewaccount onFormSubmit={handleFormSubmit} />
      {formData && <DataTable data={formData} />}
    </div>
  );
};

export default NewUserdestaillist;
