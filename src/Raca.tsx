import React from "react";
import "./Skuska.css";
//import Rating from '@material-ui/lab/Rating';
import Rating from '@mui/material/Rating';
//import Box from '@material-ui/core/Box';
import Box from '@mui/material/Box';
import StarRatingSP from "./StarRatingSP";


export default function Raca(){
    return(

    <body>
    <div id="pageFill" > 
        <div className="RacaSTRLyziar"> <img src="src\images\RacaSTRLyziar.png"></img></div>
        <div className="RacaSTRLogo"> <img src="src\images\RacaSTRStranka.png"></img></div>
        <div className="RacaUzitocnyNadpis"><h1>Užitočné informácie o rezorte</h1> </div>
        <div className="RacaInfoDiv"><p className="ppp">Lyžiarske stredisko Snowparadise Veľká Rača Oščadnica sa nachádza uprostred krásnej prírody v Kysuckých Beskydách v nadmorskej výške 600- 1050 m n.m.

Najväčšou prednosťou strediska je jeho rozloha a dispozícia v troch navzájom lyžiarsky prepojených lokalitách - Dedovka, Marguška a Lalíky. Nachádzajú sa tu zjazdovky všetkých náročností. Výborne si zalyžujú všetci od začiatočníkov až po najnáročnejších lyžiarov. K dispozícii je viac ako 14 km tratí. Takmer všetky zjazdovky sú zasnežované technickým snehom a sú pravidelne upravované. Počet zjazdoviek je 15, z toho 7 modrých (ľahká náročnosť), 7 červených (stredne ťažké), 1 čierna (ťažká).

Ponuka služieb je pestrá - dve lyžiarske školy a nová detská lyžiarska škôlka , úschovňa, skiservis, požičovňa lyží a predajňa športových potrieb. Na spestrenie lyžovačky môžu hostia zažiť adrenalín na bobovej dráhe, ktorá je výnimočnou atrakciou v stredisku či jazdu ratrakom počas úpravy tratí.

Snowparadise Veľká Rača ponúka najdlhšie zjazdovky na večerné lyžovanie na Slovensku. K dispozícii je 4-sedačková lanovka v časti Dedovka s dvomi osvetlenými zjazdovkami - Košariská I. a Košariská II. Počas večerného lyžovania je možné taktiež využiť služby požičovne a predajne športových potrieb, skiservisu, občerstviť sa v okolitých reštauráciách a v Aprés Ski Bare priamo na svahu.</p>
            </div>
        <div className="RecenzieDiv"></div>
        <div className="GMaps"><button><a href="https://www.google.sk/maps/place/Snowparadise+Ve%C4%BEk%C3%A1+Ra%C4%8Da+O%C5%A1%C4%8Dadnica/@49.4151925,18.9182577,16.75z/data=!4m6!3m5!1s0x47144722a0cd77ff:0x9f784ef390178455!8m2!3d49.415121!4d18.920534!16s%2Fg%2F1232457r2" target="_blank"><img src="src\images\GMapsLogo.png"></img></a></button></div>
            <div className="StarRatingDiv">
                <br></br>
                <h1 className="RecenzieH1">Recenzie</h1>
                <br></br>
                <div  className="StarRatingColumn">
                    
                    
                    <StarRatingSP/>
                </div>
             

            </div>


    </div>
    </body>
    );
    
}