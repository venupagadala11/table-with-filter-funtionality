import './App.css';
import SearchComponent from './component/SearchComponent';
import { useState, useEffect } from 'react';
import DisplayUserData from './component/DisplayData';
import DisplayTrashData from './component/DisplayTrashData';
import DisplayStaredData from './component/DisplayStaredData';


function App() {
  const [data,setData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [mockData, setMockData] = useState([]);
  const [trashData, setTrashData] = useState([]);
  const [staredData, setStaredData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredData , setFilteredData] = useState([]);
  const [isTrashDataActive ,setIsTrashDataActive] = useState(false);
  const [isStaredDataActive ,setIsStaredDataActive] = useState(false);
  const [isUserDataActive ,setIsUserDataActive] = useState(true);
  const [starFlag ,setStarFlag] = useState(false);

  

  const handleInputChange = (event)=>
  {
  setsearchValue(event.target.value);
  }

  const handleDeleteUserDetails = (index) =>
  {
      setTrashData([...trashData, data[index]]);
      setData([...data.filter((user, currentIndex) => index!==currentIndex )]);
      setFilteredData([...data.filter((user, currentIndex) => index!==currentIndex )]);
  }

  const handleStaredData = (index) =>
  {
      const indexNotFoundFlag=true;
      staredData.filter((item,i)=>
      {if(i===index)
        {
          indexNotFoundFlag = false;
        }
      });
      if(indexNotFoundFlag)
      {
        setStaredData([...staredData, data[index]]);
      }
      setStarFlag(index)
      
  }

  const handleSelectedOption= (e) =>
  {
    setSelectedOption(e.target.value)
    console.log("slected",selectedOption); 
  }

  const showUserData =() =>
  {
    setIsTrashDataActive(false);
    setIsUserDataActive(true);
    setIsStaredDataActive(false);
  }

  const ShowTrashData = () =>
  {
      setIsTrashDataActive(true);
      setIsUserDataActive(false);
      setIsStaredDataActive(false);
      console.log("true")
  } 
  
  const ShowStaredData =() =>
  {
    setIsTrashDataActive(false);
    setIsUserDataActive(false);
    setIsStaredDataActive(true);
  }

  useEffect(()=>
    {
      fetch('https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b')
        .then(response => response.json())
        .then(userData => {setData(userData);setMockData(userData);setFilteredData(userData)})
      // console.log("fetch",mockData)
    },[]);

  useEffect(()=>
    {
    const newData = mockData.filter((person)=>
      {
        return (
          person.id.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
          person.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          person.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          person.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          person.ip_address.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setData([...newData])
      
    },[searchValue]);

    useEffect(()=>
  {
    if(selectedOption=="all")
    {
      setData(filteredData);
      console.log("use",selectedOption);

    }
    else
    {
      const newDatas = filteredData.filter((person)=> person.gender.toString().toLowerCase()==selectedOption.toLocaleLowerCase());
      console.log(newDatas,"optional");
      console.log("use",selectedOption)
      // console.log("mock",mockData)
      setData([...newDatas])
    }
    
  },[selectedOption]);

  return (
    <div className="App">
      <div className='header'>
        <div className="buttons-container">
          <button className='home-button' onClick={showUserData}>Home</button>
          <DisplayStaredData staredData={staredData} ShowStaredData={ShowStaredData}/>
          <DisplayTrashData trashData={trashData} ShowTrashData={ShowTrashData}/>
        </div>
      </div>
      <SearchComponent  handleInputChange={handleInputChange} handleSelectedOption={handleSelectedOption}/>
      <DisplayUserData data={data} isUserDataActive={isUserDataActive} handleDeleteUserDetails={handleDeleteUserDetails} handleStaredData={handleStaredData} trashData={trashData} isTrashDataActive={isTrashDataActive} staredData={staredData} isStaredDataActive={isStaredDataActive} starFlag={starFlag}></DisplayUserData>
    </div>
  );
}

export default App;
