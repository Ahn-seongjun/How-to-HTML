// 메인메뉴의 전체보기 클릭했을 때 모든 메뉴 항목 보이게

$(function() {
    $('#showAllMenu').on('click', function() {
        if($(this).text()=='전체보기 ▼'){
           
            $('.subMenuItem').slideDown(1);
            $('#subMenuBox').css('visibility', 'visible')
            // $('.subMenuItem').css('visibility', 'visible') // 자체 영역 없이 겹쳐서 메뉴가 보이게 됨
             // 전체보기는 숨겨있는 상태이므로 메뉴를 visible로 변경
            // 메뉴 text를 메뉴닫기로 변경
  
            $(this).text('메뉴닫기 ▲').css('color', 'blue');
                  
        }else{
            $('.subMenuItem').slideUp(1);
            $('#subMenuBox').css('visibility', 'hidden')
            // 전체보기는 숨겨있는 상태이므로 메뉴를 hidden로 변경
           // 메뉴 text를 전체보기로 변경
 
           $(this).text('전체보기 ▼').css('color', 'black');
                 

        }
    });

}); // ready 함수 종료