// ==UserScript==
// @name        TrackQR
// @namespace   https://traceability24.eu/
// @include     *traceability24.eu*
// @require     https://github.com/PatrykGregorczyk/TrackQR/blob/main/library.min.js?raw=true
// @require     https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js
// @updateURL	https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @downloadURL https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @version     1.11
// @run-at      document-start
// @grant       none
// ==/UserScript==

const COPIES = 3;

window.addEventListener ("load", DOM_ContentReady);

function DOM_ContentReady () {

    document.querySelector('.navbar').style.height = 0;
    document.querySelector('li.nav-item:nth-child(1)').remove();

if(window.location.href.toString() === 'https://traceability24.eu/deliveries' || window.location.href.toString().substr(0,42) === 'https://traceability24.eu/deliveries/index'){

    document.querySelector('div.row:nth-child(1)').remove();

    document.querySelector('div.row:nth-child(3)').style.background = '';
    document.querySelector('div.row:nth-child(3)').style.top = '12';

    document.querySelector('div.col-lg-2:nth-child(3)').style.top = '-22';

    document.querySelector('div.col-lg-12:nth-child(1)').style.top = '-30';

    for(var i = 0; i < document.getElementsByClassName('form-group').length-2; i++){
    document.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].firstChild.data);
    }
    for(i = 1; i < 6; i++){
    document.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
    }

}
    if(window.location.href.toString().substr(0,40) === 'https://traceability24.eu/batches/create'){
        document.querySelector('div.row:nth-child(1)').remove();
        document.querySelector('hr').style.borderTop = '0';
        document.querySelector('.col-md-8').style.top = '20';

        funcButton('Pobierz z lotu', document.querySelector('div.row:nth-child(6) > div:nth-child(1)'), 1);
        document.getElementById("button1").addEventListener("click", () => getLotBut("#b_prod_date"));

        funcButton('+ 12m', document.querySelector('div.row:nth-child(6) > div:nth-child(2)'), 2)
        document.getElementById("button2").addEventListener("click", () => cngDate(12));
        funcButton('+ 15m', document.querySelector('div.row:nth-child(6) > div:nth-child(2)'), 3);
        document.getElementById("button3").addEventListener("click", () => cngDate(15));
        funcButton('+ 18m', document.querySelector('div.row:nth-child(6) > div:nth-child(2)'), 4);
        document.getElementById("button4").addEventListener("click", () => cngDate(18));
        funcButton('+ 24m', document.querySelector('div.row:nth-child(6) > div:nth-child(2)'), 5);
        document.getElementById("button5").addEventListener("click", () => cngDate(24));

        funcButton('Pobierz z lotu', document.querySelector('div.row:nth-child(6) > div:nth-child(3)'), 6);
        document.getElementById("button6").addEventListener("click", () => getLotBut("#b_freezing_date"));
    }

if(window.location.href.toString() === 'https://traceability24.eu/batches' || window.location.href.toString().substr(0,39) === 'https://traceability24.eu/batches/index'){

    document.querySelector('div.row:nth-child(1)').remove();

    for(i = 0; i < document.body.getElementsByClassName('form-group').length-2; i++){
    document.body.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].innerHTML);
    }
    for(i = 1; i < 6; i++){
    document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
        if(i < 3) {
        document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').remove();
        }
    }
    document.querySelector('div.row:nth-child(3)').style.maxWidth = '67%';
    document.querySelector('div.row:nth-child(3)').style.position = 'absolute';
    document.querySelector('div.row:nth-child(3)').style.background = '';

    for (i = 1; i<=2; i++) {
    document.querySelector('div.col-lg-2:nth-child('+ i +') > div:nth-child(2) > div:nth-child(1)').style.left = '997';
    document.querySelector('div.col-lg-2:nth-child('+ i +') > div:nth-child(2) > div:nth-child(1)').style.position = 'absolute';
    document.querySelector('div.col-lg-2:nth-child('+ i +') > div:nth-child(2) > div:nth-child(1)').style.top = '0';
    document.querySelector('div.col-lg-2:nth-child('+ i +') > div:nth-child(2) > div:nth-child(1)').style.width = '84.5%';
    }

    document.querySelector('div.col-lg-2:nth-child(6)').style.left = '394';
    document.querySelector('div.col-lg-2:nth-child(6)').style.top = '-24';

    document.querySelector('div.col-lg-12:nth-child(1)').style.top = '35';

    document.querySelector('.table').style.position = 'relative';
    document.querySelector('.table').style.top = '-40';

    document.querySelector('button.btn-info:nth-child(3)').style.position = 'relative';
    document.querySelector('button.btn-info:nth-child(3)').style.top = '-55';

    document.querySelector('body > p:nth-child(3) > small:nth-child(1)').remove();

    newButton();
}

