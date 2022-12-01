// ==UserScript==
// @name        TrackQR
// @namespace   https://traceability24.eu/
// @include     *traceability24.eu*
// @require     https://unpkg.com/qrcode-decoder@0.3.3/dist/index.min.js
// @require     https://github.com/PatrykGregorczyk/TrackQR/blob/main/library.min.js?raw=true
// @updateURL	https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @downloadURL https://github.com/PatrykGregorczyk/TrackQR/blob/main/TrackQR.user.js?raw=true
// @version     1.42
// @run-at      document-start
// @grant       none
// ==/UserScript==

window.addEventListener ("load", DOM_ContentReady);

function DOM_ContentReady () {

    document.querySelector('.navbar').style.height = 0;
    if(document.querySelector('li.nav-item:nth-child(1)')) {
        document.querySelector('li.nav-item:nth-child(1)').remove();

}

if(window.location.href.toString() === 'https://traceability24.eu/deliveries' || window.location.href.toString().substr(0,42) === 'https://traceability24.eu/deliveries/index'){

    document.querySelector('div.row:nth-child(1)').remove();

    document.querySelector('div.row:nth-child(3)').style.background = '';
    document.querySelector('div.row:nth-child(3)').style.top = '12';

    document.querySelector('div.col-lg-12:nth-child(1)').style.top = '-30';

    for(var i = 0; i < document.getElementsByClassName('form-group').length-2; i++){
    document.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].firstChild.data);
    }
    for(i = 1; i < 6; i++){
    document.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
    }

}
    if(window.location.href.toString().substr(0,40) === 'https://traceability24.eu/batches/create' || window.location.href.toString().substr(0,40) === 'https://traceability24.eu/batches/update'){
        document.querySelector('div.row:nth-child(1)').remove();
        document.querySelector('hr').style.borderTop = '0';
        document.querySelector('.col-md-8').style.top = '20';

        funcButton('Pobierz z lotu', document.querySelector('[name="b_prod_date"]').parentElement.parentElement.parentElement, 1);
        document.getElementById("button1").addEventListener("click", () => getLotBut('[name="b_prod_date"]'));

        funcButton('+ 12m', document.querySelector('[name="b_exp_date"]').parentElement.parentElement.parentElement, 2);
        document.getElementById("button2").addEventListener("click", () => cngDate(12, 0));
        funcButton('+ 15m', document.querySelector('[name="b_exp_date"]').parentElement.parentElement.parentElement, 3);
        document.getElementById("button3").addEventListener("click", () => cngDate(15, 0));
        funcButton('+ 18m', document.querySelector('[name="b_exp_date"]').parentElement.parentElement.parentElement, 4);
        document.getElementById("button4").addEventListener("click", () => cngDate(18, 0));
        funcButton('+ 24m', document.querySelector('[name="b_exp_date"]').parentElement.parentElement.parentElement, 5);
        document.getElementById("button5").addEventListener("click", () => cngDate(24, 0));
        funcButton('JP18-1', document.querySelector('[name="b_exp_date"]').parentElement.parentElement.parentElement, 6);
        document.getElementById("button6").addEventListener("click", () => cngDate(18, 1));

        funcButton('Pobierz z lotu', document.querySelector('[name="b_freezing_date"]').parentElement.parentElement.parentElement, 7);
        document.getElementById("button7").addEventListener("click", () => getLotBut('[name="b_freezing_date"]'));
    }

