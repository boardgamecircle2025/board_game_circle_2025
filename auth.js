let ok=sessionStorage.getItem("auth");
if(ok!=="ok"){
 let p=prompt("パスワードを入力してください");
 if(p===SITE_PASSWORD){
   sessionStorage.setItem("auth","ok");
 }else{
   alert("パスワードが違います");
   location.href="about:blank";
 }
}