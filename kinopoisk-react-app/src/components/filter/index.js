import React, { useState } from 'react';
import './index.css'
import Select from 'react-select';


const country = [
  { value: 'usa', label: 'США' },
  { value: 'united-kingdom', label: 'Великобритания' },
  { value: 'france', label: 'Франция' },
  { value: 'italy', label: 'Италия' },
];

const years = [
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
];


const Filter = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'gray',
    }),
    control: () => ({
      width: "180px",
      padding: "5px",
      display: "flex",
      background: "#242835",
      margin: "0 30px"
    }),
    placeholder: () => ({
      color: "#bbc2ce",
    }),
    singleValue: () => ({
      color: "#bbc2ce",
    }),
    indicatorsContainer: () => ({
      color: "#bbc2ce",
    }),
  }
  
  return (
  
  <div className='dropdown-container'>

    <Select
    placeholder="Страны"
    styles={customStyles}
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={country}
    />
    
    <Select 
    placeholder="Годы"
    styles={customStyles}
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={years}
    />

  </div>
  )

}

export default Filter;