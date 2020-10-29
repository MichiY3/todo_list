// このファイルに(main.js)処理を記述する
// モックのコレから作る部分をコメントアウトしておく
// Addボタンが押された時の処理を作る
// 　→Addボタンが押されたら
// 	入力文字チェック
// 		１。空文字だったら、何もしない
// 		２。何か入力されていたら、新しいリスト(li)をulに追加する
// 		３。新しいリスト(li)には、右側にdeleteボタンが表示されているようにする ←今度はliが親要素になる。deleteボタンがliの子要素
// 追加されるlihどんどん下に追加されていく

// ①Addボタン要素の取得
let addBtn = document.querySelector('#btn');

// ②Addボタンが押された時のイベントを取得（addEVentListener）
// イベントを察知したい要素.addEventListener('察知したいイベント名を文字列',イベントが発生したら行いたい処理(){});
addBtn.addEventListener('click',function(){

// ③入力文字チェック
// 　3-1、入力文字の取得
let taskInput = document.querySelector('#input');
 // 3-2、入力欄が空じゃなかったら処理を行う
 	if(taskInput.value != ''){
 		// 入力されていたら、新しいリスト(li)をulに追加

 // 	親要素のulを変数に取得
 let todo_list = document.querySelector('.todo-list');
 // 	追加予定のliタグを生成
 let add_li = document.createElement('li');
 // 	add_liには　<li> </li>が入っている

 // 	生成したliタグの文字を、入力された文字にする（代入する）
 add_li.textContent = taskInput.value;
 // add_liには<li>入力された文字</li>が入ることになる
 console.log(add_li);

 // 生成したliタグにclass=listを追加する
 add_li.classList.add('list');
 // add_liには　<li class="list">入力された文字</li>　が入っているところ


 // 新しいリスト(li)には、右側にdeleteボタンが表示されているようにする
// 追加予定のDivタグを生成
let div_delete = document.createElement('div');
// div_deleteには<div></div>のみ

// 生成したDivタグの文字を「delete」にする
div_delete.textContent = 'Delete';
// div_delete には<div>Delete</div>が入ってる

// 生成したdivタグに、class="delete"を追加する
div_delete.classList.add('delete')
// div_delete に<div＝class"delete">Delete</div>が入ってる


//＝＝＝＝＝ Deleteボタンが押されたら、押されたボタンの親要素(li)が削除されるようにする＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
div_delete.addEventListener('click',function(){
	let hantei = confirm('本当に削除しますか？');
	if(hantei == true){
	this.parentElement.remove();
	// ここのthisはclickされたそのもの　をさす
}
});


// 親要素(li)に生成したdivタグを追加
add_li.appendChild(div_delete);
// add_li には<li class="list">入力された文字<div class="delete">Delete</div></li>が入っている

// 		生成したliタグを親要素のulタグに追加
todo_list.appendChild(add_li);



// 入力欄を空っぽにする
taskInput.value='';


}
});

