import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class ElfHeader extends Component {
constructor(props) {
    super(props);
    this.state = {
        open: false
    };

handleToggle = () => this.setState({ open: !this.state.open });
    }
    getFileName = () => {
        console.log('getFileName called.');
        this.setState({ file: 'url-file.js' });
    };

    render() {
<div>
  <div className="App">
      <ul>
          <li><Link to="/">Address</Link></li>
          <li><Link to="/get-file">Get File</Link></li>          
      </ul>
  </div>     
  <div>
    <AppBar
        title="Address Maven"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={this.handleToggle}
    />
    <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={this.handleToggle}
    >
        <AppBar title="Address Maven"/>

        <MenuItem
            primaryText='Address'
            containerElement={<Link to="/"/>}
            onClick={this.handleToggle}
        />
  <MenuItem
            primaryText='GetFile'
            containerElement={<Link to="/"/>}
            onClick={this.handleToggle}
        />

    </Drawer>
</div>
</div>
}
}