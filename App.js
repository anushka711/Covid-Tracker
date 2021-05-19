import React from 'react';
import coronaImage from './images/image_covid.png';
import {Cards, Chart, CountryPicker} from './components';
import {fetchData} from './api';
import styles from './App.module.css';

class App extends React.Component {

    state = {
        data:{},
        country:''
    }

    handleCountryChange = async (country) => {

        const fetchedData =await fetchData(country);
        this.setState({data :fetchedData, country:country});
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    render()
    {
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src = {coronaImage} alt="COVID TRACKER"/>
                <Cards data ={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        );
    }
}
export default App;