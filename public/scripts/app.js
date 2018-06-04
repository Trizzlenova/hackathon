// navigator.geolocation.getCurrentPosition(function(response){
//   console.log(parseFloat(response.coords.latitude) + " " + parseFloat(response.coords.longitude))
//   let lat = parseFloat(response.coords.latitude);
//   let lng = parseFloat(response.coords.longitude)
//   var marker = new google.maps.Marker({
//     map: map,
//     position: {
//       lat: lat,
//       lng: lng
//     }
//   })
//   map.setCenter({lat: parseFloat(response.coords.latitude),
//     lng: parseFloat(response.coords.longitude)}
//   );
//   console.log(response)
//   displayBooth(lat, lng)
// })

// let map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: 37.7749, lng: -122.4194},
//   zoom: 15
// });

// function displayBooth(latitude, longitude) {
//   axios.get('/boothLocation', {
//     params: {
//       lat: latitude,
//       lng: longitude
//     }
//   })
//   .then(function(response) {
//     console.log(response)
//       for(let i = 0; i < response.data.length; i++) {
//         let latis = parseFloat(response.data[i].geometry.location.lat);
//         let longis = parseFloat(response.data[i].geometry.location.lng);
//         let boothName = response.data[i].name
//         let marker = new google.maps.Marker({
//           map: map,
//           title: boothName,
//           position: {
//             lat: latis,
//             lng: longis,
//           },
//           icon: {
//             // railway station by Artdabana@Design from the Noun Project
//             url: "images/voting.png",
//             scaledSize: {height: 30, width: 30},
//           }
//       });
//     }
//   })
// }
