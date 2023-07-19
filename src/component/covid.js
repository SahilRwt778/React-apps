import React, { useEffect , useState} from "react";
import './covid.css'
const Covid =()=>{

    const [data, setData]=useState([])
    const getCovidData=async()=>{

        try {
            const res=await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return (
        <>
        <section>
        <div className="header">
        <h1>🔴 LIVE</h1>
        <h2>Covid-19 Corona-Tracker</h2>
        </div>
        <div className="container">
            <div className="list">
                
                <div>
                    <h2 ><span>Our </span>Country</h2>
                    <h1 >INDIA</h1>
                </div>
                <div >
                    <h2 ><span>Total </span>Recovered</h2>
                    <h1 >{data.recovered}</h1>
                </div>                

            
                <div >
                    <h2 ><span>Total </span>Confirmed</h2>
                    <h1 >{data.confirmed}</h1>
                </div>
                
            </div>
            <div className="list">
                <div>
                    <h2><span>Total </span>Death</h2>
                    <h1 >{data.deaths}</h1>
                </div>
                

            
                <div >
                    <h2 ><span>Total </span>Active</h2>
                    <h1 >{data.active}</h1>
                </div>
                

           

                <div >
                    <h2 ><span>Last </span>Update</h2>
                    <h1 >{data.lastupdatedtime}</h1>
                </div>
                
                
            </div>
            </div>
        </section>
        </>
    )
}
export default Covid