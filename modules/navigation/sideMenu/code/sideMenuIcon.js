/**
 * 二级导航栏（单个导航图标组件）
 *
 */
import React,{ Component, PropTypes } from 'react'
import styles from './styles.css';
import {Link} from 'react-router';   //引用路由组件Link
import Icon from '../Icons/iconfont.css';    //引入图标字体文件

//单个侧边菜单图标
class SideMenuIcon extends Component{
	constructor(props){
		super(props);
	    this.state = {
	    	extend: this.props.extend,
	    	index:this.props.selectIndex
	    };
	}
 
 	//处理二级菜单的选择状态
	onClick(index)
	{
		this.props.onClick(this.props.index);
	}
	//处理展开菜单的选择
	onChildrenClick(index)
	{
		if(this.state.index!=index)
			this.setState({index: index});
		this.props.onChildrenClick(index);
	}
	render(){
		let text = this.props.text;
		let name = this.props.name;
		let path = this.props.path;
		let children = this.props.children;
		let sideMenuItemIcon=this.props.type=='vertical'?styles.sideMenuItemIcon:styles.sideMenuItemIconHorizontal
		let br = this.props.type=='vertical'?<br />:'';
		let extend = this.props.extend==true &&this.props.children.length>0? 'show':'hidden';
		let current = this.props.extend ?'current':'';
		let preindex=this.props.selectIndex;
		let linkOrA=this.props.children.length>0
				?
		        <div>
			        <a href="javascript:void(0);" onClick={this.onClick.bind(this)} className={styles[current]}>
		              <span className={`${Icon.iconfont} ${styles.sideMenuItemIcon} ${styles[name]}`}></span>{br}
		              {text}
		            </a>
					<div className={`${styles.subMenu} ${styles[extend]}`}>
						{children.length > 0 && children.map((item,index)=>
							<div key={index}>
								<Link to={item.path}  className={styles[index==preindex?current:'']} onClick={this.onChildrenClick.bind(this,index)}>
									{item.text}
								</Link>
							</div>
						)}

					</div>
				</div>
	            :
	            <Link  to={path} onClick={this.onClick.bind(this)} className={styles[current]}>
	              <span className={`${Icon.iconfont} ${styles.sideMenuItemIcon} ${styles[name]}`}></span>{br}
	              {text}
	            </Link>
		return (
			<div >
	            {linkOrA}
			</div>
		)
	}
}

//默认menu是文字和图片上下排列的，设置type属性为type='horizontal'，文字和图片将会水平排列
SideMenuIcon.defaultProps = {
  children: [],
  type:'vertical',
  extend:false,
};

//要求text属性是必须的
SideMenuIcon.PropTypes = {
	text: PropTypes.string.isRequired
}


export default  SideMenuIcon;