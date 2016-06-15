import React from 'react';
import $ from 'jquery';
import Immutable from 'immutable';
import designMode from './designMode';
import * as elementUtils from './designElements/elementUtils';
import applabConstants from './constants';

class ImportableScreen {
  constructor(dom) {
    this.dom = dom;
    this.id = dom.id;
  }

  get willReplace() {
    return designMode.getAllScreenIds().includes(this.id);
  }

  get assetsToReplace() {
    // TODO: filter out assets that will just be imported without replacing anything.
    var nodesWithAssets = $('[data-canonical-image-url]', this.dom).toArray();
    var assets = nodesWithAssets.map(n => $(n).attr('data-canonical-image-url'));
    return assets;
  }

  get conflictingIds(){
    var conflictingIds = [];
    Array.from(this.dom.children).forEach(child => {
      if (!elementUtils.isIdAvailable(child.id)) {
        var existingElement = elementUtils.getPrefixedElementById(child.id);
        if (elementUtils.getId(existingElement.parentNode) !== this.id) {
          conflictingIds.push(child.id);
        }
      }
    });
    return conflictingIds;
  }

  get canBeImported() {
    return this.conflictingIds.length === 0;
  }
}

class ImportableProject {
  constructor({channel, sources}) {
    this.channel = channel;
    this.sources = sources;
    this.screens = [];
    var html = $(sources.html);
    html.find('.screen')
        .css('position', 'inherit')
        .css('display', 'block')
        .each((index, screen) => {
          this.screens.push(new ImportableScreen(screen));
        });
  }

  get name() {
    return this.channel.name;
  }

}

export const ScreenListItem = React.createClass({
  propTypes: {
    screen: React.PropTypes.instanceOf(ImportableScreen).isRequired,
    selected: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
  },

  render() {
    var {screen, selected, onSelect} = this.props;
    return (
      <li style={{position: 'relative', paddingLeft: 70, height: 100}}>
        <input type="checkbox" checked={selected}
               onChange={() => onSelect(!selected)} />
        <div dangerouslySetInnerHTML={{__html: screen.dom.outerHTML}}
             style={{
                 display: 'inline-block',
                 position: 'absolute',
                 left: 0,
                 transform: 'scale(.2)',
                 transformOrigin: 'top left',
               }}
        />
        {screen.id}
        {screen.willReplace &&
         <p>Importing this will replace your existing screen: "{screen.id}".</p>}
        {screen.assetsToReplace.length > 0 &&
         <p>Importing this will replace your existing assets:{' '}
           {screen.assetsToReplace.map(a => `"${a}"`).join(', ')}.
         </p>
        }
        {screen.conflictingIds.length > 0 &&
          <p>Uses existing element IDs: {screen.conflictingIds.map(id => `"${id}"`).join(',')}.</p>}

      </li>
    );
  }
});

export default React.createClass({

  propTypes: {
    project: React.PropTypes.shape({
      channel: React.PropTypes.shape({
        name: React.PropTypes.string
      }),
      sources: React.PropTypes.shape({
        html: React.PropTypes.string,
      }),
    }),
    onImport: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    var project = new ImportableProject(this.props.project);
    var selected = Immutable.Set(
      project.screens.filter(s => s.canBeImported).map(s => s.id)
    );
    return {
      project,
      selected,
    };
  },

  selectScreen(screen, select) {
    if (select) {
      this.setState({selected: this.state.selected.add(screen.id)});
    } else {
      this.setState({selected: this.state.selected.delete(screen.id)});
    }
  },

  importScreens() {
    this.state.selected.forEach(id => {
      var newScreen = this.state.project.screens.find(screen => screen.id === id).dom;
      var oldScreen = elementUtils.getScreens().toArray()
                                  .find(s => elementUtils.getId(s) === screen.id);
      if (oldScreen) {
        designMode.onDeletePropertiesButton(oldScreen);
      }
      designMode.attachElement(
        designMode.parseScreenFromLevelHtml(
          newScreen,
          true,
          applabConstants.DESIGN_ELEMENT_ID_PREFIX
        )
      );
    });
    this.props.onImport();
  },

  render() {
    return (
      <div>
        <h1>Import from Project: {this.state.project.name}</h1>
        <h2>Screens</h2>
        <ul>
          {this.state.project.screens.filter(s => s.canBeImported).map(
             screen => (
               <ScreenListItem
                   key={screen.id}
                   screen={screen}
                   selected={this.state.selected.includes(screen.id)}
                   onSelect={select => this.selectScreen(screen, select)}
               />
             )
           )}
        </ul>
        <h2>Cannot Import</h2>
        <p>
          Cannot import the following screens because they contain design elements
          with IDs already used in your existing project. Fix the IDs in either
          project so they aren't duplicated across different screens before trying
          to import the following.
        </p>
        <ul>
          {this.state.project.screens.filter(s => !s.canBeImported).map(
             screen => (
               <ScreenListItem
                   key={screen.id}
                   screen={screen}
                   disabled={true}
               />
             )
          )}
        </ul>
        <button onClick={this.importScreens}>Import</button>
      </div>
    );
  }
});
