function write_new() {
    $("#content_write").load("customer_write.html .part");
    $("#write").remove();

}

function write_edit() {
    $("#content_write").load("customer_write.html .part");
    $("#write").remove();

}

function order_open() {
    $('#ifm_order').addClass('add');
}

function order_close() {
    $('#ifm_order').removeClass('add');
}

function order_put(ordno) {
    document.fm.ordno.value = ordno;
    order_close();
}

function add() { // 업로드 추가 삭제 . 
    var table = document.getElementById('table');
    var reviewFileNum = "5";
    if (table.rows.length >= parseInt(reviewFileNum)) {
        alert("업로드는 최대 " + reviewFileNum + "개만 지원합니다");
        return;
    }
    var tr_num = table.rows.length; //문제가 뭘까? 변수명 같을텐데 ...
    oTr = table.insertRow(table.rows.length);
    oTr.id = "tr_" + (tr_num);
    oTd1 = oTr.insertCell(0);
    oTd1.style.textAlign = "center";
    oTd2 = oTr.insertCell(1);
    tmpHTML = "<input type=file name='file[]' style='width:50%' class=line> <a href=\"javascript:del('" + "tr_" + (tr_num) + "')\"><img src='https://img.icons8.com/small/16/000000/delete-file.png' align=absmiddle></a>";
    oTd2.innerHTML = tmpHTML;
    calcul();
}

function del(index, ncode) {
    var table = document.getElementById('table');
    for (i = 0; i < table.rows.length; i++)
        if (index == table.rows[i].id) table.deleteRow(i);
    calcul();
}

function calcul() {
    var table = document.getElementById('table');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i + 1;
    }
}
// $(document).ready(function(){
//     $("input:radio[name=ordernoSelect]").click(function(){
//         if ($("input[name=radio]:checked").val()=="1"){
//             $("")
//         }
//     })
// })
// 부모 자식 창으로 해야됨. 라디오버튼 클릭 시 부모창에 값이 전달되어야 함.