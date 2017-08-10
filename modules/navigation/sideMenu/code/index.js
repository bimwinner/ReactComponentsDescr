/**
 * 二级导航栏入口文件
 *
 */
import React,{ Component, PropTypes } from 'react';
import styles from './styles.css';
import SideMenuIcon from './sideMenuIcon.js';

class SideMenu extends Component{
	constructor(props){
		super(props);
	    this.state = {
	    	index: this.props.selectIndex,
	    	childrenIndex:this.props.selectChildrenIndex,
	    	indexPath:this.props.selectIndex+'/'+this.props.selectChildrenIndex
	    };

	}

	onClick(index){
		this.props.onSideMenuClick(index);
		if(this.state.index!=index)
			this.setState({index: index,indexPath: ''});
	}

	onChildrenClick(index){
		this.setState({indexPath: this.state.index+'/'+index});
	}

	render(){
		let	indexPath= this.state.indexPath.split('/');
		let sideMenu=this.props.type=='vertical'?styles.sideMenu:styles.sideMenuHorizontal;
		return (
			<div className={sideMenu}>
				{this.props.menuItems.map((item,index)=>
					<SideMenuIcon
						onClick={this.onClick.bind(this,index)}
						onChildrenClick={this.onChildrenClick.bind(this)}
						{...item}
						text={item.text}
						selectIndex={indexPath[0]==index?indexPath[1]:-999}
						extend={this.state.index==index?true:false}
						key={index}
						type={this.props.type}
						/>
				)}
			</div>
		)
	}
}

SideMenu.defaultProps = {
  type:'vertical'
};

SideMenu.PropTypes = {
}


export default SideMenu;