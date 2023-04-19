var html = (function(){
/*
  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<title>Document</title>
<link rel="stylesheet" href="gb_sdk/css/screen.css">

 <div class="container-login" id="sdkLogo">
    <nav class="loginBar">
      <a href="javascript: userDataPage();"><i class="fas fa-book"></i></a>
      <a href="javascript: clickCSR();"><i class="fas fa-question-circle"></i></a>
      <a href="javascript: gotoPage('game');"><i class="fas fa-home"></i></a>
      <a href="javascript: gotoPage('facebook');"><i class="fab fa-facebook-f"></i></a>
      <a href="javascript: toFullScreen();"><i class="fas fa-expand"></i></a>
    </nav>
 </div>
  <!-- Modal login-->
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto mt-3"></div>
        </div>
        <div class="modal-body text-center">

        <form>
            <div class="form-group form-row">
              <div class="col">
                <select class="custom-select" id="acc_c">
                  <option value="886">台灣+886</option>
                  <option value="86">中國+86</option>
                  <option value="852">香港+852</option>
                  <option value="853">澳門+853</option>
                  <option value="60">馬來西亞+60</option>
                  <option value="65">新加坡+65</option>
                </select>
              </div>
              <div class="col-8">
                <input type="tel" class="form-control" placeholder="請輸入手機號碼" id="acc_m">
              </div>
            </div>
            <div class="form-group text-right">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="fas fa-unlock-alt"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="請輸入密碼" id="pas">
              </div>
              <small class="w-100"><a href="javascript:gbSdk.forgotPwd();" class="text-secondary">忘記密碼？</a></small>
            </div>
            <button type="button" class="btn btn-block btn-dark" onclick="gbSdk.gbLogin()">登入</button>
          </form>

          <p class="mt-3">沒有帳號？馬上<a href="#" class="text-secondary" data-dismiss="modal" data-toggle="modal"
              data-target="#registerModal">免費註冊</a></p>
          <hr class="line text-secondary my-4">

          <nav class="login-btn">
            <a href="javascript:gbSdk.fbLogin()" class="btn bg-fb"><i class="fab fa-facebook-f mr-2"></i>facebook登入</a>
            <!--<a href="javascript:gbSdk.lineLogin()" class="btn bg-line"><i class="icon icon-line mr-2"></i>Line登入</a>-->
            <a href="javascript:gbSdk.googleLogin()" class="btn btn-light"><i class="icon icon-google mr-2"></i>Google登入</a>
          </nav>

        </div>
      </div>
    </div>
  </div>


  <!-- Modal register -->
<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto my-4"></div>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group form-row">
              <div class="col">
                <select class="custom-select" id="acc_c1">
                  <option value="886">台灣+886</option>
                  <option value="86">中國+86</option>
                  <option value="852">香港+852</option>
                  <option value="853">澳門+853</option>
                  <option value="60">馬來西亞+60</option>
                  <option value="65">新加坡+65</option>
                </select>
              </div>
              <div class="col-8">
                <input type="number" class="form-control" placeholder="註冊帳號為手機號碼" id="acc_m1">
              </div>
            </div>
            <div class="form-group form-row">
              <div class="col">
                <button type="button" class="btn btn-secondary" id="SmsBtn">傳送簡訊驗證碼</button>
              </div>
              <div class="col-8">
                <input type="number" class="form-control" placeholder="請輸入簡訊驗證碼" id="smsCode" required>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="fas fa-unlock-alt"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="請輸入密碼" id="pas1">
              </div>
              <small class="form-text text-muted">密碼長度為6-12個字符，含英數字</small>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="fas fa-unlock-alt"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="請再次輸入密碼" id="pas2">
              </div>
            </div>
            <div class="form-check ">
              <input type="checkbox" class="form-check-input" id="check-agree" checked="checked">
              <label class="form-check-label mb-2" for="check-agree"><a class="text-secondary"
                  href="javascript: gotoPage('mem_mag');">我已閱讀並同意「會員條款及管理規章」</a></label>
            </div>
            <button type="button" class="btn btn-block btn-dark" onclick="gbSdk.regist()">註冊</button>
          </form>
        </div>
        <div class="modal-footer">
          <a class="text-secondary" href="javascript:gbSdk.gbLogin()" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">已有帳號</a>
        </div>
      </div>
    </div>
 </div>

 <!-- 玩家資訊-->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto my-4"></div>
        </div>
        <div class="modal-body text-left">
              會員帳號: <div id="u_accid" style="display:inline;"></div>
              <br>
              會員UID:  <div id="u_uid" style="display:inline;"></div>
              <br>
              會員名字: <div id="u_name" style="display:inline;"></div>
              <br>
              會員信箱: <div id="u_email" style="display:inline;"></div>
              <br>
              會員電話: <div id="u_mobile" style="display:inline;"></div>
              <br><br><br>
              <button type="button" class="btn btn-block btn-dark" onclick="chgPwdView();">修改密碼</button>
              <br>
              <!--<br>
              <button type="button" class="btn btn-block btn-dark" onclick="window.location.reload()">登出帳號</button>
              <br>-->
        </div>
      </div>
    </div>
  </div>

  <!-- pwd change -->
  <div class="modal fade" id="pwdModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto my-4"></div>
        </div>
        <div class="modal-body text-center">
          <form>

            <div class="form-group text-right">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="flaticon-lock"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="輸入舊密碼" id="oldPwd">
              </div>
            </div>

            <div class="form-group text-right">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="flaticon-lock"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="輸入新密碼" id="newPwd1">
              </div>
            </div>

            <div class="form-group text-left">
            密碼長度為6-12個字(英文和數字)
            </div>

            <div class="form-group text-right">
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text bg-white"><i class="flaticon-lock"></i></div>
                </div>
                <input type="password" class="form-control border-left-0" placeholder="再次確認" id="newPwd2">
              </div>
            </div>

            <button type="button" class="btn btn-block btn-dark" onclick="gbSdk.changePwd()">修改密碼</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- 線上客服 1 -->
  <div class="modal fade" id="csr1Modal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto my-4"></div>
        </div>
        <div class="modal-body text-left">
            <br>
            <button type="button" class="btn btn-block btn-dark" onclick="csrReport()">線上客服回報</button>
            <br>
            <button type="button" class="btn btn-block btn-dark" onclick="csrMyList()">線上回報紀錄查詢</button>
            <br>
        </div>
      </div>
    </div>
  </div>

  <!-- 線上客服 2 -->
  <div class="modal fade" id="csr2Modal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header border-0">
          <div class="logo mx-auto my-4"></div>
        </div>
        <div class="modal-body text-left">
            <h2 class="text-primary mb-3">《線上回報》</h2>
            <div class="input-group">
                <select class="custom-select" id="GroupID" name="GroupID">
                    <option value='13'>mycard支付</option>
                    <option value='14'>其他支付</option>
                    <option value='21'>登入問題</option>
                    <option value='22'>帳號問題</option>
                    <option value='31' selected>遊戲問題</option>
                    <option value='41'>BUG回報</option>
                    <option value='51'>活動問題</option>
                    <option value='61'>其他問題</option>
                    <option value='71'>玩家建議</option>
                    <option value='81'>違規舉報</option>
                </select>
            </div>
                    <br>
            <div class="form-group text-right">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-white"><i class="flaticon-star"></i></div>
                    </div>
                    <input type="text" class="form-control border-left-0" placeholder="問題標題" id="Subject" name="Subject">
                </div>
                        <br>
                <div class="input-group">
                    <div class="col-6">
                    <input type="text" class="form-control border-left-0" placeholder="服務器代號" id="serverID" name="serverID" disabled>
                    </div>
                    <div class="col-6">
                    <input type="text" class="form-control border-left-0" placeholder="角色名稱" id="chaName" name="chaName" disabled>
                    </div>
                </div>
                    <br>
                <div class="input-group">
                    <textarea class="form-control" placeholder="請在這詳述問題..." rows="3" id="commContent" name="commContent"></textarea>
                </div>
                    <br>
                <button type="button" class="btn btn-block btn-dark" onclick="gbSdk.addComment();">確定送出</button>
                <br>
                <button type="button" class="btn btn-block btn-dark" onclick="cancleCSR2()">取 消</button>
                <br>
            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal report-->
  <div class="modal fade" id="reportModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="mx-auto mb-0">線上回報紀錄</h3>
        </div>
        <div class="modal-body" id="report_list">
        </div>
      </div>
    </div>
  </div>

  <!-- Modal report_detail -->
  <div class="modal fade" id="report_detailModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body" id="report_detail">
        </div>
        <div class="modal-footer">
          <a href="#" class="btn btn-primary" data-dismiss="modal" data-toggle="modal"
            data-target="#reportModal">返回</a>
        </div>
      </div>
    </div>
  </div>

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

document.write(html);
// Jquery 和 fingerprint2 那兩個。由原廠在外部引進吧！
document.write("<script src='gb_sdk/js/bootstrap.bundle.min.js'></script>");
document.write("<script src='gb_sdk/js/draggabilly.pkgd.min.js'></script>");
document.write("<script src='gb_sdk/js/fontawesome.all.js'></script>");
document.write("<script src='gb_sdk/js/screenfull.js'></script>");
document.write("<script src='gb_sdk/js/script.js'></script>");
document.write("<script async defer src='https://apis.google.com/js/api.js'></script>");
// document.write("<script async defer src='https://apis.google.com/js/api.js?onload=googleSigninInit'></script>");


// =======Global vars. =================
var clientId;
var clientSecret;
var initResp; //初始化階段拿到的，內有access_token 和 userId
var loginResData = {}; //login成功之後拿到的回傳資料
var accessToken2OBJ = {};//取到這裡面的access_token後，之後就都是用這個token去下訂單 & 取資料 accessToken2OBJ.access_token
var userData; //取得用戶資料 AccEmail = AccID , Uid

var fingerPrint;

var mac = "02:00:00:00:00:00";
var platform = "web";
var platUrl = "play666.com.tw";
// var packageName = "com.gameboss.google.bwu01"; //follow gameCode 這之後改成原廠set

var appid_FB = "";//本遊戲的 fb_app_id
var appid_Line = "";//本遊戲的 line_app_id
var appid_Google = "";//本遊戲的 google_app_id
var gameCode;
var gbUid; //就是userId
var serverID = "";   // 遊戲角色ID
var chaID = "";   // 遊戲角色ID
var chaName = ""; // 遊戲角色名稱
var FbFanUrl = "";
var serverReportData = {nid:[],report:[]};
var refres_i = 0;
var myVar;

    new Fingerprint2().get(function(result, components){
        fingerPrint = result;
    });

//----------   FB SDK ----------------------------
    function statusChangeCallback(response) {
        /*
        {
            status: 'connected',
            authResponse: {
                accessToken: '{access-token}',
                expiresIn:'{unix-timestamp}',
                reauthorize_required_in:'{seconds-until-token-expires}',
                signedRequest:'{signed-parameter}',
                userID:'{user-id}'
            }
        }
        */
        // console.log("statusChangeCallback ==> "+response);

        if (response.status === 'connected') // 原本就已經登入
        {

        } else {
          // The person is not logged into your app or we are unable to tell.
        }
    }

    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    // FB初始化 執行之
    function facebookReady(){
        console.log("===facebookReady=== show ==>"+appid_FB);
        FB.init({
            appId   : appid_FB,
            status  : true,
            cookie  : true,
            xfbml   : true,
            version : 'v5.0'
        });

        // 載入網頁時，第一步判斷用戶是否已經使用「Facebook 登入」
        // FB.getLoginStatus(function(response) {
        //     statusChangeCallback(response);
        // });
    }

    // Load FB SDK
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/zh_TW/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


//---------------------------------------------------

//-------------  Google SDK  -----------------------------
function googleSigninInit() {
    console.log("===googleSigninInit=== show ==>"+appid_Google);
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: appid_Google//必填，記得開發時期要開啟 Chrome開發人員工具 查看有沒有403錯誤(Javascript來源被禁止)
        });
    });//end gapi.load
}//end GoogleSigninInit function

