$(document).ready(function() {


});

function write_new() {
    $("#content_write").load("content.html .part");
    $("#write").remove();

}

function order_open() {
    $('#ifm_order').addClass('add');
}

function order_close() {
    $('#ifm_order').removeClass('add');
}

// $(document).ready(function(){
//     $("input:radio[name=ordernoSelect]").click(function(){
//         if ($("input[name=radio]:checked").val()=="1"){
//             $("")
//         }
//     })
// })
// 부모 자식 창으로 해야됨. 라디오버튼 클릭 시 부모창에 값이 전달되어야 함.