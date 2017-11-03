
export default {
  getPages: (pages) => {
    // var arr = _.values(obj)
    let pagesArray = []
    
    let parentOnePage = {
      _id: 1,
      _parentId: null,
      children: false,
      name: {
        value: 'Chapter 1',
        url: 'http://placehold.it/32x3'
      },
      type: {
        value: 'Navigation menu',
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

    let parentTwoPage = {
      _id: 2,
      _parentId: null,
      children: true,
      name: {
        value: 'Chapter 2',
        url: 'http://placehold.it/32x3'
      },
      type: {
        value: 'Navigation menu',
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

    let parentThreePage = {
      _id: 7,
      _parentId: null,
      children: false,
      name: {
        value: 'Chapter 3',
        url: 'http://placehold.it/32x3'
      },
      type: {
        value: 'Navigation menu',
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
    pagesArray.push(parentOnePage)
    pagesArray.push(parentTwoPage)
    pagesArray.push(parentThreePage)

    pages(pagesArray)
  },

  getPage: (parentId, page) => {
    
    let parentTwoPage = {}
    let parentThreePage = {}

    if (parentId === 2) {
      parentTwoPage = {
        _id: 2,
        _parentId: null,
        name: {
          value: 'Chapter 2, Exercise 1',
          url: 'http://placehold.it/32x3'
        },
        type: {
          value: 'Content page',
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
        },
        children: [{
          _id: 3,
          _parentId: 2,
          children: true,
          name: {
            value: 'Chapter2, Sub Chapter 1',
            url: 'http://placehold.it/32x3'
          },
          type: {
            value: 'Navigation menu',
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
        },
        {
          _id: 4,
          _parentId: 2,
          children: false,
          name: {
            value: 'Chapter 2, Exercise 1',
            url: 'http://placehold.it/32x3'
          },
          type: {
            value: 'Content page',
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
        }]
      }
      page(parentTwoPage)
    } else if (parentId === 3) {
      parentThreePage = {
        _id: 3,
        _parentId: 2,
        name: {
          value: 'Chapter3, Sub Chapter 1',
          url: 'http://placehold.it/32x3'
        },
        type: {
          value: 'Navigation menu',
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
        },
        children: [{
          _id: 5,
          _parentId: 3,
          children: false,
          name: {
            value: 'Chapter3, Exercise 1',
            url: 'http://placehold.it/32x3'
          },
          type: {
            value: 'Content page',
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
        },
        {
          _id: 6,
          _parentId: 3,
          children: false,
          name: {
            value: 'Chapter3, Exercise 2',
            url: 'http://placehold.it/32x3'
          },
          type: {
            value: 'Content page',
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
        }]
      }
      page(parentThreePage)
    }

    page(null)

  } 
}


