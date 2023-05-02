$('.WatchRed').on('click', function(){
    data10= "id="+14;
    $.ajax({
        url: "./Pages/Watches",
        type: "GET",
        data: "data10",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Home').html(para2);
            clearInterval(intervalid);
        },

        error:function(data){
            alert('Unable to process request. Please check that your internet connection is stable and try again.');
        }
    });
    throw'';
});

$('.ShoeRed').on('click', function(){
    data10= "id="+14;
    $.ajax({
        url: "./Pages/Shoes",
        type: "GET",
        data: "data10",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Home').html(para2);
            clearInterval(intervalid);
        },

        error:function(data){
            alert('Unable to process request. Please check that your internet connection is stable and try again.');
        }
    });
    throw'';
});

$('.ClothRed').on('click', function(){
    data10= "id="+14;
    $.ajax({
        url: "./Pages/Clothes",
        type: "GET",
        data: "data10",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Home').html(para2);
            clearInterval(intervalid);
        },

        error:function(data){
            alert('Unable to process request. Please check that your internet connection is stable and try again.');
        }
    });
    throw'';
});

$('.ContRed').on('click', function(){
    data10= "id="+14;
    $.ajax({
        url: "./Pages/Contacts",
        type: "GET",
        data: "data10",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        success:function(para2){
            $('.Home').html(para2);
            clearInterval(intervalid);
        },

        error:function(data){
            alert('Unable to process request. Please check that your internet connection is stable and try again.');
        }
    });
    throw'';
});

$('.HomeRed').on('click', function(){
    data10= "id="+14;
    $.ajax({
        url: "./Pages/Home",
        type: "GET",
        data: "data10",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,
        
        success:function(para2){
            $('.Home').html(para2);
            clearInterval(intervalid);
        },

        error:function(data){
            alert('Unable to process request. Please check that your internet connection is stable and try again.');
        }
    });
    throw'';
});



$('.ProdRed').on('click', function(){
    const WatchRed1 = document.querySelector('.WatchRed');
    const ShoeRed1 = document.querySelector('.ShoeRed');
    const ClothRed1 = document.querySelector('.ClothRed');
    WatchRed1.classList.toggle('Hid');
    ShoeRed1.classList.toggle('Hid');
    ClothRed1.classList.toggle('Hid');
    throw'';
});