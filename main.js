var images = [
"https://i.postimg.cc/bvFpXkpG/Whats-App-Image-2022-03-24-at-7-04-46-PM.jpg",
"https://i.postimg.cc/BnpJgRzB/Whats-App-Image-2022-05-19-at-5-30-47-PM.jpg",
"https://i.postimg.cc/tTZy9J4B/Whats-App-Image-2022-03-12-at-6-40-00-PM.jpg",
"https://i.postimg.cc/0NNPHcRR/Whats-App-Image-2022-03-12-at-6-35-51-PM.jpg",
"https://i.postimg.cc/QMj5ZFCg/2022-06-17-2.png",
"https://i.postimg.cc/Qt2DCDBh/Whats-App-Image-2022-05-19-at-6-35-28-PM.jpg"
  
];
  
  
  var i = 0;
  function nextslide() { 
   
     if(i == 6)
       {
         i = 0;
       }
    
      document.getElementById("album").src =images[i] ;
    i++;
   
  }
  