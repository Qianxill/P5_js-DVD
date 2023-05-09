let numRows=[];
let qx_numRows, qx_numCols;
let dg_numRows, dg_numCols;
let mt_numRows, mt_numCols;
let sy_numRows, sy_numCols;
let zy_numRows, zy_numCols;
let qx_wl=[];
let date=[];
let dg_wl=[];
let mt_wl=[];
let sy_wl=[];
let zy_wl=[];
let qxMin, qxMax;
let dgMin, dgMax;
let mtMin, mtMax;
let syMin, syMax;
let zyMin, zyMax;
let diagramX,diagramY;
let all_table=[];




function preload() {
    //table=loadTable("./assets/Workload_all.csv",'csv','header');
    table_qx=loadTable("./assets/qx_sum.csv",'csv','header');
    table_dg=loadTable("./assets/dg_sum.csv",'csv','header');
    table_mt=loadTable("./assets/mt_sum.csv",'csv','header');
    table_sy=loadTable("./assets/sy_sum.csv",'csv','header');
    table_zy=loadTable("./assets/zy_sum.csv",'csv','header');
    //all_table=[table_qx,table_dg,table_mt,table_sy,table_zy];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    qx_numRows=table_qx.getRowCount();
    qx_numCols=table_qx.getColumnCount();

    dg_numRows=table_dg.getRowCount();
    dg_numCols=table_dg.getColumnCount();

    mt_numRows=table_mt.getRowCount();
    mt_numCols=table_mt.getColumnCount();

    sy_numRows=table_sy.getRowCount();
    sy_numCols=table_sy.getColumnCount();

    zy_numRows=table_zy.getRowCount();
    zy_numCols=table_zy.getColumnCount();

    for(let i=0; i<qx_numRows; i++){
        qx_wl[i]=table_qx.getNum(i,2);
        date[i]=table_qx.getString(i,0);
        //print(qx_wl[i]+''+date[i]);
    }
    for(let i=0; i<dg_numRows; i++){
        dg_wl[i]=table_dg.getNum(i,2);
        //print(qx_wl[i]+''+date[i]);
    }
    for(let i=0; i<mt_numRows; i++){
        mt_wl[i]=table_mt.getNum(i,2);
        //print(qx_wl[i]+''+date[i]);
    }

    for(let i=0; i<sy_numRows; i++){
        sy_wl[i]=table_sy.getNum(i,2);
        //print(qx_wl[i]+''+date[i]);
    }

    for(let i=0; i<zy_numRows; i++){
        zy_wl[i]=table_zy.getNum(i,2);
        //print(qx_wl[i]+''+date[i]);
    }
    qxMax=max(qx_wl);
    qxMin=min(qx_wl);

    dgMax=max(dg_wl);
    dgMin=min(dg_wl);

    mtMax=max(mt_wl);
    mtMin=min(mt_wl);

    syMax=max(sy_wl);
    syMin=min(sy_wl);

    zyMax=max(zy_wl);
    zyMin=min(zy_wl);

}

let siz=[];
let siz_1=[];
let siz_2=[];
let siz_3=[];
let siz_4=[];


