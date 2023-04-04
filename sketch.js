//variáveis do jogo
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

//imagens e sons carregados
function preload()
{
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup()
{
  createCanvas(600,600); //tela do jogo
  
  //torre
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  //grupo de portas
  doorsGroup = new Group(); 
  //grupo de grades → climbersGroup

  //grupo de blocos invisíveis que ficará junto às portas e grades das portas → invisibleBlockGroup
  
  //sprite ghost (fantasma) com x:200, y: 200, largura: 50, altura:50
  
  //Tamanho de ghost (scale) será de 0.3

  //adicionar a imagem ghostImg para ghost
  
}

function draw()
{
  background(0);
  
  //condição para gameState igual a "play"
  if (gameState === "play") 
  {
    // tocar spookySound em loop

    //se a seta para a esquerda (left_arrow) for pressionada (keyDown)
    if(keyDown("left_arrow"))
    {
      //ghost desloca 3 pixels para a esquerda
      ghost.x = ghost.x - 3;
    }
    
    //condição para seta direita ser pressionada, fazendo ghost deslocar 3 pixels para a direita
    
    



    //condição para se a tecla de espaço (space) for pressionada
    if(keyDown(""))
    {
      //velocityY de ghost é -10;

    }
    
    // aumentar ghost.velocityY em 0.8

    
    if(tower.y > 400)
    {
      tower.y = 300;
    }

    //chamar a função spawnDoors();

    
    //condição para quando climberGroup tocar ghost
    if(climbersGroup.isTouching(ghost))
    {
      //velocityY de ghost será 0

    }

    //condição para quando invisibleBlockGroup tocar ghost OU a posição Y de ghost for maior que 600
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600)
    {
      //destrui sprite ghost

      //gameState muda para o estado "end"
    }
    
    drawSprites();
  }
  
  //condição para gameState igual a "end"
  if (gameState === "end")
  {
    //parar spookySound
    

    //exibir borda de mensagem de fim de jogo em amarelo
    
    //definir a cor da mensagem de fim de jogo para amarela
    
    //definir tamanho do texto da mensagem de fim de jogo para 30
    
    //exibir o texto "Fim de Jogo" na posição x: 230, y: 250
    
  }

}

//função para criar portas (spawnDoors)
function spawnDoors() 
{
  //código para gerar as portas na torre a cada 240 frames
  if (frameCount % 240 === 0) 
  {
    //sprite door (porta)
    var door = createSprite(200, -50);
    //sprite climber (grade) na posição x: 200 e y: 10
    
    //sprite invisibleBlock (bloco invisível) na posição x: 200 e y: 15
    

    //largura e altura de invisibleBlock
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    //define uma posição x aleatória para portas, grades e blocos invisívei, com base no valor de door
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    //adiciona a imagem doorImg à door
    door.addImage();
    //adiciona climberImg à climber
    climber.addImage();
    
    //velocidade no eixo Y de door, climber e invisibleBlock é 1
    door.velocityY = 
    climber.velocityY = 
    invisibleBlock.velocityY = 
    
    //profundidade de ghost é igualada à de door
     
    //ghost fica à frente de todos os sprites (depth aumenta em 1)
    
   
    //designa tempo de vida a variável door para 800
    
    //designa tempo de vida a variável climber para 800
    
    //designa tempo de vida a variável invisibleBlock para 800
    
    
    //adiciona cada door (porta) ao grupo
    doorsGroup.add();
    //adiciona cada climber (grade) ao grupo
    climbersGroup.add();
    //adiciona cada invisibleBlock (bloco invisível) ao grupo
    invisibleBlockGroup.add();
    invisibleBlock.debug = true;
  }
}