if(window.location.href.toString() === 'https://traceability24.eu/batches' || window.location.href.toString().substr(0,39) === 'https://traceability24.eu/batches/index'){

    document.querySelector('div.row:nth-child(1)').remove();

    for(i = 0; i < document.body.getElementsByClassName('form-group').length-2; i++){
    document.body.getElementsByClassName('form-group')[i].children[1].setAttribute("placeholder", document.body.getElementsByClassName('form-group')[i].children[0].innerHTML);
    }
    for(i = 1; i < 7; i++){
    document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)').remove();
        if(i < 4) {
        document.body.querySelector('div.col-lg-2:nth-child('+i+') > div:nth-child(2) > div:nth-child(1) > label:nth-child(1)').remove();
        }
    }

    document.querySelector('div.row:nth-child(3)').style.background = '';

    document.querySelector('div.col-lg-2:nth-child(3) > div:nth-child(2) > div:nth-child(1)').children[0][0].innerText = 'Platform:'

    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_products_p_code"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_batch_nr"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_ean"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_traceability_code"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="dorm_supplier_name"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_prod_date_from"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="b_prod_date_to"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelector('[name="st_platform_id"]').parentElement.parentElement)
    document.querySelector("div.row:nth-child(3)").appendChild(document.querySelectorAll('[type="submit"]')[0])

    document.querySelectorAll('[type="submit"]')[0].style.height = 35

    document.querySelectorAll("div.col-lg-2").forEach(e => e.remove());

    document.querySelectorAll(".form-control").forEach(e => (e.style.width = '90%'));

    document.querySelector('div.col-lg-12:nth-child(3)').style.top = 10;

    document.querySelector("button.btn:nth-child(3)").remove();

    document.querySelector('div.col-lg-12:nth-child(1)').style.top = '-15';

    document.querySelector('.table').style.position = 'relative';
    document.querySelector('.table').style.top = '-40';

    document.querySelector('body > p:nth-child(3) > small:nth-child(1)').remove();


    newButton();
}

