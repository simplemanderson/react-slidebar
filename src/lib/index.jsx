import React from 'react';
import PropTypes from "prop-types";

const wrapperStyle = {
    width: '100%',
    height: '100%',
    position: 'relative'
};
const sidebarBaseStyle = {
    position: 'absolute',
    width: '250px',
    height: '100%',
    background: '#ccc',
    zIndex: '1',
    display: 'flex',
    transition: 'right 0.5s'
};
const sidebarClosedStyle = {
    right: 'calc(100% - 30px)'
};
const sidebarOpenStyle = {
    right: 'calc(100% - 250px)'
};
const mainContentBaseStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: '30px',
    right: '0',
    padding: '0 20px'
};


class Slidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        const sidebarStyle = Object.assign({}, sidebarBaseStyle, this.state.open ? sidebarOpenStyle : sidebarClosedStyle);

        return <div style={wrapperStyle}>
            <div style={sidebarStyle}>
                <div style={{flex: '1 0 auto'}}>
                    {this.props.sidebarContent}
                </div>
                <div style={{width: '30px', flex: '0 0 auto', alignSelf: 'center', textAlign: 'center'}} onClick={this.toggleSidebar}>
                    {
                        this.state.open ?
                            '<' :
                            '>'
                    }
                </div>
            </div>
            <div style={mainContentBaseStyle}>
                {this.props.children}
            </div>
        </div>;
    }

    toggleSidebar = () => {
        this.setState({open: !this.state.open});
    }
}

Slidebar.propTypes = {
    children: PropTypes.oneOf(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ),
    sidebarContent: PropTypes.node
};

Slidebar.defaultProps = {

};

export default Slidebar;
