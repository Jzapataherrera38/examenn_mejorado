<template>
    <div id="padre">
        <div id="drag-container" ref="drag-container">
            <div id="spin-container" ref="spin-container">
              <!-- Add your images (or video) here -->
              <img v-for="(data,index)  in imagenes" :key="index" :src="data">
             <!--  https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
              -->
              <!-- Example image with link -->
            
          
              <!-- Example add video 
              <video controls autoplay="autoplay" loop>
                <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4">
              </video>
          
               Text at center of ground -->
             
            </div>
            <div id="ground"></div>
          </div>
          
          <div id="music-container"></div>
          
          
    </div>
</template>

<script>
export default {
    props:['radius','autoRotate','rotateSpeed','imgWidth','imgHeight', 'imagenes'],
    data() {
        return {
            odrag : null,
            ospin : null,
            aImg : null,
            aVid : null,
            aEle : null,
            ground : null,
            sX : 0,  sY: 0, nX : 0,  nY :0, desX : 0,
            desY : 0,
           tX : 0,
           tY : 10,
           radiusb : null
        

        }
    },
    mounted() {
       this.radiusb = this.radius;
       setTimeout(this.init, 1000);
       this.odrag = document.getElementById('drag-container');
       this.ospin = document.getElementById('spin-container');
       this.aImg = this.ospin.getElementsByTagName('img');
       this.aVid = this.ospin.getElementsByTagName('video');
       this.aEle = [...this.aImg, ...this.aVid]; // combine 2 arrays

// Size of images
       this.ospin.style.width = this.imgWidth + "px";
       this.ospin.style.height = this.imgHeight + "px";

// Size of ground - depend on radius
        this.ground = document.getElementById('ground');
        this.ground.style.width = this.radiusb * 3 + "px";
        this.ground.style.height = this.radiusb * 3 + "px";

        if (this.autoRotate) {
            
            var animationName = (this.rotateSpeed > 0 ? 'spin' : 'spinRevert');
           
           this.ospin.style.animation = `${animationName} ${Math.abs(this.rotateSpeed)}s infinite linear`;
           console.log(this.ospin.style.animation)
        }
  var vm = this
  this.odrag.onpointerdown = function (e) 
  {
  clearInterval(vm.odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    vm.desX = nX - sX;
    vm.desY = nY - sY;
    vm.tX += vm.desX * 0.1;
    vm.tY += vm.desY * 0.1;
    vm.applyTranform(vm.odrag);
    vm.sX = nX;
    vm.sY = nY;
  };
  
  this.onpointerup = function () {
    vm.odrag.timer = setInterval(function () {
      vm.desX *= 0.95;
      vm.desY *= 0.95;
      vm.tX += vm.desX * 0.1;
      vm.tY += vm.desY * 0.1;
      vm.applyTranform(vm.odrag);
      vm.playSpin(false);
      if (Math.abs(vm.desX) < 0.5 && Math.abs(vm.desY) < 0.5) {
        clearInterval(vm.odrag.timer);
        vm.playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  this.radiusb += d;
  this.init(1);
};

    },
    watch: {
        autoRotate(){
            var animationName = (this.rotateSpeed > 0 ? 'spin' : 'spinRevert');
            this.ospin.style.animation = `${animationName} ${Math.abs(this.rotateSpeed)}s infinite linear`;
        }
    },
    methods: {
        init(delayTime) {
           for (var i = 0; i < this.aEle.length; i++) {
              this.aEle[i].style.transform = "rotateY(" + (i * (360 /this.aEle.length)) + "deg) translateZ(" + this.radiusb + "px)";
              this.aEle[i].style.transition = "transform 1s";
              this.aEle[i].style.transitionDelay = delayTime || (this.aEle.length - i) / 4 + "s";
          }
      },

      applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
        if(this.tY > 180) this.tY = 180;
         if(this.tY < 0) this.tY = 0;
  // Apply the angle
        obj.style.transform = "rotateX(" + (-this.tY) + "deg) rotateY(" + (this.tX) + "deg)";
       },
    
      playSpin(yes) {
        this.ospin.style.animationPlayState = (yes?'running':'paused');
      }


    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
  }
  
  html,
  #padre {
    height: 100%;
    /* for touch screen */
    touch-action: none; 
  }
  
  #padre body {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #111;
    -webkit-perspective: 1000px;
            perspective: 1000px;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
  }
  
  #drag-container, #spin-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-transform: rotateX(-10deg);
            transform: rotateX(-10deg);
  }
  
  #drag-container img, #drag-container video {
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
    -webkit-box-shadow: 0 0 8px #fff;
            box-shadow: 0 0 8px #fff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
  }
  
  #drag-container img:hover, #drag-container video:hover {
    -webkit-box-shadow: 0 0 15px #fffd;
            box-shadow: 0 0 15px #fffd;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
  }
  
  #drag-container p {
    font-family: Serif;
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%) rotateX(90deg);
            transform: translate(-50%,-50%) rotateX(90deg);
    color: #fff;
  }
  
  #ground {
    width: 900px;
    height: 900px;
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%) rotateX(90deg);
            transform: translate(-50%,-50%) rotateX(90deg);
    background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
  }
  
  #music-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  @-webkit-keyframes spin {
    from{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    } to{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    }
  }
  
  @keyframes spin {
    from{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    } to{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    }
  }
  
  @-webkit-keyframes spinRevert {
    from{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    } to{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    }
  }
  @keyframes spinRevert{
    from{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    } to{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    }
  }
</style>