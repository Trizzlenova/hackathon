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
let voteNow = document.getElementById('voteNow');
let quiz = document.getElementById('quiz');

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
  quiz.style.display = 'none';
});

hamburger.addEventListener('click', function(){
  ballotSection.style.display = 'none';
  registerPage.style.display = 'none';
  home.style.display = 'none';
  back.style.display = 'none';
  pickCategory.style.display = 'block'
  account.style.display = 'none';
  quiz.style.display = 'none';
});


pickHome.addEventListener('click',function(){
  home.style.display = 'block';
  pickCategory.style.display = 'none';
  ballotSection.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'none';
  quiz.style.display = 'none';
});

pickQuiz.addEventListener('click', function(){
  ballotSection.style.display = 'none';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'none';
  quiz.style.display = 'flex';
})


pickBallot.addEventListener('click',function(){
  ballotSection.style.display = 'block';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'block';
  back.style.display = 'none';
  account.style.display = 'none';
  quiz.style.display = 'none';
});

pickAccount.addEventListener('click',function(){
  ballotSection.style.display = 'none';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'block';
  quiz.style.display = 'none';
});

quizStart.addEventListener('click', function(){
  ballotSection.style.display = 'none';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'none';
  back.style.display = 'none';
  account.style.display = 'none';
  quiz.style.display = 'flex';
})

voteNow.addEventListener('click',function(){
  ballotSection.style.display = 'block';
  home.style.display = 'none';
  pickCategory.style.display = 'none';
  registerPage.style.display = 'block';
  back.style.display = 'none';
  account.style.display = 'none';
  quiz.style.display = 'none';
  myModal.style.display = 'none';
});


//QUIZ SECTION
arrayOfQeustions = [{question:"What portion of Prop G, a parcel tax for teacher salaries, would go to items other than teacher salary?",
choices:["40%", "10%","75%", "5%"],
 correct:["75%", `Seventy-five percent ($37.5M) is committed to salaries through a recent negotiation with the teachers' labor union. The remaining 25 percent ($12.5M) would distribute across three categories:
(1) Support to other school district staff
(2) Support for digital learning (this includes devices and software and also staff/time for training/learning)
(3) Charter schools`]},
{question:"Which mayoral candidate supported Senate Bill 827, which would have required housing density near public transportation hubs?",
choices:["Jane Kim", "London Breed","Angela Alioto", "Mark Leno"],
 correct:["London Breed", `Jane Kim and Mark Leno opposed the bill because they believed it was too generous to real estate developers. Angela Alioto believed it should be amended in major ways, including redefining "transit hubs" and building in stronger protections to prevent displacement. Ms. Breed supported the bill because, in her words, "At the end of the day people lose. Housing still isn't built because of these obstructionists."`]},
 {question:"Prop H would authorize the SF Police Department to purchase what type of weapons for all officers?",
 choices:["Machine Guns", "Tasers","Machetes", "Sniper Rifles"],
  correct:["Tasers", `he City shall set policy for when Police officers can use tazers and would authorize the Department to purchase tasers for all officers, subject to specific conditions`]}
]

// A $( document ).ready() block.
let counter = 0;
let max = arrayOfQeustions.length
$(document).ready(function() {
    $('#myModal').hide()
    console.log( "ready!", arrayOfQeustions[counter].question );
    $('#question').html(`${arrayOfQeustions[counter].question}`)
    $('#choice-one').html(`${arrayOfQeustions[counter].choices[0]}`)
    $('#choice-two').html(`${arrayOfQeustions[counter].choices[1]}`)
    $('#choice-three').html(`${arrayOfQeustions[counter].choices[2]}`)
    $('#choice-four').html(`${arrayOfQeustions[counter].choices[3]}`)

        $('#next-ques-btn').on('click', ()=>{
            $('#myModal').hide()
            loadQuestions();
        });

        $('.choice').on('click', (e)=>{
            console.log('clicked', e.currentTarget.id)
            getAnswer(e)
        })



});

loadQuestions = ()=>{
    // $('.choice').css('background-color', 'white');
    if (counter >= max-1){
        counter = 0;
    }else{
        counter = counter+1
    }
    console.log(counter)
    $('#question').html(`${arrayOfQeustions[counter].question}`)
    $('#choice-one').html(`${arrayOfQeustions[counter].choices[0]}`)
    $('#choice-two').html(`${arrayOfQeustions[counter].choices[1]}`)
    $('#choice-three').html(`${arrayOfQeustions[counter].choices[2]}`)
    $('#choice-four').html(`${arrayOfQeustions[counter].choices[3]}`)
}


getAnswer = (e)=>{
 let ran = Math.floor(Math.random() * 100);
 let overLay = `<div style=" position:fixed; display:block; background-color:
  rgba(0,0,0,0.5); z-index: 2;  bottom:0; top:0; left:0; height: 100%; width:${ran}%;"></div>`
 let clicked = $(`#${e.currentTarget.id}`).html()
 let correctAns = arrayOfQeustions[counter].correct

 if(clicked === correctAns[0]){
    $('.choice').find("#overlay").remove();
     $('.choice').append(randOverLay)

    //  $('.choice').css('background-color', 'red');
    $(`#${e.currentTarget.id}`).find("#overlay").remove();
    $(`#${e.currentTarget.id}`).append(`<div style="display: flex;"id="overlay"><div style="postion: fixed; display: block; background-color:green; min-height: 60%; width: ${ran}%;"></div><div>${ran}%</div></div>`)

    $('#myModal').show()
    $("#correctInfo").html(correctAns[1])
}else{
     $(`#${e.currentTarget.id}`).append(`<div style="display: flex;"id="overlay"><div style="postion: fixed; display: block; background-color:red; min-height: 60%; width: ${ran}%;"></div><div>${ran}%</div></div>`)

 }
}

randOverLay = ()=>{
    ran = Math.floor(Math.random() * 100);
   return $(`<div style="display: flex;"id="overlay"><div style="postion: fixed; display: block; background-color:red; min-height: 60%; width: ${ran}%;"></div><div>${ran}%</div></div>`)
}


