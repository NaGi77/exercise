function sumbqdd(){
	var sum1=document.getElementById('sum-one').value;
	var tp=document.getElementById('Tp').value;
	var kp=document.getElementById('Kp').value;
	var c=document.getElementById('C').value;
	var del=document.getElementById('delta').value;
	var data1={}; 
	var sum3=0;
	for(var i=0;i<sum1;i++){
		data1[i]=Number(prompt("请输入第"+(i+1)+"个数据"));
		sum3+=data1[i];
		if (data1[i]=="") {
			break;
		};
	}
	var sum4=0;
	for (var i = 0; i < sum1; i++) {
		var s=data1[i];
		var aa;
		aa=(s-sum3/sum1)*(s-sum3/sum1);
		sum4=sum4+aa;
	};
	var  ua2=sum4/(sum1-1);
	document.getElementById('average').value=(sum3/sum1).toFixed(8);
	document.getElementById('Ua').value=(tp*Math.sqrt(ua2)).toFixed(8);
	document.getElementById('Ub').value=(kp*del/c).toFixed(8);
	document.getElementById('Ur').value=(Math.sqrt(tp*Math.sqrt(ua2)*tp*Math.sqrt(ua2)+kp*(del/c)*kp*(del/c))).toFixed(8);
}
function hgfc(){
	var sum2=document.getElementById('sum-two').value;
	var data2={};
	var data3={};
	var s1=0,s2=0,s3=0;
	var sum5=0;
	var sum6=0;
	var bb=0;
	var cc=0;
	var averageb=0,dd=0,ee=0;
	var averagea=0;
	var sb2=0,sa2=0;
	for (var i = 0; i < sum2; i++) {
		data2[i]=Number(prompt("请输入第"+(i+1)+"个x坐标的值"));
		data3[i]=Number(prompt("请输入第"+(i+1)+"个y坐标的值"));
		sum5=sum5+data2[i];
		sum6=sum6+data3[i];
		if (data2[i]=="") {
			break;
		};
		if (data3[i]=="") {
			break;
		};
	};
	for (var i = 0; i < sum2; i++) {
		bb=sum5/sum2;
		cc=sum6/sum2;
		s1=s1+(data2[i]-bb)*(data3[i]-cc);
		s2=s2+(data2[i]-bb);
		s3=s3+(data3[i]-cc);
		dd=dd+data2[i]*data3[i];
		ee=ee+data2[i]*data2[i];
		averageb=(dd-sum2*bb*cc)/(ee-sum2*bb*bb);
		averagea=cc-averageb*bb;
	};
	for (var i = 0; i < sum2-1; i++) {
		var kk=data2[i+1]*data3[i]-data2[i]*data3[i+1],tt=data2[i+1]-data2[i];
		sa2=sa2+(kk/tt-averagea)*(kk/tt-averagea);
		sb2=sb2+((data3[i+1]-data3[i])/(data2[i+1]-data2[i]));
	};
	document.getElementById('numberb').value=averagea.toFixed(8);
	document.getElementById('numberk').value=averageb.toFixed(8);
	document.getElementById('r').value=(s1/(s2*s3)).toFixed(8);
	document.getElementById('Sb').value=(Math.sqrt(sb2/sum2)).toFixed(8);
	document.getElementById('Sa').value=(Math.sqrt(sa2/sum2)).toFixed(8);
}