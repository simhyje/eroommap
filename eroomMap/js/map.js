

var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(37.4850802,126.841292),
	level: 3
};

var map = new kakao.maps.Map(container, options);

//마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.4850802,126.841292); 

// 마커를 생성합니다
var mainmarker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
mainmarker.setMap(map);

var content = '<div class ="label"><span class="left"></span><span class="center">청년이룸</span><span class="right"></span></div>';

//커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.4850802,126.841292);  

//커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
 position: position,
 content: content   
});

//커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);