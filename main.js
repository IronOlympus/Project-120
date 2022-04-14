x = 0;
y = 0;
number = -1;
var times = 0;
var should_draw = "no";
var typeofnumber = 0;
localStorage.setItem("number" , -1);

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
   document.getElementById("status").innerHTML = "Please Speak , the system is listening";
   recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "We heard you wanted " + content + " apples";
    localStorage.setItem("number" , content);
    should_draw = "yes";
}
function setup(){
    canvas = createCanvas(900,600);
    img = loadImage('https://media.istockphoto.com/vectors/simple-apple-in-flat-style-vector-illustration-vector-id1141529240?k=20&m=1141529240&s=612x612&w=0&h=_j9z-sPT6AqFDSSXHnSYWrXOvDOgyMmSdTUrBiZULCo=');
}
function draw(){
    var number = localStorage.getItem("number");
   
    if(should_draw = "yes"){
    for (x = times; x <= number; x++) {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        console.log(number);
        console.log(times);
        img.resize(50,50);
        image(img ,x,y);
        console.log("Happening now");
        times = times+1;
    }
    }
}