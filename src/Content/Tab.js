import React from 'react';
import { Tab } from 'semantic-ui-react';
import Contact from '../Contact/Contact';
import Resume from './Resume';
import About from './About';
import Skills from './Skills';

const panes = [
    { menuItem: 'About', render: () => <Tab.Pane><About /></Tab.Pane> },
    { menuItem: 'Skills/Experience', render: () => <Tab.Pane><Skills /></Tab.Pane> },
    { menuItem: 'Resume', render: () => <Tab.Pane><Resume /></Tab.Pane> },
    { menuItem: 'Contact', render: () => <Tab.Pane><Contact /></Tab.Pane> }
];

const Tabs = () => <Tab panes={panes} />

export default Tabs;