import React from 'react';
import styles from './styles.css';
import avatar from './avatar.png';

class UserInfo extends React.Component {
    constructor(props){
      super(props);
    }
    
    render () {
        let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));    //全局的账户登录的账号名，从sessionStorage
        name = userInfo ? userInfo.userName : ""; 
        return (
            <div className={styles.userInfo}>
                <a href="###" className={styles.userName}>
                    {name}
                    <img className={styles.avatar} src={avatar}></img>
                </a>
            </div>
        );
    }
}

export default UserInfo;
