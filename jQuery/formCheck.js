/*
* 회원가입 폼 입력 확인
*/

/*
ID 입력란에 포커스 주고
완료버튼 눌렀을 때 입력 유무 확인하고 알림창 출력
*/

$(document).ready(function(){
    $('#id').focus(); //시작 시 ID에 포커스
    // input 태그의 텍스트 입력란과 비밀번호 입력란에 포커스가 있을 때 배경 색상 변경
    $('input[type="text"],input[type="password"]').on('focus',function(){
        $(this).css('background','rgb(232,232,232)')
    });
    // input 태그의 텍스트 입력란과 비밀번호 입력란에 포커스가 없을 때 배경 색상 변경
    $('input[type="text"],input[type="password"]').on('blur',function(){
        $(this).css('background','white')
    });
    // 키보드 이벤트
    // 전화번호 입력란에 첫번째 입력칸 입력 글자수가 3이면 다음 입력칸으로 이동
    $('#hp1').on('keyup',function(){
        if($(this).val().length==3)
            $('#hp2').focus();
    });
    // 두번째 입력칸 입력 글자수가 4개 면 마지막 입력칸으로 이동
    $('#hp2').on('keyup',function(){
        if($(this).val().length==4)
            $('#hp3').focus();
    });
    // 앤터키 눌렀을 때 무조건 submit이 안되도록
    // 문서 전체에 이벤트 처리
    // [ENTER]키의 아스키 코드값 : 13
    $(document).on('keydown',function(e){
        if (e.keyCode== 13) return false;
    });
        // ID입력 유효성 검사
    $('#newMemberForm').on('submit',function(){
        if($('#id').val()=="") { // 입력하지 않은 경우
            alert("아이디를 입력하세요.");
            $('#id').focus();
            return false; // 서버로 전송되지 않도록 기능 억제
        }
        // pwd입력 유효성 검사
        if($('#pwd').val()=="") { // 입력하지 않은 경우
            alert("비밀번호를 입력하세요.");
            $('#pwd').focus();
            return false; // 서버로 전송되지 않도록 기능 억제
        }
        // 학년에 해당하는 라디오버튼을 선택하지 않은 경우
        if(!$('input[type="radio"]').is(':checked')){
            alert("학년을 선택해주세요");
            return false
        }
        // 체크박스를 선택하지 않은 경우
        if(!$('input[type="checkbox"]').is(':checked')){
            alert("관심분야는 1개 이상 선택해주세요");
            return false
        }
        // 학과를 선택하지 않은 경우
        if($('select').val()=="") { // 입력하지 않은 경우
            alert("학과를 선택하세요.");
            $('select').focus();
            return false; // 서버로 전송되지 않도록 기능 억제
        }
    }); //폼 submit 끝
}); // ready 함수 끝
