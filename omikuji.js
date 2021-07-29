var username;
var userresult;
username = prompt("お名前を教えて下さい。");//入力ダイアログを表示
document.getElementById("name").innerHTML = username;//入力した名前を画面に表示

if (!username){
    document.getElementById("name").innerHTML = "名無し";//入力ダイアログに名前が入力されなかった場合「名無し」を表示
}
var rand = Math.floor( Math.random() * 5);//0~4の数字をランダムに生成

if (rand == 0) {
    userresult = "大吉";//0が出たら大吉
  }

  if (rand == 1) {
    userresult = "中吉";//1が出たら中吉
  }
  if (rand == 2) {
    userresult = "小吉";//2が出たら小吉
  }
  if (rand == 3) {
    userresult = "吉";//3が出たら吉
  }
  if (rand == 4) {
    userresult = "凶";//4が出たら凶
  }
  document.getElementById("result").innerHTML = userresult;//おみくじの画面を結果に表示