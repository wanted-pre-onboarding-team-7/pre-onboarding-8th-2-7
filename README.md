- 구현 사항
    - [x] 각 이슈는 CRUD(생성, 표출, 수정, 삭제)가 적용되어야 한다.
    - [x] 이슈는 각각 **고유번호, 제목, 내용, 마감일, 상태, 담당자**가 존재한다.
    - [x] 이슈의 상태는 **“할 일”, “진행 중”, 완료”**가 존재하며 칸반보드와 같이 상태별로 분류된다
    - [x] 이슈의 작성 폼에서는 **제목, 내용, 마감일, 상태, 담당자**를 입력할 수 있다.
        - [x] 제목은 `<input type=”text”>` 태그를 사용한다.
        - [x] 내용은 `<textarea>` 태그를 사용한다.
        - [x] 마감일은 `<input type=”datetime-local”>` 태그를 사용한다.
        - [x] 담당자 선택은 아래의 방식으로 이루어진다.
            - [x] 사전에 임의의 담당자 목록을 구성한다.
            - [x] `<input type=”text”>` 태그를 이용해 담당자를 검색한다.
            - [x] 검색을 수행하면 검색결과 값이 노출되며 그 중 하나를 선택해서 담당자를 지정한다.
    - [x] 각 이슈를 클릭 시 상세정보 창이 표시된다.
        - [x] 상세정보 창에는 **“저장”**버튼이 존재한다.
        - [x] 상세정보창에서는 이슈의 각 정보를 수정할 수 있으며, **“저장”**버튼을 클릭 시 수정한 내용이 반영된다.
    - [x] 이슈 상태별 목록은 기본적으로 고유번호 순서대로 오름차순 정렬한다.
    - [] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 변경된 순서는 고유번호순 정렬보다 우선해서 적용된다.
    - [] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 상태를 변경할 수 있다.
- 구현 조건
    - [] 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야한다.
    - [] 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용한다.
    - [] 데이터는 새로고침해도 유지될 수 있도록 관리한다.
    - [] 에러 상황을 고려해서 처리할 시 가산점이 부여됩니다.
    

* 이슈의 작성 폼과 이슈를 클릭 시 상세정보 창을 구분해야할까?...
