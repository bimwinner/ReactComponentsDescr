import React from 'react';
import styles from './styles.css';
import Menus from './menus';  //引入 menus 组件

class Header extends React.Component {
    constructor(props) {
        super(props);
    } 
    componentWillMount(){
        //刷新浏览器时或者是第一次加载时，根据地址栏uri判断高亮菜单
        let a = document.URL;    //获取浏览器的地址栏地址
        let b = a.split('//')[1].split('/');
        HEADER_NAMES[0].current='current';
        if(b[1]!='' && b[1]!= 'login') {  //判断当路由地址不为空以及"login"时进行导航的高亮匹配效果
            HEADER_NAMES.map((item,index1)=>{
                let thisName = item.name.split("/");
                if(thisName[0]==b[1]){
                    item.current='current';
                }
                else{
                    item.current='';
                }
            })
        }
    }

    componentWillReceiveProps(){
        //在导航栏上进行选择时，根据地址栏uri判断高亮菜单
        let a = document.URL;
        let b = a.split('//')[1].split('/');
        HEADER_NAMES[0].current='current';
        if(b[1]!='' && b[1]!= 'login') {
            HEADER_NAMES.map((item,index1)=>{
                let thisName = item.name.split("/");
                if(thisName[0]==b[1]){
                    item.current='current';
                }
                else{
                    item.current='';
                }
            })
        }      
    }

    onClick(index){     //点击导航图标时，给导航的数组里的"current"赋值以达到蓝色选中效果
        HEADER_NAMES.map((item,index1)=>{
            if(index1==index){
                item.current='current';
            }
            else{
                item.current='';
            }
        })
    }

    render () {
        return (
            <header>
                <section>
                    <div className={styles.headerContainer}>
                        <Menus headerNames={HEADER_NAMES} onClick={this.onClick.bind(this)}/>
                    </div>
                </section>
            </header>
        );
    }
}

var HEADER_NAMES = [
    {name:'mainPage',text:'主页',current:"current"},
    {name:'modelManager',text:'BIM模型',current:""},
    {name:'designMana',text:'测试',current:""},
    {name:'newPage',text:'新页面',current:""},
    {name:'firstPage',text:'first页面',current:""}
];

export default Header;
