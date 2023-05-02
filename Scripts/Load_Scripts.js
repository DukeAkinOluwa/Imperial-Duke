function Load_Navbar(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/Navbar",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Navbar').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Navbar, 1);

function Load_Home(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/Home",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Home').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Home, 1);

function Load_Footer(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/Footer",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Footer').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Footer, 1);

function ImgSlide(){
    const ImgSlide = document.querySelector('.Shoes');
    ImgSlide.classList.toggle('Front');
}

var intervalid = window.setInterval(function(){
    ImgSlide();
}, 7500);