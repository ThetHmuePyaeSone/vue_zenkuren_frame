let map: google.maps.Map;

function initMap(): void {
  const shopResult = JSON.parse(import.meta.env.VITE_SHOP as string);

  navigator.geolocation.getCurrentPosition(
    function (currentPosition) {
      const currentLatLng = new window.google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);

      const mapOptions = {
        zoom: 14,
        center: currentLatLng
      };

      map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        mapOptions
      );
      new window.google.maps.Marker({
        map: map,
        position: currentLatLng,
        animation: window.google.maps.Animation.DROP,
        icon: {
          fillColor: "#00d9ff",
          fillOpacity: 0.8,
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          strokeColor: "#00d9ff",
          strokeWeight: 1.0
        }
      });

      shopResult.forEach(function (shop) {
        const marker = new window.google.maps.Marker({
          map: map,
          position: new window.google.maps.LatLng(shop.location),
          animation: window.google.maps.Animation.DROP,
        });

        const infoWindowHtml = `<a href="${shop.url}" target="_blank" rel="noopener noreferrer">${shop.name}</a>`
        const infoWindow = new window.google.maps.InfoWindow({
          position: new window.google.maps.LatLng(shop.location),
          content: infoWindowHtml,
          pixelOffset: new window.google.maps.Size(0, -50)
        });

        marker.addListener('click', () => {
          infoWindow.open(map);
        });
      });
    },

    function (error) {
      switch (error.code) {
        case 1:
          alert("位置情報の利用が許可されていません");
          break;
        case 2:
          alert("現在位置が取得できませんでした");
          break;
        case 3:
          alert("タイムアウトになりました");
          break;
        default:
          alert("その他のエラー(エラーコード:" + error.code + ")");
          break;
      }
    }
  );
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;
export { };
