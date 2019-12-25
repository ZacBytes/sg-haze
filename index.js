const request = require('request');

const urls = {
	pm25: "https://api.data.gov.sg/v1/environment/pm25",
	psi: "https://api.data.gov.sg/v1/environment/psi"
}


function sghaze () {}

sghaze.prototype.getPSI = function (callback) {

		request(urls.psi, function (error, response, body) {
			if(error || response.statusCode !== 200 || body === undefined) {callback("NEA PSI API is down")};

			var psi_table = body["items"][0]["readings"]["psi_twenty_four_hourly"]
			var HealthStatus = "Error"

			var NationalPSI = psi_table["national"]
			var NorthPSI = psi_table["north"]
			var EastPSI = psi_table["east"]
			var SouthPSI = psi_table["south"]
			var WestPSI = psi_table["west"]
			var CentralPSI = psi_table["central"]
			
			//Checking psi health status
			if (NationalPSI <= 50) {
				HealthStatus = "Normal";
			  } else if (NationalPSI >= 50 & NationalPSI <= 100 ){
				HealthStatus = "Moderate";
			  } else if (NationalPSI >= 101 & NationalPSI <= 200 ){
				HealthStatus = "Unhealthy";
			  } else if (NationalPSI >= 201 & NationalPSI <= 300 ){
				HealthStatus = "Very Unhealthy";
			  } else if (NationalPSI > 300){
				HealthStatus = "Hazardous";
			  }

			

			var PSIData = {};
			PSIData.NationalPSI = NationalPSI;
			PSIData.NorthPSI = NorthPSI;
			PSIData.EastPSI = EastPSI;
			PSIData.SouthPSI = SouthPSI;
			PSIData.WestPSI = WestPSI;
			PSIData.CentralPSI = CentralPSI;
			PSIData.HealthStatus = HealthStatus;
			callback(null, PSIData)
		});

}

sghaze.prototype.getPM25 = function (callback) {

	request(urls.pm25, function (error, response, body) {
		if(error || response.statusCode !== 200 || body === undefined) {callback("NEA PM2.5 API is down")};

		var pm25_table = body["items"][0]["readings"]["pm25_one_hourly"]

		var NorthPM25 = pm25_table["north"]
		var NorthHealthStatus = "Error"

		var EastPM25 = pm25_table["east"]
		var EastHealthStatus = "Error"

		var SouthPM25 = pm25_table["south"]
		var SouthHealthStatus = "Error"

		var WestPM25 = pm25_table["west"]
		var WestHealthStatus = "Error"

		var CentralPM25 = pm25_table["central"]
		var CentralHealthStatus = "Error"
		
		//Checking PM25 health status
		if (NorthPM25 <= 55) {
			NorthHealthStatus = "Normal";
		  } else if (NorthPM25 >= 56 & NorthPM25 <= 150 ){
			NorthHealthStatus = "Elevated";
		  } else if (NorthPM25 >= 151 & NorthPM25 <= 250 ){
			NorthHealthStatus = "High";
		  } else if (NorthPM25 > 250){
			NorthHealthStatus = "Very High";
		  }

		if (EastPM25 <= 55) {
			EastHealthStatus = "Normal";
		  } else if (EastPM25 >= 56 & EastPM25 <= 150 ){
			EastHealthStatus = "Elevated";
		  } else if (EastPM25 >= 151 & EastPM25 <= 250 ){
			EastHealthStatus = "High";
		  } else if (EastPM25 > 250){
			EastHealthStatus = "Very High";
		  }

		if (SouthPM25 <= 55) {
			SouthHealthStatus = "Normal";
		  } else if (SouthPM25 >= 56 & SouthPM25 <= 150 ){
			SouthHealthStatus = "Elevated";
		  } else if (SouthPM25 >= 151 & SouthPM25 <= 250 ){
			SouthHealthStatus = "High";
		  } else if (SouthPM25 > 250){
			SouthHealthStatus = "Very High";
		  }
		
		if (WestPM25 <= 55) {
			WestHealthStatus = "Normal";
		  } else if (WestPM25 >= 56 & WestPM25 <= 150 ){
			WestHealthStatus = "Elevated";
		  } else if (WestPM25 >= 151 & WestPM25 <= 250 ){
			WestHealthStatus = "High";
		  } else if (WestPM25 > 250){
			WestHealthStatus = "Very High";
		  }

		if (CentralPM25 <= 55) {
			CentralHealthStatus = "Normal";
		  } else if (CentralPM25 >= 56 & CentralPM25 <= 150 ){
			CentralHealthStatus = "Elevated";
		  } else if (CentralPM25 >= 151 & CentralPM25 <= 250 ){
			CentralHealthStatus = "High";
		  } else if (CentralPM25 > 250){
			CentralHealthStatus = "Very High";
		  }

		var PM25Data = {};
		PM25Data.NorthPM25 = NorthPM25;
		PM25Data.NorthHealthStatus = NorthHealthStatus;

		PM25Data.EastPM25 = EastPM25;
		PM25Data.EastPM25 = EastHealthStatus;

		PM25Data.SouthPM25 = SouthPM25;
		PM25Data.SouthHealthStatus = SouthHealthStatus;

		PM25Data.WestPM25 = WestPM25;
		PM25Data.WestHealthStatus = WestHealthStatus;

		PM25Data.CentralPM25 = CentralPM25;
		PM25Data.CentralHealthStatus = CentralHealthStatus;
		callback(null, PM25Data)
	});

}

module.exports = new sghaze()
  
