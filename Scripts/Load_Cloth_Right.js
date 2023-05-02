function Load_Cloth_Right(){
    datavote= "id="+2;
    $.ajax({
        url: "./Pages/ClothRight",
        type: "GET",
        data: "datavote",
        contentType : false,
        cache : false,
        processData:false,
        crossDomain: true,

        // beforeSend:function(data){
        //     $('.Cloth_Right').html('#')
        // },

        success:function(para2){
            $('.ClothRight').html(para2);
        },

        error:function(data){
            alert('Failed to process');
        }
    });
};
setTimeout(Load_Cloth_Right, 1);