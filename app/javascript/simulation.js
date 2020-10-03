function price_simu(){
  //通信キャリア名
  const rank1_name = document.getElementById("1st-carrier-name");
  const rank2_name = document.getElementById("2nd-carrier-name");
  const rank3_name = document.getElementById("3rd-carrier-name");
  const rank4_name = document.getElementById("4th-carrier-name");
  //合計金額
  const rank1_fee = document.getElementById("1st-carrier-fee");
  const rank2_fee = document.getElementById("2nd-carrier-fee");
  const rank3_fee = document.getElementById("3rd-carrier-fee");
  const rank4_fee = document.getElementById("4th-carrier-fee");
  //通話プラン金額
  const rank1_calling_fee = document.getElementById("1st-calling-fee");
  const rank2_calling_fee = document.getElementById("2nd-calling-fee");
  const rank3_calling_fee = document.getElementById("3rd-calling-fee");
  const rank4_calling_fee = document.getElementById("4th-calling-fee");
  //通信プラン金額
  const rank1_data_fee = document.getElementById("1st-data-fee");
  const rank2_data_fee = document.getElementById("2nd-data-fee");
  const rank3_data_fee = document.getElementById("3rd-data-fee");
  const rank4_data_fee = document.getElementById("4th-data-fee");
  //家族割金額
  const rank1_family_discount = document.getElementById("1st-family-discount");
  const rank2_family_discount = document.getElementById("2nd-family-discount");
  const rank3_family_discount = document.getElementById("3rd-family-discount");
  const rank4_family_discount = document.getElementById("4th-family-discount");

  //光回線セット割金額
  const rank1_optical_line_discount = document.getElementById("1st-optical-line-discount");
  const rank2_optical_line_discount = document.getElementById("2nd-optical-line-discount");
  const rank3_optical_line_discount = document.getElementById("3rd-optical-line-discount");
  const rank4_optical_line_discount = document.getElementById("4th-optical-line-discount");

  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
  }

  //のりかえ割
  let docomo_trans_discount = 0;
  let au_trans_discount = 0;
  let softbank_trans_discount = 0;
  let rakuten_trans_discount = 0;
    const carrier_list = document.getElementsByName('current_phone');
    carrier_list.forEach(function(e) {
      e.addEventListener("click", function() {
        //const current_carrier = document.querySelector("input:checked[name=current_phone]").value;
        //実装途中
      });
  });

  //console.log();
  

  //通話プラン選択
  let docomo_calling_fee = 0;
  let au_calling_fee = 0;
  let softbank_calling_fee = 0;
  let rakuten_calling_fee = 0;
  const calling_plan_list = document.getElementsByName('duration_of_call');
  calling_plan_list.forEach(function(e) {
    e.addEventListener("click", function() {
      const calling_plan = document.querySelector("input:checked[name=duration_of_call]").value;
      switch (calling_plan) {
        case "1":
          docomo_calling_fee = 0;
          au_calling_fee = 0;
          softbank_calling_fee = 0;
          rakuten_calling_fee = 0;
          break;
        case "2":
          docomo_calling_fee = 700;
          au_calling_fee = 800;
          softbank_calling_fee = 800;
          rakuten_calling_fee = 0;
          break;
        case "3":
          docomo_calling_fee = 1700;
          au_calling_fee = 1800;
          softbank_calling_fee = 1800;
          rakuten_calling_fee = 0;
          break;
      }
      fee_calc();
    });
  });
  
  //通信データ量選択
  let docomo_data_fee = 0;
  let au_data_fee = 0;
  let softbank_data_fee = 0;
  let rakuten_data_fee = 0;
  generation.addEventListener('input', () => {
    const generation = document.getElementById("generation").value;
    if (generation != 1) {
      document.getElementById("generation").classList.add("select-box-checked");
    }else{
      document.getElementById("generation").classList.remove("select-box-checked");
      document.getElementById("generation").classList.add("select-box");
    }
    datafee_calc();
    fee_calc();
  });
  data_traffic.addEventListener('input', () => {
    const data_traffic = document.getElementById("data_traffic").value;
    if (data_traffic != 1) {
      document.getElementById("data_traffic").classList.add("select-box-checked");
    }else{
      document.getElementById("data_traffic").classList.remove("select-box-checked");
      document.getElementById("data_traffic").classList.add("select-box");
    }
    datafee_calc();
    fee_calc();
  });
  function datafee_calc(){
    const generation = document.getElementById("generation").value;
    const data_traffic = document.getElementById("data_traffic").value;
    switch (generation) {
      case "2": //4G
        switch (data_traffic) {
          case "2": //~1GB
            docomo_data_fee = 3150;
            au_data_fee = 3150;
            softbank_data_fee = 3980;
            rakuten_data_fee = 0;
            break;
          case "3": //~2GB
            docomo_data_fee = 4150;
            au_data_fee = 4650;
            softbank_data_fee = 5980;
            rakuten_data_fee = 0;
            break;
          case "4": //~3GB
            docomo_data_fee = 4150;
            au_data_fee = 4650;
            softbank_data_fee = 7480;
            rakuten_data_fee = 0;
            break;
          case "5": //~4GB
            docomo_data_fee = 5150;
            au_data_fee = 4650;
            softbank_data_fee = 7480;
            rakuten_data_fee = 0;
            break;
          case "6": //~5GB
            docomo_data_fee = 5150;
            au_data_fee = 6150;
            softbank_data_fee = 7480;
            rakuten_data_fee = 0;
            break;
          case "7": //~7GB
            docomo_data_fee = 6150;
            au_data_fee = 6150;
            softbank_data_fee = 7480;
            rakuten_data_fee = 0;
            break;
          case "8","9","10","11": //30GB~
            docomo_data_fee = 7150;
            au_data_fee = 7650;
            softbank_data_fee = 7480;
            rakuten_data_fee = 0;
            break;
        }
      case "3": //5G
        switch (data_traffic) {
          case "2": //~1GB
            docomo_data_fee = 3150;
            au_data_fee = 4150;
            softbank_data_fee = 4980;
            rakuten_data_fee = 0;
            break;
          case "3": //~2GB
            docomo_data_fee = 4150;
            au_data_fee = 5650;
            softbank_data_fee = 6980;
            rakuten_data_fee = 0;
            break;
          case "4": //~3GB
            docomo_data_fee = 4150;
            au_data_fee = 5650;
            softbank_data_fee = 8480;
            rakuten_data_fee = 0;
            break;
          case "5": //~4GB
            docomo_data_fee = 5150;
            au_data_fee = 5650;
            softbank_data_fee = 8480;
            rakuten_data_fee = 0;
            break;
          case "6": //~5GB
            docomo_data_fee = 5150;
            au_data_fee = 7150;
            softbank_data_fee = 8480;
            rakuten_data_fee = 0;
            break;
          case "7": //~7GB
            docomo_data_fee = 6150;
            au_data_fee = 7150;
            softbank_data_fee = 8480;
            rakuten_data_fee = 0;
            break;
          case "8","9","10","11": //30GB~
            docomo_data_fee = 7650;
            au_data_fee = 8650;
            softbank_data_fee = 8480;
            rakuten_data_fee = 0;
            break;
        }
    }
  }

  //家族割適用
  let family_discount_docomo = 0;
  let family_discount_au = 0;
  let family_discount_softbank = 0;
  let family_discount_rakuten = 0;
  const family_docomo_list = document.getElementsByName('family_docomo');
  family_docomo_list.forEach(function(e) {
    e.addEventListener("click", function() {
      const family_docomo = document.querySelector("input:checked[name=family_docomo]").value;
      switch (family_docomo) {
        case "1": 
          family_discount_docomo = 0;
          break;
        case "2": 
          family_discount_docomo = -500;
          break;
        case "3": 
          family_discount_docomo = -1000;
          break;
      }
      fee_calc();
    });
  });
  const family_au_list = document.getElementsByName('family_au');
  family_au_list.forEach(function(e) {
    e.addEventListener("click", function() {
      const family_au = document.querySelector("input:checked[name=family_au]").value;
      const data_traffic = document.getElementById("data_traffic").value;
      switch (family_au) {
        case "1": 
          family_discount_au = 0;
          break;
        case "2": 
          family_discount_au = -500;
          break;
        case "3": 
          family_discount_au = -1000;
          break;
        case "4": 
        switch (data_traffic) {
          case "2","3","4","5","6","7": 
            family_discount_au = -1000;
            break;
          case "8","9","10","11": 
            family_discount_au = -2020;
            break;
        }
      }
      fee_calc();
    });
  });
  const family_softbank_list = document.getElementsByName('family_softbank');
  family_softbank_list.forEach(function(e) {
    e.addEventListener("click", function() {
      const family_softbank = document.querySelector("input:checked[name=family_softbank]").value;
      switch (family_softbank) {
        case "1": 
          family_discount_softbank = 0;
          break;
        case "2": 
          family_discount_softbank = -500;
          break;
        case "3": 
          family_discount_softbank = -1500;
          break;
        case "4": 
          family_discount_softbank = -2000;
          break;
      }
      fee_calc();
    });
  });

  //光回線セット割選択
  let optical_line_discount_docomo = 0;
  let optical_line_discount_au = 0;
  let optical_line_discount_softbank = 0;
  let optical_line_discount_rakuten = 0;
  optical_line.addEventListener('input', () => {
    const optical_line = document.getElementById("optical_line").value; 
    if (optical_line != 1) {
      document.getElementById("optical_line").classList.add("select-box-checked");
    }else{
      document.getElementById("optical_line").classList.remove("select-box-checked");
      document.getElementById("optical_line").classList.add("select-box");
    }
    switch (optical_line) {
      case "1":
        optical_line_discount_docomo = 0;
        optical_line_discount_au = 0;
        optical_line_discount_softbank = 0;
        break;
      case "2":
        optical_line_discount_docomo = -1000;
        optical_line_discount_au = 0;
        optical_line_discount_softbank = 0;
        break;
      case "3":
        optical_line_discount_docomo = 0;
        optical_line_discount_au = -1000;
        optical_line_discount_softbank = 0;
        break;
      case "4":
        optical_line_discount_docomo = 0;
        optical_line_discount_au = 0;
        optical_line_discount_softbank = -1000;
        break;
    }
    fee_calc();
  });

  //金額計算&金額出力
  function fee_calc(){
    let docomo_fee = 
    docomo_calling_fee + docomo_data_fee + family_discount_docomo + optical_line_discount_docomo;
    let au_fee =
    au_calling_fee + au_data_fee + family_discount_au + optical_line_discount_au;
    let softbank_fee =
    softbank_calling_fee + softbank_data_fee + family_discount_softbank + optical_line_discount_softbank;
    let rakuten_fee =
    rakuten_calling_fee + rakuten_data_fee + family_discount_rakuten + optical_line_discount_rakuten;

    let ranking = [
      {name: "docomo", fee: docomo_fee, calling_fee: docomo_calling_fee, data_fee: docomo_data_fee, family_discount: family_discount_docomo, optical_line_discount: optical_line_discount_docomo},
      {name: "au", fee: au_fee, calling_fee: au_calling_fee, data_fee: au_data_fee, family_discount: family_discount_au, optical_line_discount: optical_line_discount_au},
      {name: "softbank", fee: softbank_fee, calling_fee: softbank_calling_fee, data_fee: softbank_data_fee, family_discount: family_discount_softbank, optical_line_discount: optical_line_discount_softbank},
      {name: "rakuten", fee: rakuten_fee, calling_fee: rakuten_calling_fee, data_fee: rakuten_data_fee, family_discount: family_discount_rakuten, optical_line_discount: optical_line_discount_rakuten}
    ];
    ranking.sort(function( a, b ){
      if( a.fee < b.fee ) return -1;
      if( a.fee > b.fee ) return 1;
      return 0;
    });
    //通信キャリア名
    rank1_name.textContent = ranking[0].name;
    rank2_name.textContent = ranking[1].name;
    rank3_name.textContent = ranking[2].name;
    rank4_name.textContent = ranking[3].name;
    //合計金額
    rank1_fee.textContent = ranking[0].fee + "円";
    rank2_fee.textContent = ranking[1].fee + "円";
    rank3_fee.textContent = ranking[2].fee + "円";
    rank4_fee.textContent = ranking[3].fee + "円";
    //通話料金
    rank1_calling_fee.textContent = ranking[0].calling_fee + "円";
    rank2_calling_fee.textContent = ranking[1].calling_fee + "円";
    rank3_calling_fee.textContent = ranking[2].calling_fee + "円";
    rank4_calling_fee.textContent = ranking[3].calling_fee + "円";
    //データ通信料金
    rank1_data_fee.textContent = ranking[0].data_fee + "円";
    rank2_data_fee.textContent = ranking[1].data_fee + "円";
    rank3_data_fee.textContent = ranking[2].data_fee + "円";
    rank4_data_fee.textContent = ranking[3].data_fee + "円";
    //家族割料金
    rank1_family_discount.textContent = ranking[0].family_discount + "円";
    rank2_family_discount.textContent = ranking[1].family_discount + "円";
    rank3_family_discount.textContent = ranking[2].family_discount + "円";
    rank4_family_discount.textContent = ranking[3].family_discount + "円";
    //光回線セット割料金
    rank1_optical_line_discount.textContent = ranking[0].optical_line_discount + "円";
    rank2_optical_line_discount.textContent = ranking[1].optical_line_discount + "円";
    rank3_optical_line_discount.textContent = ranking[2].optical_line_discount + "円";
    rank4_optical_line_discount.textContent = ranking[3].optical_line_discount + "円";
  }
}

window.addEventListener('load', price_simu);