/**
 * Created by Leo on 2017/7/1.
 */
function login() {
  $("#info").css("visibility", "hidden");
  $("#userOp").css("visibility", "visible");
  $(document).attr("title", "今天也是元气满满额");
  return false;
}

function logout() {
  $("#info").css("visibility", "visible");
  $("#userOp").css("visibility", "hidden");
  $(document).attr("title", "欢迎来到社团助手!请登录");
}