if(window.location.href.toString().substr(0,38) === 'https://traceability24.eu/batches/view'){

    if (document.querySelector('.btn-primary')) {
    document.querySelector('.btn-primary').style.position = "absolute";
    document.querySelector('.btn-primary').style.left = "980";
}

    document.querySelector('div.col-lg-1:nth-child(1)').remove();

    document.querySelector('.col-md-offset-4').style.marginTop = "50";

    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1)').style.left = "643";
    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1)').style.top = "-225";
    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1)').style.width = "100%";

    document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1) > div:nth-child(2)').style.display = "none";

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
    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2)').style.width = "100%";

    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1)').style.position = "absolute";
    document.querySelector('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1)').style.left = "15";

    document.querySelector('div.card-body:nth-child(5)').style.position = "absolute";
    document.querySelector('div.card-body:nth-child(5)').style.top = "-100";
    document.querySelector('div.card-body:nth-child(5)').style.left = "-100";

    document.querySelector('div.card-body:nth-child(4)').style.position = "absolute";
    document.querySelector('div.card-body:nth-child(4)').style.left = "-500";
    document.querySelector('div.card-body:nth-child(4)').style.top = "0";

    document.querySelector('.col-lg-4').style.maxWidth = "100%";
    document.querySelector('.col-lg-4').style.flex = "0 0 100%";

    document.querySelector('div.row:nth-child(9)').style.marginBottom = "12";

    document.querySelector('.card-footer').style.position = "absolute";
    document.querySelector('.card-footer').style.top = "-92";
    document.querySelector('.card-footer').style.backgroundColor = "transparent";
    document.querySelector('.card-footer').style.color = "white !important";
    document.querySelector('.card-footer').style.left = "369";

    document.querySelectorAll('.btn').forEach(el => (el.style.lineHeight = 1));

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

    if (document.querySelector("div.row:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").innerText == "") {
        document.querySelector("div.row:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").innerText = "\xa0"; // hard space
    }

    const STX = String.fromCharCode(2);
    const ETX = String.fromCharCode(3);
    const SEP = String.fromCharCode(10);
    const CR = String.fromCharCode(13,10)
    var TIND = document.querySelector("#p_code_mil").value;
    var TMHD = document.querySelector("#exp_date").value;
    var TDMR = document.querySelector("#freezing_date").value;
    var TLOT = document.querySelector("#b_lot_nr").value;
    var TATC = document.querySelector("#b_traceability_code").value;
    var TDUB = document.querySelector("#slau_date").value;
    var TGGN = document.querySelector("div.row:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").outerText;
    var DPR = document.querySelector("#prod_date").value;
    var PARTIA = document.querySelector(".card-header > strong:nth-child(1)").outerText;
    var PRODUKT = document.querySelector("div.col-lg-6:nth-child(3) > div:nth-child(1) > h5:nth-child(2)").outerText;
	var CERT = document.querySelector("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1)").outerText;

	const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    var LotDate = new Date(20+TLOT.substr(-2,2), 0,TLOT.substr(-5,3),2);

    var lotISO = LotDate.toISOString();
    lotISO = lotISO[8] + lotISO[9] + '.' + lotISO[5] + lotISO[6] + '.' + lotISO[0] + lotISO[1] + lotISO[2] + lotISO[3];

    var monthca = [, 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    function normalDate(fieldName, dfName) {
        if (dfName == "Canada_1") {
            var monthNormal = 0
            for (i=1; i<13; i++) {
                if ((fieldName[3]+fieldName[4]+fieldName[5]).toUpperCase() == monthca[i]) {
                    if (i < 10) {
                        monthNormal = '0' + i;
                    } else {
                        monthNormal = i;
                    }
                }
            }
            return fieldName[0]+fieldName[1]+'.'+monthNormal+'.'+fieldName[7]+fieldName[8]+fieldName[9]+fieldName[10];
        } else if (dfName == "Japan_2") {
            return fieldName[8]+fieldName[9]+'.'+fieldName[5]+fieldName[6]+'.'+fieldName[0]+fieldName[1]+fieldName[2]+fieldName[3];
        } else if (dfName == "-- undefinied --") {
            return fieldName[8]+fieldName[9]+'.'+fieldName[5]+fieldName[6]+'.'+fieldName[0]+fieldName[1]+fieldName[2]+fieldName[3];
        } else if (dfName == "USA_1" || dfName == "USA_2") {
            return fieldName[3]+fieldName[4]+'.'+fieldName[0]+fieldName[1]+'.'+fieldName[6]+fieldName[7]+fieldName[8]+fieldName[9];
        } else if (dfName == "USA_3") {
            monthNormal = 0;
            for (i=1; i<13; i++) {
                if ((fieldName[0]+fieldName[1]+fieldName[2]).toUpperCase() == monthca[i]) {
                    if (i < 10) {
                        monthNormal = '0' + i;
                    } else {
                        monthNormal = i;
                    }
                }
            }
            return fieldName[4]+fieldName[5]+'.'+monthNormal+'.'+fieldName[7]+fieldName[8]+fieldName[9]+fieldName[10];
        } else if (dfName == "Julian_date") {
            var lotISO = new Date(20+fieldName.substr(0,2), 0,fieldName.substr(2,3),2);
            lotISO = lotISO.toISOString();
            return lotISO[8]+lotISO[9]+'.'+lotISO[5]+lotISO[6]+'.'+lotISO[0]+lotISO[1]+lotISO[2]+lotISO[3]
        } else {
            return fieldName;
        }
    }

     var poNum = document.createElement('input');
    poNum.id = 'tpon';
    poNum.style.width = "120px";
    poNum.defaultValue = "";
    poNum.maxLength = 6;
    poNum.minLength = 6;
    poNum.style.position = "absolute";
    poNum.style.top = "160px";
    poNum.style.left = "1450px";
    poNum.onkeyup = function() {
        if (poNum.value.length == 6) {
            makeTrackBoard(enableQr.checked);
        } else if (poNum.value.length < 6 && document.querySelector("#printtrack")){
            document.querySelector("#printtrack").remove();
        }
    }
    if(TIND == '3.2.1.128'){
    document.body.appendChild(poNum);
    }

   if(TDMR === ""){
       document.querySelector("div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1)").remove();
   }

   for(i = 2; document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')'); i++){
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.position = "absolute";
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.left = 15+60*(i-2);
    document.querySelector('div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child('+i+')').style.top =
        document.querySelector("div.row:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)").style.top;
    }
    document.querySelector('div.bs-component:nth-child(2) > div:nth-child(1)').style.margin = '-145';




    document.querySelector('.my-4').style.marginBottom = "0";
    document.querySelector('div.row > div.col-lg-6').style.height = "30";

    if (document.querySelector("#freezing_date")) {
        document.querySelector("#freezing_date").outerHTML = '<div id="freezing_date"><b style="color: blue; font-size:18;">'+TDMR+'</b>';
    }
    if (TATC != TLOT) {
        document.querySelector("#b_lot_nr").outerHTML = '<div id="b_lot_nr"><b style="color: cornflowerblue;">'+TLOT+'</b>';
    } else {
        document.querySelector("#b_lot_nr").outerHTML = '<div id="b_lot_nr"><b style="color: chocolate;">'+TLOT+'</b>';
    }
    document.querySelector("#slau_date").outerHTML = '<div id="slau_date"><b style="color: green; font-size:18;">'+TDUB+'</b>';
    document.querySelector("#prod_date").outerHTML = '<div id="prod_date"><b style="color: goldenrod; font-size:18;">'+DPR+'</b>';
    document.querySelector("#b_traceability_code").outerHTML = '<div id="b_traceability_code"><b style="color: chocolate;">'+TATC+'</b>';
    document.querySelector("#exp_date").outerHTML = '<div id="exp_date"><b style="color: red; font-size:18;">'+TMHD+'</b>';

    newButton();

    var trackCopies = document.createElement('input');
    trackCopies.id = 'lcopies';
    trackCopies.setAttribute('type', 'number');
    trackCopies.setAttribute('min', '1');
    trackCopies.setAttribute('max', '10');
    trackCopies.style.width = "50px";
    trackCopies.defaultValue = 4;
    trackCopies.style.position = "absolute";
    trackCopies.style.top = "120px";
    trackCopies.style.left = "1450px";
    document.body.appendChild(trackCopies);

        var enableQr = document.createElement('input');
    enableQr.setAttribute('type', 'checkbox');
    enableQr.defaultChecked = true;
    enableQr.id = 'enableqrcb';
    enableQr.style.position = "absolute";
    enableQr.style.top = "80px";
    enableQr.style.left = "1450px";
    enableQr.onchange = function() {
        if (enableQr.checked) {
            makeTrackBoard(true);
        document.getElementById("printtrack").addEventListener("click", () => printPageArea("printtrack", trackCopies.value));
        } else {
        makeTrackBoard(false);
            document.getElementById("printtrack").addEventListener("click", () => printPageArea("printtrack", trackCopies.value));
        }
    }
    document.body.appendChild(enableQr);

    var labelForCb = document.createElement('p');
    labelForCb.style.position = "absolute";
    labelForCb.innerHTML = 'QRCode (klawisz q - zmiana)';
    labelForCb.style.top = "76px";
    labelForCb.style.left = "1470px";
    document.body.appendChild(labelForCb);

    var labelForCopy = document.createElement('p');
    labelForCopy.style.position = "absolute";
    labelForCopy.innerHTML = 'Ilość kopii (strzałki - zmiana; enter - drukuj)';
    labelForCopy.style.top = "121px";
    labelForCopy.style.left = "1510px";
    document.body.appendChild(labelForCopy);

    var labelForPon = document.createElement('p');
    labelForPon.style.position = "absolute";
    labelForPon.innerHTML = 'Kontener';
    labelForPon.style.top = "163px";
    labelForPon.style.left = "1590px";
    if(TIND == '3.2.1.128') {
    document.body.appendChild(labelForPon);
    }

