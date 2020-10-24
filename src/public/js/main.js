const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async (event) => {
    event.preventDefault();

    let cityval = cityname.value;

    if (cityval === "") {
        console.log("this is if con1");
        //city_name.innerText = `Please Enter Your City`;
        alert("Please Enter Your City");

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8df9caf13cb9d5ae494b3331129ebcb9`;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);
            const arrData = [data];

            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;


        } catch {
            console.log("this is catch");
            //city_name.innerText = `Please Enter Valid City`;
            alert("Please Enter Valid City");
        }

    }



}

submitBtn.addEventListener('click', getInfo);