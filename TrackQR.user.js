// ==UserScript==
// @name        TrackQR
// @namespace   https://traceability24.eu/
// @include     *traceability24.eu*
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/jquery-ui.min.js
// @require     https://github.com/PatrykGregorczyk/TrackQR/blob/main/library.min.js?raw=true
// @updateURL	https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @downloadURL https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @version     1.03
// @grant       none
// ==/UserScript==

 //   var teraz = new Date(20+TLOTa.substr(-2,2), 0,TLOTa.substr(-5,3));

const COPIES = 3;

console.log($('#b_prod_date'));

$('.navbar').css("height", "0");
$('li.nav-item:nth-child(1)').remove();
    console.log($('div.show > a:nth-child(1)'));

console.log($(".pull-right"));

if(window.location.href.toString() === 'https://traceability24.eu/deliveries' || window.location.href.toString().substr(0,42) === 'https://traceability24.eu/deliveries/index'){
    $('div.row:nth-child(1)').remove();
    $('div.row:nth-child(3)').css("background", "");
    $('div.row:nth-child(3)').css("top", "12");
    $('div.col-lg-2:nth-child(3)').css("top", "-22");
    $('div.col-lg-12:nth-child(1)').css("top", "-30");

    for(var i = 0; i < document.body.getElementsByClassName('form-group').length-2; i++){
    document.body.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].firstChild.data);
    }
    for(var i = 1; i < 6; i++){
    document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
    }

}
    if(window.location.href.toString().substr(0,40) ===  'https://traceability24.eu/batches/create'){
            $('div.row:nth-child(1)').remove();
        $('#b_prod_date').attr("class", "form-control");
    }

if(window.location.href.toString() === 'https://traceability24.eu/batches' || window.location.href.toString().substr(0,39) === 'https://traceability24.eu/batches/index'){
 console.log("hej");
    $('div.row:nth-child(1)').remove();

    for(i = 0; i < document.body.getElementsByClassName('form-group').length-2; i++){
    document.body.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].innerHTML);
    }
    for(i = 1; i < 6; i++){
    document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
        if(i < 3) {
        document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').remove();
        }
    }
    $('.col-lg-2').css('max-width', '11%');
    $('div.row:nth-child(3)').css("position", "absolute").css("background", "");
    $('div.col-lg-2:nth-child(1) > div:nth-child(2) > div:nth-child(1)').css("left", "990").css("position", "absolute").css("top", "0").css("width", "84.5%");
    $('div.col-lg-2:nth-child(2) > div:nth-child(2) > div:nth-child(1)').css("left", "990").css("position", "absolute").css("top", "0").css("width", "84.5%");
    $('div.col-lg-2:nth-child(6)').css("left", "394").css("top", "-24");
    $('div.col-lg-12:nth-child(1)').css("top", "35");
    $('.table').css("position", "relative").css("top", "-40");
    $('button.btn-info:nth-child(3)').css("position", "relative").css("top", "-55");
    $('body > p:nth-child(3) > small:nth-child(1)').remove();

    newButton();
}



