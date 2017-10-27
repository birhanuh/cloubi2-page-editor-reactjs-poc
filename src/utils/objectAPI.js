
export default {
  getPages: (pages) => {
    let pagesArray = []
    
    let pageOne = {
      id: 1,
      name: 'Chapter1',
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: {
        value: 'In progress',
        options: [
          'In progress',
          'On hold'
        ]
      },
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        options: [
          {
            name: 'Settings',
            url: 'http://placehold.it/32x3'
          },
          {
            name: 'Change items',
            url: 'http://placehold.it/32x3'
          }
        ]
      }
    }

    let pageTwo = {
      id: 2,
      name: 'Chapter2',
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: {
        value: 'On hold',
        options: [
          'In progress',
          'On hold'
        ]
      },
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        options: [
          {
            name: 'Settings',
            url: 'http://placehold.it/32x3'
          },
          {
            name: 'Change items',
            url: 'http://placehold.it/32x3'
          }
        ]
      }
    }

    pagesArray.push(pageOne)
    pagesArray.push(pageTwo)

    pages(pagesArray)
  },

  getPage: (id, page) => {
    
    let pageOne = {
      id: 1,
      name: 'Chapter1',
      type: {
        name: 'Navigation menu',
        url: 'http://placehold.it/32x3'
      },
      state: {
        value: 'In progress',
        options: [
          'In progress',
          'On hold'
        ]
      },
      lastModified: 'Sunday, May 17, 2015',
      actions: {
        options: [
          {
            name: 'Settings',
            url: 'http://placehold.it/32x3'
          },
          {
            name: 'Change items',
            url: 'http://placehold.it/32x3'
          }
        ]
      }
    }

    page(pageOne)
  }
}