if(window.location.href.toString().substr(0,38) === 'https://traceability24.eu/batches/view'){


    document.querySelector('div.col-lg-1:nth-child(1)').remove();

    document.querySelector('div.card-body:nth-child(4)').style.position = "absolute";
    document.querySelector('div.card-body:nth-child(4)').style.left = "-100px";
    document.querySelector('div.card-body:nth-child(4)').style.top = "-100px";

    document.querySelector('.col-md-offset-4').style.marginTop = "50";

    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1) > div:nth-child(1)').style.display = "none";

    document.querySelector('div.card-body:nth-child(3)').style.height = "83";

    document.querySelector('div.col-lg-4:nth-child(2)').style.height = "0";

    document.querySelector('div.card-body:nth-child(2) > div:nth-child(1)').style.marginBottom = "-35";

    document.querySelector('div.col-lg-3:nth-child(2) > div:nth-child(1) > img:nth-child(1)').style.marginTop = "-40";
    document.querySelector('div.col-lg-3:nth-child(2) > div:nth-child(1) > img:nth-child(1)').style.transform = "scale(0.7)";

    document.querySelector('.col-lg-9').remove();

    document.querySelector('.card-footer > div:nth-child(1)').style.width = "100%";

    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2)').style.top = "1";
    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2)').style.left = "215";

    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(1)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(1)').style.left = "415";
    document.querySelector('div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(1)').style.top = "1";

    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)').style.top = "0";
    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)').style.left = "615";

    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1)').style.left = "15";

    document.querySelector('.col-lg-4').style.maxWidth = "100%";
    document.querySelector('.col-lg-4').style.flex = "0 0 100%";

    document.querySelector('hr.my-4:nth-child(10)').remove();

    document.querySelector('div.row:nth-child(10)').remove();

    document.querySelector('div.row:nth-child(9)').style.marginBottom = "12";

    document.querySelector('.card-footer').style.position = "absolute";
    document.querySelector('.card-footer').style.top = "-92";
    document.querySelector('.card-footer').style.backgroundColor = "transparent";
    document.querySelector('.card-footer').style.color = "white !important";
    document.querySelector('.card-footer').style.left = "369";

    document.querySelectorAll('.btn').forEach(el => el.style.lineHeight = 1);

    document.querySelector('.card').style.padding = "0";

    document.querySelector('#container').style.marginTop = "0px";

    document.querySelector('.col-lg-1').style.position = "absolute";
    document.querySelector('.col-lg-1').style.top = "-79";
    document.querySelector('.col-lg-1').style.left = "277";

    document.querySelector('.col-md-9').style.maxWidth = '50%';

    document.querySelector('a.card-link:nth-child(1)').style.marginLeft = '1.25rem';

   for(i = 3; document.querySelector('div.row:nth-child('+i+')'); i+=2) {
        document.querySelector('div.row:nth-child('+i+')').style.marginTop = '-10';
        document.querySelector('div.row:nth-child('+i+')').style.marginBottom = '-25';
    }

    const STX = String.fromCharCode(2);
    const ETX = String.fromCharCode(3);
    const SEP = String.fromCharCode(10);
    var TIND = document.querySelector(".milcode").outerText;
    var TMHD = document.querySelector("div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").outerText;
    var TDMR = document.querySelector("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").outerText;
    var TLOT = document.querySelector("#qrdata").value;
    var TATC = document.querySelector("h5.text-warning").outerText;
    var TDUB = document.querySelector("h5.text-success").outerText;
    var TGGN = document.querySelector("div.row:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").outerText;
    var DPR = document.querySelector("h5.text-info").outerText;
    var PARTIA = document.querySelector(".card-header > strong:nth-child(1)").outerText;
    var PRODUKT = document.querySelector("div.col-lg-6:nth-child(3) > div:nth-child(1) > h5:nth-child(2)").outerText;
	var CERT = document.querySelector("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)").outerText;

	const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    var LotDate = new Date(20+TLOT.substr(-2,2), 0,TLOT.substr(-5,3),2);
    var lotISO = LotDate.toISOString();
    LotDate = new Date(lotISO[0] + lotISO[1] + lotISO[2] + lotISO[3],(lotISO[5] + lotISO[6])-1, lotISO[8] + lotISO[9]);
    var SprDU = new Date(TDUB[0] + TDUB[1] + TDUB[2] + TDUB[3],(TDUB[5] + TDUB[6])-1, TDUB[8] + TDUB[9]);
    var SprMHD = new Date(TMHD[0] + TMHD[1] + TMHD[2] + TMHD[3], (TMHD[5] + TMHD[6])-1, TMHD[8] + TMHD[9]);
    var SprDPR = new Date(DPR[0] + DPR[1] + DPR[2] + DPR[3], (DPR[5] + DPR[6])-1, DPR[8] + DPR[9]);
    TMHD = TMHD[8] + TMHD[9] + '.' + TMHD[5] + TMHD[6] + '.' + TMHD[0] + TMHD[1] + TMHD[2] + TMHD[3];
    TDUB = TDUB[8] + TDUB[9] + '.' + TDUB[5] + TDUB[6] + '.' + TDUB[0] + TDUB[1] + TDUB[2] + TDUB[3];
    DPR = DPR[8] + DPR[9] + '.' + DPR[5] + DPR[6] + '.' + DPR[0] + DPR[1] + DPR[2] + DPR[3];
    lotISO = lotISO[8] + lotISO[9] + '.' + lotISO[5] + lotISO[6] + '.' + lotISO[0] + lotISO[1] + lotISO[2] + lotISO[3];


   if(TDMR === ""){
       document.querySelector("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1)").remove();
   } else {
       TDMR = TDMR[8] + TDMR[9] + '.' + TDMR[5] + TDMR[6] + '.' + TDMR[0] + TDMR[1] + TDMR[2] + TDMR[3];
   }
