import * as React from 'react';

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import FlatButton from '../atoms/FlatButton';

const atoms = storiesOf('Atoms', module); 
// const molecules = storiesOf('Molecules', module);
// const organisms = storiesOf('Organisms', module);

atoms
    .addDecorator(withKnobs)
    .addDecorator(withInfo({ inline: true }))
    .add('FlatButton', () => <FlatButton>Hello Button</FlatButton>)
    ;

// molecules
//     .addDecorator(withKnobs)
//     .addDecorator(withInfo({ inline: true }))
//     .add('FlatButton', () => <FlatButton>Hello Button</FlatButton>)
//     ;

// organisms
//     .addDecorator(withKnobs)
//     .addDecorator(withInfo({ inline: true }))
//     .add('FlatButton', () => <FlatButton>Hello Button</FlatButton>)
//     ;
