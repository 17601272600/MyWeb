import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzDropdownMenuComponent, NzContextMenuService, NzMessageService, NzTreeNode } from 'ng-zorro-antd';
import { NoteService } from './note.service';
import { EditorConfig } from './markdown/markdown';
declare var editormd: any;
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  typeTarget:any={id:0,name:'',desc:''};//分类
  nodeTarget:any={id:0,name:'',text:''};//笔记
  activedNode: NzTreeNode;
  markdownHeight:string="60vh";
//  conf = new EditorConfig();
  editor:any;
  isNewType:boolean=false;
  searchValue: any;
  nodes = [
    {
      title: '我的分类',
      key: '101',
      desc:'sdads',
      expanded: true,
      children: [
        { title: '思维导图测试', key: '1002', isLeaf: true ,type:0},
        { title: '文本测试', key: '1003', icon: 'exception', isLeaf: true ,type:1,"text":`# h1 #h2
- [x] asda`
        }
      ]
    }
  ];
  title = '安装工单';
  isType: number=0;

  constructor(private menuService: NzContextMenuService,private service:NoteService,private message: NzMessageService) {
    this.service.getNoteData().subscribe(
      data=>{

      },
      error=>{

      }
    )
   }

  ngOnInit() {
  }
  nzEvent(event: NzFormatEmitEvent): void {
    this.activedNode=event.node;
    const key = event.keys;
    let node=event.node;
    this.title = node.title;
    if(node.level==0){
      this.isType=0;
      this.typeTarget.id=node.key;
      this.typeTarget.name=node.title;
      this.typeTarget.desc=node.origin.desc;
    }else if(node.origin.type==0){
      this.isType=1;
    }else{
      this.isType=2;
      this.nodeTarget.id=node.key;
      this.nodeTarget.name=node.title;
      this.nodeTarget.text=node.origin.text;
      this.conf.height=this.markdownHeight;
    this.editor=editormd("md",this.conf);
    this.editor.unwatch();
      
     // this.editor=editormd('detailmarkdown',this.conf);
    }
    
  }
 



  typeOk(){
  
    let post={
      id:this.typeTarget.id,
      name:this.typeTarget.name,
      desc:this.typeTarget.desc  
    }
    this.service.saveType(post).subscribe(
      data=>{
        if(data.isSuc){
          var node= {
            title:post.name,
            key: data.id,
            desc:post.desc,
            expanded: true,
            children: []
          }
          this.nodes.push(data);
          this.isNewType=false;
        }else{
          this.message.warning(data.msg);
        }
     
      

      },
      error=>{
        console.error("调用saveType方法失败,模拟数据运行");
      }
    );
  }

  openType(type){
    if(type===1){//新增分類
      //
      this.typeTarget={id:0,name:'',desc:''};//分类;
      this.isNewType=true;
    }else{//编辑分类
      //this.typeTarget
    }
  }


  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.menuService.create($event, menu);
  }

  saveTextData(){

  };

  conf = new EditorConfig();

// 同步属性内容
syncModel(str): void {
    this.nodeTarget.text = str;
}

}
