$(function(){
    var database=[
        {name:'会过去的',singer:'梁静茹',src:'mp3/会过去的.mp3',zj:'爱久见人心',bj:'bjt1'},
        {name:'当你老了',singer:'莫文蔚',src:'mp3/当你老了.mp3',zj:'当你老了',bj:'bjt2'},
        {name:'红豆',singer:'王菲',src:'mp3/红豆.mp3',zj:'唱游',bj:'bjt3'}
    ]
    //添加进列表
    $(database).each(function(index,v){
        $('<li class="ge" data-id='+index+'><div class="ui-track-checkbox"><input type="checkbox" class="ui-track-item-id"></div><div class="ui-track-sort"><em>'+(index+1)+'</em></div><div class="gequlb"><span class="song">'
            +v.name+'</span><span class="singer">'
            +v.singer+'</span><span class="time">'
            +v.zj+'</span></div><div class="ui-track-control"><a href="javascript:;" class="fav-btn icon-track-fav" title="收藏"></a><a href="javascript:;" class="more-btn icon-track-more" title="更多"></a><a href="javascript:;" class="delete-btn icon-track-delete" title="删除"></a></div></li>')
            .appendTo('.song-list');
    })
    var index=0;
    //点击列表播放
    $('.song-list .gequlb').on('click',function(){
        index=$(this).parent('.ge').index();
        audio.src=database[index].src;
        audio.play();
        $('#J_trackName').text(database[index].name);
        $('#singer').text(database[index].singer);
        if($('.ge').hasClass('zanting')){
            $('.ge').removeClass('zanting');
        }
        $('body').get(0).className=database[index].bj;
        $('.ui-album-img img')
            .css('display','none')
            .eq(index)
            .css('display','inline-block');
        $('.ks-scroll-view-content ul')
            .css('display','none')
            .eq(index)
            .css('display','block');
    })
    //下一首
    $('.next-btn').click(function(){
        index++;
        if(index===database.length){
            index=0;
        }
        audio.src=database[index].src;
        $('#J_trackName').text(database[index].name);
        $('#singer').text(database[index].singer);
        audio.play();
        if($('.ge').hasClass('zanting')){
            $('.ge').removeClass('zanting');
        }
        $('body').get(0).className=database[index].bj;
        $('.ui-album-img img')
            .css('display','none')
            .eq(index)
            .css('display','inline-block');
        $('.ks-scroll-view-content ul')
            .css('display','none')
            .eq(index)
            .css('display','block');
    });
    //上一首
    $('.prev-btn').click(function(){
        index-=1;
        if(index===-1){
            index=database.length-1;
        }
        audio.src=database[index].src;
        $('#J_trackName').text(database[index].name);
        $('#singer').text(database[index].singer);
        audio.play();
        if($('.ge').hasClass('zanting')){
            $('.ge').removeClass('zanting');
        }
        $('body').get(0).className=database[index].bj;
        $('.ui-album-img img')
            .css('display','none')
            .eq(index)
            .css('display','inline-block');
        $('.ks-scroll-view-content ul')
            .css('display','none')
            .eq(index)
            .css('display','block');
    })
     //自动切换下一首
    // function shunxu(){
    //     index+=1;
    //     if(index===database.length){
    //         index=0;
    //     }
    //     if(audio.currentTime===audio.duration){
    //         audio.src=database[index].src;
    //         $('#J_trackName').text(database[index].name);
    //         $('#singer').text(database[index].singer);
    //         $('body').get(0).className=database[index].bj;
    //         $('.ui-album-img img')
    //             .css('display','none')
    //             .eq(index)
    //             .css('display','inline-block');
    //         $('.ks-scroll-view-content ul')
    //             .css('display','none')
    //             .eq(index)
    //             .css('display','block');
    //         audio.play();
    //     }
    //     if($('.ge').hasClass('zanting')){
    //         $('.ge').removeClass('zanting');
    //     }
    // }
    //收藏
    $('#J_trackFav').click(function(){
        $(this).toggleClass('active');
    })
    $('.icon-track-fav').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    })

    //高品质切换
    $('#J_playerHQ').click(function(){
        $(this).toggleClass('mode-hq-off27');
    })
    //播放功能
    var audio=$('audio').get(0);
    var bofang=$('#J_playBtn');
    bofang.on('click',function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    })
    //console.log(bofang);
   $(audio).on('play',function(){
       bofang.removeClass('play-btn').addClass('pause-btn');
       $('.song-list .ge')
           .removeClass('playing2')
           .eq(index)
           .addClass('playing2');
   })
    $(audio).on('pause',function(){
        bofang.removeClass('pause-btn').addClass('play-btn');
        $('.ui-track-sort em').removeClass('emactive');
       if($('.ge').hasClass('playing2')){
           $('.playing2').removeClass('playing2').addClass('zanting');
       }
    })
    $(audio).on('timeupdate',function(){
        $('#J_positionTime').text(fadeTime(audio.currentTime));
        $('.player-duration').text(fadeTime(audio.duration));
        $('.panel .player-dot').css({left:$('.progress').width()*(audio.currentTime/audio.duration)});
        $('.playing').css('width',$('.progress').width()*(audio.currentTime/audio.duration));
        $('.ks-scroll-view-content').css('top',-1*$('.ks-scroll-view-content').height()*(audio.currentTime/audio.duration));
        // shunxu();
        //console.log();
    })
    $(audio).on('canplay',function(){
        $('audio').triggerHandler('timeupdate');
    })
    //将秒转化成分：秒格式
    var fadeTime=function (time){
        var t=time;
        var m=Math.floor(t/60);
        var s=Math.floor(t%60);
        s=s<10?"0"+s:s;
        return m+':'+s;
    }
    //播放进度条点击
    $('.player-progress').click(function(e){
        audio.currentTime=audio.duration*(e.offsetX/$(this).width());
        // audio.play();
        //console.log(1)
    });
    //声音点静音
    $('#J_volumeSpeaker').click(function(){
        if($(this).attr('pre')){
            audio.volume=$(this).attr('pre');
            $(this).attr('pre','');
            $(this).removeClass('volume-off').addClass('volume-on');
        }else{
            $(this).attr('pre',audio.volume);
            audio.volume=0;
            $(this).removeClass('volume-on').addClass('volume-off');
        };
    })
    //音量进度条
    $('.volume-wrap').click(function (e) {
       // console.log(1);
        audio.volume=e.offsetX/$(this).width();
      });
    $('audio').on('volumechange',function () {
        $('.volume-cur').css('width',$('.volume-wrap').width()*audio.volume);
        $('.volume-dot').css('left',$('.volume-wrap').width()*audio.volume);
    });
    //播放进度条按下拖动
    $('.player-dot').on('mousedown',function(e){
       var cx=e.clientX;
        var lenx=cx-$(this).get(0).offsetLeft;
        document.onmousemove=function(e){
            var x=e.clientX-lenx;
             var w=$('.panel').width();
            // console.log(w)
            if(x<0){x=0};
             if(x>w){x=w}
            $('.player-dot').css('left',x);
            $('.playing').css('width',x);
            audio.currentTime=audio.duration*(x/w);
        }
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        }

    })















})