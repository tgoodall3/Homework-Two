function barlistener(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    })  

}

// function linklistener(){
//     $(".links ").click(function(e){
//         $(".links").toggleClass("active");
//     })
// }



function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    // console.log(hashTag + " " + pageID);

    if(pageID !== "") {

        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            console.log("data " + data);
            $("#app").html(data); 
        })

    } else {
        $.get(`pages/home/home.html`, function(data){
            console.log("data " + data);
            $("#app").html(data); 
        })
    }
}

function initURLlisteners(){
    $(window).on("hashchange", changeRoute); 
    changeRoute();
}



$(document).ready(function(){
    initURLlisteners();
    barlistener();
    linklistener();
});