function makeTrackBoard (qr) {
    if(document.querySelector("#printtrack")) {
        document.querySelector("#printtrack").remove();
    }
    if (TIND == '3.2.1.128' && poNum.value.length == 6) {
    var svgNode = QRCode({
     msg :  'SLA|' + TIND
 	     + '|TDMR=' + TDMR
         + '|TMHD=' + TMHD
         + '|TLOT=' + TLOT
         + '|TGGN=' + TGGN
         + '|TPON=' + poNum.value + '|' + CR
  	,pad :	 4
    ,ecl :  "L"
    ,ecb :   1
    ,vrb :   1
    });
    }

    var trackBoard = document.createElement("div");
    trackBoard.id = "printtrack";
    trackBoard.style.fontSize = "0px";
    trackBoard.style.position = "absolute";
    trackBoard.style.top = "200px";
    trackBoard.style.left = "1450px";
    trackBoard.style.width = "78mm";
    trackBoard.style.height = "50mm";
    trackBoard.style.border = "1px solid grey"
    trackBoard.style.borderRadius = "8px";
    document.body.appendChild(trackBoard);

    var trackLabel = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    trackLabel.style.fontSize = "0px";
    trackLabel.style.position = "relative";
    trackLabel.style.left = "0mm";
    trackLabel.style.top = "0mm";
    trackLabel.style.width = "78mm";
    trackLabel.style.height = "50mm";
    trackBoard.appendChild(trackLabel);

    if(qr) {
        var qrr = new QrcodeDecoder();
    const qr1 = qrr.decodeFromImage(document.querySelector('div.col-lg-4:nth-child(3) > div:nth-child(1) > div:nth-child(2) > img:nth-child(2)')).then((res) => {
        if (res.data) {
            var qrdata = res.data.toUpperCase();
        } else {
            qrdata = res.data;
        }
        var newQR = QRCode({
            msg :  qrdata
            ,pad :	 4
            ,ecl :  "L"
            ,ecb :   1
            ,vrb :   1
        });
        if (TIND == "3.2.1.128") {
            var s = svgNode.getElementsByTagName("path")[0].getAttribute('d');
        } else {
            s = newQR.getElementsByTagName("path")[0].getAttribute('d');
        }
            var trackPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        trackPath.setAttribute('d', s);
        trackPath.setAttribute('transform', 'scale(1.9), translate(7,9)');
        trackPath.setAttribute('fill','black');
        trackLabel.appendChild(trackPath);
        if(res.data == undefined && qr == true && TIND != '3.2.1.128') {
        makeTrackBoard(false);
        }
    });
    }

    InsertText(3+(22*qr)+'mm', '7.5mm', PARTIA,'16px', 'Arial black');
    InsertText(3+(22*qr)+'mm', '12.5mm', 'Data uboju: '+normalDate(TDUB, document.querySelector("div.bs-component:nth-child(2) > div:nth-child(1) > h5:nth-child(2)").outerText),'15px', 'Arial','bold');
    if(TGGN){
                InsertText(3+(22*qr)+'mm', '18.25mm', 'GGN: '+TGGN,'15px', 'Arial','bold');
            } else if (TGGN == "" && TDMR) {
                InsertText(3+(22*qr)+'mm', '18.25mm', 'Data mrożenia: '+normalDate(TDMR, document.querySelector("div.bs-component:nth-child(2) > div:nth-child(1) > h5:nth-child(2)").outerText),'15px', 'Arial','bold');
            }
            if(TLOT != TATC){
                InsertText('3mm', '29.5mm', 'Traceability: '+TATC,'15px', 'Arial','bold');
            } else if (TGGN && TDMR && TLOT == TATC) {
                InsertText('3mm', '29.5mm', 'Data mrożenia: '+normalDate(TDMR, document.querySelector("div.bs-component:nth-child(2) > div:nth-child(1) > h5:nth-child(2)").outerText),'15px', 'Arial','bold')
            }
    if(TIND == '3.2.1.128') {
        InsertText(3+(22*qr)+'mm', '23.5mm', 'Kontener: '+poNum.value,'15px', 'Arial','bold')
    }
    InsertText('3mm', '35mm', 'Indeks: '+TIND,'15px', 'Arial','bold');
    InsertText('3mm', '40.5mm','MHD: ','15px', 'Arial','bold');
    InsertText('15mm', '40.5mm',normalDate(TMHD, document.querySelector("div.bs-component:nth-child(2) > div:nth-child(1) > h5:nth-child(2)").outerText),'16px', 'Arial black');
    InsertText('3mm', '46mm','Lot: '+TLOT,'15px', 'Arial', 'bold');
    InsertText('52mm', '41mm','Data produkcji:', '11px', 'Arial', 'bold');
    InsertText('54mm', '46mm', lotISO, '13px', 'Arial', 'bold');

    function InsertText (x, y, text, fontsize, fontfamily, fontweight) {
    this.trackText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        trackText.style.position = "relative";
        trackText.setAttribute('x', x);
        trackText.setAttribute('y', y);
        trackText.setAttribute('font-size', fontsize);
        trackText.setAttribute('font-family', fontfamily);
        trackText.setAttribute('font-weight', fontweight);
        trackText.innerHTML = text;
    trackLabel.appendChild(trackText);

    }
}
    if (TIND == '3.2.1.128' && poNum.value.length == 6 || TIND != '3.2.1.128') {
    makeTrackBoard(true);
    }

    document.addEventListener('keydown', function(e) {
    var code = e.code;
        if (code == 'ArrowUp') {
            document.getElementById('lcopies').stepUp();
        }
        else if (code == 'ArrowDown') {
            document.getElementById('lcopies').stepDown();
        }
        else if (code == 'KeyQ') {
            document.getElementById('enableqrcb').click();
        }
        else if (code == 'Enter') {
            printPageArea("printtrack", trackCopies.value);
        }
    })

}

