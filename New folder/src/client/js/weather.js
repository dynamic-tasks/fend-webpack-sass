function handleWeather(e){
    e.preventDefault();
    const val = document.querySelector(".temp").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${val}&appid=db6608063a9d72758e29ea323da07bd1`).then(
        (res)=>(res.json())
    ).then(
        (res)=>{
            document.querySelector(".temp_res").innerHTML = res.main.temp;
        }
    )
}

export {
    handleWeather
}