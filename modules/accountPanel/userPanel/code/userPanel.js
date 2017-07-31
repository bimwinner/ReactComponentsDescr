import React from 'react';    //引入React组件
import UserInfo from './userInfo';     //引入userInfo组件，这个组件主要是用来显示账号的信息
import styles from './styles.css';     //组件的样式
import Icon from '../Icons/iconfont.css';    //字体图标的样式
import { browserHistory } from 'react-router';   //路由（即网址）跳转，用于跳转到不同的页面
import { resetLoginStatus } from '../../Pages/LoginPage/action';   //点退出按钮时会执行redux的action操作
import { connect } from 'react-redux';   //使用redux的依赖注入
import {Link} from 'react-router';    //使用路由的跳转组件

class UserPanel extends React.Component {
    constructor(props){
        super(props);
        this.state={
    	   hover:''
        }
    }

    logOut(){
        browserHistory.push('/login');   //跳转到/login这个登录界面
        sessionStorage.removeItem('bIsLoggedIn');   //去掉sessionStorage里存放的bIsLoggedIn的值 
        this.props.onResetLoginStatus();   //执行清空登录状态的方法
    }
    mouseLeavePanel(e){
  	    var menu = document.getElementById('noticeMenu');
  	    menu.style.display = "none";
  	    this.setState({
  		    hover:``,
  		    mailStatus:`${styles.mailStatus}`
  	    });
    }
    mouseOverIcon(e){
  	    var menu = document.getElementById('noticeMenu');
  	    menu.style.display = "block";
  	    this.setState({
  		    hover:`${styles.noticeHover}`,
  		    mailStatus:``,
  	    });
    }

    render () {
        var hover=this.state.hover,
    	mailStatus = this.state.mailStatus;
        return (
            <div className={styles.userPan}>
                <div className={styles.userInfo}>
                    <UserInfo />
                </div>
                <nav>
                    <div className={styles.panelItem}>
                        <a href="javascript:void(0);" className={`${Icon.iconfont} ${styles.menuItemIcon} ${styles.tasks}`}>
                            <span className={`${styles.messageStatus} ${styles.unread}`}></span>
                        </a>
                    </div>
                    <div className={styles.panelItem} onMouseLeave={(e)=>this.mouseLeavePanel(e)}>
                        <a onMouseOver={(e)=>this.mouseOverIcon(e)} href="javascript:void(0)" className={`${Icon.iconfont} ${styles.menuItemIcon} ${styles.favor} ${hover}`}>
                            <span className={`${mailStatus} ${styles.unread}`}></span>
                        </a>
                        <div id="noticeMenu" className={styles.noticeMenu}>
                	        <div className={styles.u_ddl_con}>
                		        <div className={styles.u_ddl_con_top}>
                			        <div className={styles.u_notity_bd}>
                				        <ul>
                        					<li className={styles.category_item}>
                        						<Link to="/userCenter/processAlert">预警信息</Link>
                        					</li>
                                            <li className={styles.category_item}>
                                                <Link to="/Download">模型下载</Link>
                                            </li>
                				        </ul>
                			        </div>
                		        </div>
                	        </div>
                        </div>
                    </div>
                    <div className={styles.panelItem}>
                        <a href="javascript:void(0)" onClick={()=>this.logOut()} className={`${Icon.iconfont} ${styles.menuItemIcon} ${styles.logoutIcon}`}>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

//redux依赖注入
function mapDispatchToProps(dispatch){
    return{
	   onResetLoginStatus: () => dispatch(resetLoginStatus())
    };
}

//导出经过redux依赖注入的UserPanel组件
export default connect(null,mapDispatchToProps)(UserPanel);

