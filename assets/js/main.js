// このファイルに(main.js)処理を記述する


// let data = ['英単語20個覚える','話題の映画を見に行く','お箸を買う'];
let data;
// /もしもデータが保存されていたら取り出す。そうでなければ空っぽの配列を代入しておく
// 取り出した中身があったらtrueと認識してくれる、という条件式。elseのときは使い始めのみ
if(localStorage.getItem('todoList')){
	data = JSON.parse(localStorage.getItem('todoList')); 
	// ↑データを取り出してdataに代入
}else{
// localStrageに何もない場合（使い始めの時など）、空の配列を代入する
data = [];
// []←データなし
}

console.log(data);

//  保存されたデータを画面に表示する

// // let displayText = data[0];


// // 　liタグを生成してリストに追加する
// add_li_tag(displayText);
// ↑上の４行 x 繰り返しを次の１行でできる

// 配列の中身を取り出して、３つリストタグが表示されるように（for文）
for (let displayText of data){
	add_li_tag(displayText);
}


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
 		// liタグを生成して追加
 		add_li_tag(taskInput.value);
//  		// 何か入力されていたら、新しいリスト(li)をulに追加

// 配列に、入力された値を追加
data.push(taskInput.value);

// localStrageに配列を保存
// lcalStrage.setItem('キー','値');
localStorage.setItem('todoList',JSON.stringify(data));


	// *****ここから下に書いてた部分を関数にして下に表示させるとともに繰り返されるようにする****

//  // 	親要素のulを変数に取得
//  let todo_list = document.querySelector('.todo-list');
//  // 	追加予定のliタグを生成
//  let add_li = document.createElement('li');
//  // 	add_liには　<li> </li>が入っている

//  // 	生成したliタグの文字を、入力された文字にする（代入する）
//  add_li.textContent = taskInput.value;
//  // add_liには<li>入力された文字</li>が入ることになる
//  console.log(add_li);

//  // 生成したliタグにclass=listを追加する
//  add_li.classList.add('list');
//  // add_liには　<li class="list">入力された文字</li>　が入っているところ


//  // 新しいリスト(li)には、右側にdeleteボタンが表示されているようにする
// // 追加予定のDivタグを生成
// let div_delete = document.createElement('div');
// // div_deleteには<div></div>のみ

// // 生成したDivタグの文字を「delete」にする
// div_delete.textContent = 'Delete';
// // div_delete には<div>Delete</div>が入ってる

// // 生成したdivタグに、class="delete"を追加する
// div_delete.classList.add('delete')
// // div_delete に<div＝class"delete">Delete</div>が入ってる


// //＝＝＝＝＝ Deleteボタンが押されたら、押されたボタンの親要素(li)が削除されるようにする＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// div_delete.addEventListener('click',function(){
// 	let hantei = confirm('本当に削除しますか？');
// 	if(hantei == true){
// 	this.parentElement.remove();
// 	// ここのthisはclickされたそのもの　をさす
// }
// });


// // 親要素(li)に生成したdivタグを追加
// add_li.appendChild(div_delete);
// // add_li には<li class="list">入力された文字<div class="delete">Delete</div></li>が入っている

// // 		生成したliタグを親要素のulタグに追加
// todo_list.appendChild(add_li);



// 入力欄を空っぽにする
taskInput.value='';


}
});

// 追加するliタグを生成する関数を作成
// task_textは、仕事をしたいときに必要な文字列　
// (to doのタスクを表す文字列　；　保存された文字とか、入力されてる文字とか、条件によって異なる)
function add_li_tag(task_text){
// liタグを追加する堀を記述
	// 何か入力されていたら、新しいリスト(li)をulに追加

 // 	親要素のulを変数に取得
 let todo_list = document.querySelector('.todo-list');
 // 	追加予定のliタグを生成
 let add_li = document.createElement('li');
 // 	add_liには　<li> </li>が入っている

 // 	生成したliタグの文字を、入力された文字にする（代入する）
 // add_li.textContent = taskInput.value;
// 生成したliタグの文字を、指定された文字にする　(text_task)
add_li.textContent = task_text;

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
			// 配列から削除
			// data.splice 指定した要素からn個分のデータを削除
		// 配列dataの０番目から1データ消す　⇨　data.splice(0,1);
			// data.indexOf　指定した文字が配列の何番目にあるかを検索
		// data.indexOf('ホノルルマラソンの準備をする')とすると、○の▲番目に入っているという数字が返ってくる
	console.log(this.parentElement.textContent);
		// 不要な文字であるDeleteを削除
	let del_text = this.parentElement.textContent;
	del_text = del_text.replace('Delete','');
	// ↑Deleteを空文字に置き換えることで削除
	data.splice(data.indexOf(del_text),1);
	this.parentElement.remove();
	// ここのthisはclickされたそのもの　をさす
	// 削除済みの配列を全体的にローカルストレージに上書き保存
	localStorage.setItem('todoList',JSON.stringify(data));

}
});


// 親要素(li)に生成したdivタグを追加
add_li.appendChild(div_delete);
// add_li には<li class="list">入力された文字<div class="delete">Delete</div></li>が入っている

// 		生成したliタグを親要素のulタグに追加
todo_list.appendChild(add_li);



}




