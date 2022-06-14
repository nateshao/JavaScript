var video = document.getElementById('video')
function playing(time){
    video.currentTime = time
    video.play()
}

//开始暂停
var audio = document.getElementById('audio')
var pause = document.getElementById('pause')
function toggle(){
    if(audio.paused){
        audio.play()
        pause.innerHTML = '<img src="./img/MyMusicVideo/play.png" alt="">'
    }else{
        audio.pause()
        pause.innerHTML = '<img src="./img/MyMusicVideo/pause.png" alt="">'
    }
}

//音量键
var ipt = document.getElementById('ipt')
function change(){
    audio.volume = ipt.value
}

//上一曲 下一曲
var names = document.getElementById('name')
var i = 0
var musicNam = new Array('Tell Me Why','不完美小孩','美人鱼','最美的太阳')
var musicSrc = new Array('./img/MyMusicVideo/music/Tell Me Why.mp3','./img/MyMusicVideo/music/不完美小孩.mp3','./img/MyMusicVideo/music/美人鱼.mp3','./img/MyMusicVideo/music/最美的太阳.mp3')

function next(){
    if(i === musicSrc.length - 1){
        i = 0 
    }else{
        i++
    }
    names.innerText = musicNam[i]
    audio.src = musicSrc[i]
    toggle()
}
function previous(){
    if(i === 0){
        i = musicSrc.length - 1
    }else{
        i--
    }
    names.innerText = musicNam[i]
    audio.src = musicSrc[i]
    toggle()
}