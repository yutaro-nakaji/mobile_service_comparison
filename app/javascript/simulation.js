function price_simu(){
  let docomo_fee = 0;
  let au_fee = 0;
  let softbank_fee = 0;
  let rakuten_fee = 0;
  let ranking = [
    {name: "docomo", fee: docomo_fee},
    {name: "au", fee: au_fee},
    {name: "softbank", fee: softbank_fee},
    {name: "rakuten", fee: rakuten_fee}
  ];

  const rank1_name = document.getElementById("1st-carrier-name");
  const rank2_name = document.getElementById("2nd-carrier-name");
  const rank3_name = document.getElementById("3rd-carrier-name");
  const rank4_name = document.getElementById("4th-carrier-name");

  const rank1_fee = document.getElementById("1st-carrier-fee");
  const rank2_fee = document.getElementById("2nd-carrier-fee");
  const rank3_fee = document.getElementById("3rd-carrier-fee");
  const rank4_fee = document.getElementById("4th-carrier-fee");

  const current_phone = document.getElementById("current_phone");

  const duration_of_call = document.getElementById("duration_of_call");
  duration_of_call.addEventListener('input', () => {
    const callingplan = duration_of_call.value; 
    switch (callingplan) {
      case "3":
        docomo_fee = docomo_fee + 700;
        au_fee += 800;
        softbank_fee += 800;
        rakuten_fee += 0;
        //console.log(docomo_fee);
        break;
      case "4":
        docomo_fee += 1700;
        au_fee += 1800;
        softbank_fee += 1800;
        rakuten_fee += 0;
        break;
    }
    ranking = [
      {name: "docomo", fee: docomo_fee},
      {name: "au", fee: au_fee},
      {name: "softbank", fee: softbank_fee},
      {name: "rakuten", fee: rakuten_fee}
    ];
    ranking.sort(function( a, b ){
      if( a.fee < b.fee ) return -1;
      if( a.fee > b.fee ) return 1;
      return 0;
    });
    rank1_name.textContent = ranking[0].name;
    rank2_name.textContent = ranking[1].name;
    rank3_name.textContent = ranking[2].name;
    rank4_name.textContent = ranking[3].name;

    rank1_fee.textContent = ranking[0].fee;
    rank2_fee.textContent = ranking[1].fee;
    rank3_fee.textContent = ranking[2].fee;
    rank4_fee.textContent = ranking[3].fee;
  });
}
//ページがロードされた時イベント発火
window.addEventListener('load', price_simu);