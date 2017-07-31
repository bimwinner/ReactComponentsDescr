import React from 'react';
import Helmet from 'react-helmet';
import 'sanitize.css/sanitize.css';

/* components */
import Header from '../../Components/Header/headerContainer.js';
import Footer from '../../Components/Footer';

/* styles */
import styles from './styles.css';
import 'antd/dist/antd.css';

class BasePage extends React.Component {
	render() {
	    return (
	        <div className={styles.wrapper}>
	        	<Helmet titleTemplate="%s - Ecidi"/>
	        	<Header />
	        	<div className={styles.ctt}>
		            {React.Children.toArray(this.props.children)}
	            </div>
	            <Footer />
	        </div>
	    );
	}
}

BasePage.defaultProps = {
	children: React.PropTypes.node,
};

export default BasePage;