function draw() {
    background(240);
    chartInfo();
    diagramX=(width/4)*3-90;
    diagramY=height/2-10;
    let radius=width/5-120;
    let ang=360/(qx_numRows+dg_numRows+mt_numRows+sy_numRows+zy_numRows);
    
   
    for(let i=0; i<qx_numRows; i++){
        siz[i]=map(qx_wl[i],qxMin,qxMax,0,180)
        let pointx=(siz[i]+radius)*cos(radians(ang*i))+diagramX;
        let pointy=(siz[i]+radius)*sin(radians(ang*i))+diagramY;
        let cirx=radius*cos(radians(ang*i))+diagramX;
        let ciry=radius*sin(radians(ang*i))+diagramY;
        if(i % 7 == 0){
          stroke('blue');
          strokeWeight(2);}
      
        else{
          stroke('black');
          strokeWeight(1);
        }
        line(cirx,ciry,pointx,pointy);
        let dis=dist(mouseX,mouseY,pointx,pointy);
        if(dis<3){
            fill('red');
            noStroke();
            datasize=6;
            circle(pointx,pointy,datasize);
            textAlign(CENTER);
            textSize(12);
            fill('black')
            text(date[i],diagramX,diagramY);
            fill('black');
            textSize(20);
            text('Qianxi',diagramX,diagramY-15);
            rect(diagramX,diagramY+15,30,5);
            textSize(25)
            text('Total workload:'+qx_wl[i]+'h',diagramX,diagramY+40)
            if(qx_wl[i]==0){
              textSize(25)
              fill('#126bae')
              text('Vacation!',diagramX,diagramY+80)
            }
           
          }
          else{
            fill('blue');
            datasize=3;
            noStroke();
            circle(pointx,pointy,datasize);
          }
    }

    for(let i=0; i<dg_numRows; i++){
        siz_1[i]=map(dg_wl[i],dgMin,dgMax,20,180)
        let pointx=(siz_1[i]+radius)*cos(radians(ang*i+qx_numRows*ang))+diagramX;
        let pointy=(siz_1[i]+radius)*sin(radians(ang*i+qx_numRows*ang))+diagramY;
        let cirx=radius*cos(radians(ang*i+qx_numRows*ang))+diagramX;
        let ciry=radius*sin(radians(ang*i+qx_numRows*ang))+diagramY;
        if(i % 7 == 0){
          stroke('#fae');
          strokeWeight(2);}
      
        else{
          stroke('black');
          strokeWeight(1);
        }
        line(cirx,ciry,pointx,pointy);
        let dis=dist(mouseX,mouseY,pointx,pointy);
        if(dis<3){
            fill('red');
            noStroke();
            datasize=6;
            circle(pointx,pointy,datasize);
            textAlign(CENTER);
            textSize(12);
            fill('black')
            text(date[i],diagramX,diagramY);
            fill('black');
            textSize(20);
            text('Dong',diagramX,diagramY-15);
            rect(diagramX,diagramY+15,30,5);
            textSize(25)
            text('Total workload:'+dg_wl[i]+'h',diagramX,diagramY+40)
            if(dg_wl[i]==0){
              textSize(25)
              fill('#126bae')
              text('Vacation!',diagramX,diagramY+80)
            }
          }
          else{
            fill('#fae');
            datasize=3;
            noStroke();
            circle(pointx,pointy,datasize);
          }
    }

    for(let i=0; i<mt_numRows; i++){
        siz_2[i]=map(mt_wl[i],mtMin,mtMax,5,180)
        let pointx=(siz_2[i]+radius)*cos(radians(ang*i+dg_numRows*ang+qx_numRows*ang))+diagramX;
        let pointy=(siz_2[i]+radius)*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang))+diagramY;
        let cirx=radius*cos(radians(ang*i+qx_numRows*ang+qx_numRows*ang))+diagramX;
        let ciry=radius*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang))+diagramY;
        if(i % 7 == 0){
          stroke('Yellow');
          strokeWeight(2);}
      
        else{
          stroke('black');
          strokeWeight(1);
        }
        line(cirx,ciry,pointx,pointy);
        let dis=dist(mouseX,mouseY,pointx,pointy);
        if(dis<3){
            fill('red');
            noStroke();
            datasize=6;
            circle(pointx,pointy,datasize);
            textAlign(CENTER);
            textSize(12);
            fill('black')
            text(date[i],diagramX,diagramY);
            fill('black');
            textSize(20);
            text('Mengting',diagramX,diagramY-15);
            rect(diagramX,diagramY+15,30,5);
            textSize(25)
            text('Total workload:'+mt_wl[i]+'h',diagramX,diagramY+40)
            if(mt_wl[i]==0){
              textSize(25)
              fill('#126bae')
              text('Vacation!',diagramX,diagramY+80)
            }
          }
          else{
            fill('Yellow');
            datasize=3;
            noStroke();
            circle(pointx,pointy,datasize);
          }
    }

    for(let i=0; i<sy_numRows; i++){
        siz_3[i]=map(sy_wl[i],syMin,syMax,0,180)
        let pointx=(siz_3[i]+radius)*cos(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang))+diagramX;
        let pointy=(siz_3[i]+radius)*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang))+diagramY;
        let cirx=radius*cos(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang))+diagramX;
        let ciry=radius*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang))+diagramY;
        if(i % 7 == 0){
          stroke('Green');
          strokeWeight(2);}
      
        else{
          stroke('black');
          strokeWeight(1);
        }
        line(cirx,ciry,pointx,pointy);
        let dis=dist(mouseX,mouseY,pointx,pointy);
        if(dis<3){
            fill('red');
            noStroke();
            datasize=6;
            circle(pointx,pointy,datasize);
            textAlign(CENTER);
            textSize(12);
            fill('black')
            text(date[i],diagramX,diagramY);
            fill('black');
            textSize(20);
            text('Siyi',diagramX,diagramY-15);
            rect(diagramX,diagramY+15,30,5);
            textSize(25)
            text('Total workload:'+sy_wl[i]+'h',diagramX,diagramY+40)
            if(sy_wl[i]==0){
              textSize(25)
              fill('#126bae')
              text('Vacation!',diagramX,diagramY+80)
            }
          }
          else{
            fill('Green');
            datasize=3;
            noStroke();
            circle(pointx,pointy,datasize);
          }
        
    }

    for(let i=0; i<zy_numRows; i++){
        siz_4[i]=map(zy_wl[i],zyMin,zyMax,0,180)
        let pointx=(siz_4[i]+radius)*cos(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang+sy_numRows*ang))+diagramX;
        let pointy=(siz_4[i]+radius)*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang+sy_numRows*ang))+diagramY;
        let cirx=radius*cos(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang+sy_numRows*ang))+diagramX;
        let ciry=radius*sin(radians(ang*i+dg_numRows*ang+qx_numRows*ang+mt_numRows*ang+sy_numRows*ang))+diagramY;
        if(i % 7 == 0){
          stroke('Orange');
          strokeWeight(2);}
      
        else{
          stroke('black');
          strokeWeight(1);
        }
        line(cirx,ciry,pointx,pointy);
        //fill('Orange');
        //noStroke();
        //circle(pointx,pointy,3);

        let dis=dist(mouseX,mouseY,pointx,pointy);
        if(dis<3){
            fill('red');
            noStroke();
            datasize=6;
            circle(pointx,pointy,datasize);
            textAlign(CENTER);
            textSize(12);
            fill('black')
            text(date[i],diagramX,diagramY);
            fill('black');
            textSize(20);
            text('Zhouyang',diagramX,diagramY-15);
            rect(diagramX,diagramY+15,30,5);
            textSize(25)
            text('Total workload:'+zy_wl[i]+'h',diagramX,diagramY+40)
            if(zy_wl[i]==0){
              textSize(25)
              fill('#126bae')
              text('Vacation!',diagramX,diagramY+80)
            }
          }
          else{
            fill('Orange');
            datasize=3;
            noStroke();
            circle(pointx,pointy,datasize);
          }
        
    }

    function chartInfo(){
        textSize(16);
        textAlign(LEFT);
        fill('black');
        text("To provide a more intuitive and interactive display, this section utilizes p5.js to visualize the daily workload. The data is presented in a circular-like format, with each of the 5 groups represented by an arc. Each individual is assigned a unique color and their workload at a specific time is represented by a straight line extending outward from the arc, with varying lengths of these lines roughly reflecting a visualization of the distribution of workload across the individuals represented in the display. By hovering over the dot at the edge of the line, the workload is displayed, and when an individual is on vacation (workload=0), the text vacation! is displayed.",width/4,height/4,width/4);
      
      }

    

    //Hover


    




}


