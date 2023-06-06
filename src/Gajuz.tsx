import "./Skuska.css";
import StarRatingG from "./StarRatingG";


export default function Gajuz(){
    return(
      <body>
      <div id="pageFill" > 
          <div className="GajuzSTRLyziar"> <img className="GajuzSTRLyziarIMG" src="src\images\GajuzSTRLyziar.png"></img></div>
          <div className="GajuzSTRLogo"> <img src="src\images\GajuzSTRStranka.png"></img></div>
          <div className="RacaUzitocnyNadpis"><h1>Užitočné informácie o rezorte</h1> </div>
          <div className="RacaInfoDiv"><p className="ppp">Počas zimnej sezóny sú Vám k dispozícii dva lyžiarske vleky. Prvý je detský s nízkym vedením dopravného lana s dĺžkou cca 120 m. Vhodný je hlavne pre deti, ale aj dospelých, ktorí sú úplnými začiatočníkmi. Druhý vlek ,,Tatrapoma PFP" má dĺžku 500 m a prevýšenie 95 m. Je vhodný pre začiatočníkov a stredne dobrých lyžiarov.

Stredisko je vhodné na poriadanie súkromných, firemných, školských alebo iných športových pretekov a rôznych športových podujatí. V prípade Vášho záujmu Vám zorganizujeme na našom svahu lyžiarske preteky s kompletným zabezpečením - prenájom + úprava svahu, slalomové bránky, časomiera, rozhodcovia, ceny, stupeň víťazov a pod.

Počas letnej sezóny Vám v našom stredisku ponúkame športové a turistické  vyžitie /horské túry, fotbal, volejbal/.

U nás začína ( končí ) cca 2 km dlhá nenáročná  trasa náučného chodníka (NCH) s piatimi informačnými  zástavkami.

V roku 2021 bola na vrchole vybudovaná 13 m vysoká kamenno - drevená rozhľadňa.  </p>
              </div>
          <div className="RecenzieDiv"></div>
          <div className="GMaps"><button><a href="https://www.google.sk/maps/place/%C5%A0portcentrum+O%C5%A1%C4%8Dadnica/@49.4324588,18.8808649,17z/data=!3m1!4b1!4m6!3m5!1s0x471440c78e8c8811:0x90a51815cf7c3b7a!8m2!3d49.4324553!4d18.8834452!16s%2Fg%2F11gfp1lndc?entry=ttu" target="_blank"><img src="src\images\GMapsLogo.png"></img></a></button></div>
              <div className="StarRatingDiv">
                  <br></br>
                  <h1 className="RecenzieH1">Recenzie</h1>
                  <br></br>
                  <div  className="StarRatingColumn">
                      
                      
                      <StarRatingG/>
                  </div>
               
  
              </div>
  
  
      </div>
      </body>
      );
      
  }