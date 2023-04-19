<html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- JQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- 登入要用的 fingerPrint -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js"></script>

<script src="gb_sdk/js/gameboss_sdk.js"></script>
<script type="text/javascript">

$(document).ready(function() {
	//初始化 init:function(client_id,client_secret,gameCode,fbAppID,googleAppID,Target)
	gbSdk.init('fac8cc54e4abc1405556cf10b9aa8c17zs9n3pp2','70efb52ad1732613f920e9c3ef834987qse62k8z','SDJ','781869358881575','548762073057-3n1ln564f9c5nap60835ammfe1nvp3ij.apps.googleusercontent.com','3');

	googleSigninInit();

	if(window.FB) {
	    facebookReady();
	} else {
	    window.fbAsyncInit = facebookReady;
	}
});

	function callBackCP(type,resp)
	{
		switch(type)
		{
			case "INIT":
				console.log("callBack INIT ===> "+JSON.stringify(resp));

				// if(resp.code=="1000"){ success to do something ...}
				// else{ failure to do something ...}
				break;
			case "LOGIN":
				//userId,message,sign,timeStamp
				console.log("callBack LOGIN ===> "+JSON.stringify(resp));
				// do ....... something
				break;
		}
	}
</script>

<body>

<br><br><br><br><br><br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" onclick="gbSdk.loginView()">Login View</button>

<br><br><br><br><br><br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" onclick="gbSdk.touchServer('1','WebRoleID','WebRoleName')">Touch 遊戲</button>

</body>
</html>