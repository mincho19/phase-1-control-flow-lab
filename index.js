function scuberGreetingForFeet(num){
  if(num <= 400) return "This one is on me!"
  else if (num > 2500) return "No can do."
  else if (2000 < num) return "I will gladly take your thirty bucks."
}

function ternaryCheckCity(city){
  if(city === 'NYC') return "Ok, sounds good."
  else return "No go."
}

function switchOnCharmFromTip(x){
  switch (x) {
    case 'not as generous':
      return "Thank you.";
    case 'generous':
      return "Thank you so much.";
    case 'thanks for everything':
       return "Bye.";
  } 
}