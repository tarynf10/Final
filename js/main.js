$( document ).ready(function() {
    // console.log( "ready!" );
   $(".q11").click(function(){
    $("#container1").html('<h4>CORRECT!</h4><p class="p1">Barack Obama’s text messaging promotion during his last campaign totaled $63,252.89 while 2 luxury iWatches would only cost $34,000 before tax, a $29,252.89 difference.</p>');
 	})
   $(".q12").click(function(){
    $("#container1").html('<h5>WRONG!</h5> <p class="p2">Barack Obama’s text messaging promotion during his last campaign totaled $63,252.89 while 2 luxury iWatches would only cost $34,000 before tax, a $29,252.89 difference.</p>');

   }); 

   //q2

   $(".q13").click(function(){
    $("#container2").html('<h5>WRONG!</h5><p class="p1">Rick Santorum’s car sponsorship in 2012 cost $15,000, a $1,170 difference from the 2015 Chevy Cruze, which costs $16,170.</p>');
 	})
   $(".q14").click(function(){
    $("#container2").html('<h4>CORRECT!</h4> <p class="p2">Rick Santorum’s car sponsorship in 2012 cost $15,000, a $1,170 difference from the 2015 Chevy Cruze, which costs $16,170.</p>');

   }); 

   //q3

    $(".q15").click(function(){
    $("#container3").html('<h5>WRONG!</h5> <p class="p1">Drake donated $75,000 to a youth studio in Philadelphia, surpassing Mitt Romney’s 2012 music licensing fees by $46,740. Romneys fees totaled $28,260.</p>');
 	})
   $(".q16").click(function(){
    $("#container3").html('<h4>CORRECT!</h4> <p class="p2"> Rapper Drakes $75,000 donation to a Philadelphia youth studio surpassed Mitt Romney’s 2012 music licensing fees by $46,740. Romneys fees totaled $28,260.</p>');

   }); 

   //q4

    $(".q17").click(function(){
    $("#container4").html('<h4>CORRECT!</h4><p class="p1">Resale tickets for the May 2 fight between Floyd Mayweather and Manny Pacquiao are sold at an average of $10,350 while Hilary Clintons postage bill for her 2008 campaign totaled $16,686.40. That is a $6,336.40 difference.</p>');
 	})
   $(".q18").click(function(){
    $("#container4").html('<h5>WRONG!</h5> <p class="p2">Resale tickets for the May 2 fight between Floyd Mayweather and Manny Pacquiao are sold at an average of $10,350 while Hilary Clintons postage bill for her 2008 campaign totaled $16,686.40. That is a $6,336.40 difference.</p>');

   }); 

   //q5

    $(".q19").click(function(){
    $("#container5").html('<h4>CORRECT!</h4><p class="p1">A simple gasoline-powered helicopter costs about $80,000 where as John McCains phone service bill was $54,095.22 more at $134,095.22.</p>');
 	})
   $(".q20").click(function(){
    $("#container5").html('<h5>WRONG!</h5> <p class="p2">A simple gasoline-powered helicopter costs about $80,000 where as John McCains phone service bill was $54,095.22 more at $134,095.22.</p>');

   }); 

   //q6

    $(".q21").click(function(){
    $("#container6").html('<h5>WRONG!</h5> <p class="p1">Kanye Wests Touch the Sky video production cost an estimated $1 million while Barack Obama’s 2012 printing costs totaled $861,229.48. The difference is $138,770.52.</p>');
 	})
   $(".q22").click(function(){
    $("#container6").html('<h4>CORRECT!</h4> <p class="p2"> Kanye Wests Touch the Sky video production cost an estimated $1 million while Barack Obama’s 2012 printing costs totaled $861,229.48. The difference is $138,770.52.</p>');

   }); 

   //q7

    $(".q23").click(function(){
    $("#container7").html('<h4>CORRECT!</h4><p class="p1">A 7-night stay at Versace Mansion villa suite $15,400 while the public consulting for New Gingrich cost $18,500, a $3,100 difference. </p>');
 	})
   $(".q24").click(function(){
    $("#container7").html('<h5>WRONG!</h5> <p class="p2">A 7-night stay at Versace Mansion villa suite $15,400 while the public consulting for New Gingrich cost $18,500, a $3,100 difference.</p>');

   }); 

   //button
   $(".button").click(function(){
    $("#container8").html('<img class="home" src="imgs/home.jpg"/> <p class="last">While the helicopters, video shoots and other miscellaneous expenses (totaling $1,230,920) the beat out the campaigning expenses (totaling $1,137,023.99), each amount is enough to own and furnish this Long Beach rancho pool home.</p>');

   }); 

});


// (function(){
// 	$('.q11').click(function() {
//     $('.correct1').append('.correct');
//     return false;
// });

// }).call(this);