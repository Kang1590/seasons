$(document).ready(function(){
  // 링크이동한 페이지로 인수 전달하기
  const pa = $(location).prop("search");//'?'이 들어간 쿼리스트링
  console.log(pa);
  const i = pa.substr(-1);//pa에 있는 마지막 글자
  console.log(i); //0,1,2,3 중 하나가 나옴.
  //!=not을 의미
});////all end