if(window.location.href.toString().substr(0,38) === 'https://traceability24.eu/batches/view'){
    $('div.col-lg-1:nth-child(1)').remove();
    $('div.card-body:nth-child(4)').css("position", "absolute").css("left", "-100").css("top", "-100");
    $('.col-lg-12').css("margin-bottom", "-28");
    $('div.col-lg-4:nth-child(3) > div:nth-child(1) > div:nth-child(1)').css("display", "none");
    $('div.card-body:nth-child(3)').css("height", "83");
    $('div.col-lg-4:nth-child(2)').css("height", "0");
    $('div.card-body:nth-child(2) > div:nth-child(1)').css("margin-bottom", "-35");
    $('div.col-lg-3:nth-child(2) > div:nth-child(1) > img:nth-child(1)').css("margin-top", "-40").css("transform", "scale(0.7)");
    $('.col-lg-9').remove();
    $('.card-footer > div:nth-child(1)').css("width", "100%");
    $('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2)').css("position", "absolute").css("top", "1").css("left", "215");
    $('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(1)').css("position", "absolute").css("left", "415").css("top", "1");
    $('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)').css("position", "absolute").css("top", "0").css("left", "615");
    $('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1)').css("position", "absolute").css("left", "15");
    $('.col-lg-4').css("max-width", "100%").css("flex", "0 0 100%");
    $('hr.my-4:nth-child(10)').remove();
    $('div.row:nth-child(10)').remove();
    $('div.row:nth-child(9)').css("margin-bottom", "12");
    $('.card-footer').css("position", "absolute").css("top", "-92").css("background-color", "transparent").css("color", "white !important").css("left", "369");
    $('.btn').css("line-height", "1");
    $('.card').css("padding", "0");
    $('#container').css("margin-top", "0px");
    $('.col-lg-1').css("position", "absolute").css("top", "-79").css("left", "277");
    $('.col-md-9').css('max-width', '50%');

  //  document.querySelector('.col-lg-1').setAttribute("onclick", "location.href='myfile.php?bo_table=movie&wr_id=756'")


    var STX = String.fromCharCode(2);
    var ETX = String.fromCharCode(3);
    var SEP = String.fromCharCode(10);
    var TIND = $(".milcode").text();
    var TMHD = $("div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").text();
    var TDMR = $("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").text();
    var TLOT = document.getElementById("qrdata").value;
    var TATC = $("h5.text-warning").text();
    var TDUB = $("h5.text-success").text();
    var TGGN = $("div.row:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").text();
    var DPR = $("h5.text-info").text();
    var PARTIA = $(".card-header > strong:nth-child(1)").text();
    var PRODUKT = $("div.col-lg-6:nth-child(3) > div:nth-child(1) > h5:nth-child(2)").text();
	var CERT = $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)").text();

	const dayOfYear = date =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    var LotDate = new Date(20+TLOT.substr(-2,2), 0,TLOT.substr(-5,3));
    var SprDU = new Date(TDUB[0] + TDUB[1] + TDUB[2] + TDUB[3],(TDUB[5] + TDUB[6])-1, TDUB[8] + TDUB[9]);
    var SprMHD = new Date(TMHD[0] + TMHD[1] + TMHD[2] + TMHD[3], (TMHD[5] + TMHD[6])-1, TMHD[8] + TMHD[9]);
    var SprDPR = new Date(DPR[0] + DPR[1] + DPR[2] + DPR[3], (DPR[5] + DPR[6])-1, DPR[8] + DPR[9]);

    TMHD = TMHD[8] + TMHD[9] + '.' + TMHD[5] + TMHD[6] + '.' + TMHD[0] + TMHD[1] + TMHD[2] + TMHD[3];
    TDUB = TDUB[8] + TDUB[9] + '.' + TDUB[5] + TDUB[6] + '.' + TDUB[0] + TDUB[1] + TDUB[2] + TDUB[3];
    DPR = DPR[8] + DPR[9] + '.' + DPR[5] + DPR[6] + '.' + DPR[0] + DPR[1] + DPR[2] + DPR[3];

    console.log(SprDPR);

   if(TDMR === ""){
       $("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1)").remove();
   } else {
       TDMR = TDMR[8] + TDMR[9] + '.' + TDMR[5] + TDMR[6] + '.' + TDMR[0] + TDMR[1] + TDMR[2] + TDMR[3];
   }
//    $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(3)").after($("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)"));
 //   $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(3)").remove();
