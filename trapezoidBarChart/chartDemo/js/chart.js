drawBar();
function drawBar(){
	var myChart = echarts.init(document.getElementById('chartBar'));
	var option = {
	    legend: {
	    	bottom:0,
	    	show:false,
	    	itemWidth:10,
	    	itemHeight:6,
	        data: [
	        	{
	                name:'<5min',
	                textStyle:{
	                    color:'#00b4ff'
	                },
	           },
	           {
	                name:'5-30min',
	                textStyle:{
	                    color:'#13dcf5'
	                },
	           },
	           {
	                name:'30-60min',
	                textStyle:{
	                    color:'#fbd023'
	                },
	           },
	           {
	                name:'>60min',
	                textStyle:{
	                    color:'#ff8c10'
	                },
	            }
	        ]
	    },
	    grid: {
	    	top:0,
	        left: 0,
	        right: 0,
	        bottom: 10,
	        containLabel: false
	    },
	    xAxis:[{
	    	name:"num",
	        type: 'value',
	        max:1000,
	        show:false
	    },{
	    	name:"percent",
	    	max:100,
	    	type: 'value',
	    	show:false
	    }],
	    yAxis: {
	        type: 'category',
	        show:false,
	        data: ['开户成功','提交开户申请','指定存管银行','风险评测','签署协议','视频验证','填写用户资料','上传身份证','选择营业部']
	    },
	    series: [
	        {
	            name: '<5min',
	            type: 'bar',
	            stack: '总量',
	            itemStyle:{
	            	normal:{
	           			color:'#00b4ff',
	            	}
	            },
	            data: [320, 302, 301, 334, 390, 330, 420, 350, 310]
	        },
	        {
	            name: '5-30min',
	            type: 'bar',
	            stack: '总量',
	            itemStyle:{
	            	normal:{
	           			color:'#13dcf5',
	            	}
	            },
	            data: [320, 332, 301, 334, 150, 270, 280, 330, 320]
	        },
	        {
	            name: '30-60min',
	            type: 'bar',
	            stack: '总量',
	            itemStyle:{
	            	normal:{
	           			color:'#fbd023',
	            	}
	            },
	            data: [220, 182, 191, 234, 290, 330, 210,300,310]
	        },
	        {
	            name: '>60min',
	            type: 'bar',
	            stack: '总量',
	            barWidth:'25px',
	            itemStyle:{
	            	normal:{
	           			color:'#ff8c10',
	            	}
	            },
	            data: [200, 310, 201, 154, 190, 330, 410,350,260]
	        },
	        {
	            type: 'bar',
	            barWidth:'6px',
	            xAxisIndex:1,
	            stack: 'percent',
	            animation:false,
	            itemStyle:{
	            	normal:{
	           			color:new echarts.graphic.LinearGradient(
		                        1, 0, 0, 0,
		                        [
		                            {offset: 0, color: '#61f9ff'},
		                            {offset: 0.89, color: '#0d84df'},
		                            {offset: 1, color: '#0764a6'}
		                        ]
		                    )
	            	}
	            },
	            data: [80, 78, 62, 82, 72, 90, 90,62,50]
	        },
	        {
	            type: 'bar',
	            barWidth:'6px',
	            xAxisIndex:1,
	            stack: 'percent',
	            animation:false,
	            itemStyle:{
	            	normal:{
	           			color:'#0a4474'
	            	}
	            },
	            data: [100, 100, 100, 100, 100, 100, 100,100,100]
	        }
	    ]
	};
	myChart.setOption(option);
	$(window).on("resize", function() {
		myChart.resize();
	});
}