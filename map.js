function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 22.5, lng: 89.5 },
  });

  const pathCoordinates = [
    { lat: 23.55, lng: 90.32 },
    { lat: 22.57, lng: 88.36 },
    { lat: 23.38, lng: 88.62 },
    { lat: 22.00, lng: 88.50 },
    { lat: 21.5, lng: 87.5 },
    { lat: 11.67, lng: 92.75 },
  ];

  const labelsAndText = [
    {
      position: { lat: 23.55, lng: 90.32 },
      title: "বিক্ৰমপুৰ, পূৰ্ববংগ",
      content: "মুখ্য চৰিত্ৰৰ শিক্ষক হিচাপে শান্তিপূৰ্ণ জীৱন ইয়াতে আৰম্ভ হয়।",
    },
    {
      position: { lat: 22.57, lng: 88.36 },
      title: "শিয়ালদহ শৰণাৰ্থী শিবিৰ, কলিকাতা",
      content: "শৰণাৰ্থী হিচাপে ইয়াত বাস কৰিবলৈ লয়।",
    },
    {
      position: { lat: 23.38, lng: 88.62 },
      title: "শৰণাৰ্থী বিদ্যালয়",
      content: "অস্থায়ী বসতিত পুনৰ শিক্ষকতাৰে জীৱন গঢ়িবলৈ চেষ্টা কৰে।",
    },
    {
      position: { lat: 21.5, lng: 87.5 },
      title: "(অস্থায়ী জীৱন)",
      content: "পশ্চিমবংগৰ বনাঞ্চলত অস্থায়ী জীৱন।",
    },
    {
      position: { lat: 11.67, lng: 92.75 },
      title: "(আন্দামান)",
      content: "শান্তিৰ এক প্ৰতীকী স্থান।",
    },
  ];

  labelsAndText.forEach((point) => {
    const marker = new google.maps.Marker({
      position: point.position,
      map,
      title: point.title,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<b>${point.title}</b><br/>${point.content}`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });

  const migrationPath = new google.maps.Polyline({
    path: pathCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  migrationPath.setMap(map);
}
