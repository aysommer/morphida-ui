import type { StoryObj, Meta } from "@storybook/react";
import MorphidaProvider from "../../styled-system";
import Button from "./Button";

const meta: Meta = {
   title: "UI/Button",
   component: Button,
   decorators: [
      (Story) => (
         <MorphidaProvider>
            <Story />
         </MorphidaProvider>
      ),
   ],
   tags: ["autodocs"],
   parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
   args: {
      children: "Gray",
   },
};

export const Blue: Story = {
   args: {
      children: "Blue",
      colorScheme: 'blue'
   },
};

export const Green: Story = {
   args: {
      children: "Green",
      colorScheme: 'green'
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
      children: "Disabled",
      disabled: true,
   },
};
