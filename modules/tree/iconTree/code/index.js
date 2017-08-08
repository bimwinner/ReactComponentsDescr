import React from 'react';
import Tree from './Tree/Tree.js';
import TreeNode from './Tree/TreeNode.js';
import TreeStyle from './themes/default/tree.min.css';

class IconTree extends React.Component {
    constructor(props) {
        super(props);
        //let gData = this.props.treeData || this.generateData();
        let layerKey = this.generateLayerKey(props.treeData);
        //console.log("props",props);
        this.state = {
            expandedKeys: ['0-0-0-key'],
            autoExpandParent: true,
            checkStrictlyKeys: { checked: ['0-0-1-key'], halfChecked: [] },
            selectedKeys: [],
            treeData:props.treeData,
            layerKeys:layerKey
        };
        //console.log(JSON.stringify(gData));
    }
    componentWillReceiveProps(props) {
        if (props.preventToDo)
            return;
        if (props.treeData&&props.treeData.length>0) {
            let layerKey = this.generateLayerKey(props.treeData);
            this.setState({
                load: props.treeState,
                treeData: props.treeData,
                layerKeys: layerKey
            });
        }
    }
    generateData(x = 3, y = 2, z = 1, gData = []) {
        // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
        function _loop(_level, _preKey, _tns) {
            const preKey = _preKey || '0';
            const tns = _tns || gData;

            const children = [];
            for (let i = 0; i < x; i++) {
                const key = `${preKey}-${i}`;
                tns.push({ title: `${key}-label`, key: `${key}-key` });
                if (i < y) {
                    children.push(key);
                }
            }
            if (_level < 0) {
                return tns;
            }
            const __level = _level - 1;
            children.forEach((key, index) => {
                tns[index].children = [];
                return _loop(__level, key, tns[index].children);
            });
        }
        _loop(z);
        return gData;
    }
    // 收集all节点key
    generateVisibleLayers(data){
        let keys = [];
        data.forEach((key,index) => {
            keys.push(data[index]._id);
            if(data[index].children){
                keys = keys.concat(this.generateVisibleLayers(data[index].children));
            }
        });
        return keys;
    }
    // 处理节点key数据
    generateLayerKey(data){
        let layerKey = this.generateVisibleLayers(data);
        let layerKeys = {
            visible: [],
            parentHidden:[],
            hidden: layerKey,
            finalVis: [],
            finalHide: layerKey,
        }
        return layerKeys;
    }
    loop(data){
        if(data&&data.length>0) {
            return data.map((item) => {
                if (item.children) {
                    return (
                        <TreeNode treeStyle={TreeStyle}
                        key={item._id} title={item.Name} data-info={item}
                        >
                            {this.loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode treeStyle={TreeStyle} key={item._id} title={item.Name} data-info={item} />;
            });
        }  
    }
    // 展开
    onExpand = (expandedKeys) => {
        //console.log('onExpand', arguments);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded chilren keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    // 点击
    onCheck = (checkedKeys) => {
        //console.log('onCheck',checkedKeys);
        this.setState({
            checkedKeys,
        });
    }
    onCheckStrictly = (checkedKeys) => {
        //console.log('onCheckStrictly',arguments);
        // const { checkedNodesPositions } = extra;
        // const pps = filterParentPosition(checkedNodesPositions.map(i => i.pos));
        // console.log(checkedNodesPositions.filter(i => pps.indexOf(i.pos) > -1).map(i => i.node.key));
        const cks = {
            checked: checkedKeys.checked || checkedKeys,
            halfChecked: [`0-0-${parseInt(Math.random() * 3, 10)}-key`],
        };
        this.setState({
            // checkedKeys,
            checkStrictlyKeys: cks,
            // checkStrictlyKeys: checkedKeys,
        });
    }
    // 选中
    onSelect = (selectedKeys, eventInfo) => {
        //console.log('onSelect', selectedKeys, eventInfo);
        this.setState({
            selectedKeys
        });
        this.props.onSelect(selectedKeys,eventInfo);
    }

    onLayerClick = (layerKeys, eventInfo,stateType) => {
        //console.log('layerKeys',layerKeys,eventInfo);
        this.setState({
            layerKeys: layerKeys,
        });
        this.props.onSelectIcon(layerKeys,eventInfo,stateType);
    }

    onRbSelect = (selectedKeys, info) => {
        //console.log('onRbSelect',onRbSelect);
        let _selectedKeys = selectedKeys;
        if (info.selected) {
            _selectedKeys = getRadioSelectKeys(gData, selectedKeys, info.node.props.eventKey);
        }
        this.setState({
            selectedKeys: _selectedKeys,
        });
    }
    onClose = () => {
        //console.log('onClose')
        this.setState({
            visible: false,
        });
    }
    handleOk = () => {
        //console.log('handleOk')
        this.setState({
            visible: false,
        });
    }
    showModal = () => {
        //console.log('showModal');
        this.setState({
            expandedKeys: ['0-0-0-key', '0-0-1-key'],
            checkedKeys: ['0-0-0-key'],
            visible: true,
        });
        // simulate Ajax
        // setTimeout(() => {
        //     this.setState({
        //         treeData: [...gData],
        //     });
        // }, 2000);
    }
    triggerChecked = () => {
        //console.log('triggerChecked');
        this.setState({
            checkedKeys: [`0-0-${parseInt(Math.random() * 3, 10)}-key`],
        });
    }
    render(){
        //console.log("render");
        const loop = data => data.map((item) => {
            if (item.children && item.children.length>0) {
                return <TreeNode treeStyle={TreeStyle} key={item._id} title={item.Name} data-info={item}>{loop(item.children)}</TreeNode>;
            }
            return <TreeNode treeStyle={TreeStyle} key={item._id} title={item.Name} data-info={item} />;
        });
        return(
            <div>
                <Tree
                onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
                autoExpandParent={this.state.autoExpandParent}
                onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
                onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}
                treeStyle={TreeStyle}
                layerCtrl={true}
                layerKeys={this.state.layerKeys}
                onLayerClick={this.onLayerClick}
                >
                    {loop(this.state.treeData)}
                </Tree>
            </div>
        );
    }
}
export default IconTree;
