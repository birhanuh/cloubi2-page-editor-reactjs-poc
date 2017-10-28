
export default {
  getPages: (pages) => {
    // var arr = _.values(obj)
    let pagesArray = []
    
    let pageOne = {
      _id: 1,
      name: {
        name: 'Chapter 1',
        url: 'http://placehold.it/32x3'
      },
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: 'On hold',
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        pageSettings: {
          url: 'http://placehold.it/32x3'
        },
        selectType: {
          url: 'http://placehold.it/32x3'
        },
        copySettingsToSinglePage: {
          url: 'http://placehold.it/32x3'
        },
        addPages: {
          url: 'http://placehold.it/32x3'
        },
        editSubStructure: {
          url: 'http://placehold.it/32x3'
        },
        arrangeChildren: {
          url: 'http://placehold.it/32x3'
        },
        movePage: {
          url: 'http://placehold.it/32x3'
        },
        duplicatePage:  {
          url: 'http://placehold.it/32x3'
        },
        importPages:  {
          url: 'http://placehold.it/32x3'
        },
        deletePage: {
          url: 'http://placehold.it/32x3'
        }
      }
    }

    let pageTwo = {
      _id: 2,
      name: {
        name: 'Chapter 2',
        url: 'http://placehold.it/32x3'
      },
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: 'In progress',
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        pageSettings: {
          url: 'http://placehold.it/32x3'
        },
        selectType: {
          url: 'http://placehold.it/32x3'
        },
        copySettingsToSinglePage: {
          url: 'http://placehold.it/32x3'
        },
        addPages: {
          url: 'http://placehold.it/32x3'
        },
        editSubStructure: {
          url: 'http://placehold.it/32x3'
        },
        arrangeChildren: {
          url: 'http://placehold.it/32x3'
        },
        movePage: {
          url: 'http://placehold.it/32x3'
        },
        duplicatePage:  {
          url: 'http://placehold.it/32x3'
        },
        importPages:  {
          url: 'http://placehold.it/32x3'
        },
        deletePage: {
          url: 'http://placehold.it/32x3'
        }
      }
    }

    pagesArray.push(pageOne)
    pagesArray.push(pageTwo)

    pages(pagesArray)
  },

  getPage: (id, page) => {
    
    let pageOne = {
      _id: 1,
      name: {
        name: 'Chapter 1',
        url: 'http://placehold.it/32x3'
      },
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: 'On hold',
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        pageSettings: {
          url: 'http://placehold.it/32x3'
        },
        selectType: {
          url: 'http://placehold.it/32x3'
        },
        copySettingsToSinglePage: {
          url: 'http://placehold.it/32x3'
        },
        addPages: {
          url: 'http://placehold.it/32x3'
        },
        editSubStructure: {
          url: 'http://placehold.it/32x3'
        },
        arrangeChildren: {
          url: 'http://placehold.it/32x3'
        },
        movePage: {
          url: 'http://placehold.it/32x3'
        },
        duplicatePage:  {
          url: 'http://placehold.it/32x3'
        },
        importPages:  {
          url: 'http://placehold.it/32x3'
        },
        deletePage: {
          url: 'http://placehold.it/32x3'
        }
      }
    }

    page(pageOne)
  }
}