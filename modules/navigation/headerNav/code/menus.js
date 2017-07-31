import React from 'react';
import styles from './styles.css';
import Icon from '../Icons/iconfont.css';  //引入字体文件，图标的由来，可查看 Icons 组件
import {Link} from 'react-router';    //使用react-router提供的Link组件

class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	onClick(index){
		this.props.onClick( this.props.text);
	}
	render () {
		let text = this.props.text, name = this.props.name.split('/')[0], 
			router="/"+this.props.name, 
			current=this.props.current;
		return (
			<Link href={this.props.name} className={`${styles.menuItem} ${styles[current]}`} to={router} onClick={this.onClick.bind(this)}>
				<span className={`${Icon.iconfont} ${styles.menuItemIcon} ${styles[name]}`}></span><br />
				{text}
			</Link>
		);
	}
}

class Menus extends React.Component {
	constructor(props) {
		super(props);
	}
	onClick(index){
		this.props.onClick(index);
	}
	render () {
		// 不需要current时置空current属性，否则填写"current"
		var s=`${styles.menus} ${styles.menus}`;
		return (
			<div className={s}>
				{
					this.props.headerNames.map((item,index)=>
						<Menu
							onClick={this.onClick.bind(this,index)}
							{...item}
							text={item.text} 
							current={item.current} 
							name={item.name}
							key={item.name}
						/>
					)
				}
			</div>
		);
	}
}

export default Menus ;