//    $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(3)").after($("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)"));
 //   $("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(3)").remove();

   for(i = 2; document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')'); i++){
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.position = "absolute";
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.left = 15+60*(i-2);
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.top =
        document.querySelector("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").style.top;
    }

    document.querySelector("#qrdata").outerHTML = '<div class="text-info" id="qrdata"><b>'+TLOT+'</b>';
    document.querySelector('.my-4').style.marginBottom = "0";
    document.querySelector('#container > p:nth-child(2)').remove();
    document.querySelector('div.row > div.col-lg-6').style.height = "30";
    document.querySelector("div.col-lg-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").innerText = TMHD;

    if (document.querySelector("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)")) {
    document.querySelector("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(2)").innerText = TDMR;
    }

    document.querySelector("h5.text-success").innerText = TDUB;
    document.querySelector("h5.text-info").innerText = DPR;


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

    newButton();
    PDFMini(false);

    var serializedSVG = new XMLSerializer().serializeToString(svgNode);
    var base64Data = window.btoa(serializedSVG);
    document.getElementById("qrcode").getElementsByTagName("img")[0].src = "data:image/svg+xml;base64," + base64Data;
    document.getElementById("qrcode").getElementsByTagName("img")[0].style.width = '110';

    var warnboard = document.createElement("div")
    warnboard.style.position = 'absolute';
    warnboard.style.top = '50px';
    warnboard.style.left = '10px';
    warnboard.style.fontSize = '28px';
    document.body.appendChild(warnboard);

    Warnform('OD UBOJU DO KOŃCA MHD: ' + Math.round(((SprMHD.getTime() - SprDU.getTime())/ 1000 / 60 / 60 / 24)) + ' dni');
    Warnform('LOT Z DNIA: '+lotISO);
    if(LotDate.getTime() > SprDPR.getTime()) {
        Warnform('BŁĘDNA DATA PRODUKCJI!');
    }
    if(!(/^[A-Z]{2}/.test(TATC)) && (TLOT != TATC)) {
        Warnform('TRACEABILITY I LOT RÓŻNIĄ SIĘ!');
    }
    if(!((/^[0-9]{4}/.test(TLOT.substr(-10,4))&&/^[A-Z]{1}/.test(TLOT.substr(-6,1))&&/^[0-9]{5}/.test(TLOT.substr(-5,5)))) || !(TLOT.length === 10 || TLOT.length === 12)) {
        Warnform('BŁĘDNY LOT!');
    }

        function Warnform ($ihtml) {
        this.warn = document.createElement("p");
        this.warn.style.position = 'relative';
        this.warn.style.color = '#ff00006b';
        this.warn.style.background = '#fffb003b';
        this.warn.innerHTML = $ihtml;
        warnboard.appendChild(this.warn);
        }

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

        if($frame){
            stream1.on('finish', function() {
                const url = stream1.toBlobURL('application/pdf');
                window.open(url);
            });
        } else {
            var iframe = document.createElement("iframe");
              iframe.style.position = 'fixed';
              iframe.style.height = '777px';
              iframe.style.width = '380px';
			  iframe.style.top = '50px';
              iframe.style.left = '1480px';
              document.body.appendChild(iframe);

            stream.on('finish', function() {
                iframe.src = stream.toBlobURL('application/pdf');
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
            } else if (TGGN == "" && TDMR) {
                doc.text('Data mrożenia: '+TDMR, 67, 48, {height:0, width:230});
            }
            if(TLOT != TATC){
                doc.text('Traceability: '+TATC,10, 68, {height:0});
            } else if (TGGN && TDMR && TLOT == TATC) {
                doc.text('Data mrożenia: '+TDMR,10, 68, {height:0});
            }

       }
    }
}

