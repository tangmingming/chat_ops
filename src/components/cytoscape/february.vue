<template>
    <div>
        <div>
            <el-button v-on:click="add">默认按钮</el-button>
            <el-button v-on:click="remove">remove</el-button>
            <el-button v-on:click="remove_node_1">remove_node_1</el-button>
            <el-button v-on:click="remove_node">remove_node</el-button>
            <el-button v-on:click="change">change</el-button>
            <el-button id="but" type="primary">主要按钮</el-button>
            <el-button type="primary" v-on:click="center">center</el-button>
        </div>
        <div id="diagram" style="width: 900px; height: 560px; background: beige"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import flowchart from "flowchart"
    axios.defaults.withCredentials = true
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                diagram: null
            }
        },
        methods: {

        },
        mounted(){
            var diagram = flowchart.parse("the code definition");
          diagram.drawSVG('diagram');

          // you can also try to pass options:

          diagram.drawSVG('diagram', {
                                      'x': 0,
                                      'y': 0,
                                      'line-width': 3,
                                      'line-length': 50,
                                      'text-margin': 10,
                                      'font-size': 14,
                                      'font-color': 'black',
                                      'line-color': 'black',
                                      'element-color': 'black',
                                      'fill': 'white',
                                      'yes-text': 'yes',
                                      'no-text': 'no',
                                      'arrow-end': 'block',
                                      'scale': 1,
                                      // style symbol types
                                      'symbols': {
                                        'start': {
                                          'font-color': 'red',
                                          'element-color': 'green',
                                          'fill': 'yellow'
                                        },
                                        'end':{
                                          'class': 'end-element'
                                        }
                                      },
                                      // even flowstate support ;-)
                                      'flowstate' : {
                                        'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                                        'future' : { 'fill' : '#FFFF99'},
                                        'request' : { 'fill' : 'blue'},
                                        'invalid': {'fill' : '#444444'},
                                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                                      }
                                    });

        }
    }
    </script>