function newButton() {
    this.nowbut = document.createElement("button");
    nowbut.style.font = 'Lato';
    nowbut.style.position = 'absolute';
    nowbut.style.top = '3.5px';
    nowbut.style.left = '340px';
    nowbut.style.padding = '0.18rem 0.78rem';
    nowbut.style.float = 'left';
    nowbut.style.borderRadius = '0.25rem';
    nowbut.style.border = '1px solid transparent';
    nowbut.style.textAllign = 'center';
    nowbut.style.VerticalAllign = 'middle';
    nowbut.innerText = 'New';
    nowbut.style.backgroundColor = '#e83e8c';
    nowbut.style.color = 'white';
    nowbut.style.fontSize = '12px';
    nowbut.style.cursor = "pointer";
    nowbut.onclick = function() { window.location.href = 'https://traceability24.eu/batches/create'; };
    document.body.appendChild(nowbut);
}

function funcButton(name, position, ajdi) {
    this.databut = document.createElement("button");
    databut.id = 'button'+ajdi;
    databut.type = 'button';
    databut.tabIndex = '-1';
    databut.style.font = 'Lato';
    databut.style.position = 'inherit';
    databut.style.padding = '0.20rem 0.75rem';
    databut.style.borderRadius = '0.25rem';
    databut.style.border = '1px solid transparent';
    databut.style.marginRight = '10px';
    databut.style.fontWeight = 'bold';
    databut.style.textAllign = 'center';
    databut.style.VerticalAllign = 'middle';
    databut.innerText = name;
    databut.style.backgroundColor = '#6610f2';
    databut.style.color = 'white';
    databut.style.fontSize = '12px';
    databut.style.cursor = "pointer";
    position.append(databut);
}
        function cngDate (range, jpnDF) {
        if (document.querySelector('[name="b_freezing_date"]').value) {
            var dataLot = document.querySelector('[name="b_freezing_date"]').value
            if (jpnDF) {
                dataLot = new Date(dataLot[0] + dataLot[1] + dataLot[2] + dataLot[3],(dataLot[5] + dataLot[6])-1,1,2);
                var newDataLot = dataLot.addMonths(range);
                newDataLot = newDataLot.addDays(-1);
            } else {
                dataLot = new Date(dataLot[0] + dataLot[1] + dataLot[2] + dataLot[3],(dataLot[5] + dataLot[6])-1, dataLot[8] + dataLot[9],2);
                newDataLot = dataLot.addMonths(range);
            }
            $('[name="b_exp_date"]').datepicker('update', newDataLot);
        } else if (document.querySelector('[name="b_lot_nr"]').value) {
            getLotBut('[name="b_freezing_date"]');
            getLotBut('[name="b_prod_date"]');
            cngDate(range, jpnDF);
            } else {
                 document.querySelector('[name="b_lot_nr"]').focus();
            }
    };

            function getLotBut (inputeg) {
        if (document.querySelector('[name="b_lot_nr"]').value) {
        var dataLot = document.querySelector('[name="b_lot_nr"]').value;
            dataLot = new Date(20 + dataLot.substr(-2,2), 0, dataLot.substr(-5,3), 2);
            $(inputeg).datepicker('update', dataLot);
        } else {
            document.querySelector('[name="b_lot_nr"]').focus();
        }
    };
}

function printPageArea(areaID, labelCopies){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=640, height=680');
    WinPrint.document.write('<style type="text/css">@media print { body {margin-top:0 !important;} } @page { size: auto;  margin: 0mm; }</style>');
    for (var i = 1; i <= labelCopies; i++) {
        WinPrint.document.write(printContent.innerHTML);
        if (i != labelCopies) {
            WinPrint.document.write('<div style="page-break-after: always;"></div>');
        }
    }
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}