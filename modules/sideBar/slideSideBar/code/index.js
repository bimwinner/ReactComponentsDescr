import React,{ Component } from 'react';   //引入react
import { Icon } from 'antd';     //引入阿里巴巴的react组件库antd里的Icon图标字体组件
import styles from './styles.css';    //引入css样式

// 弹出框
export default class SlideModal extends React.Component{
    constructor(props) {       //组件构造函数
        super(props);
        this.state = {          //react组件自身state状态 
            openModal: false,    //侧边栏是否弹出的状态标志
        };
    }
    onShowModal = () => {       //点击弹出/收起箭头触发的事件函数
        const className = this.refs.slideModal.className;   //this.refs允许你涉及相应的任何从 render() 返回的支持实例
        //上一行代码为取到浏览器里被react指为"slideModal"的真实节点里的类名。
        if(className.indexOf(styles.cbpMenuOpen)== -1) {
            this.setState({openModal:true});
        }else {
            this.setState({openModal:false});
        }
    }

    render(){
        let aStyle,icon;
        if(this.state.openModal){
            aStyle = `${styles.modalIcon} ${styles.modalOut}`;    //``是ES6提供的字符串模版
            icon = (<Icon type="double-right" />);   
            //react写法，icon这个变量是一个对象，它是react element，经过render后会变成真正的DOM元素。
        } else {
            aStyle = `${styles.modalIcon} ${styles.modalIn}`; 
            icon = (<Icon type="double-left" />);
        }
        return (
            <div>
                <a onClick={this.onShowModal} className={aStyle}>{icon}</a>
                <div ref="slideModal" className={this.state.openModal ? `${styles.cbpMenu} ${styles.cbpMenuVertical} ${styles.cbpMenuRight} ${styles.cbpMenuOpen}` : `${styles.cbpMenu} ${styles.cbpMenuVertical} ${styles.cbpMenuRight}`}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
