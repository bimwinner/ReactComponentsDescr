import React from 'react';
import SideMenu from '../../../Components/SideMenu/index.js';
import styles from '../sidebar.css';

//左侧菜单名字
var SIDEMENU_NAMES = [
    {name:'progressDetailPage',text:'进度计划详情',path:'/progressMana/progressDetailPage'},
    {name:'progressPlan',text:'进度对比',path:'/progressMana/progressPlan'},
    {
        name:'materialCost',text:'WBS分解',path:'/progressMana/realProgress',
        children: [
            {name:'progressPlan1',text:'分解1',path:'/progressMana/progressPlan1'},
            {name:'progressPlan2',text:'分解2',path:'/progressMana/progressPlan2'},
        ]
    }
   
];

class LeftTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index:0};
    }

    _handleMenuClick(index){
    
    }
    
    componentWillMount(){
        let a = document.URL;
        let b = a.split('//')[1].split('/');
        let index=0;
        if(b[2]!=''){
            SIDEMENU_NAMES.map((item,index1)=>{
                if(item.name==b[2]){
                    index=index1;
                }
            })
        }
        this.setState({index : index});
    }

    render() {
        return (
            <div className={styles.sideBar}>
                <SideMenu 
                    selectIndex={2}
                    onSideMenuClick={(index)=>this._handleMenuClick(index)}
                    menuItems={SIDEMENU_NAMES} 
                    selectChildrenIndex={1}
                />
            </div>
        )
    }
}

export default LeftTab;