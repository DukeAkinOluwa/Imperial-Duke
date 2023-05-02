function Load_Shoe_Right(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/ShoeRight",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        // beforeSend:function(data){
        //     $('.Shoe_Right').html('#')
        // },

        success:function(para2){
            $('.ShoeRight').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Shoe_Right, 1);