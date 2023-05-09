let sel;
let comments='';
let qx_date=[];
let dg_date=[];
let mt_date=[];
let sy_date=[];
let zy_date=[];

let qx_numRows, dg_numRows, mt_numRows, sy_numRows, zy_numRows;
let numCols;
let qx_co = [];
let dg_co = [];
let mt_co = [];
let sy_co = [];
let zy_co = [];
let length;
let choose;

const Y_AXIS = 1;
const X_AXIS = 2;



function preload(){
  qx_EFC = loadTable('./comments/qx_EFC.csv', 'csv', 'header');
  dg_EFC = loadTable('./comments/dg_EFC.csv', 'csv', 'header');
  mt_EFC = loadTable('./comments/mt_EFC.csv', 'csv', 'header');
  sy_EFC = loadTable('./comments/sy_EFC.csv', 'csv', 'header');
  zy_EFC = loadTable('./comments/zy_EFC.csv', 'csv', 'header');
}
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  bgCol = color(255,20,0);
  choose=0;
  sel = createSelect();
  sel.position((width/4)*3+140, height/2+220);

  slider=createSlider(0,220,0);
  slider.position((width/4)*3+120, height/2+250);

  sel.option('choose');
  sel.option('Qianxi');
  sel.option('Dong');
  sel.option('Mengting');
  sel.option('Siyi');
  sel.option('Zhouyang')

  sel.changed(changeBg);
  
  
  length=50;
  rectMode(CENTER);

  qx_numRows=qx_EFC.getRowCount();
  for(let rows=0; rows<qx_numRows; rows++){
    qx_date[rows]=qx_EFC.getString(rows,0);
    qx_co[rows]=[];
    for(let i=0;i<3;i++){
    qx_co[rows][i]=qx_EFC.getString(rows,i+2);
    }
  }
  
  dg_numRows=dg_EFC.getRowCount();
  for(let rows=0; rows<dg_numRows; rows++){
    dg_date[rows]=dg_EFC.getString(rows,0);
    dg_co[rows]=[];
    for(let i=0;i<3;i++){
    dg_co[rows][i]=dg_EFC.getString(rows,i+2);
    }
  }

  mt_numRows=mt_EFC.getRowCount();
  for(let rows=0; rows<mt_numRows; rows++){
    mt_date[rows]=mt_EFC.getString(rows,0);
    mt_co[rows]=[];
    for(let i=0;i<3;i++){
    mt_co[rows][i]=mt_EFC.getString(rows,i+2);
    }
  }

  sy_numRows=sy_EFC.getRowCount();
  for(let rows=0; rows<sy_numRows; rows++){
    sy_date[rows]=sy_EFC.getString(rows,0);
    sy_co[rows]=[];
    for(let i=0;i<3;i++){
    sy_co[rows][i]=sy_EFC.getString(rows,i+2);
    }
  }

  zy_numRows=zy_EFC.getRowCount();
  for(let rows=0; rows<zy_numRows; rows++){
    zy_date[rows]=zy_EFC.getString(rows,0);
    zy_co[rows]=[];
    for(let i=0;i<3;i++){
    zy_co[rows][i]=zy_EFC.getString(rows,i+2);
    }
  }




}

let r_color=['#9eccab','#8cc269','#41ae3c','#3c9566',];
let l_color=['#c6e6e8','#0eb0c9','#1677b3'];