function newButton() {
    this.nowbut = document.createElement("button");
    this.nowbut.style.font = 'Lato';
    this.nowbut.style.position = 'absolute';
    this.nowbut.style.top = '3.5px';
    this.nowbut.style.left = '340px';
    this.nowbut.style.padding = '0.18rem 0.78rem';
    this.nowbut.style.float = 'left';
    this.nowbut.style.borderRadius = '0.25rem';
    this.nowbut.style.border = '1px solid transparent';
    this.nowbut.style.textAllign = 'center';
    this.nowbut.style.VerticalAllign = 'middle';
    this.nowbut.innerText = 'New';
    this.nowbut.style.backgroundColor = '#e83e8c';
    this.nowbut.style.color = 'white';
    this.nowbut.style.fontSize = '12px';
    this.nowbut.style.cursor = "pointer";
    this.nowbut.onclick = function() { window.location.href = 'https://traceability24.eu/batches/create'; };
    document.body.appendChild(nowbut);
}

function funcButton(name, position, ajdi) {
    this.databut = document.createElement("button");
    this.databut.id = 'button'+ajdi;
    this.databut.type = 'button';
    this.databut.tabIndex = '-1';
    this.databut.style.font = 'Lato';
    this.databut.style.position = 'inherit';
    this.databut.style.padding = '0.20rem 0.75rem';
    this.databut.style.borderRadius = '0.25rem';
    this.databut.style.border = '1px solid transparent';
    this.databut.style.marginRight = '10px';
    this.databut.style.fontWeight = 'bold';
    this.databut.style.textAllign = 'center';
    this.databut.style.VerticalAllign = 'middle';
    this.databut.innerText = name;
    this.databut.style.backgroundColor = '#6610f2';
    this.databut.style.color = 'white';
    this.databut.style.fontSize = '12px';
    this.databut.style.cursor = "pointer";
    position.append(this.databut);
}
        function cngDate (range) {
        if (document.querySelector("#b_freezing_date").value) {
            var dataLot = document.querySelector("#b_freezing_date").value
            dataLot = new Date(dataLot[0] + dataLot[1] + dataLot[2] + dataLot[3],(dataLot[5] + dataLot[6])-1, dataLot[8] + dataLot[9],2);
            var newDataLot = dataLot.addMonths(range);
            $('#b_exp_date').datepicker('update', newDataLot);
        } else if (document.querySelector("#b_lot_nr").value) {
            getLotBut("#b_freezing_date");
            cngDate(range);
            } else {
                 document.querySelector("#b_lot_nr").focus();
            }
    };
            function getLotBut (inputeg) {
        if (document.querySelector("#b_lot_nr").value) {
        var dataLot = document.querySelector("#b_lot_nr").value;
            dataLot = new Date(20 + dataLot.substr(-2,2), 0, dataLot.substr(-5,3), 2);
            $(inputeg).datepicker('update', dataLot);
        } else {
            document.querySelector("#b_lot_nr").focus();
        }
    };
}