'use strict';

//DOM操作で要素を取得
const input = document.getElementById('input');
const output = document.getElementById('output');

//Enterを押すイベントが発火する
input.addEventListener('keypress', enter_event);


function enter_event(e) {
    //押されたキーがEnter（リターン）キーであった場合
  	if (e.keyCode === 13) {
        //デフォルトのイベントを発生しないようにする
        event.preventDefault();
        //inputの値を出力する
		output.innerHTML = input.value;
        //投稿を追加したら、入力フォームを空にする
        input.value = "";
	}  
	return false;
}

// window.document.onkeydown