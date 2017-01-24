# Pixelwarlock
1 ui/ux
2 grafika
3 development
4 testing 
5 translations
6 contact


RESUABLE CODE
HTML
 <section id="myContainer">

        <div class="ms-left">
            <div class="ms-section" id="left1">
            </div>

            <div class="ms-section" id="left2">
                <div class="diagram_left">
                    <img src="images/diagram_lewa.png">
                    <p class="scroll_desc">scroll down t</p>
                </div>
                
            </div>

            <div class="ms-section" id="left3">
                <div class="hexal">
                    <p><span class="bold">PIXEL WARLOCK</span><br> is a small familiy & friends company form Poland. We spacialize in creating web solutions for small and middle businesses. We have combined experience from many different industries, and even more market sectors.We offer UI/UX, Graphic design, programming and testing services to all who reach for the best quality.</p>
                </div>
            </div>
        </div>

        <div class="ms-right">
            <div class="ms-section" id="right1">
            </div>

            <div class="ms-section" id="right2">
                <div class="diagram_right">
                    <img src="images/diagram_prawa.png">
                    <p class="scroll_desc">o learn more</p>
                </div>
                
            </div>

            <div class="ms-section" id="right3">
        
            </div>
        </div>	
    </section>
    
    CSS
    /*Generic code*/
/*VIDEO SECTION*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.videoWrapper {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 56.25%;  16:9 
    height: 0;
    width: 100%;
    overflow: hidden;
}
.videoWrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.intro {
    background-color: white;
    height: 100vh;
    width: 100%;
    position: relative;
}
.logo {
    position: absolute;
    left: 45%;
    top: 35%;
    }
.logo p {
    font-family: 'open_sanssemibold';
    font-size: 29px;
    color: white;
    position: relative;
    border-bottom: 2px white solid;
}
.scroll_desc {
    font-family: 'open_sansregular';
    font-size: 15px;
    color: white;
    position: absolute;
    left: 46%;
    top: 90%;
}
#left1 {
    background-color: transparent;
}
#right1 {
    background-color: transparent;
}
/*NAVIGATION*/
.ms-section{
    text-align: center;
}
#menu li {
    display: block;
    margin: 0px;
    letter-spacing: 5px;
}
#menu li a{
    text-decoration:none;
    color: #a6a6a6;
    font-family: 'open_sanssemibold';
}
#menu li a:hover{
    color: white;
}
#menu li a,
#menu li.active a{
    padding: 9px 18px;
    display:block;
}
#menu li.active a{
    color: white;
}
#menu{
    position:fixed;
    top:0;
    left:0;
    height: 40px;
    z-index: 70;
    width: 100%;
    padding: 0;
    margin:0;
}

/*REUSABLE CODE
#menu li.active{
    background:#666;
    background: rgba(255,255,255, 1);
    color: white;
}
#menu li.active a:hover{
    color: #000;
}*/

/*2ND SECTION*/

#left2 {
    background-image: url("../images/section%201%20left.jpg");
}
#right2 {
    background-image: url("../images/section%201%20right.jpg");
}
.diagram_left {
    width: 100%;
    height: 100%;
    display: flex;
    padding-top: 150px;
    padding-right: 8px;
    justify-content: flex-end;
    flex-direction: row;
}
.diagram_left img {
    height: 500px;
}
.diagram_right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding-top: 153px;
    margin-left: 2px;
}
.diagram_right img {
    height: 500px;
}
/*3RD SECTION*/
#left3 {
    background-image: url("../images/pilawa_le.jpg");
}
#right3 {
    background-image: url("../images/pilawa_pr.jpg");
}
.hexal {
    height: 30%;
    width: 70%;
    padding-left: 80px;
}
.hexal p {
    font-size: 30px;
    font-family: 'open_sansitalic';
    color: black;
    border-left: 4px black solid;
    text-align: left;
    padding-left: 8px;
    line-height: 150%;
}
.bold {
    font-family: 'open_sanssemibold_italic';
}
/*MOBILE PION*/
@media (max-width:414px) and (orientation:portrait) {

    .videoWrapper {
        display: none;
    }
    .intro {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        background-image: url("../images/mobile_sec1.JPG");
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        width: 100%;
    }
    .logo {
        position: absolute;
        left: 22%;
        top: 30%;
        }
    .logo p {
        font-size: 0,5em;
    }
    .scroll_desc {
        font-size: 13px;
        position: absolute;
        left: 30%;
        top: 90%;
    }
    #menu li {
        height: 50%;
    }
}
/*MOBILE POZIOM*/
@media (max-width:750px) and (orientation:landscape)  {

    .videoWrapper {
        display: none;
    }
    .intro {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        background-image: url("../images/mobile_landsc_1.JPG");
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        width: 100%;
    }
    .logo {
        position: absolute;
        left: 35%;
        top: 25%;
        }
    .logo p {
        font-size: 0,5em;
    }
    .scroll_desc {
        font-size: 13px;
        position: absolute;
        left: 40%;
        top: 90%;
    }
    #menu li {
        height: 50%;
    }
}
/*TABLET PION*/
@media (max-width:800px) {

    .videoWrapper {
        display: none;
    }
    .intro {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        background-image: url("../images/tablet_port1.jpg");
        background-position: center;
        background-size: cover;
        top: 0;
        left: 0;
        width: 100%;
    }
    .logo {
        position: absolute;
        left: 37%;
        top: 30%;
        }
    .scroll_desc {
        font-size: 15px;
        position: absolute;
        left: %;
        top: 90%;
    }
    #menu li {
        height: 50%;
    }
}*/
