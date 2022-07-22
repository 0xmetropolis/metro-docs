/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want. blah
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  introduction: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro',]
    },
    {
      type: 'category',
      label: 'Pod Basics',
      items: [
        {
          type: 'autogenerated',
          dirName: 'pod-basics'
        }],
    },
  {
    type: 'category',
    label: 'Create And Manage Pods',
    items: [
      {
        type: 'autogenerated',
        dirName: 'getting-started-pods'
      }],
  },
  ],
  smartcontracts: [
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
      {
        type: 'autogenerated',
        dirName: 'smart-contracts',
      },]
    }  
  ],
  sdk: [
    {
      type: 'category',
      label: 'Orca SDK',
      items: [
      {
        type: 'autogenerated',
        dirName: 'sdk',
      },]
    }  
  ], 
  guides: [
    {
      type: 'autogenerated',
      dirName: 'guides',
    },
  ]
  /*guides: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['pod-guides-intro',]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'pod-guides'
        }],
    },
  ],*/
}