function Load_Prods_Left(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/Prods_Left",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        // beforeSend:function(data){
        //     $('.Prods_Left').html('#')
        // },

        success:function(para2){
            $('.WatchLeft').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Prods_Left, 1);