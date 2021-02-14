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