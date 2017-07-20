(function() {

$(document).ready(function(){
    $("#show9").click(function(){
        $(document.getElementById("k9")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeIn();
    });$("#show1").click(function(){
        $(document.getElementById("k9")).fadeIn();
        $(document.getElementById("k1")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k10")).fadeOut();
    });
    $("#show2").click(function(){
        $(document.getElementById("k9")).fadeIn();
         $(document.getElementById("k2")).fadeIn();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();

    });
    $("#show3").click(function(){
        $(document.getElementById("k9")).fadeIn();
          $(document.getElementById("k3")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();

    });
    $("#show4").click(function(){
        $(document.getElementById("k9")).fadeIn();
         $(document.getElementById("k4")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();

    });
     $("#show5").click(function(){
        $(document.getElementById("k9")).fadeIn();
          $(document.getElementById("k5")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();

    });
      $("#show6").click(function(){
        $(document.getElementById("k9")).fadeIn();
         $(document.getElementById("k6")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k7")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();

    });
       $("#show7").click(function(){
        $(document.getElementById("k9")).fadeIn();
          $(document.getElementById("k7")).fadeIn();
        $(document.getElementById("k2")).fadeOut();
        $(document.getElementById("k3")).fadeOut();
        $(document.getElementById("k4")).fadeOut();
        $(document.getElementById("k5")).fadeOut();
        $(document.getElementById("k6")).fadeOut();
        $(document.getElementById("k1")).fadeOut();
        $(document.getElementById("k8")).fadeOut();
        $(document.getElementById("k10")).fadeOut();
        
    });
});
$('#show10').click(function(){
   $(this).parent().parent().remove();
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }
    

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();