var CERTPOS  = true;
    for(i = 2;CERTPOS != ""; i++){
    CERTPOS = $(`div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(${i})`).text();
    $(`div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(${i})`).css("position", "absolute").css("left", 15+60*(i-2)).css("top", $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").position.top);
      console.log(CERTPOS);}

    $("#qrdata")[0].outerHTML = '<div class="text-info" id="qrdata"><b>'+TLOT+'</b>';
    $('.my-4').css("margin-bottom", "0");
    $('#container > p:nth-child(2)').remove();
    $('div.row > div.col-lg-6').css("height", "30");
    $("div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").text(TMHD);
    $("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").text(TDMR);
    $("h5.text-success").text(TDUB);
    $("h5.text-info").text(DPR);


    var svgNode = QRCode({
     msg :  STX + 'M' + TIND + ' (QR)' + ETX
 	      + STX + 'UTMHD' + SEP + TMHD + ETX
          + STX + 'UTLOT' + SEP + TLOT + ETX
	      + STX + 'UTATC' + SEP + TATC + ETX
	 	  + STX + 'UTDUB' + SEP + TDUB + ETX
		  + STX + 'UTGGN' + SEP + TGGN + ETX
  	,pad :	 0
    ,ecl :  "L"
    ,ecb :   1
    ,vrb :   1
    });

    var s = svgNode.getElementsByTagName("path")[0].getAttribute('d');

    $('.col-md-7').css("max-width", "50%");
    $('.col-md-offset-4').css("margin-top", "50");

    newButton();
    PDFMini(true);

    var serializedSVG = new XMLSerializer().serializeToString(svgNode);
    var base64Data = window.btoa(serializedSVG);
    document.getElementById("qrcode").getElementsByTagName("img")[0].src = "data:image/svg+xml;base64," + base64Data;
    document.getElementById("qrcode").getElementsByTagName("img")[0].style.width = '110';

    if(TIND === '3.1.1.48' || TIND === '3.1.1.47' || TIND === '3.1.1.77' || TIND === '3.1.1.78' || TIND === '3.1.1.75' || TIND === '3.1.1.97' || TIND === '3.1.1.98' || TIND === '3.1.1.106' || TIND === '3.1.1.109' || TIND === '3.1.1.110' || TIND === '3.1.1.111') {
		if(TIND === '3.1.1.48' || TIND === '3.1.1.47' || TIND === '3.1.1.75' || TIND === '3.1.1.106' || TIND === '3.1.1.109') {
         if(!(CERT.includes("GG"))) {
             var warn5 = document.createElement("div");
              warn5.style.position = 'fixed';
              warn5.style.top = '600px';
              warn5.style.left = '10px';
              warn5.style.color = '#ff00006b';
              warn5.style.background = '#fffb003b';
              warn5.innerHTML = '<h2>BRAK CERTYFIKATU!</h2>';
              document.body.appendChild(warn5);
         }
      }
         if(TIND === '3.1.1.77' || TIND === '3.1.1.78' || TIND === '3.1.1.97' || TIND === '3.1.1.98' || TIND === '3.1.1.110' || TIND === '3.1.1.111') {
          if(!(CERT.includes("ORG"))) {
             var warn6 = document.createElement("div");
              warn6.style.position = 'fixed';
              warn6.style.top = '600px';
              warn6.style.left = '10px';
              warn6.style.color = '#ff00006b';
              warn6.style.background = '#fffb003b';
              warn6.innerHTML = '<h2>BRAK CERTYFIKATU!</h2>';
              document.body.appendChild(warn6);
         }
	}
	 if(TIND != '3.1.1.75') {
         if(((SprMHD.getTime() - SprDU.getTime())/ 1000 / 60 / 60 / 24)>18.1) {
              var dusum = ((SprMHD.getTime() - SprDU.getTime())/ 1000 / 60 / 60 / 24);
              var warn = document.createElement("div");
              warn.style.position = 'fixed';
              warn.style.top = '50px';
              warn.style.left = '10px';
              warn.style.color = '#ff00006b';
              warn.style.background = '#fffb003b';
              warn.innerHTML = '<h2>STARA DATA UBOJU! (' + Math.round(dusum) + ' dni)</h2>';
              document.body.appendChild(warn);
          }
      }

      if(TLOT.length != 10) {
          var warn1 = document.createElement("div");
          warn1.style.position = 'fixed';
          warn1.style.top = '160px';
          warn1.style.left = '10px';
          warn1.style.color = '#ff00006b';
          warn1.style.background = '#fffb003b';
          warn1.innerHTML = '<h2>BŁĘDNY LOT!</h2>';
          document.body.appendChild(warn1);
      }
      if(LotDate.getTime() != SprDPR.getTime()) {
          var warn2 = document.createElement("div");
          warn2.style.position = 'fixed';
          warn2.style.top = '270px';
          warn2.style.left = '10px';
          warn2.style.color = '#ff00006b';
          warn2.style.background = '#fffb003b';
          warn2.innerHTML = '<h2>BŁĘDNA DATA PRODUKCJI!</h2>';
          document.body.appendChild(warn2);
      }
      if(((SprMHD.getTime() - SprDPR.getTime())/ 1000 / 60 / 60 / 24)>19 || ((SprMHD.getTime() - SprDPR.getTime())/1000/60/60/24)<5) {
          var warn3 = document.createElement("div");
          warn3.style.position = 'fixed';
          warn3.style.top = '380px';
          warn3.style.left = '10px';
          warn3.style.color = '#ff00006b';
          warn3.style.background = '#fffb003b';
          warn3.innerHTML = '<h2>ZŁA DATA PRZYDATNOŚCI!</h2>';
          document.body.appendChild(warn3);
      }
      if(TIND === '3.1.1.75' || TIND === '3.1.1.106' || TIND === '3.1.1.109' || TIND === '3.1.1.110' || TIND === '3.1.1.111') {
          if(TLOT != TATC) {
          var warn4 = document.createElement("div");
          warn4.style.position = 'fixed';
          warn4.style.top = '490px';
          warn4.style.left = '10px';
          warn4.style.color = '#ff00006b';
          warn4.style.background = '#fffb003b';
          warn4.innerHTML = '<h2>TRACEABILITY I<br>LOT RÓŻNIĄ SIĘ!</h2>';
          document.body.appendChild(warn4);
          }
       }
    }
	var iframe = document.createElement("iframe");
              iframe.style.position = 'fixed';
              iframe.style.height = '777px';
              iframe.style.width = '380px';
			  iframe.style.top = '50px';
              iframe.style.left = '1480px';
              document.body.appendChild(iframe);

    document.querySelector(".pull-right").setAttribute("onclick", "return false");
    document.querySelector(".pull-right").addEventListener("click", PDFMini, false);

    function PDFMini($frame) {
        var doc = new PDFDocument({size: [79*2.83237976548, 49*2.83237976548], bufferPages: true});
            var stream = doc.pipe(blobStream());
            const stream1 = doc.pipe(blobStream());

        for(i=1;i<=COPIES;i++) {
            TraceMini();
            if(i<COPIES){
            doc.addPage();
            }
        }
 	    doc.end();

        if($frame === true){
            stream.on('finish', function() {
                iframe.src = stream.toBlobURL('application/pdf');
            });
        } else if ($frame != true) {
            stream1.on('finish', function() {
                const url = stream1.toBlobURL('application/pdf');
                window.open(url);
            });
        }

        function TraceMini() {
            doc.registerFont('pgb', new Buffer(fontpgb, "base64"))
               .registerFont('abl', new Buffer(fontabl, "base64"))
               .save()
               .translate(10, 12)
               .scale(1.2)
               .path(s, 10, 10)
               .fill('black', 'even-odd')
               .restore()
               .font('abl')
               .fontSize(11)
               .text(PARTIA,67, 9, {height:0, width:230})
               .font('pgb')
               .text('Data uboju: '+TDUB, 67, 29, {height:0, width:230})
               .text('Indeks: '+TIND, 10, 84, {height:0})
               .text('MHD:', 10, 101, {height:0})
               .font('abl')
               .text(TMHD,42, 98.3, {height:0})
               .font('pgb')
               .text('LOT: '+TLOT,10, 117, {height:0})
               .fontSize(7).text('Data Produkcji: ',56*2.83237976548,39*2.83237976548,{height:0, width:70}).fontSize(9.9).text(DPR, 56*2.83237976548,42*2.83237976548,{height:0, width:70});
            if(TGGN){
                doc.text('GGN: '+TGGN, 67, 48, {height:0, width:230});
            }

            if(TLOT != TATC){
                doc.text('Traceability: '+TATC,10, 68, {height:0});
            }
       }
    }
}
function newButton() {
    var nowbut = document.createElement("button");
    nowbut.style.font = 'Lato';
    nowbut.style.position = 'absolute';
    nowbut.style.top = '3px';
    nowbut.style.left = '321px';
    nowbut.style.padding = '0.20rem 0.75rem';
    nowbut.style.borderRadius = '0.25rem';
    nowbut.style.border = '1px solid transparent';
    nowbut.style.fontWeight = 'bold';
    nowbut.style.textAllign = 'center';
    nowbut.style.VerticalAllign = 'middle';
    nowbut.innerText = 'New';
    nowbut.color = 'red';
    nowbut.style.fontSize = '12px';
    nowbut.style.transition = 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out';
    nowbut.style.cursor = "pointer";
    nowbut.onclick = function() { window.location.href = 'https://traceability24.eu/batches/create'; };
    document.body.appendChild(nowbut);
}