import React from "react";
import "./Skuska.css";
//import Rating from '@material-ui/lab/Rating';
import Rating from '@mui/material/Rating';
//import Box from '@material-ui/core/Box';
import Box from '@mui/material/Box';
import StarRatingK from "./StarRatingK";



export default function Kasarne(){
  return(

    <body>
    <div id="pageFill" > 
        <div className="KasarneSTRLyziar"> <img className="KasarneSTRLyziarIMG" src="src\images\KasarneSTRLyziar.jpg"></img></div>
        <div className="KasarneSTRLogo"> <img src="src\images\Kasarne.png"></img></div>
        <div className="RacaUzitocnyNadpis"><h1>Užitočné informácie o rezorte</h1> </div>
        <div className="RacaInfoDiv"><p className="ppp">Lyžiarske a horské stredisko Kasárne Javorníky sa nachádza v pohorí Javorníky a rozprestiera sa až po samotný hrebeň tohto pohoria. Nachádza sa na moravsko-slovenskom pohraničí a je dostupné z obcí Makov a Štiavnik (SR) a z obce Veľké Karlovice (ČR). Priamo pod najvyšším vrcholom Javorníkov (Veľký Javorník 1072 m n. m.) si môžete vychutnať krásnu prírodu ako stvorenú na letnú aj zimnú dovolenku alebo výlety s rodinou a priateľmi.
Nadmorská výška 905-1070 m n.m. nás radí medzi TOP 20 % lyžiarskych stredísk na Slovensku v nástupnej a výstupnej výške a vďaka tomu aj severnej orientácii svahov je u nás v zime dostatok prírodného snehu, ku ktorému sme pridali umelé zasnežovanie a postupne ho rozširujeme.</p>
            </div>
        <div className="RecenzieDiv"></div>
        <div className="GMaps"><button><a href="https://www.google.com/maps/place/Ly%C5%BEiarske+a+horsk%C3%A9+stredisko+Kas%C3%A1rne+Javorn%C3%ADky/@49.328442,18.3735512,17z/data=!3m1!4b1!4m6!3m5!1s0x47147a4d4b9df293:0xebf56a2f2310d676!8m2!3d49.3284385!4d18.3761315!16s%2Fg%2F11_780thf?entry=ttu" target="_blank"><img src="src\images\GMapsLogo.png"></img></a></button></div>
            <div className="StarRatingDiv">
                <br></br>
                <h1 className="RecenzieH1">Recenzie</h1>
                <br></br>
                <div  className="StarRatingColumn">
                    
                    
                    <StarRatingK/>
                </div>
             

            </div>


    </div>
    </body>
    );
    
}