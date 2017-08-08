import React from 'react';
import IconTree from '../../../Components/IconTree/index.js';

class LeftTab extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
    }
    
    componentWillMount() {
        
    }
    btnClick () {
        this.props.fetchTtt();
    }

    // icon点击事件
    onSelectIcon = (layerKeys, eventKey, stateType) => {
        
    }
    onSelect = (selectedKeys, event) => {

    }

    render() {
        return (
            <div>
                <IconTree
                    treeData={this.props.treeData}
                    onSelectIcon={this.onSelectIcon}
                    onSelect={this.onSelect}
                />
                <button onClick={() => this.btnClick()}>点我</button>
            </div>
        )
    }
}

export default LeftTab;