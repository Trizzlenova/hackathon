let ballot = document.getElementById('toBallot');
let ballotSection = document.getElementById('ballot');
let registerPage = document.getElementById('registerPage');
let home = document.getElementById('home');
let quizStart = document.getElementById('quizStart');
let back = document.getElementById('back');
let hamburger = document.getElementById('displayMenu');
let pickCategory = document.getElementById('pickCategory');
let ul = document.getElementsByTagName('ul');
let pickHome = document.getElementById('pickHome');
let pickQuiz = document.getElementById('pickQuiz');
let pickBallot = document.getElementById('pickBallot');
let pickAccount = document.getElementById('pickAccount');
let account = document.getElementById('account');


navigator.geolocation.getCurrentPosition(function(response){
  console.log(parseFloat(response.coords.latitude) + " " + parseFloat(response.coords.longitude))
  let lat = parseFloat(response.coords.latitude);
  let lng = parseFloat(response.coords.longitude)
  var marker = new google.maps.Marker({
    map: map,
    position: {
      lat: lat,
      lng: lng
    }
  })
  map.setCenter({lat: parseFloat(response.coords.latitude),
    lng: parseFloat(response.coords.longitude)}
  );
  console.log(response)
  displayBooth(lat, lng)
})

let map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.7749, lng: -122.4194},
  zoom: 13
});

function displayBooth(latitude, longitude) {
  axios.get('/boothLocation', {
    params: {
      lat: latitude,
      lng: longitude
    }
  })
  .then(function(response) {
    console.log(response)
      for(let i = 0; i < response.data.length; i++) {
        let latis = parseFloat(response.data[i].geometry.location.lat);
        let longis = parseFloat(response.data[i].geometry.location.lng);
        let boothName = response.data[i].name
        let marker = new google.maps.Marker({
          map: map,
          title: boothName,
          position: {
            lat: latis,
            lng: longis,
          },
          icon: {
            // railway station by Artdabana@Design from the Noun Project
            url: "images/voting.png",
            scaledSize: {height: 30, width: 30},
          }
      });
    }
  })
}

ballot.addEventListener('click', function(){
  ballotSection.style.display = 'block'
  registerPage.style.display = 'block'
  home.style.display = 'none'
  back.style.display = 'block';
});

hamburger.addEventListener('click', function(){
  ballotSection.style.display = 'none';
  registerPage.style.display = 'none';
  home.style.display = 'none';
  back.style.display = 'none';
  pickCategory.style.display = 'block'
  account.style.display = 'none';
});


pickHome.addEventListener('click',function(){
  home.style.display = 'block';
  pickCategory.style.display = 'none';
  ballotSection.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'none';
});

pickQuiz.addEventListener('click',function(){
  ballotSection.style.display = 'block';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'block';
  back.style.display = 'none';
  account.style.display = 'none';
});

pickBallot.addEventListener('click',function(){
  ballotSection.style.display = 'block';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'block';
  back.style.display = 'none';
  account.style.display = 'none';
});

pickAccount.addEventListener('click',function(){
  ballotSection.style.display = 'none';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'block';
});


