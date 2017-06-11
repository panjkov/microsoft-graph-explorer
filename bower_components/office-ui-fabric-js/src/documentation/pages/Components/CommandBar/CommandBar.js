var data = {
  componentName: "CommandBar",
  overview: `<p>CommandBar is a surface that houses commands that operate on the content of the window, panel, or parent region it resides above. They are one of the most visible and recognizable ways to surface commands, and can be an intuitive method for interacting with content on the page. However, if overloaded or poorly organized, they can be difficult to use and hide valuable commands from your user. CommandBars can also display a search box for finding content; hold simple commands as well as menus; and display the status of ongoing actions.</p>
<p>Commands should be sorted in order of importance, from left to right or right to left depending on the culture. Secondarily, organize commands in logical groupings for easier recall. CommandBars work best when they display no more than 5-7 commands. This helps users quickly find your most valuable features. If you need to show more commands, consider using the overflow menu. If you need to render status, or viewing controls, these go on the right side of the CommandBar (or left side if in a left to right experience). Do not display more than 2-3 items on the right side as it will make the overall CommandBar difficult to parse.</p>
<p>All command items should have an icon and a label. Commands can render as labels only as well. In smaller widths, commands can just use icon only, but only for the most recognizable and frequently used commands. All other commands should go into an overflow where text labels can be shown.</p>`,
  availableReact: true,
  variants: [
    {
      name: "Default CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarExampleModel"
    },
    {
      name: "Dropdown CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarDropdownExampleModel"
    },
    {
      name: "Navbar CommandBar",
      templateFile: "CommandBarExample",
      model: "CommandBarNavbarExampleModel"
    }
  ],
  states: [
    {
      name: "<code>.is-hidden</code>",
      applied: "<code>.ms-CommandBarItem</code>",
      result: "Hides a Command Bar item from view."
    },
    {
     name: "<code>.is-active</code>",
     applied: "<code>.ms-CommandBarSearch</code>",
     result: "Expands the search field for use."
    }
  ],
  jsFile: "CommandBarExampleJS"
}

module.exports = data;