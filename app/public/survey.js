var survey = [
s1 ={   q: "i am a hard worker", 
        a: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
},
s2 ={   q: "i drink alot", 
        a: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
},
s3 ={   q: "i go to the gym everyday", 
a: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
},
s4 ={   q: "money is important to me", 
a: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
},
s5 ={   q: "looks are everything", 
a: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
},

];



survey.forEach(e => {
  var q =  $("<div>")
  q.text(e.q)
  
  $(".survey").append(q);
  e.a.forEach(i => {
      var a = $("<input>")
      a.attr("type", "radio");
      a.attr("value",i);
      a.attr("name",e.q);
      (".survey").append(a);
  });

});