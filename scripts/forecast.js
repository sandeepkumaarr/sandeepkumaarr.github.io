class Forecast {
    constructor(){
        this.key = 'cyaLxR5vdG7A4UarOIUAS7UBdXPBHXG3';
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const getDetails = await this.getCity(city);
        const weather = await this.getWeather(getDetails.Key);
        return {getDetails,weather};
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id){
            
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL + query);
        const data = await response.json();
        return data[0];        
    }
}
