$(document).ready(
function ()
{
    //add event listings
    $("#calcButton").click(calcBac);

    function calcBac()
    {
        var beerCount = parseFloat($("#beerConsumed").val());
        var wineCount = parseFloat($("#wineConsumed").val());
        var shotCount = parseFloat($("#shotsConsumed").val());
        var weightCount = parseFloat($("#weight").val());
        var hoursCount = parseFloat($("#hours").val());

        //calculations section
        var totalBeer = beerCount*0.54;
        var totalWine = wineCount*0.6;
        var totalShots = shotCount*0.6;
        var totalAlcoholConsumed = totalBeer+totalWine+totalShots;

        var absorptionRate = totalAlcoholConsumed*7.5;
        var totalByWeight = absorptionRate/weightCount;
        var hoursDrank = hoursCount*0.015;
        var hoursDrankWeight = totalByWeight-hoursDrank;



       $("#percentOutput").text(hoursDrankWeight.toFixed(3));



    }


})