<template>
    <div id="chart_1" style="width: 900px; height: 560px; background: beige"></div>
</template>

<script>
    export default {
      name: 'hello',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      mounted(){
        this.draw_relation();
      },
      methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('chart_1'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
          draw_relation(){
            let chart_1 = this.$echarts.init(document.getElementById("chart_1"))
            chart_1.setOption({
                title: {
                    text: 'Graph 简单示例'
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        data: [{
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }],
                        // links: [],
                        links: [{
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    curveness: 0.2
                                }
                            }
                        }, {
                            source: '节点2',
                            target: '节点1',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {curveness: 0.2}
                            }
                        }, {
                            source: '节点1',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点4'
                        }, {
                            source: '节点1',
                            target: '节点4'
                        }],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0
                            }
                        }

        }
    ]
            })
          }
      }
}
</script>