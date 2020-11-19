import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from '.';

export default {
  title: 'Example/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};