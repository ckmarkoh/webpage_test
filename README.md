# 一句話恐怖故事大賽統計表
##取得Facebook資料
使用[Facebook Graph Api](https://developers.facebook.com/docs/graph-api)來取得所有「恐怖故事大賽的資料」，關於Graph Api的詳細使用方式可參考Facebook官方說明文件。  
##更新資料方式
設定每三十分鐘執行`getData.py`，運用Facebook Graph Api 取得資料後進行排序，執行完畢會產生`data.json`以紀錄讚數最多的前100名，最後再上傳至Github上。
##呈現方式
網頁載入後用jQuery取得`data.json`的資料，再用 Angular JS 呈現。
###使用套件
* CSS
	* [Bootstrap](http://getbootstrap.com/)
	* [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)
	* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
	* [Animate.css](https://daneden.github.io/animate.css/)
* JavaScript
	* [Web Font Loader](https://github.com/typekit/webfontloader)
	* [jQuery](http://jquery.com/)
	* [Angular JS](https://angularjs.org/)