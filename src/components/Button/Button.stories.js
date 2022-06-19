import Button from './index';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  outline: true,
  children: 'Secondary',
};
