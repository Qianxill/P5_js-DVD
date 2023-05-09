let table;
let numRows, numCols;
let date=[];
let gsml=[];
let diagramX, diagramY;
function preload(){
  table=loadTable("./assets/sealevel.csv",'csv','header');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  numRows=table.getRowCount();
  numCols=table.getColumnCount();
  //print("rows: " + numRows + "cols: " + numCols);
  //load the data
  for(let rows=0; rows<numRows; rows++){
    date[rows]=table.getString(rows,0);
    gsml[rows]=table.getNum(rows,1);
    print(date[rows] + " " + gsml[rows]);
  }
  minMax();
  
}

let size=[];
function draw() {

 background(240);
 chartInfo();
 diagramX=(width/4)*3-90;
 diagramY=height/2;
 let radius=width/5-100;
 let ang=360/numRows;
 for(let i=0; i<numRows; i++){
  size[i]=map(gsml[i],dataMin,dataMax,0,205)
  let pointx=(size[i]+radius)*cos(radians(ang*i))+diagramX;
  let pointy=(size[i]+radius)*sin(radians(ang*i))+diagramY;
  let cirx=radius*cos(radians(ang*i))+diagramX;
  let ciry=radius*sin(radians(ang*i))+diagramY;
  if(i % 12 == 0){
    stroke('blue');
    strokeWeight(0.5);}

  else{
    stroke('black');
    strokeWeight(0.1);
  }
  line(cirx,ciry,pointx,pointy);

  //hover
  let dis=dist(mouseX,mouseY,pointx,pointy);
  let datasize;
  if(dis<5){
    fill('red');
    noStroke();
    datasize=10;
    circle(pointx,pointy,datasize);
    textAlign(CENTER);
    textSize(12);
    fill('black')
    text(date[i],diagramX,diagramY);
    fill('blue');
    rect(diagramX,diagramY+15,30,5);
    textSize(25)
    text(gsml[i],diagramX,diagramY+40)
  }
  else{
    fill('blue');
    datasize=3;
    noStroke();
    circle(pointx,pointy,datasize);
  }

 }
}


function chartInfo(){
  textSize(16);
  textAlign(LEFT);
  fill('black');
  text("raws text to the screen. Displays the information specified in the first parameter on the screen in the position specified by the additional parameters. A default font will be used unless a font is set with the textFont() function and a default size will be used unless a font is set with textSize(). Change the color of the text with the fill() function. Change the outline of the text with the stroke() and strokeWeight() functions. The text displays in rel",width/4,height/4,width/4);

}

let dataMin,dataMax =0;
function minMax(){
  for(let i=0;i<numRows; i++){
    if(table.getNum(i,1)>dataMax){
      dataMax=table.getNum(i,1);
    }
  }
  dataMin=dataMax;
  for(let i=0;i<numRows; i++){
    if(table.getNum(i,1)<dataMin){
      dataMin=table.getNum(i,1);
    }
  }
  //print("min: " + dataMin + "max: " + dataMax);
}

