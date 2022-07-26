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
      items: ['intro','faq']
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
  {
    type: 'category',
    label: 'Using Pods',
    items: [
      {
        type: 'autogenerated',
        dirName: 'using-pods'
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
        'sdk/sdk-overview',
        {
          type: 'category',
          label: "Pod Objects",
          items: [
            {
              type: 'autogenerated',
              dirName: 'sdk/pod-objects',
            }  
          ]
        },
        {
          type: 'category',
          label: "Proposal Objects",
          items: [
            {
              type: 'autogenerated',
              dirName: 'sdk/proposal-objects',
            }  
          ]
        },        
      ]
    }  
  ], 
  guides: [
    {
      type: 'autogenerated',
      dirName: 'guides',
    },
  ],
}