
const state = {
  eventsData: [
    {
      id: 0,
      img: require('@/assets/img/services-04.png'),
      imgIn: require('@/assets/img/business-900x600.jpg'),
      title: 'MechantPlus Webinar',
      date: '2016-11-28',
      author: 'boaz',
      where: 'Events',
      cat: ['Events', 'Webinar'],
      tag: [''],
      text: 'MerchantPlus is a powerful tool for merchants to close monitor their products from samples to finished garments until they deliver to their customers. It is a cloud-base application to improve overall productivity and efficiency of merchandising team; define scope and time frame to improve work flows and procedures in order to safeguard garment delivery and avoid air freight.',
      det: [
        { icon: 'fas fa-user-tie', text: 'Speaker', in: 'Keith Wu (Director of Cloudnifier)' },
        { icon: 'fas fa-language', text: 'Language', in: 'Cantonese' },
        { icon: 'fas fa-clock', text: 'Date & Time', in: 'Once a month (start from November, 2016)' },
        { icon: 'fas fa-map-marker-alt', text: 'Location', in: 'Online' }
      ]
    },
    {
      id: 1,
      img: require('@/assets/img/WDF_836559-450x281.jpg'),
      imgIn: require('@/assets/img/WDF_836559.jpg'),
      title: 'Grow Your Business with Microsoft CRM',
      date: '2016-01-22',
      author: 'edmondyip',
      where: 'Events',
      cat: ['Events', 'Exhibition'],
      tag: ['CRM', 'IT', 'Microsoft', 'Sales'],
      text: 'Positive customer experience is an increasingly important ingredient for companies to win and retain customers. Customer engagement from Microsoft Dynamics CRM helps companies deliver exceptional customer experiences, creating long-term relationships based on knowledge and trust.',
      det: [
        { icon: 'fas fa-clock', text: 'Date & Time', in: 'Friday, 11 March 2016' },
        { icon: 'fas fa-map-marker-alt', text: 'Location', in: 'Microsoft Singapore Office 1 Marina Bivd, Singaprore 018989' }
      ]
    },
    {
      id: 2,
      img: require('@/assets/img/picture2-450x250.jpg'),
      imgIn: false,
      title: 'Microsoft CRM Event',
      date: '2016-01-11',
      author: 'edmondyip',
      where: 'Events',
      cat: ['Events', 'Exhibition'],
      tag: [''],
      text: '<ul><li>Business Matching and Networking</li><br/>Find new business and reinforce existing partnership by networking with investors, venture capitalists, start-up accelerators, corporate buyers and potential partners in the Expo as well as the fringe events.<br/><br/><li>Unique Platform to Promote Your Innovative Business Solutions</li><br/>Dynamic business require creativity and innovation. IDT Expo brings together local and global buyers looking for comprehensive services to transform and upgrade.<br/><br/><li>Help your Business Flourish</li><br/>Get connected with other exhibiting companies for business developement. Latest Market trends, investors鈥� perspective, update of innovation marketing tools 鈥� a golden opportunity where start-ups share knowledge and entrepreneur experience.<br/><br/><li>Make Your Business Known</li><br/>Promote your innovative ideas to global and local VIP buyers.<br/><br/><li>Global Connections</li><br/>One-stop market place to connect with over 10,000 trade visitors from 57 countries and regions.</ul>',
      det: [
        { icon: 'fas fa-clock', text: 'Date & Time', in: '3-5 December 2015' },
        { icon: 'fas fa-map-marker-alt', text: 'Location', in: 'Hong Kong Convention and Exhibition Centre (Hall 1A-C)Booth 1B-A12' }
      ]
    },
    {
      id: 3,
      img: require('@/assets/img/Cliftons-Hong-Kong-Computer-Training-Facility-1-900x600.jpg'),
      title: 'SAP Workshop',
      date: '2015-12-08',
      author: 'edmondyip',
      where: 'Events',
      cat: ['Events', 'Workshop'],
      tag: ['Business', 'IT', 'SAP'],
      text: '<ul><li>Business Matching and Networking</li><br/>Find new business and reinforce existing partnership by networking with investors, venture capitalists, start-up accelerators, corporate buyers and potential partners in the Expo as well as the fringe events.<br/><br/><li>Unique Platform to Promote Your Innovative Business Solutions</li><br/>Dynamic business require creativity and innovation. IDT Expo brings together local and global buyers looking for comprehensive services to transform and upgrade.<br/><br/><li>Help your Business Flourish</li><br/>Get connected with other exhibiting companies for business developement. Latest Market trends, investors鈥� perspective, update of innovation marketing tools 鈥� a golden opportunity where start-ups share knowledge and entrepreneur experience.<br/><br/><li>Make Your Business Known</li><br/>Promote your innovative ideas to global and local VIP buyers.<br/><br/><li>Global Connections</li><br/>One-stop market place to connect with over 10,000 trade visitors from 57 countries and regions.</ul>',
      det: [
        { icon: 'fas fa-user-tie', text: 'Speaker', in: 'Ir Allen YEUNG (Government Chief Information Officer)' },
        { icon: 'fas fa-language', text: 'Language', in: 'English' },
        { icon: 'fas fa-clock', text: 'Date & Time', in: 'Feb聽26, 2016 (Friday)2:00pm – 5:30pm' },
        { icon: 'fas fa-map-marker-alt', text: 'Location', in: 'Hong Kong &聽Singapore' }
      ]
    },
    {
      id: 4,
      img: require('@/assets/img/Cloudnifier-logorgb-900x600.jpg'),
      title: 'Innovate your business thinking',
      date: '2015-12-01',
      author: 'edmondyip',
      where: 'Events',
      cat: ['Events', 'Exhibition'],
      tag: ['Business', 'HKTDC', 'IDT Expo'],
      text: '<ul><li>Business Matching and Networking</li><br/>Find new business and reinforce existing partnership by networking with investors, venture capitalists, start-up accelerators, corporate buyers and potential partners in the Expo as well as the fringe events.<br/><br/><li>Unique Platform to Promote Your Innovative Business Solutions</li><br/>Dynamic business require creativity and innovation. IDT Expo brings together local and global buyers looking for comprehensive services to transform and upgrade.<br/><br/><li>Help your Business Flourish</li><br/>Get connected with other exhibiting companies for business developement. Latest Market trends, investors鈥� perspective, update of innovation marketing tools 鈥� a golden opportunity where start-ups share knowledge and entrepreneur experience.<br/><br/><li>Make Your Business Known</li><br/>Promote your innovative ideas to global and local VIP buyers.<br/><br/><li>Global Connections</li><br/>One-stop market place to connect with over 10,000 trade visitors from 57 countries and regions.</ul>',
      det: [
        { icon: 'fas fa-clock', text: 'Date & Time', in: '3-5 December 2015' },
        { icon: 'fas fa-map-marker-alt', text: 'Location', in: 'Hong Kong Convention and Exhibition Centre (Hall 1A-C)Booth 1B-A12' }
      ]
    },
    {
      id: 5,
      img: require('@/assets/img/business-900x600.jpg'),
      title: 'SMEs Meeting with ITPA',
      date: '2015-10-01',
      author: 'edmondyip',
      where: 'Events',
      cat: ['Events', 'Seminar'],
      tag: ['ICT', 'IT', 'OGCIO'],
      text: 'The Office of the Government Chief Information Officer (OGCIO) will organise an event featuring short one-on-one exchange sessions between small-scale information and communications technology (ICT) companies and small and medium enterprises (SMEs) in the jewellery industry to discuss how ICT solutions can address SMEs鈥� business needs.',
      det: [
        { icon: 'fas fa-user-tie', text: 'Speaker', in: 'Ir Allen YEUNG (Government Chief Information Officer)' },
        { icon: 'fas fa-clock', text: 'Date & Time', in: '14 October 2015 (Wednesday)' },
        { icon: 'fas fa-language', text: 'Language', in: 'English' }
      ]
    }
  ]
}

const actions = {

}

const mutations = {

}

const getters = {
  eventsData: state => state.eventsData // 取得state裡面的內容

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
