# Components
- Components are reusable units that each perform a single task. 
- Components are combined into pages that form a fully functional vue application.
- A component uses the .vue extension and is made up of three language blocks.

Component
├── template      # Html Markup
├── script        # Data & Functionality
└── style         # Css Styling

# Data
- Any data we need is stored in the data option of the component's config object.
- This object key takes a function as it's value.
- The function returns an object, where we store our data as key value pairs, seperated by a comma.
- Data binding is how we communicate between a data template and script block.
- String interpolation, etc...

# Methods 
- Methods can be used in the config object to store functions within a component.
- Expects an object as it's value. 
- Comma seperated functions, they are limited to the current component.
- When referencing data properties within functions we need to use this.property.