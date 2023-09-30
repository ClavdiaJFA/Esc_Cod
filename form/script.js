jQuery(document).ready(function($){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/photos/1",
        data:{},
        success: function(result){
            console.log(result);
            $("#remoteImage").attr("src", result.url);
        }
    });
})