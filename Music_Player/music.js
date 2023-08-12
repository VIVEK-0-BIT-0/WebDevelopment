let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("ProgressBar");
let audioItems = Array.from(document.getElementsByClassName("audioItem"));
let next = document.getElementById("next");
let previous = document.getElementById("previous")

 let songs = [
    {songname: "music 1",filePath:"1.mp3"},
    {songname: "music 2",filePath:"2.mp3"},
    {songname: "music 3",filePath:"3.mp3"},
    {songname: "music 4",filePath:"4.mp3"},
    {songname: "music 5",filePath:"5.mp3"},
    {songname: "music 6",filePath:"1.mp3"},
    {songname: "music 7",filePath:"2.mp3"},
    {songname: "music 8",filePath:"3.mp3"},
    {songname: "music 9",filePath:"4.mp3"},
    {songname: "music 10",filePath:"5.mp3"},
 ]

 audioItems.forEach((element,i) => {
    
    element.getElementsByClassName("audioname")[0].innerText = songs[i].songname;
 })

//  audioItems1.forEach((element) => {

//  })

 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        
    masterPlay.className = masterPlay.className.replace('uil', 'uil').replace('uil-play', 'uil-pause');
       
    }
    else{
        audioElement.pause();
        masterPlay.className = masterPlay.className.replace('uil', 'uil').replace('uil-pause', 'uil-play');
    }
 })
 audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

}) 
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('audioitemplay')).forEach((element)=>{
        element.className = element.className.replace('uil', 'uil').replace('uil-pause', 'uil-play');
     })
}

Array.from(document.getElementsByClassName('audioitemplay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.className = e.target.className.replace('uil', 'uil').replace('uil-play', 'uil-pause');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.className = masterPlay.className.replace('uil', 'uil').replace('uil-play', 'uil-pause');
    })
})

next.addEventListener('click', () => {
    if(songIndex>=4){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.className = masterPlay.className.replace('uil', 'uil').replace('uil-play', 'uil-pause');
})

previous.addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 4;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.className = masterPlay.className.replace('uil', 'uil').replace('uil-play', 'uil-pause');
})