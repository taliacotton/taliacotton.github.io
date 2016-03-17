$(document).ready(function() {

$(".afterSubmit").hide();

function buttonClicked(){

	//define variables
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	var input3 = document.getElementById("input3").value;
	var input4 = document.getElementById("input4").value;
	var input5 = document.getElementById("input5").value;
	var input6 = document.getElementById("input6").value;
	var input7 = document.getElementById("input7").value;
	var input8 = document.getElementById("input8").value;
	var input9 = document.getElementById("input9").value;
	var input10 = document.getElementById("input10").value;
	var input11 = document.getElementById("input11").value;
	var input12 = document.getElementById("input12").value;
	var input13 = document.getElementById("input13").value;
	var input14 = document.getElementById("input14").value;
	var input15 = document.getElementById("input15").value;
	var input16 = document.getElementById("input16").value;
	var input17 = document.getElementById("input17").value;
	var input18 = document.getElementById("input18").value;
	var input19 = document.getElementById("input19").value;
	var input20 = document.getElementById("input20").value;
	var input21 = document.getElementById("input21").value;

	if (input1==null || input1=="",input2==null || input2=="",input3==null || input3=="",input4==null || input4=="", input5==null || input5=="",input6==null || input6=="",input7==null || input7=="",input8==null || input8=="",input9==null || input9=="",input10==null || input10=="",input11==null || input11=="",input12==null || input12=="",input13==null || input13=="",input14==null || input14=="",input15==null || input15=="",input16==null || input16=="",input17==null || input17=="",input18==null || input18=="",input19==null || input19=="",input20==null || input20=="",input20==null || input20=="",input2==null || input21=="",input3==null || input21==""){
		document.getElementById("error").innerHTML = "Don't be lazy. Fill the whole damn thing out.";
	} else {
		document.getElementById("error").innerHTML = "";
		$(".afterSubmit").show();
	
		document.getElementById("result1").innerHTML = input1;
		document.getElementById("result2").innerHTML = input2;
		document.getElementById("result3").innerHTML = input3;
		document.getElementById("result4").innerHTML = input4;
		document.getElementById("result5").innerHTML = input5;
		document.getElementById("result6").innerHTML = input6;
		document.getElementById("result7").innerHTML = input7;
		document.getElementById("result8").innerHTML = input8;
		document.getElementById("result9").innerHTML = input9;
		document.getElementById("result10").innerHTML = input10;
		document.getElementById("result11").innerHTML = input11;
		document.getElementById("result12").innerHTML = input12;
		document.getElementById("result13").innerHTML = input13;
		document.getElementById("result14").innerHTML = input14;
		document.getElementById("result15").innerHTML = input15;
		document.getElementById("result16").innerHTML = input16;
		document.getElementById("result17").innerHTML = input17;
		document.getElementById("result18").innerHTML = input18;
		document.getElementById("result19").innerHTML = input19;
		document.getElementById("result20").innerHTML = input20;
		document.getElementById("result21").innerHTML = input21;
	}


}

document.getElementById("button").onclick = buttonClicked;


});
