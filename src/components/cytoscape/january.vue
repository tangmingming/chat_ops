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
        <div id="cy" style="width: 900px; height: 560px; background: beige"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    axios.defaults.withCredentials = true
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                cy: {},
                eles: {},
                nodes: [],
                pms_app_ids: [],
                pms_app_id: null
            }
        },
        methods: {
            add(){
                console.log(this.msg);
                this.cy.add({
                    group: "nodes",
                    data: { weight: 20 },
                    position: { x: 400, y: 400 },
                    nodes: []
                })
            },
            draw(){
            },
            remove(){
                console.log(this.age)
                console.log(this.gender)
            },
            remove_node_1(){
                var n = this.cy.$("node")
                this.cy.remove(n)
            },
            remove_node(){
                var n = this.cy.$("node[weight>90]")
                this.cy.remove(n)
            },
            change(){
                this.node_1.position("y", "300")
                console.log("chanage")
            },
            center(){
                this.cy.$(":selected").remove()
            }
        },
        mounted(){
            console.log("mmmmmmmmmmmmmm")
            console.log(this.msg)
            this.age = 11111
            console.log(this.age)
            this.cy = this.$cytoscape({
              container: document.getElementById('cy'),
                style: [
                { selector: 'node[label = "Person"]',
                  css: {'background-color': '#6FB1FC', 'content': 'data(name)'}
                },
                { selector: 'node',
                  css: {'background-color': '#F5A45D', 'content': 'data(name)'}
                },
                { selector: 'edge',
                  css: {'content': 'data(relationship)', 'target-arrow-shape': 'triangle'}
                }
              ],
                layout: {name: "grid"},
            })
            var eles = [
              { group: "nodes" },
              { group: "nodes" },
              { group: "nodes" },
              { group: "nodes" },
              { group: "nodes" },
            ]
//            this.cy.add(eles)

            axios.get("https://pms.elenet.me/pmo.api/module/getmoduleinfo/?departmentId=12&productLineId=&productId=&appId=").then(function (res) {
                this.pms_app_ids = res["data"]["resultMsg"]

                for(var i=0; i<this.pms_app_ids.length; i++){
                    this.pms_app_id = this.pms_app_ids[i]
                    axios.get("http://trace-gw.elenet.me/proxy/meta/app-dependency?appId="+this.pms_app_ids[i]["appId"]).then(function (res) {
                        if(res["data"]["provider"].length || res["data"]["consumer"].length){
                            var node = {group: "nodes", data: {name: this.pms_app_id["appId"]}}
                            this.nodes.push(node)
                            console.log("push")
                        }
                    }.bind(this)).catch(function (err) {

                    })
                }
                this.cy.add(this.nodes)
                var layout = this.cy.layout({
                    name: "circle"
                })
                layout.run()
                console.log("end")
                console.log(this.nodes.length)

            }.bind(this)).catch(function (err) {
                console.log(err)
            })
        }
    }
    </script>