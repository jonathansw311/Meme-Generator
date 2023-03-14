let urls = document.querySelector('#memeUrl');//selects the input
const topMeme = document.querySelector('#top');//selects the input
const bottomMeme = document.querySelector('#bottom');//selects the input
let id=1;//used for id
buildContainer();//bulid a container
buildFlex();//build a flexbox


const button = document.querySelector('.submitButton');//sets vairable to submit buton
button.addEventListener('click', function(){//adds a event listener to it
    buildMemeContainer();//when the button clicks we are goin to build a new meme container
    buildMeme();//and ofcouse make our meme
    

    })



    function buildContainer(){// we are building  a meme container for the whole project
        const body = document.querySelector('body');//it goes in the body of the documnet
        const outerDiv = document.createElement('div');//create a div for the container
        outerDiv.classList.add("cContainer");//add a class to it
        body.append(outerDiv);//and append it to the body
    }

    function buildFlex(){//next we put a flex box in our memcontainer.  all the memes will go in the flexbox
        cContainer = document.querySelector('.cContainer');
        const flexDiv = document.createElement('div');//create a div for the flex box
        flexDiv.classList.add('flexDiv');//add a class for the flex box
        cContainer.append(flexDiv);//put the flexbox in our meme container
       
            
    }

    function buildMemeContainer(){//this is the first thing we do when the build meme button is pressed
    
        flexDiv = document.querySelector(".flexDiv");//grab the parent element to put the container in
        mContainer = document.createElement('div');//crate a div for the container
        mContainer.classList.add('memeContainer');//add a class to it
        mContainer.setAttribute('id', id);//set an attirbute to it
        id++;//increment the attribute
        flexDiv.append(mContainer);//place the memecontainer in the flexbox in the flexbox
    }

    function buildMeme(){//now we build the meme
     //let memeContainer = document.querySelector('.memeContainer');
     mDivs = document.createElement('div');//create a new div for our meme
     mDivs.classList.add('memeBackGround') ;//add a class to it
     mContainer.append(mDivs); //place it in the contgainer
     mDivs.style.backgroundImage=`url('${urls.value}')`;//assign a background picutre to the first div placed in the container
     topText = document.createElement('div');//next we create a div for our top tex
     topText.classList.add('topText');//add a class to it
     topText.innerText =(topMeme.value);//add text from input box
     mDivs.append(topText);//add text to it
     bottomText = document.createElement('div');//create bottom text to our meme
     bottomText.classList.add('bottomText');//add a class to it
     bottomText.innerText = (bottomMeme.value);//add text to the div
     mDivs.append(bottomText);//place div in the html code

    // let mContainer = document.querySelector('.memeBackGround');
     leftX = document.createElement('div');//create a left and right line to show an 'x' while hovering
     rightX = document.createElement('div');//create a left and right line to show an 'x' while hovering
     
     leftX.classList.add('leftX');//add classes to right and left lines
     rightX.classList.add('rightX');//add classes to right and left lines
     
     mDivs.append(leftX);//inesert into the html
     mDivs.append(rightX)//inesert into the html
   
    //  let meme = document.querySelector('.memeContainer');//selects the input
      mContainer.addEventListener('mouseover', function(e){//add an event listener for when we hover over the container with mouse
          const redX = e.target.querySelector('.leftX')//target our left and right lines we made to form an x
          const redXr = e.target.querySelector('.rightX')//target our left and right lines we made to form an x
          redX.classList.toggle('hover')//and we toggle the class hover making them visible when hovering
          redXr.classList.toggle('rhover')//and we toggle the class hover making them visible when hovering
        } );
     
 
    
      mContainer.addEventListener('mouseout', function(e){//we need to add this because when we mouse over and leave
                                                        //the div the toggle does not toggle back on its own
         const redX = e.target.querySelector('.leftX'); //select our classes
         const redXr = e.target.querySelector('.rightX'); //
         
         redX.classList.toggle('hover');//and we toggle classes off when we leave the hover
         redXr.classList.toggle('rhover');//
     });
    
    
    };

cContainer.addEventListener('click', function(e){//simple event listener for when we want to remove the container
const rem = e.target.parentNode.id;//we get the parent id
rmove = document.getElementById(rem)//assign the id to the variable
rmove.remove();//    and remove it when we click it
});



