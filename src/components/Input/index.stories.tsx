import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import InputFinal, { InputProps } from '.';

export default {
  title: 'Example/InputFinal',
  component: InputFinal,
} as Meta;

const Template: Story<InputProps> = (args) => <InputFinal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'InputFinal',
  placeholder: "I'm a placeholder",
  // disabled: true
};