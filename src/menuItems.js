export const menuItems = [
    {
      title: 'Home',
      url: '/',
      submenu:[
        {
            title:'Overview',
            url:'overview',
        },
        {
            title:'About',
            url:'about',
        },
        {
            title:'News',
            url:'news',
        }
      ]
    },
    {
      title: 'Alumni Achiever',
      url: '/achiever',
      submenu: [
        {
          title: 'Top Alumni in the Lime Light',
          url: 'topalumni',
        },
        {
          title: 'Notable Alumni',
          url: 'notable',
        },
        {
          title: 'WISER',
          url: 'wiser',
        },
        {
          title:'Distinguished Alumni Award Winner',
          url:'award',
        }
      ],
    },
    {
        title: 'Reading and Resources',
        url: '/reading',
        submenu: [
          {
            title: 'Daily Updates',
            url: 'daily',
          },
          {
            title: 'Career Connection',
            url: 'career',
          },
        ],
      },
      {
        title:'Members',
        url:'/members',
        submenu:[
          {
            title:'On boarding',
            url:'onBoarding',
          },
          {
            title:'Newsletter',
            url:'newsletter',
          },
          {
            title:'Sessions',
            url:'sessions',
          }
        ]
      },
      {
        title: 'More',
        url: '/more',
        submenu: [
          {
            title: 'Gallery',
            url: 'gallery',
          },
          {
            title: 'Video',
            url: 'video',
          },
          {
            title:'FAQ',
            url:'faq',
          }
        ],
      },
  ];