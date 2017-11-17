//get paging
$("button.next")
function getPagging (){
  //load page get timeline
  
  //rubah valuenya
  let next = +$("button.next").val() + 20;
  $("button.next").val(next)
  getZomato(next)
}

//get weather
function getWeather(lat, long, cb){
  $.ajax({
    url: `http://localhost:3000/weather/${lat}/${long}`,
    method: 'get',
    dataType: 'json',
    success: function(data){
      // console.log(data);
      cb(data)
    },
    fail: function(xhr, msg){
      //err here
    }
  })
}

//get zomato
function getZomato(num){
  let start
  if(num){
    start = num
  } else {
    start = 0
    $("button.next").val(start)
  }
  let search = $('input[name="searchZomato"]').val()
  $.ajax({
    url: `http://localhost:3000/api/zomato?q=${search}&start=${start}`,
    method: 'get',
    dataType: 'json',
    success: function(data){
      let restaurants = data.newrestaurant
      $("div.zomatoResult").empty();
      if(restaurants.length>0){
        restaurants.forEach(r=>{
          getWeather(r.location.latitude,r.location.longitude, weather => {
          let panel = `
          <div class="container">
            <table>
              <tr>
                <td>
                  <img src="${r.thumb}">
                <td>
                <td>
                  Name: ${r.name}<br>
                  Status: <h3>${weather.message}</h3>
                  Weather Location: <h4>${weather.weather}</h4>
                  Address: ${r.location.address}<br>
                  Lat:  ${r.location.latitude}<br>
                  Lng:  ${r.location.longitude}<br>
                <td>
              </tr>
            </table>  
          </div>
          `
          $("div.zomatoResult").append(panel)
          })
        })
      } else {
        let panel = `
        <div class="container">
          Mohon maaf tidak ada di database kami
        </div>
        `
        $("div.zomatoResult").append(panel)
      }
    },
    fail: function(xhr, msg){
      //err here
      let panel = `
      <div class="container">
        OOPS Something wrong
      </div>
      `
      $("div.zomatoResult").append(panel)
    }
  })
}