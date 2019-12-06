import { Component, OnInit } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent, NzModalService, NzMessageService } from 'ng-zorro-antd';
declare var jsMind:any;
@Component({
  selector: 'app-jsmind',
  templateUrl: './jsmind.component.html',
  styleUrls: ['./jsmind.component.css']
})
export class JsmindComponent implements OnInit {
  jm:any;
  isAddLink: boolean;
  url: any;
  isShowText: boolean;
  text: any;
  isPreview:boolean;
  constructor(private message: NzMessageService,private modalService: NzModalService) { 
    //this.contextMenucontextMenu();
  }
  
  get selectNode() { return this.jm.get_selected_node(); }
  set selectNode(selectNode) { this.jm.set_selected_node()==selectNode; }
  ngOnInit() {
    this.loadJsMind();

  }

  loadJsMind(){
    var mind = {
      meta:{
          name:'demo',
          author:'hizzgdev@163.com',
          version:'0.2'
      },
      format:'node_array',
      data:[
          {"id":"root", "isroot":true, "topic":"jsMind"},

          {"id":"sub1", "parentid":"root", "topic":"sub1"},
          {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
          {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
          {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

          {"id":"sub2", "parentid":"root", "topic":"sub2"},
          {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
          {"id":"sub22", "parentid":"sub2", "topic":"sub22"},

          {"id":"sub3", "parentid":"root", "topic":"sub3"},
      ]
  };

  var options = {
    container:'jsmind_container',
    editable:true,
    theme:'primary',
    menu:'menu',//菜单的id
   
  }
  this.jm = jsMind.show(options,mind)
  }



  addnote(){
    if(!this.selectNode){
      this.message.create('warning', `请选择节点`);
      return;
    }
    var nodeid = jsMind.util.uuid.newid();
    var topic = 'new Note';
    var node = this.jm.add_node(this.selectNode, nodeid, topic);
    this.jm.hideMenu();
  }



  removeNote(){
    if(!this.selectNode){
      this.message.warning(`请选择节点`);
      return;
    }
     this.jm.remove_node(this.selectNode.id);
    this.jm.hideMenu();
 }


 editUrl(){
    this.jm.hideMenu();
    if(!this.selectNode){
      this.message.warning(`请选择节点`);
      return;
    }
    this.url=this.selectNode.data.url;
    this.isAddLink=true;
    //console.log(window.prompt(''));
  
}
addLink(){
  this.isAddLink=false;
  this.jm.get_selected_node().data.url=this.url;
}
openUrl(){
  this.jm.hideMenu();
  if(!this.selectNode){
    this.message.warning(`请选择节点`);
    return;
  }
  if(!this.selectNode.data.url){
    this.message.warning("当前没有不存在url");
    return;
  }
  window.open(this.selectNode.data.url,'_target');
}


openText(){
  this.jm.hideMenu();
  if(!this.selectNode){
    this.message.warning(`请选择节点`);
    return;
  }
  this.isShowText=true;
  this.text=this.selectNode.data.text;
}
previewChange(){
  this.jm.hideMenu();
  this.isPreview=!this.isPreview;
  if(this.isPreview){
    this.jm.options.menu='previewmenu';
    this.jm.options.default_event_handle.enable_dblclick_handle=false;
  }else{
    this.jm.options.menu='menu';
    this.jm.options.default_event_handle.enable_dblclick_handle=true;
  }
}


reset(){
  if(!this.selectNode){
    this.message.warning(`请选择节点`);
    return;
  }
  var mind = {
    meta:{
        name:'demo',
        author:'hizzgdev@163.com',
        version:'0.2'
    },
    format:'node_array',
    data:[
        {"id":"root", "isroot":true, "topic":"root"},
    ]
};
this.jm.data.load(mind)
}
updateText(){
  this.isShowText=false;
  this.jm.get_selected_node().data.text=this.text;

}
}
