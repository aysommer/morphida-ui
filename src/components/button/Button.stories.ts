import type { StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
   title: "UI/Button",
   component: Button,
   tags: ["autodocs"],
   parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
   args: {
      children: "Click Me",
   },
};

export const WithOnClick: Story = {
   args: {
      children: "Click Me",
      onClick: () => alert("Clicked!"),
   },
};

export const Disabled: Story = {
   args: {
      children: "Click Me",
      disabled: true,
   },
};
