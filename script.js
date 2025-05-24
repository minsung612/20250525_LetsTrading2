window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // 뒤로가기 후 페이지가 캐시로 복원된 경우
    window.location.reload();
  }
});
