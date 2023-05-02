function Load_Watch_Right(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/WatchRight",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        // beforeSend:function(data){
        //     $('.Watch_Right').html('#')
        // },

        success:function(para2){
            $('.WatchRight').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Watch_Right, 1);