function draw() {
  background(240);
  
  diagramX=(width/4)*3-90;
  diagramY=height/2;
  textFont('Georgia');
  fill('black');
  chartInfo();
 
  
  
  textSize(10);
  text('Efficiency',diagramX-150,diagramY+220);
  for(let i=0;i<3;i++){
    fill(l_color[i]);
    rect(diagramX-80+10*i,diagramY+220,10,20);
  }
  fill('black');
  textSize(10);
  text('Fatigue',diagramX-150,diagramY+250);
  for(let i=0;i<4;i++){
    fill(r_color[i]);
    rect(diagramX-80+10*i,diagramY+250,10,20);
  }
 


  let v_1 = int(map(slider.value(),0,220,0,length-1));
  print(v_1);
  
  switch(choose){
    case 1:

        setGradient(diagramX-100,diagramY-200,200,400,color(l_color[int(qx_co[v_1][0])]),color(r_color[int(qx_co[v_1][1])]),X_AXIS);
        setGradient(diagramX+100,diagramY-200,200,400,color(r_color[int(qx_co[v_1][1])]),color(l_color[int(qx_co[v_1][0])]),Y_AXIS);
        
        if(qx_co[v_1][2] == 0){
        textAlign(CENTER);
        textSize(20);
        fill('white');
        textFont('Georgia');
        text(qx_date[v_1],diagramX+100,diagramY-30);
        text("No comment today",diagramX+100,diagramY+20);
       }
        else{
        textAlign(CENTER);
        textSize(20);
        fill('#f9d770');
        textFont('Georgia');
        text(qx_date[v_1],diagramX+100,diagramY-30);
        text(qx_co[v_1][2],diagramX+100,diagramY+20);
        }
      break;
    
      case 2:
        setGradient(diagramX-100,diagramY-200,200,400,color(l_color[int(dg_co[v_1][0])]),color(r_color[int(dg_co[v_1][1])]),X_AXIS);
        setGradient(diagramX+100,diagramY-200,200,400,color(r_color[int(dg_co[v_1][1])]),color(l_color[int(dg_co[v_1][0])]),Y_AXIS);
       
        if(dg_co[v_1][2] == 0){
        textAlign(CENTER);
        textSize(20);
        fill('white');
        textFont('Georgia');
        text(dg_date[v_1],diagramX+100,diagramY-30);
        text("No comment today",diagramX+100,diagramY+20);
      }
        else{
        textAlign(CENTER);
        textSize(20);
        fill('#f9d770');
        textFont('Georgia');
        text(dg_date[v_1],diagramX+100,diagramY-30);
        text(dg_co[v_1][2],diagramX+100,diagramY+20);
      }
      break;

      case 3:
        setGradient(diagramX-100,diagramY-200,200,400,color(l_color[int(sy_co[v_1][0])]),color(r_color[int(sy_co[v_1][1])]),X_AXIS);
        setGradient(diagramX+100,diagramY-200,200,400,color(r_color[int(sy_co[v_1][1])]),color(l_color[int(sy_co[v_1][0])]),Y_AXIS);
        
        if(sy_co[v_1][2] == 0){
        textAlign(CENTER);
        textSize(20);
        fill('white');
        textFont('Georgia');
        text(sy_date[v_1],diagramX+100,diagramY-30);
        text("No comment today",diagramX+100,diagramY+20);
        }
        else{
        textAlign(CENTER);
        textSize(20);
        fill('#f9d770');
        textFont('Georgia');
        text(sy_date[v_1],diagramX+100,diagramY-30);
        text(sy_co[v_1][2],diagramX+100,diagramY+20);
         }
       break;

       case 4:
        setGradient(diagramX-100,diagramY-200,200,400,color(l_color[int(mt_co[v_1][0])]),color(r_color[int(mt_co[v_1][1])]),X_AXIS);
        setGradient(diagramX+100,diagramY-200,200,400,color(r_color[int(mt_co[v_1][1])]),color(l_color[int(mt_co[v_1][0])]),Y_AXIS);
        
        if(mt_co[v_1][2] == 0){
        textAlign(CENTER);
        textSize(20);
        fill('white');
        textFont('Georgia');
        text(mt_date[v_1],diagramX+100,diagramY-30);
        text("No comment today",diagramX+100,diagramY+20);
       }
        else{
        textAlign(CENTER);
        textSize(20);
        fill('#f9d770');
        textFont('Georgia');
        text(mt_date[v_1],diagramX+100,diagramY-30);
        text(mt_co[v_1][2],diagramX+100,diagramY+20);
        }
      break;

      case 5:
        setGradient(diagramX-100,diagramY-200,200,400,color(l_color[int(zy_co[v_1][0])]),color(r_color[int(zy_co[v_1][1])]),X_AXIS);
        setGradient(diagramX+100,diagramY-200,200,400,color(r_color[int(zy_co[v_1][1])]),color(l_color[int(zy_co[v_1][0])]),Y_AXIS);
        
        if(zy_co[v_1][2] == 0){
        textAlign(CENTER);
        textSize(20);
        fill('white');
        textFont('Georgia');
        text(zy_date[v_1],diagramX+100,diagramY-30);
        text("No comment today",diagramX+100,diagramY+20);
       }
        else{
        textAlign(CENTER);
        textSize(20);
        fill('#f9d770');
        textFont('Georgia');
        text(zy_date[v_1],diagramX+100,diagramY-30);
        text(zy_co[v_1][2],diagramX+100,diagramY+20);
        }
      break;
      
      default:
        fill('#3c9566');
        noStroke();
        rect(diagramX,diagramY,200,400);
        fill('#0eb0c9');
        noStroke();
        rect(diagramX+200,diagramY,200,400);
      break;

  }
noStroke();
fill('black');
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 3);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 5);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}


function changeBg(){
 	let val = sel.value();
  if(val == 'Qianxi'){
    choose=1;
    length = qx_numRows;
  
  } else if(val == 'Dong'){
    choose=2;
    length = dg_numRows;
    
  } else if(val == 'Siyi'){
    choose=3;
    length =sy_numRows; 
   
  }else if(val== 'Mengting'){
    choose=4;
    length= mt_numRows;
   
  }else if(val == 'Zhouyang'){
    choose=5;
    length=zy_numRows;
  }else if(val == 'choose'){
    choose=6;
  }
}


function chartInfo(){
  let lines='Comments Diary:\n';
  textSize(20);
  textAlign(CENTER);
  text(lines,width/8,height/6,width/4);
  let des='Used to visually display the comments diary of each individual and visually display the daily Efficiency and Fatigue levels.\nChoose the person through selctor and drag the slider to see the comments of each day.\nBlue presents Efficiency(High,Low,Normal) and green presents Fatigue(Sleepy,Tired,Normal,Energetic). The darker the color is, the degree is higher. \nTake this opportunity to showcase a random artistic visulation. Besides, gradient is choosen to add some style.';
  textSize(16);
  textAlign(LEFT);
  textLeading(20);
  text(des,width/4,height/4,width/3);

}