const userAgent = document.getElementById("useragent");
const provider = document.getElementById("provider");
const ip = document.getElementById("ip");
const map = document.getElementById("map");

userAgent.innerHTML = navigator.userAgent;

fetch(
  "https://api.ipdata.co?api-key=d5990b8ecb4312c549f48edb41dff6236d7c9910bacb9ed6b57ac18a"
)
  .then((response) => response.json())
  .then((data) => {
    provider.innerHTML = data.asn.name;
    ip.innerHTML = data.ip;
    map.innerHTML = `<iframe
    width="100%"
    height="300"
    frameborder="10"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://www.google.com/maps?q=loc:${data.latitude},${data.longitude}&hl=es;z=14&output=embed"
  ></iframe>;`;
    console.log(data);
  });
