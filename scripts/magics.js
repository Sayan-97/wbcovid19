$("body").on("contextmenu", "img", function(e) {

            return false;
});


function toogle(dist) {

            var hovermageId = "#" + dist + "-hover";
            var statusLineClass = "." + dist + "-status-line";
            var statusBoxId = "#" + dist + "-status-box";

            $(hovermageId+","+statusLineClass+","+statusBoxId).toggleClass("on");

        }

        function deactivateAll(elem) {

            $(".hovermage.on").each(function(i,e){

                var specialDist = $(elem).attr('dist');
                var id = $(e).attr("id");
                var dist = id.slice(0,id.indexOf("-hover"));
                if(dist == specialDist) return 1;
                toogle(dist);



            })

        }

        if(window.matchMedia("(hover: hover)").matches) {

	       $(".dist-map").hover(function(e) {

            var dist = $(e.target).attr("dist");
            toogle(dist);

        })

            $("#click-or-hover").html("Hover over");

        } else {

             $(".dist-map").click(function(e) {

            deactivateAll(e.target);
            var dist = $(e.target).attr("dist") ;
            toogle(dist);

        })

            $("#click-or-hover").html("Click on");


        }

/*

        data.sort(function(x,y){

            return y[1] - x[1];

        } )

         var total = [0,0,0];

            data.forEach(function(x){

            total[0]+=x[1];
            total[1]+=x[2];
            total[2]+=x[3];

        })

        var undeclared = ["Undeclared",0,0,0];
        undeclared[1] = totalCovid19[1] - total[0];
        undeclared[2] = totalCovid19[2] - total[1];
        undeclared[3] = totalCovid19[3] - total[2];
        data.push(undeclared);


        function countTotal() {

            console.log("Total Confirmed : "+total[0]);
            console.log("Total Recovered : "+total[1]);
            console.log("Total Deaths : "+total[2]);

        }



        var tr_total = "<tr style='background-color: dodgerblue;'><td style='color:white;'>"+totalCovid19[0]+"</td><td style='color:yellow;'>"+totalCovid19[1]+"</td><td style='color:lightgreen;'>"+totalCovid19[2]+"</td><td style='color:red;'>"+totalCovid19[3]+"</td></tr>";
        $("#stats-table").append(tr_total);

        data.forEach(function(x) {

            var titleWordList = x[0].split("-");
            for(i=0;i<titleWordList.length;i++)
                titleWordList[i] = titleWordList[i][0].toUpperCase() + titleWordList[i].slice(1);
            var title = titleWordList.join(" ");
            var tr = "<tr><td>"+title+"</td><td>"+x[1]+"</td><td>"+x[2]+"</td><td>"+x[3]+"</td></tr>";
            $("#stats-table").append(tr);

        })


        */


function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

        var scrollingMachine = debounce(function() {
  var $this = $(this);

  if($(document).scrollTop() > 2510) {

        $("#data-header").addClass("off");

    }
    else {

        $("#data-header").removeClass("off");

    }
}, 100);

    //    window.addEventListener('scroll', scrollingMachine);
