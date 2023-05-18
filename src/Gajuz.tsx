import "./Skuska.css";
import StarRating from "./StarRating";


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
          <div className="GMaps"><button><a href="https://www.google.sk/maps/place/Snowparadise+Ve%C4%BEk%C3%A1+Ra%C4%8Da+O%C5%A1%C4%8Dadnica/@49.4151925,18.9182577,16.75z/data=!4m6!3m5!1s0x47144722a0cd77ff:0x9f784ef390178455!8m2!3d49.415121!4d18.920534!16s%2Fg%2F1232457r2" target="_blank"><img src="src\images\GMapsLogo.png"></img></a></button></div>
              <div className="StarRatingDiv">
                  <br></br>
                  <h1 className="RecenzieH1">Recenzie</h1>
                  <br></br>
                  <div  className="StarRatingColumn">
                      
                      
                      <StarRating/>
                  </div>
               
  
              </div>
  
  
      </div>
      </body>
      );
      
  }