var audio = document.querySelector('#kahani');
var lmlyd = document.querySelector("#lmlyd");
var chain = document.querySelector("#chain");
var channa = document.querySelector("#channa");
var dil = document.querySelector("#dil");
var her = document.querySelector("#her");
var kali = document.querySelector("#kali");
var mi = document.querySelector("#mi");
var woh = document.querySelector("#woh");
var bmc = document.querySelector('#bmc');

var gif = document.querySelector('#gif');
var st = document.querySelector('.st');
var range= document.querySelector('#range');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');





st.addEventListener('click',function(details){
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        st.classList.remove('ri-play-circle-fill');
        st.classList.add('ri-pause-circle-fill');
        gif.style.opacity = 1;
    } 
    else{
        audio.pause();
        st.classList.remove('ri-pause-circle-fill');
        st.classList.add('ri-play-circle-fill');
        gif.style.opacity = 0;
    }
        
        
    })
    audio.addEventListener('timeupdate',function(details){
        var percent = parseInt((audio.currentTime/audio.duration)*100);
        range.value = percent
    })
    one.addEventListener('click',function(details){
        if(lmlyd.paused || lmlyd.currentTime<=0){
            lmlyd.play();
            one.classList.remove('ri-play-circle-fill');
            one.classList.add('ri-pause-circle-fill');
        } 
        else{
            lmlyd.pause();
            one.classList.remove('ri-pause-circle-fill');
            one.classList.add('ri-play-circle-fill');
        }
            
            
        })
        lmlyd.addEventListener('timeupdate',function(details){
            var percent = parseInt((lmlyd.currentTime/audio.duration)*100);
            range.value = percent
        })
        two.addEventListener('click',function(details){
            if(bmc.paused || bmc.currentTime<=0){
                bmc.play();
                two.classList.remove('ri-play-circle-fill');
                two.classList.add('ri-pause-circle-fill');
            } 
            else{
                bmc.pause();
                two.classList.remove('ri-pause-circle-fill');
                two.classList.add('ri-play-circle-fill');
            }
                
                
            })
            bmc.addEventListener('timeupdate',function(details){
                var percent = parseInt((bmc.currentTime/audio.duration)*100);
                range.value = percent
            })
            

three.addEventListener('click',function(details){
    if(mi.paused || mi.currentTime<=0){
        mi.play();
        three.classList.remove('ri-play-circle-fill');
        three.classList.add('ri-pause-circle-fill');
    } 
    else{
        mi.pause();
        three.classList.remove('ri-pause-circle-fill');
        three.classList.add('ri-play-circle-fill');
    }
        
        
    })
    mi.addEventListener('timeupdate',function(details){
        var percent = parseInt((mi.currentTime/mi.duration)*100);
        range.value = percent
    })
                

four.addEventListener('click',function(details){
    if(chain.paused || chain.currentTime<=0){
        chain.play();
        four.classList.remove('ri-play-circle-fill');
        four.classList.add('ri-pause-circle-fill');
    } 
    else{
        chain.pause();
        four.classList.remove('ri-pause-circle-fill');
        four.classList.add('ri-play-circle-fill');
    }
        
        
    })
    chain.addEventListener('timeupdate',function(details){
        var percent = parseInt((chain.currentTime/chain.duration)*100);
        range.value = percent
    })
    

five.addEventListener('click',function(details){
    if(kali.paused || kali.currentTime<=0){
        kali.play();
        five.classList.remove('ri-play-circle-fill');
        five.classList.add('ri-pause-circle-fill');
    } 
    else{
        kali.pause();
        five.classList.remove('ri-pause-circle-fill');
        five.classList.add('ri-play-circle-fill');
    }
        
        
    })
    kali.addEventListener('timeupdate',function(details){
        var percent = parseInt((kali.currentTime/kali.duration)*100);
        range.value = percent
    })
    

six.addEventListener('click',function(details){
    if(channa.paused || channa.currentTime<=0){
        channa.play();
        six.classList.remove('ri-play-circle-fill');
        six.classList.add('ri-pause-circle-fill');
    } 
    else{
        channa.pause();
        six.classList.remove('ri-pause-circle-fill');
        six.classList.add('ri-play-circle-fill');
    }
        
        
    })
    channa.addEventListener('timeupdate',function(details){
        var percent = parseInt((channa.currentTime/channa.duration)*100);
        range.value = percent
    })
    

seven.addEventListener('click',function(details){
    if(her.paused || her.currentTime<=0){
        her.play();
        seven.classList.remove('ri-play-circle-fill');
        seven.classList.add('ri-pause-circle-fill');
    } 
    else{
        her.pause();
        seven.classList.remove('ri-pause-circle-fill');
        seven.classList.add('ri-play-circle-fill');
    }
        
        
    })
    her.addEventListener('timeupdate',function(details){
        var percent = parseInt((her.currentTime/her.duration)*100);
        range.value = percent
    })
    

eight.addEventListener('click',function(details){
    if(dil.paused || dil.currentTime<=0){
        dil.play();
        eight.classList.remove('ri-play-circle-fill');
        eight.classList.add('ri-pause-circle-fill');
    } 
    else{
        dil.pause();
        eight.classList.remove('ri-pause-circle-fill');
        eight.classList.add('ri-play-circle-fill');
    }
        
        
    })
    dil.addEventListener('timeupdate',function(details){
        var percent = parseInt((dil.currentTime/dil.duration)*100);
        range.value = percent
    })
    

nine.addEventListener('click',function(details){
    if(woh.paused || woh.currentTime<=0){
        woh.play();
        nine.classList.remove('ri-play-circle-fill');
        nine.classList.add('ri-pause-circle-fill');
    } 
    else{
        woh.pause();
        nine.classList.remove('ri-pause-circle-fill');
        nine.classList.add('ri-play-circle-fill');
    }
        
        
    })
    woh.addEventListener('timeupdate',function(details){
        var percent = parseInt((woh.currentTime/woh.duration)*100);
        range.value = percent
    })