//---------------------------------------------------


var gbSdk = {
    init:function(client_id,client_secret,gCode,fbAppID,googleAppID,plat){
        // ,lineAppID
	    clientId = client_id;         //別的function要用
	    clientSecret = client_secret; //別的function要用
	    gameCode = gCode;
        appid_FB = fbAppID;
        appid_Google = googleAppID;
	    // appid_Line = lineAppID;
        // 預設值先給官網
        FbFanUrl = 'http://' + gameCode.toLowerCase() +'.'+ platUrl;

        /*
        switch(plat)
        {
            case '1':
                platUrl = "gameboss.com.tw";
                break;
            case '2':
                platUrl = "gamedd.com.tw";
                break;
            case '3':
                platUrl = "play666.com.tw";
                break;
            default:
                platUrl = "gameboss.com.tw";
                break;
        }
        */

	    var postData = {
    		client_id :    client_id,
    		client_secret: client_secret,
    		grant_type:    'client_credentials',
    		scope:         'web'
	    };

	   ajaxGo("init","https://auth."+platUrl+"/access_token","POST",postData,initDoSomething);
	},

	gbLogin:function(){
        var acc_c = $("#acc_c").val();
		var acc_m = $("#acc_m").val();
        if(acc_m.substr(0,1) == "0")
        {
            acc_m = acc_m.substr(1);
        }
        var AccID = acc_c+""+acc_m;
		var AccPWD = $("#pas").val();

		var postData = {
    			mac:          mac,
    			fingerid:     fingerPrint,
    			AccID:        AccID,
    			AccPWD:       AccPWD,
    			gameCode:     gameCode,
    			platform:     platform,
    			//packageName:  packageName,
    			access_token: initResp.access_token,
    			timestamp:    getTimestamp()
		    };

		ajaxGo("gbLogin","https://auth."+platUrl+"/o/mobile/login/standard","POST",postData,assignLoginResp);
	},

	//基本上是給 遊戲的開始遊戲按鈕用的
	loginView:function(){
		$('#loginModal').modal('show');
	    $('#sdkLogo').hide();
		//console.log("loginView ==> "+"do loginView");
	},

	//給原廠用的吧!
	touchServer:function(serverId,roleID,roleName){
        if(loginResData.hasOwnProperty('userId') && typeof loginResData.userId !== 'undefined' && serverId!="")
        {

            chaID = roleID;
            chaName = roleName;
            serverID = serverId;

            $( "#chaName" ).val( chaName );
            $( "#serverID" ).val( serverID );

            var gData = {
                Uid      : loginResData.userId,
                roleID   : roleID,
                roleName : roleName,
                platform : "web",
                adID     : fingerPrint
            };

            var Url ='https://'+gameCode+'.'+platUrl+'/game/touch-s' + serverId ;

            ajaxGo("touchServer",Url,"GET",gData,forTouchSvr);

        }else{
            alert("請先登入會員");

            chaID = "";
            chaName = "";
            serverID = "";

            gbSdk.init();
        }
	},

	//會員註冊
	regist:function(){
		var flag = 'yes';
        var acc_c1   = $("#acc_c1").val();
        var acc_m1   = $("#acc_m1").val();
		var pwdx1    = $("#pas1").val();
        var pwdx2    = $("#pas2").val();
		var smsCode  = $("#smsCode").val();
		var checkBox = $("#check-agree").prop("checked");
		// var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        if(acc_m1.substr(0,1) == "0")
        {
            acc_m1 = acc_m1.substr(1);
        }
        var AccID = acc_c1+""+acc_m1;

        var reg = /^[\w]{6,12}$/;

		// if(!emailx.match(emailRule))
		// {
		//     flag = 'no';
		// 	alert('請填寫正確的E-mail');
		// }

		if (checkBox != true)
		{
			alert('請勾選同意「會員條款及管理規章」');
			flag = 'no';
		}

		if(!pwdx1.match(reg))
		{
		    flag = 'no';
			alert('您輸入的密碼格式有誤，請重新輸入');
		}

		if(pwdx1!=pwdx2)
		{
			alert('錯誤!兩次輸入密碼不同');
			flag = 'no';
		}

        if(flag == 'yes')
		{
			var ts = getTimestamp();
			var gData={
					AccID    : AccID,
					AccPWD   : pwdx1,
					// AccEmail : emailx,
                    smsCode  : smsCode,
                    AccMobile : AccID,
					gameCode : gameCode,
					mac : mac,
					fingerid : fingerPrint,
					platform : platform,
					//packageName : packageName,
					access_token : initResp.access_token,
					timestamp : ts
				};

			ajaxGo("regist","https://auth."+platUrl+"/o/mobile/login/registeAccount","POST",gData,assignRegistResp);
		}
	},

	//更改密碼 ---  尚未修改  這邊應該使用"取得用戶資料的ACCID" 就可以
	changePwd:function(accID,accPWD,newPWD){
		var pwdRule = /^[\w]{6,12}$/;
        var old_pwd  = $("#oldPwd").val();
		var new_pwd1 = $("#newPwd1").val();
		var new_pwd2 = $("#newPwd2").val();

		if( new_pwd1 != new_pwd2)
		{
			alert('輸入錯誤，兩次輸入的密碼不同');
		}
        else if(!old_pwd.match(pwdRule) || !new_pwd1.match(pwdRule) || !new_pwd2.match(pwdRule))
		{
			alert('輸入欄位不可為空');
		}
		else if(new_pwd1==old_pwd)
		{
			alert('您輸入的新密碼怎麼和舊密碼一樣? 請重新輸入');
		}
		else
		{
			var gData = {
        				  AccID : userData.AccID,
        				  AccPWD: old_pwd,
        				  newPwd: new_pwd1,
        				  access_token : accessToken2OBJ.access_token
    				};

			var Url ="https://auth."+platUrl+"/o/mobile/login/changePwd";

			ajaxGo("changePwd",Url,"POST",gData,forChgPwd);
		}
	},

	//忘記密碼 accID傳進e-mail
	forgotPwd:function(){

		//var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        var acc_c = $("#acc_c").val();
        var acc_m = $("#acc_m").val();
        if(acc_m.substr(0,1) == "0") acc_m = acc_m.substr(1);
        var account = acc_c+""+acc_m;

		// if(!account.match(emailRule))
		// {
		//     alert('請輸入您的帳號');
		// }
		// else
		// {
			var gData = {
						  AccID : account,
						  access_token : initResp.access_token
						};
			var Url ='https://auth.'+platUrl+'/o/mobile/login/forgotPwd';
			ajaxGo("forgotPwd",Url,"POST",gData,forgotPwdRtn);
		// }
	},

    fbLogin:function(){
        // FB 第三方登入，要求公開資料與email
        FB.login(function(response)
        {
            if (response.authResponse) {

                FB.api('/me?fields=token_for_business', function(resBusiness) {

                    // statusChangeCallback(response);
                    console.log("fbLogin ===> "+JSON.stringify(resBusiness));
                    // {"token_for_business":"AbxzA2PjGdSR__1_","id":"427614994239951"}
                    var gData = {
                        AuthUid : resBusiness.token_for_business, //response.authResponse.userID
                        AccID : resBusiness.token_for_business,  //response.authResponse.userID
                        gameCode : gameCode,
                        AccEmail : "",
                        thirdPlate : "FaceBook",
                        mac : mac,
                        fingerid : fingerPrint,
                        appPlatform : "e00001",
                        platform : platform,
                        access_token : initResp.access_token,
                        timestamp : getTimestamp()
                    };

                    var Url ='https://auth.'+platUrl+'/o/mobile/login/FaceBook';
                    // ajaxGo("fbLogin",Url,"POST",gData,FBloginRtn);
                    ajaxGo("fbLogin",Url,"POST",gData,assignLoginResp);
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        // }, {scope: 'public_profile,email'});
        });
    },

	googleLogin:function(){
		let auth2 = gapi.auth2.getAuthInstance();//取得GoogleAuth物件
        auth2.signIn().then(function (GoogleUser) {
            console.log("Google登入成功 GoogleUser ===> "+JSON.stringify(GoogleUser));
            let user_id =  GoogleUser.getId();//取得user id，不過要發送至Server端的話，請使用↓id_token
            let AuthResponse = GoogleUser.getAuthResponse(true) ;//true會回傳access token ，false則不會，自行決定。如果只需要Google登入功能應該不會使用到access token
            let id_token = AuthResponse.id_token;//取得id_token

            $.ajax({
                // url: "https://oauth2.googleapis.com/tokeninfo",
                url: "https://www.googleapis.com/oauth2/v3/tokeninfo",
                method: "post",
                data: { id_token: id_token },
                success: function (response) {

                    console.log("googleLogin ===> "+JSON.stringify(response));

                    // {"iss":"accounts.google.com","azp":"548762073057-3n1ln564f9c5nap60835ammfe1nvp3ij.apps.googleusercontent.com","aud":"548762073057-3n1ln564f9c5nap60835ammfe1nvp3ij.apps.googleusercontent.com","sub":"105460092214479782621","email":"weitzf02@gmail.com","email_verified":"true","at_hash":"XNHtTghauP7Od9zPiyviwg","name":"曾胖熊","picture":"https://lh4.googleusercontent.com/-ME10pX4cQmI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfC4i2rz5Cc_dGRB4YazfA2CvAdWQ/s96-c/photo.jpg","given_name":"胖熊","family_name":"曾","locale":"zh-TW","iat":"1573794680","exp":"1573798280","jti":"66191eaf22c26e9618ba0bfa18198fecac1efae4","alg":"RS256","kid":"db02ab30e0b75b8ecd4f816bb9e1978f62849894","typ":"JWT"}
                    var gData = {
                        AuthUid : response.sub, //response.authResponse.userID
                        AccID : response.sub,  //response.authResponse.userID
                        gameCode : gameCode,
                        AccEmail : "",
                        thirdPlate : "Google",
                        mac : mac,
                        fingerid : fingerPrint,
                        appPlatform : "e00001",
                        platform : platform,
                        access_token : initResp.access_token,
                        timestamp : getTimestamp()
                    };

                    var Url ='https://auth.'+platUrl+'/o/mobile/login/Google';
                    ajaxGo("googleLogin",Url,"POST",gData,assignLoginResp);
                },
                error: function(res) {
                    console.log("googleLogin Error ===> "+JSON.stringify(res));
                }
            });//end $.ajax
        },
        function (error) {
            console.log("Google登入失敗");
            console.log(error);
        });
	},

    lineLogin:function(){
        $.ajax({
            url: 'https://auth.'+platUrl+'/login/line',
            type: "get",
            data:
            {
                gameCode: gameCode
            },
            dataType: "json",
            success: function( SData ){
                // alert(SData['message']);
            }
        });
    },

    addComment:function(){
        $.ajax({
            url: 'https://auth.'+platUrl+'/o/customer/products/'+gameCode+'/questions/'+$("#GroupID").val().substr(0,1)+'/comments',
            type: "post",
            data:
            {
                EventGroupID: $("#GroupID").val(),
                SendEmail: userData.AccEmail,
                AccTel: userData.AccMobile,
                ServerID: serverID,
                roleID: chaID,
                ChaName: chaName,
                Subject: $("#Subject").val(),
                Content: $("#commContent").val(),
                access_token : accessToken2OBJ.access_token
            },
            dataType: "json",
            success: function( SData ){
                if(SData.code == "1000" && SData.status == "success")
                {
                    alert("您的問題已成功提報客服，請耐心等候客服回覆");
                }
                else
                {
                    alert("回報問題失敗，請重新填寫");
                }
                // 關閉畫面
                $('#csr2Modal').modal('hide');
            }
        });
    }
}	// end gbSdk


$('#SmsBtn').click(function(){
    $("#SmsBtn").attr("disabled", true);
    var smsUrl = "https://api."+platUrl+"/sms/acc/authcode";
    $.ajax({
        url: smsUrl,
        type: "POST",
        data:
        {
            register: "1",
            countryCode : $('#acc_c1').val(),
            phoneNumber : $('#acc_m1').val()
        },
        dataType: "json",
        success: function( SData ){
            alert(SData['message']);
        }
    });

    $("#SmsBtn").attr("disabled", false);
});

function ajaxGo(Fn,Url,Type,Data,assignCallback){
    console.log("ajaxGo in : Fn ==> "+Fn);
	// console.log("ajaxGo in : Url ===> "+Url);
    $.ajax({
		url: Url,
		type: Type,
		dataType: "json",
		data: Data,
		success: function(response){
		    assignCallback(response);
		},
        error: function (jqXHR, textStatus, errorThrown) {
            alert("ajaxGo Error :"+ Fn);

            console.log("ajaxGo === "+ Fn +" === Error ===> "+JSON.stringify(jqXHR));

            /*弹出jqXHR对象的信息*/
            console.log("jqXHR.responseText ==> "+jqXHR.responseText);
            console.log("jqXHR.status ==> "+jqXHR.status);
            console.log("jqXHR.readyState ==> "+jqXHR.readyState);
            console.log("jqXHR.statusText ==> "+jqXHR.statusText);
            /*弹出其他两个参数的信息*/
            console.log("textStatus ==> "+textStatus);
            console.log("errorThrown ==> "+errorThrown);

            clearInterval(myVar);
        }
	});
}

//call back function
function initDoSomething(response){

    // console.log("initDoSomething ===> "+Object.keys(response));
    console.log("initDoSomething ==> "+JSON.stringify(response));

    initResp = response;

    var callBackData = { code : "0" };

    if(response.hasOwnProperty('access_token') && typeof response.access_token !== 'undefined' && response.access_token)
    {
        callBackData = { code : "1000", status :"success", message :"初始化成功"};
    }
    else
    {
        callBackData = { code : "1001", status :"failure", message :"初始化失敗"};
    }
    // 登入資料回傳給原廠
    callBackCP("INIT",callBackData);

    // 查詢遊戲資料
    if(callBackData.code == "1000")
    {
        var gData = {};
        ajaxGo("showGameInfo","https://api."+platUrl+"/mobile/game/"+gameCode+"/info/web","GET",gData,forGameData);
    }
}

//call back GB Login function
function assignLoginResp(response){

    if(response.code == "1000" && response.status == "success")
    {
        // callBack ===> status,code,userId,token,message,sign,authCode,timestamp,accBindgame,isBindingAcc,firstEnter

        loginResData = response;

        // gbUid = loginResData.userId;
        // console.log("uid ==> "+gbUid);
        alert("登入成功");

        //登入完成之後要去換會員自己的token 去取得第二個access_token之後確定用這
        accessToken2();
    }
    else
    {
        // console.log("callBack assignLoginResp ===> code = "+response.code+" , status = "+response.status+" , timestamp = "+response.timestamp+" , message = "+response.message);
        // callBack ===> code = 1008 , status = failure , timestamp = 1572941142 , message = 登入帳號或密碼錯誤
        alert("登入失敗!!"+response.message)
    }
}

function refreshToken(){
    // console.log("refreshToken ==> "+refres_i);

    var gData = {
        client_id:     clientId,
        client_secret: clientSecret,
        grant_type:    'refresh_token',
        scope:         'web',
        refresh_token: accessToken2OBJ.refresh_token
    };

    ajaxGo("refreshToken","https://auth."+platUrl+"/access_token","POST",gData,refreshTokenRes);
}



function refreshTokenRes(response){

    //console.log("refreshTokenRes ==> "+JSON.stringify(response));

    accessToken2OBJ.access_token = response.access_token;

    // refres_i++;

    // if(refres_i == 3) clearInterval(myVar);
}

//call back function -- 看看回傳結果 有status,code,userId 很多....
// function FBloginRtn(response){
//     console.log("FBloginRtn ==> "+response);
//     loginResData = response;
//     accessToken2(); // fb處理 一樣要去accessToken2 才是完成
// }

// 換 User token
function accessToken2(){
    var reUrl = 'http://' + gameCode.toLowerCase() +'.'+ platUrl;

    // console.log("client_id => "+clientId);
    // console.log("client_secret => "+clientSecret);
    // console.log("code => "+loginResData.authCode);
    // console.log("reUrl => "+reUrl);
    // console.log("tokenUrl => "+tokenUrl);
    // console.log("scope => web");

    var gData = {
        client_id:     clientId,
        client_secret: clientSecret,
        grant_type:    'authorization_code',
        scope:         'web',
        code:          loginResData.authCode,
        redirect_uri:  reUrl
    };

    ajaxGo("accessToken2","https://auth."+platUrl+"/access_token","POST",gData,accessToken2Res);
}

function accessToken2Res(response){
    var callBackData = {
                        userId : loginResData.userId ,
                        message : loginResData.message ,
                        sign : loginResData.sign ,
                        timeStamp : loginResData.timestamp
                    };

    // 登入資料回傳給原廠
    callBackCP("LOGIN",callBackData);

    accessToken2OBJ = response;
    // 設定自動更新 token (每50分鐘)
    myVar = setInterval(function(){ refreshToken() },3000000);

    //接著再去取得用戶資料
    getUserData();

    $('#loginModal').modal('hide');
    $('#sdkLogo').show();
}

//取得用戶資料 AccID , Uid
function getUserData(){

    // console.log("getUserData access_token => "+accessToken2OBJ.access_token);

    if(!accessToken2OBJ.access_token)
    {
	   alert("尚未取得access_token，請聯繫客服");
    }
    else
    {
	   var gData = { access_token: accessToken2OBJ.access_token };
	   ajaxGo("getUserData","https://auth."+platUrl+"/o/user/me","GET",gData,assignUserData);
    }
}

//call back function --- 回傳會員資料
function assignUserData(response){
    // response ==> Uid,AccID,AccName,AccBirthday,AccEmail,AccIDNo,AccPhone,AccMobile,StoredFlag
    userData = response;

    $('#u_accid').text(userData.AccID);
    $('#u_uid').text(userData.Uid);
    $('#u_name').text(userData.AccName);
    $('#u_email').text(userData.AccEmail);
    $('#u_mobile').text(userData.AccMobile);
}

//call back function -- 回傳遊戲資訊
function forGameData(response){
    // console.log("forGameData ==> "+JSON.stringify(response));

    // FB 粉絲頁
    FbFanUrl = response.fbFanUrl;
}

//call back function -- DB登入已記錄 此CALLBACK 不做事
function forTouchSvr(response){
    // console.log("forTouchSvr ==> "+JSON.stringify(response));
}

//註冊成功(ajax success) 的一個 call back
function assignRegistResp(response){
	// console.log("assignRegistResp ==> "+JSON.stringify(response));

	if(response.code=='1000')
    {
        loginResData = response;

	    alert('註冊成功！');
	    $('#registerModal').modal('hide');

        //登入完成之後要去換會員自己的token 去取得第二個access_token之後確定用這
        accessToken2();
	}
	else
	{
	   alert('註冊失敗：'+response.message);
	}
}


//call back function -- 看看回傳結果並繼續處理
function forChgPwd(response){
    // console.log("forChgPwd ==> "+response);
	if(response.code == "1000")
	{
        alert('修改密碼成功');
        $('#pwdModal').modal('hide');
	}
    else
    {
	    alert('密碼變更失敗：'+response.message);
    }
}

//call back function -- 看看回傳結果 有status,code,message
function forgotPwdRtn(response){
    //console.log("forgotPwdRtn ==> "+response);
	if(response.status=='success' && response.code=="1000")
	{
	    alert('系統已將新密碼發送至您綁定的門號');
	}
	else
	{
	    alert('發生錯誤，請稍後再試');
	}
}

function getTimestamp(){
	const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
	return timestamp;
}

//====按下按扭的 [全螢幕]=============================
function toFullScreen(){
    // console.log("Get in toFullScreen");

    if (screenfull.isEnabled) {
        console.log("Get in screenFull OK");
        screenfull.request();
    } else {
        // Ignore or do something else
        console.log("Get in screenFull Error");
    }
}

//====按下按扭的 [FB 粉絲頁]=============================
function gotoPage(type){

    if(type == 'mem_mag')
    {
        window.open('https://www.'+platUrl+'/service/mem_mag', '_blank');
    }
    else if(type == 'facebook')
    {
        window.open(FbFanUrl, '_blank');
    }
    else if(type == 'news')
    {
        window.open('https://www.'+platUrl+'/about_us/news', '_blank');
    }
    else // game
    {
        window.open('https://' + gameCode.toLowerCase() +'.'+ platUrl, '_blank');
    }
}

//-------------------------------------------//

$(document).ready(function () {
    // $('#loginModal').modal('show');
	$('#sdkLogo').hide();
});


// 顯示[會員資料]
function userDataPage(){
    //  input 預設為空
    $("#oldPwd").val("");
    $("#newPwd1").val("");
    $("#newPwd2").val("");

    $('#myModal').modal('show');
}

// 顯示修改密碼畫面
function chgPwdView(){
	$('#myModal').modal('hide');
	$('#pwdModal').modal('show');
}

// 顯示線上客服選單
function clickCSR(){
    //  input 預設為空
    $("#Subject").val("");
    $("#commContent").val("");
    if(chaID=="" || chaName=="")
    {
        alert("請先選擇伺服器，進入遊戲");
    }
    else
    {
        $('#csr1Modal').modal('show');
    }
}

// 顯示輸入客服問題畫面
function csrReport(){
	$('#csr1Modal').modal('hide');
	$('#csr2Modal').modal('show');
}

// 線上客服回報 取消
function cancleCSR2(){
	$('#csr2Modal').modal('hide');
}

// 顯示線上回報紀錄查詢
function csrMyList(){
    $('#csr1Modal').modal('hide');

    var url='https://auth.'+platUrl+'/o/customer/products/'+gameCode+'/questions';

    var gData = {
        limit: "10",
        access_token : accessToken2OBJ.access_token
    };

    ajaxGo("csrMyList",url,"get",gData,csrMyListData);
}

function csrMyListData(response){
    // console.log("csrMyListData  ===> "+JSON.stringify(response));

    // 先給預設值 空
    serverReportData.nid = [];
    serverReportData.report = [];

    if(response.status=='success' && response.code=="1000")
    {
        $("#report_list").text('');
        let tbody_str = "";
        for (i = 0; i < response.page.data.length; i++) {
            switch(response.page.data[i].Status){
                case '1':
                    status = '已結案';
                    css_str = 'badge-secondary';
                    break;
                case '2':
                    status = '處理中';
                    css_str = 'badge-primary';
                    break;
                default: // 0
                    status = '處理中'; // 未處理
                    css_str = 'badge-primary';
                    break;
            }

            tbody_str += "<div class='card'><div class='card-body'><h4 class='card-title'><span>" + response.page.data[i].CreateDate.substr(0,10) +"</span><span class='badge "+css_str+"'>" + status + "</span></h4><p class='card-text' onclick='csrMyListDetail("+response.page.data[i].nid+")' style='cursor: pointer;'>" + response.page.data[i].Subject + "</p></div></div>";

            var mainData = {
                    createDate   : response.page.data[i].CreateDate,
                    subject      : response.page.data[i].Subject,
                    eventGroupID : response.page.data[i].EventGroupID,
                    sendEmail    : response.page.data[i].SendEmail,
                    status       : response.page.data[i].Status,
                    detail       : response.page.data[i].content
                };

            serverReportData.nid.push(response.page.data[i].nid);
            serverReportData.report.push(mainData);
        }

        // console.log("RD ==> "+JSON.stringify(serverReportData));
        $("#report_list").append(tbody_str);
        $('#reportModal').modal('show');
    }
    else
    {
        alert('發生錯誤，請稍後再試');
    }
}

function csrMyListDetail(sid){
    //console.log("csrMyListDetail  ===> "+sid);
    $("#report_detail").text('');

    sid = sid.toString()
    indexVal = serverReportData.nid.indexOf(sid);

    // console.log(JSON.stringify(serverReportData.report[indexVal]));

    switch(serverReportData.report[indexVal].eventGroupID){
        case '11': kind = 'google支付'; break;
        case '12': kind = 'ios支付'; break;
        case '13': kind = 'mycard支付'; break;
        case '14': kind = '其他支付'; break;
        case '21': kind = '登入問題'; break;
        case '22': kind = '帳號問題'; break;
        case '31': kind = '遊戲問題'; break;
        case '41': kind = 'BUG回報'; break;
        case '51': kind = '活動問題'; break;
        case '61': kind = '其他問題'; break;
        case '71': kind = '玩家建議'; break;
        case '81': kind = '違規舉報'; break;
        default: // 0
            kind = '其他';
            break;
    }

    switch(serverReportData.report[indexVal].status){
        case '1':
            status = '已結案';
            css_str = 'badge-secondary';
            break;
        case '2':
            status = '處理中';
            css_str = 'badge-primary';
            break;
        default: // 0
            status = '處理中'; // 未處理
            css_str = 'badge-primary';
            break;
    }

    var detail_str = "<div class='card'><div class='card-header'><h4 class='card-title'><span>"+kind+"</span><span class='badge "+css_str+"'>"+status+"</span></h4><h6 class='card-subtitle text-muted'>"+serverReportData.report[indexVal].createDate.substr(0,10)+"</h6><p class='card-text'>"+serverReportData.report[indexVal].subject+"</p></div><div class='card-body'><p>"+serverReportData.report[indexVal].detail[0].Content+"</p></div></div>";
    for (i = 0; i < serverReportData.report[indexVal].detail.length; i++)
    {
        if(serverReportData.report[indexVal].detail[i].Flag==0) continue;

        detail_str += "<div class='card'><div class='card-body'><p class='card-title'><span>問題回覆</span><small class='text-muted'>"+serverReportData.report[indexVal].detail[i].CreateDate.substr(0,10)+"</small></p><p>"+serverReportData.report[indexVal].detail[i].Content+"</p></div></div>";
    }

    $("#report_detail").append(detail_str);
    $('#reportModal').modal('hide');
    $('#report_detailModal').modal('show');
}